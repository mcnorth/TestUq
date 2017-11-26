<?php

$hostname = "182.50.133.77:3306";
$username = "kellie";
$password = "Gowd4923";
$dbname = "TestQU";

$conn = mysql_connect('182.50.133.77:3306', 'kellie', 'Gowd4923');


$name = $_POST['name'];
$pos = $_POST['position'];
$email = $_POST['email'];
$bio = $_POST['biography'];
$path = $_POST['pathToPic'];

//need to set the file name to a path to file before inserting
//need to work out how to display varibles in the values for php

$sql = "INSERT INTO Users (name, position, email, biography, photo)
VALUES ('bill','software','gruuu','rtyrty','hello.jpg')";

mysql_select_db('TestQU');

$success = mysql_query( $sql, $conn );

if (!$success) 
{
    echo ("<html><script language='JavaScript'>alert('shit'),history.go(-1)</script></html>");
}
else
{
    echo ("<html><script language='JavaScript'>alert('yay'),history.go(-1)</script></html>");
}

mysql_close($conn);

?>