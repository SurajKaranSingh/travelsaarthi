// // global.js
// document.addEventListener("DOMContentLoaded", () => {
//     // Check if the user is logged in by verifying localStorage
//     console.log("i am working");
//     const isLoggedIn = localStorage.getItem("logged_in") === "true";

//     if (!isLoggedIn) {
//         // Redirect to the login page if not logged in
//         window.location.href = "login.html";
//     } else {
//         // Create the floating logout button
//         const logoutButton = document.createElement("button");
//         logoutButton.id = "logout-btn";
//         logoutButton.textContent = "Logout";

//         // Style the logout button
//         logoutButton.style.position = "fixed";
//         logoutButton.style.bottom = "20px";
//         logoutButton.style.right = "20px";
//         logoutButton.style.padding = "10px 15px";
//         logoutButton.style.fontSize = "1em";
//         logoutButton.style.backgroundColor = "#ff5722";
//         logoutButton.style.color = "#fff";
//         logoutButton.style.border = "none";
//         logoutButton.style.borderRadius = "5px";
//         logoutButton.style.cursor = "pointer";
//         logoutButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
//         logoutButton.style.transition = "opacity 0.3s ease";
//         logoutButton.style.opacity = "0"; // Initially hidden

//         // Append the button to the body
//         document.body.appendChild(logoutButton);

//         // Show the button on hover near the bottom right
//         let timeout;
//         document.addEventListener("mousemove", (e) => {
//             const screenHeight = window.innerHeight;
//             const screenWidth = window.innerWidth;
//             const mouseDistance = 50; // Trigger distance from the bottom-right corner

//             // Detect if the mouse is near the bottom-right corner
//             if (
//                 e.clientX > screenWidth - mouseDistance &&
//                 e.clientY > screenHeight - mouseDistance
//             ) {
//                 clearTimeout(timeout);
//                 logoutButton.style.opacity = "1"; // Show the button
//             } else {
//                 // Hide the button after 1.5 seconds
//                 timeout = setTimeout(() => {
//                     logoutButton.style.opacity = "1";
//                 }, 1500);
//             }
//         });

//         // Logout functionality
//         logoutButton.addEventListener("click", () => {
//             // Clear localStorage and cookies
//             localStorage.clear();
//             document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//             document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//             document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//             // Redirect to login page
//             window.location.href = "login.html";
//         });
//     }
// });
