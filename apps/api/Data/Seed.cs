
using api.Data;
using api.Models;

public static class Seed
{
    public static void Initialize(ApplicationDbContext context)
    {
        if (context.TodoItems.Any()) return;

        var todos = new List<TodoItem>
        {
            new() { Note = "Buy groceries", HasPriority = true },
            new() { Note = "Finish project", HasPriority = false },
            new() { Note = "Read a book", HasPriority = false },
            new() { Note = "Call mom", HasPriority = true },
            new() { Note = "Clean room", HasPriority = false },
            new() { Note = "Write blog post", HasPriority = true },
            new() { Note = "Update CV", HasPriority = false },
            new() { Note = "Exercise", HasPriority = true },
            new() { Note = "Fix the sink", HasPriority = false },
            new() { Note = "Plan vacation", HasPriority = false },
            new() { Note = "Learn EF Core", HasPriority = true },
            new() { Note = "Walk the dog", HasPriority = false },
            new() { Note = "Water plants", HasPriority = false },
            new() { Note = "Attend meeting", HasPriority = true },
            new() { Note = "Buy gift", HasPriority = true },
            new() { Note = "Organize desk", HasPriority = false },
            new() { Note = "Backup files", HasPriority = false },
            new() { Note = "Refactor code", HasPriority = true },
            new() { Note = "Write unit tests", HasPriority = false },
            new() { Note = "Sleep early", HasPriority = false }
        };

        context.TodoItems.AddRange(todos);
        context.SaveChanges();
    }
}