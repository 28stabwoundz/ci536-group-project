<?php
$host = "localhost";
$port = 3306;
$username = "chc73_chauchuhei";
$password = "chauchu520";
$dbname = "chc73_Database1";

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $cvFile = $_FILES["cvFile"]["name"];

    // Upload file
    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    move_uploaded_file($_FILES["cvFile"]["tmp_name"], $uploadDir . $cvFile);

    // Save to database
    $stmt = $conn->prepare("INSERT INTO submissions (first_name, last_name, email, cv_filename) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $cvFile);

    if ($stmt->execute()) {
        // Redirect to video interview page (update the path if needed)
        header("Location: video_interview.html");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
