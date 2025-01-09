using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ExampleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        // Retorna dados de exemplo para teste
        var data = new List<Example>()
        {
            new() { Id = 1, Name = "Item 1 - Lucas" },
            new() { Id = 2, Name = "Item 2" },
            new() { Id = 3, Name = "Item 3" }
        };

        return Ok(data);
    }
}