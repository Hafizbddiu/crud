
<?php
include('dbConnection.php');
$data = stripslashes(file_get_contents("php://input"));
$myData=json_decode($data,true);
$id=$myData['sid'];

if(!empty($id)){
    $sql="DELETE FROM student WHERE id = {$id}";
    if($conn->query($sql)==TRUE){
        echo "Student Delete Successfully";

    }
    else{
        echo " Unable to delete";
    }

}




?> 
