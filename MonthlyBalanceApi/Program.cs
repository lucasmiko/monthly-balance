using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Configure SQLite database
// The connection string is defined in appsettings.json under "DefaultConnection"
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure Identity for user management and authentication
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders(); // Adds token providers for password reset, email confirmation, etc.

// Configure JWT authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true, // Ensures the token's issuer matches the expected issuer
        ValidateAudience = true, // Ensures the token's audience matches the expected audience
        ValidateLifetime = true, // Ensures the token has not expired
        ValidateIssuerSigningKey = true, // Validates the signature of the token
        ValidIssuer = builder.Configuration["Jwt:Issuer"], // Expected issuer from configuration
        ValidAudience = builder.Configuration["Jwt:Issuer"], // Expected audience from configuration
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])) // Signing key
    };
});

// Enable CORS for cross-origin requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin() // Allow any origin (useful for testing with tools like Postman)
              .AllowAnyHeader() // Allow any HTTP headers
              .AllowAnyMethod(); // Allow any HTTP methods (GET, POST, etc.)
    });
});

// Register controllers
builder.Services.AddControllers();

// Configure Swagger/OpenAPI for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Seed initial data (e.g., admin user)
// This ensures critical data is available when the application starts
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    await SeedData(services);
}

// Middleware pipeline configuration
app.UseHttpsRedirection(); // Redirects HTTP requests to HTTPS
app.UseCors("AllowAll"); // Apply the CORS policy
app.UseAuthentication(); // Enables authentication middleware
app.UseAuthorization(); // Enables authorization middleware

// Swagger middleware (only in development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Generate Swagger UI
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage(); // Show detailed error pages in development
}

// Configure routing and map controllers
app.MapControllers();

app.Run();

// Seed initial user data
static async Task SeedData(IServiceProvider services)
{
    var userManager = services.GetRequiredService<UserManager<IdentityUser>>();

    // Check if the admin user already exists
    if (await userManager.FindByEmailAsync("admin@example.com") == null)
    {
        var user = new IdentityUser
        {
            UserName = "admin@example.com",
            Email = "admin@example.com",
            EmailConfirmed = true // Email confirmation not required
        };

        // Create the admin user with a predefined password
        var result = await userManager.CreateAsync(user, "Admin@123");

        if (result.Succeeded)
        {
            Console.WriteLine("Admin user 'admin@example.com' created successfully!");
        }
        else
        {
            Console.WriteLine("Error creating admin user:");
            foreach (var error in result.Errors)
            {
                Console.WriteLine($" - {error.Description}");
            }
        }
    }
    else
    {
        Console.WriteLine("Admin user 'admin@example.com' already exists!");
    }
}