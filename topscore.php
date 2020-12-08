<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
    border: 1px solid black;
	margin: 1px;
}

</style>
</head>
<body>
<h1>Top 10 Score:</h1>
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

		$sql = "SELECT id, player, score, date FROM score order by score desc LIMIT 10";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		  echo "<table><tr><th>id</th><th>player</th><th>score</th><th>date</th></tr>";
		  // output data of each row
		  while($row = $result->fetch_assoc()) {
			echo "<tr><td>".$row["id"]."</td><td>".$row["player"]."</td><td>".$row["score"]."</td><td>".$row["date"]."</td></tr>";
		  }
		  echo "</table>";
		} else {
		  echo "0 results";
		}
		$conn->close();
?>

</br>
<button onclick="window.location.href='/sang_game.html'">Back to Game</button>

</body>
</html>