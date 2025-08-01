using Microsoft.AspNetCore.Mvc;

using api.Models;
using api.Repositories;
using Microsoft.AspNetCore.Http.Features;

namespace api.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository repository;

        public TodoController(ITodoRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<TodoItem>> GetTodos()
        {
            var todos = await repository.GetAllAsync();
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoById(int id)
        {
            var todo = await repository.GetByIdAsync(id);

            if (todo == null) return NotFound();
            return Ok(todo);
        }

        [HttpPost]
        public async Task<ActionResult> AddTodo([FromBody] TodoItem item)
        {
            await repository.AddAsync(item);

            return CreatedAtAction(nameof(GetTodoById), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTodo([FromBody] TodoItem item, int id)
        {
            if (id != item.Id) return BadRequest();

            var oldItem = await repository.GetByIdAsync(id);
            if (oldItem == null) return NotFound();

            await repository.UpdateAsync(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTodo(int id)
        {
            var item = await repository.GetByIdAsync(id);

            if (item == null) return NotFound();

            await repository.DeleteAsync(id);
            return NoContent();
        }
    }

}