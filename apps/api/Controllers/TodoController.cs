using Microsoft.AspNetCore.Mvc;

using api.Models;
using api.Services;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService service;

        public TodoController(ITodoService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<ActionResult<TodoItem>> Get()
        {
            var todos = await service.GetTodos();
            return Ok(todos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> Get(int id)
        {
            var todo = await service.GetTodoById(id);

            if (todo == null) return NotFound();
            return Ok(todo);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TodoItem item)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await service.AddTodo(item);

            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] TodoItemDto item)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var oldItem = await service.GetTodoById(id);
            if (oldItem == null) return NotFound();

            oldItem.Note = item.Note;
            oldItem.HasPriority = item.HasPriority;
            oldItem.IsChecked = item.IsChecked;

            await service.UpdateTodo(oldItem);
            return NoContent();
        }

        [HttpPut("check")]
        public async Task<ActionResult> SyncCheckState([FromBody] int[] ids)
        {
            await service.UpdateChecked(ids);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var item = await service.GetTodoById(id);

            if (item == null) return NotFound();

            await service.DeleteTodo(id);
            return NoContent();
        }
    }

}