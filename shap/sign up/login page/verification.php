<?php

$user = "helllabs";
$pass = "qwerty";



if (isset($_POST['email']) && isset($_POST['password'])) {
    
    if (($_POST['user_name'] == $user) && ($_POST['password'] == $pass)) {    
        
      
            setcookie('user_name', $_POST['user_name'], time()+60*60*24*365);
            setcookie('password', $_POST['password'], time()+60*60*24*365);
            echo WELCOME HELLLABS;
		}
	}
?>