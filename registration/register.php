<?php
require('db/connect.php');

header ("Access-Control-Allow-Origin: *");
// header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
// header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header ("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, processData, Accep");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}"); exit(0); }

$req = $_POST;
// $req = file_get_contents("php://input", true);
$arr = $req;
// $arr = json_decode($req, true);
 $errors = [];
if(!empty($arr)){
   
    if (empty($arr['fullname'])) {
        $errors[] = "fullname is required";
    }
    if (empty($arr['gender'])) {
        $errors[] = "gender is required";
    }
    if (empty($arr['address'])) {
        $errors[] = "address is required";
    }
    if (empty($arr['department'])) {
        $errors[] = "department is required";
    }
    if (empty($arr['level'])) {
        $errors[] = "level is required";
    }
    if (empty($arr['phone_number'])) {
        $errors[] = "phone number is required";
    }
    if (empty($arr['email'])) {
        $errors[] = "email is required";
    }
    if (!filter_var($arr['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "email is not valid email";
    }

    if (empty($arr['nationality'])) {
        $errors[] = "nationality is required";
    }
    if (empty($arr['state'])) {
        $errors[] = "state is required";
    }
    if (empty($arr['lga'])) {
        $errors[] = "fullname is required";
    }
    if (empty($arr['password'])) {
        $errors = "password is required";
    }

    $fullname = $arr['fullname'];
    $gender = $arr['gender'];
    $address = $arr['address'];
    $department = $arr['department'];
    $level = $arr['level'];
    $phone_number = $arr['phone_number'];
    $email = $arr['email'];

    $pass_name = $_FILES['passport']['name'];
    $pass_tmppath = $_FILES['passport']['tmp_name'];
    $pass_size = $_FILES['passport']['size'];

    $nationality = $arr['nationality'];
    $state = $arr['state'];
    $lga = $arr['lga'];
    $password = sha1($arr['password']);
    $upload_path = 'media/';

    if (empty($pass_name)) {
     $errors[] = "passport is required";
    }
  
    //upload image
    $file_ex = strtolower(pathinfo($pass_name, PATHINFO_EXTENSION));
    
    $allowed_ex = ['jpg', 'jpeg', 'png', 'gif'];
    $filename = time().$pass_name;
    if (in_array($file_ex, $allowed_ex)) {
       if (!file_exists($pass_name)) {
          if ($pass_size < 10000000) {
             move_uploaded_file($pass_tmppath, $upload_path.$filename);
          }else{
              $errors[] = "Allowed filesize is 10mb";
          }
       }else{
           $errors[] = "File already exists";
       }
    }else{
        $errors[] = "File uploaded is not a valid image";
    }
  if(!empty($errors)){
        http_response_code(422);
        echo json_encode(["error" => $errors]);
        exit;
    }
    //generate matric number
    $prfix = date('Y');
    $rand = mt_rand(00000000, 99999999);
    $matric = $prfix.'/'.$rand;
  

    //insert into the database
    $sql = "INSERT INTO `users` (fullname, gender, address, mat_no, department, level, phone_no, email, passport, nationality, state, lga, password) VALUES ('$fullname','$gender','$address','$matric', '$department', '$level', '$phone_number', '$email', '$filename', '$nationality', '$state', '$lga', '$password')";
    $query = $connect->query($sql);
    if ($query) {
        echo json_encode(["success" => "Registration successful"]);
    } else {
        echo json_encode(["error" => $connect->error]);
    }
}else{
    http_response_code(500);
    echo json_encode(["error" => "empty request"]);
}
