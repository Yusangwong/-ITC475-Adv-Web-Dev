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

		$sql = "SELECT name, email, phone, city, activities, numofppl, date FROM reservation";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		  echo "<table><tr><th>Name</th><th>Email</th><th>Phone</th><th>City</th><th>activities</th><th>numofppl</th><th>date</th</tr>";
		  // output data of each row
		  while($row = $result->fetch_assoc()) {
			echo "<tr><td>".$row["name"]."</td><td>".$row["email"]."</td><td>".$row["phone"]."</td><td>".$row["city"]."</td><td>".$row["activities"]."</td><td>".$row["numofppl"]."</td><td>".$row["date"]."</td></tr>";
		  }
		  echo "</table>";
		} else {
		  echo "0 results";
		}
		$conn->close();
?>

</body>
</html>