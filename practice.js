document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("myTextarea");
    const boldButton = document.getElementById("bold-btn");
  
    boldButton.addEventListener("click", function() {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
  
      // Apply bold class to selected text
      const boldText = '<span class="bold-text">' + text.slice(start, end) + '</span>';
      const newText = text.slice(0, start) + boldText + text.slice(end);
      textarea.innerHTML = newText;
      
      // Restore cursor position
      textarea.selectionStart = start;
      textarea.selectionEnd = end + boldText.length;
    });
  });
  