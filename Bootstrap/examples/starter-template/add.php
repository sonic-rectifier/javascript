<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $newItem = $data->item;
  $conn = new mysqli("localhost", "galen", "southhills#", "galen");


  $result = $conn->query("INSERT INTO to_do_list (item, finished) VALUES ('".$newItem."', false)");
  //$result = $conn->query("INSERT INTO to_do_list (item, finished) VALUES ('test', false)");
  $conn->close();

?>
