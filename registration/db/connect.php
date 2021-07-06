<?php
$db_name = "reg";
$db_pass = "bootstrap0107";
$db_host ="localhost";
$db_user = "mosi";

//create the connection
$connect = new  mysqli($db_host, $db_user, $db_pass, $db_name);

if($connect->connect_error){
    die("Could not connect".$connect->connect_error);
}