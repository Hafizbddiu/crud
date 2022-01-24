<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$myData=json_decode($data,true);
$name=$myData['name'];
$email=$myData['email'];
$password=$myData['password'];
if(!empty($name) && !empty($email) && !empty($password)){
    $sql="INSERT INTO student(name,email,password) VALUES('$name','$email','$password')";
    if($conn->query($sql)==TRUE){
        echo "Student Save Successfully";
    }
    else{
        echo "Enable Save Student";
    } 
}
else
{
    echo " Fill All Fields";
}
?>