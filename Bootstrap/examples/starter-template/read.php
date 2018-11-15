<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $conn = new mysqli("localhost", "galen", "southhills#", "galen");

  $result = $conn->query("SELECT * FROM to_do_list");

  $outp = "";
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
      if ($outp != "") {$outp .= ",";}
      $outp .= '{"item":"'    . $rs["item"] . '",';
      $outp .= '"finished":"' . $rs["finished"]. '"}';
  }
  $outp ='{"records":['.$outp.']}';
  $conn->close();

  echo($outp);
?>
