document.getElementById("cvForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(this);

    const response = await fetch("saveData.php", {
        method: "POST",
        body: formData
    });

    const result = await response.text();
    alert(result);

    // Redirect to the Video Interview page
    window.location.href = "video_interview.html"; // Change this when the page name is confirmed
});
