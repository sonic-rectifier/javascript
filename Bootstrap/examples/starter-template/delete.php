<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $delItem = $data->item;
  $conn = new mysqli("localhost", "galen", "southhills#", "galen");


//  $result = $conn->query("delete from users where item=".$delItem );
  $result = $conn->query("delete from users where item='test item 1'" );

  $conn->close();

?>
