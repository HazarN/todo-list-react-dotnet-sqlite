using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Note is required.")]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Note must be between 3 and 100 characters.")]
        public required string Note { get; set; }
        public bool HasPriority { get; set; }
        public bool IsChecked { get; set; } = false;
    }
}

