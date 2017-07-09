<?php
$user = "helllab@123";
$pass = "qwerty";



if (isset($_POST['user_name']) && isset($_POST['password'])) {
    
    if (($_POST['user_name'] == $user) && ($_POST['password'] == $pass)) {    
        
      
            setcookie('user_name', $_POST['user_name'], time()+60*60*24*365);
            setcookie('password', $_POST['password'], time()+60*60*24*365);
			header("location: file:///home/anmol/Desktop/helllabs/dishant/s'hap/interface/control/control.html");
			
			}
			
else {
    echo 'entered credencial is invalid';
}