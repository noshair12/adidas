document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example user data (In a real-world scenario, this data would come from a server)
  const users = {
    admin: {
      name: "Admin User",
      picture: "https://via.placeholder.com/100", // Example profile picture URL
      university: "UET Faisalabad",
      age: 22,
      skills: "Cybersecurity, Programming",
      education: "Bachelor of Science in Computer Science",
      address: "123 Main St, Anytown, USA",
    },
    user1: {
      name: "John Doe",
      picture: "https://via.placeholder.com/100", // Example profile picture URL
      university: "UET Lahore",
      age: 25,
      skills: "Literature, Writing",
      education: "Master of Arts in Literature",
      address: "456 Elm St, Anytown, USA",
    },
  };

  if (users[username] && password === "password123") {
    // Simplified password check
    document.querySelector(".login-container").style.display = "none"; // Hide the login container
    document.getElementById("profile").style.display = "block";

    document.getElementById("profile-picture").src = users[username].picture;
    document.getElementById(
      "profile-username"
    ).textContent = `Name: ${users[username].name}`;
    document.getElementById(
      "profile-university"
    ).textContent = `University: ${users[username].university}`;
    document.getElementById(
      "profile-age"
    ).textContent = `Age: ${users[username].age}`;
    document.getElementById(
      "profile-skills"
    ).textContent = `Skills: ${users[username].skills}`;
    document.getElementById(
      "profile-education"
    ).textContent = `Education: ${users[username].education}`;
    document.getElementById(
      "profile-address"
    ).textContent = `Address: ${users[username].address}`;

    // Disable the login form inputs and button
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.querySelector('#loginForm button[type="submit"]').disabled = true;
  } else {
    document.getElementById("error-message").textContent =
      "Invalid username or password";
  }
});
