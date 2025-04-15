<?php
$host = "localhost";
$port = 3306;
$username = "chc73_chauchuhei";
$password = "chauchu520";
$dbname = "chc73_Database1";

$conn = new mysqli($host, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form values
$firstName = $_POST['firstName'] ?? '';
$lastName = $_POST['lastName'] ?? '';
$email = $_POST['email'] ?? '';

// File upload
$uploadDir = "uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$cvFileName = basename($_FILES["cvFile"]["name"]);
$targetPath = $uploadDir . $cvFileName;

if (move_uploaded_file($_FILES["cvFile"]["tmp_name"], $targetPath)) {
    // Insert into database
    $stmt = $conn->prepare("INSERT INTO submissions (first_name, last_name, email, cv_filename) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $cvFileName);

    if ($stmt->execute()) {
        echo "<script>alert('CV submitted successfully!'); window.location.href='video.html';</script>";
    } else {
        echo "Database insert failed: " . $stmt->error;
    }
    $stmt->close();
} else {
    echo "Failed to upload CV.";
}

$conn->close();
?>
