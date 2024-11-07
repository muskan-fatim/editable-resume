"use strict";
function createResume() {
    // Hide form and capture form data
    document.querySelector(".form-container").style.display = "none";
    // Capture form data
    const name = document.getElementById("name").value;
    const father = document.getElementById("father").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const college = document.getElementById("college").value;
    const describe1 = document.getElementById("describe1").value;
    const college2 = document.getElementById("college2").value;
    const describe2 = document.getElementById("describe2").value;
    const fieldOfStudy = document.getElementById("field_of_study").value;
    const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim()).join(", ");
    const experience = document.getElementById("experience").value;
    // Display resume with an "Edit" button
    const resumeContainer = document.getElementById("resume");
    resumeContainer.innerHTML = `
        <div class="container">
            <aside class="sidebar">
                <div class="profile-info">
                    <h2>${name}</h2>
                    <p><strong>Father's Name:</strong> ${father}</p>
                    <section class="profile-details">
                        <h3>Profile</h3>
                        <p>${fieldOfStudy}</p>
                    </section>
                    <section class="contact-info">
                        <h3>Contact Me</h3>
                        <p><strong>📞</strong> ${contact}</p>
                        <p><strong>📧</strong> ${email}</p>
                        <p><strong>📍</strong> ${address}</p>
                    </section>
                </div>
            </aside>
            <main class="main-content">
                <section>
                    <h3>Education</h3>
                    <p><strong>${college}:</strong><br> ${describe1}</p>
                    <p><strong>${college2}:</strong><br> ${describe2}</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                </section>
                <section>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </section>
                <button onclick="editResume()">Edit</button>
            </main>
        </div>`;
}
function editResume() {
    // Show the form again
    document.querySelector(".form-container").style.display = "block";
    document.getElementById("resume").innerHTML = "";
    // Repopulate form fields with current resume data
    document.getElementById("name").value = document.querySelector(".profile-info h2").innerText;
    document.getElementById("father").value = document.querySelector(".profile-info p").innerText.replace("Father's Name:", "").trim();
    document.getElementById("field_of_study").value = document.querySelector(".profile-details p").innerText;
    document.getElementById("contact").value = document.querySelector(".contact-info p:nth-of-type(1)").innerText.replace("📞", "").trim();
    document.getElementById("email").value = document.querySelector(".contact-info p:nth-of-type(2)").innerText.replace("📧", "").trim();
    document.getElementById("address").value = document.querySelector(".contact-info p:nth-of-type(3)").innerText.replace("📍", "").trim();
    const educationSections = document.querySelectorAll(".main-content section:nth-of-type(1) p");
    document.getElementById("college").value = educationSections[0].innerText.split(":")[0];
    document.getElementById("describe1").value = educationSections[0].innerText.split(":")[1].trim();
    if (educationSections[1]) {
        document.getElementById("college2").value = educationSections[1].innerText.split(":")[0];
        document.getElementById("describe2").value = educationSections[1].innerText.split(":")[1].trim();
    }
    document.getElementById("skills").value = document.querySelector(".main-content section:nth-of-type(2) p").innerText;
    document.getElementById("experience").value = document.querySelector(".main-content section:nth-of-type(3) p").innerText;
}
