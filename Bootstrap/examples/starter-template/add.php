<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "galen", "southhills#", "galen");

//  echo "'.$data->item'.$data->item";

  $result = $conn->query("INSERT INTO to_do_list (item, finished) VALUES ('".$data->item."', false)");

  $conn->close();

  echo($outp);
?>
