using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;


public class AppDbContext(DbContextOptions<AppDbContext> options) : IdentityDbContext<IdentityUser>(options)
{
    public DbSet<Transaction> Transactions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=app.db");
    }
}