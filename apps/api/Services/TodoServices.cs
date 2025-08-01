using api.Models;
using api.Repositories;

namespace api.Services
{
    public class TodoService : ITodoService
    {
        private readonly ITodoRepository repository;

        public TodoService(ITodoRepository repository)
        {
            this.repository = repository;
        }

        public Task<List<TodoItem>> GetTodos()
        {
            return repository.GetAllAsync();
        }

        public Task<TodoItem?> GetTodoById(int id)
        {
            return repository.GetByIdAsync(id);
        }

        public Task AddTodo(TodoItem item)
        {
            return repository.AddAsync(item);
        }

        public Task UpdateTodo(TodoItem item)
        {
            return repository.UpdateAsync(item);
        }

        public Task DeleteTodo(int id)
        {
            return repository.DeleteAsync(id);
        }
    }
}