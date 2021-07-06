<?php
require("db/connect.php");

//headers
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Access-Control-Allow-Methods, Content-Type, X-Requested-with, Authorization");


$req = file_get_contents('php://input');
$arr = json_decode($req, true);
if (!empty($arr)) {
   $email = $arr['email'];

   $sql = "SELECT * FROM `users` WHERE email='$email'";
   $query = $connect->query($sql);

   if ($query->num_rows > 0) {
       $user_details = $query->fetch_assoc();
        echo json_encode(['user' => $user_details]);
        exit;
   }else {
      http_response_code(500);
      echo json_encode(['error' => $connect->error]);
      exit;
   }

}else{
    http_response_code(404);
    echo json_encode(['error' => 'empty request']);
}