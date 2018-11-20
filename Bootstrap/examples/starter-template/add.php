<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "galen", "southhills#", "galen");

  $_POST = json_decode(file_get_contents('php://input'), true);

  $newItem = $_POST['item'];

  $result = $conn->query("INSERT INTO to_do_list (item, finished) VALUES ('".$newItem."', false)");
  //$result = $conn->query("INSERT INTO to_do_list (item, finished) VALUES ('test', false)");
  $conn->close();

?>
