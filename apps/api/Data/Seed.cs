
using api.Data;
using api.Models;

public static class Seed
{
    public static void Initialize(ApplicationDbContext context)
    {
        if (context.TodoItems.Any()) return;

        var todos = new List<TodoItem>
        {
            new() { Note = "Buy groceries", hasPriority = true },
            new() { Note = "Finish project", hasPriority = false },
            new() { Note = "Read a book", hasPriority = false },
            new() { Note = "Call mom", hasPriority = true },
            new() { Note = "Clean room", hasPriority = false },
            new() { Note = "Write blog post", hasPriority = true },
            new() { Note = "Update CV", hasPriority = false },
            new() { Note = "Exercise", hasPriority = true },
            new() { Note = "Fix the sink", hasPriority = false },
            new() { Note = "Plan vacation", hasPriority = false },
            new() { Note = "Learn EF Core", hasPriority = true },
            new() { Note = "Walk the dog", hasPriority = false },
            new() { Note = "Water plants", hasPriority = false },
            new() { Note = "Attend meeting", hasPriority = true },
            new() { Note = "Buy gift", hasPriority = true },
            new() { Note = "Organize desk", hasPriority = false },
            new() { Note = "Backup files", hasPriority = false },
            new() { Note = "Refactor code", hasPriority = true },
            new() { Note = "Write unit tests", hasPriority = false },
            new() { Note = "Sleep early", hasPriority = false }
        };

        context.TodoItems.AddRange(todos);
        context.SaveChanges();
    }
}