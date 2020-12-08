<?php
$servername = "127.0.0.1";
        $username = "test";
        $password = "test";
        $dbname = "reservation";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }



		$sql = "INSERT INTO reservation (name,email,phone,city,activities,numofppl,date)
              VALUES ('".$_GET['name']."','".$_GET['email']."','".$_GET['phone']."','".$_GET['city']."','".$_GET['activities']."','".$_GET['numofppl']."','".$_GET['date']."')";


        if ($conn->query($sql) === TRUE) {
            $data['message'] = "New record created successfully";
        } else {
            $data['message'] = "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
?>

<html>
<body>

Thanks you for submitting your travel agent contact request! Here is the information you submitted:
Client Name: <?php echo $_GET["name"]; ?><br>
Client Phone Number: <?php echo $_GET["phone"]; ?><br>
Client Email: <?php echo $_GET["email"]; ?><br>
Number of traveler: <?php echo $_GET["numofppl"]; ?><br>
Destination: <?php echo $_GET["city"]; ?><br>
Travel Dates: <?php echo $_GET["date"]; ?><br>
Interested Activities: <?php echo $_GET["activities"]; ?><br>
An agent will be in touch with you soon!

</body>
</html>