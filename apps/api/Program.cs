using dotenv.net;
using Microsoft.EntityFrameworkCore;

using api.Data;
using api.Repositories;
using api.Services;

DotEnv.Load();

var builder = WebApplication.CreateBuilder(args);

// Port declaration
var port = Environment.GetEnvironmentVariable("PORT") ?? "5001";
builder.WebHost.UseUrls($"http://localhost:{port}");

// Database connection SQLite
var dbPath = Path.Combine(builder.Environment.ContentRootPath, "Data", "app.db");
var cnn = $"Data Source={dbPath}";
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(cnn));

// CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

// Mappings
builder.Services.AddScoped<ITodoRepository, TodoRepository>();
builder.Services.AddScoped<ITodoService, TodoService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middlewares
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Mock data for testing
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.Migrate();
    Seed.Initialize(context);
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
