<?php

$myFile = "users.json";

//create empty array for json file
$arrData = array();


    //get user input from form
    $formData = array (
       'name'=> $_POST['name'],
	   'position'=> $_POST['position'],
	   'email'=>$_POST['email'],
	   'biography'=> $_POST['biography'],
       'pathToPic'=> $_POST['pathToPic']
    
    );

echo "<script>console.log( 'Done' );</script>";
    
    //get json file data
    $jsonData = file_get_contents($myFile);
    
    //put json into empty array
    $arrData = json_decode($jsonData, true);
    
    //add user input to array
    array_push($arrData, $formData);
    
    //make array a json object
    $jsonData = json_encode($arrData, JSON_PRETTY_PRINT);
    
    //write to json file
    if(file_put_contents($myFile, $jsonData)) 
    {
	   echo "<script>console.log( 'Done' );</script>";
    }
    else
    {
       echo "<script>console.log( 'Not done' );</script>";
    }
	        



?>