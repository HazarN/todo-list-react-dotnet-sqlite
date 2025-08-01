using api.Models;

namespace api.Services
{
    public interface ITodoService
    {
        Task<List<TodoItem>> GetTodos();
        Task<TodoItem?> GetTodoById(int id);
        Task AddTodo(TodoItem item);
        Task UpdateTodo(TodoItem item);
        Task DeleteTodo(int id);
    }
}