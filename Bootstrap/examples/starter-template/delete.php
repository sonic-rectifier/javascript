<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $_POST = json_decode(file_get_contents('php://input'), true);

  $delItem = $_POST['item'];

  $conn = new mysqli("localhost", "galen", "southhills#", "galen");

//  $result = $conn->query("delete from users where item=".$delItem );
  $result = $conn->query("delete from to_do_list where item='test item 1'" );

  $conn->close();

?>
