using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly ApplicationDbContext context;

        public TodoRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<List<TodoItem>> GetAllAsync()
        {
            return await context.TodoItems.ToListAsync();
        }

        public async Task<TodoItem?> GetByIdAsync(int id)
        {
            return await context.TodoItems.FindAsync(id);
        }

        public async Task AddAsync(TodoItem item)
        {
            context.TodoItems.Add(item);
            await context.SaveChangesAsync();
        }

        public async Task UpdateAsync(TodoItem item)
        {
            context.TodoItems.Update(item);
            await context.SaveChangesAsync();
        }

        public async Task UpdateCheckedAsync(IEnumerable<int> ids)
        {
            var todos = await GetAllAsync();

            foreach (var todo in todos)
            {
                todo.IsChecked = ids.Contains(todo.Id);
            }

            await context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var item = await GetByIdAsync(id);

            if (item != null)
            {
                context.TodoItems.Remove(item);
                await context.SaveChangesAsync();
            }

        }

    }
}