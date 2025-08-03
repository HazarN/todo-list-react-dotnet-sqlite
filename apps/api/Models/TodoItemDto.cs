namespace api.Models
{
    public class TodoItemDto
    {
        public required string Note { get; set; }
        public bool HasPriority { get; set; }
        public bool IsChecked { get; set; }
    }
}