window.addEventListener('DOMContentLoaded', (event) => {
  const terminal = document.getElementById('terminal');
  const inputText = document.getElementById('input-text');

  inputText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const command = inputText.value.trim();
      inputText.value = '';
      terminal.innerHTML += `\n$ ${command}`;
      executeCommand(command);
      terminal.scrollTop = terminal.scrollHeight;
    }
  });

  function executeCommand(command) {
    // Implement your command execution logic here
    // You can perform actions based on the entered command
    // and update the terminal output accordingly
    // For example, you can display the result of the command execution
    terminal.innerHTML += `\nOutput: Command '${command}' executed.`;
  }
});
