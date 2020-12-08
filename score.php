<html>
<body>
</br>
Your name: <?php echo $_GET["player"]; ?></br>
</br>
Your score: <?php echo $_GET["score"]; ?></br>
</br>
<button onclick="window.location.href='/topscore.php'">Top Score</button>

</body>
</html>

<?php
$servername = "127.0.0.1";
        $username = "test";
        $password = "test";
        $dbname = "myscore";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }



		$sql = "INSERT INTO score (player,score)
              VALUES ('".$_GET['player']."','".$_GET['score']."')";


        if ($conn->query($sql) === TRUE) {
            //$data['message'] = "New record created successfully";
        } else {
            $data['message'] = "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
?>