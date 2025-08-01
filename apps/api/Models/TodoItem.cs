namespace api.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public required string Note { get; set; }
        public bool hasPriority { get; set; } //FIXME
    }
}

