function createResume(): void {
    // Hide form and capture form data
    (document.querySelector(".form-container") as HTMLElement).style.display = "none";

    // Capture form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const father = (document.getElementById("father") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const college = (document.getElementById("college") as HTMLInputElement).value;
    const describe1 = (document.getElementById("describe1") as HTMLInputElement).value;
    const college2 = (document.getElementById("college2") as HTMLInputElement).value;
    const describe2 = (document.getElementById("describe2") as HTMLInputElement).value;
    const fieldOfStudy = (document.getElementById("field_of_study") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim()).join(", ");
    const experience = (document.getElementById("experience") as HTMLInputElement).value;

    // Display resume with an "Edit" button
    const resumeContainer = document.getElementById("resume") as HTMLElement;
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

function editResume(): void {
    // Show the form again
    (document.querySelector(".form-container") as HTMLElement).style.display = "block";
    (document.getElementById("resume") as HTMLElement).innerHTML = "";

    // Repopulate form fields with current resume data
    (document.getElementById("name") as HTMLInputElement).value = (document.querySelector(".profile-info h2") as HTMLElement).innerText;
    (document.getElementById("father") as HTMLInputElement).value = (document.querySelector(".profile-info p") as HTMLElement).innerText.replace("Father's Name:", "").trim();
    (document.getElementById("field_of_study") as HTMLInputElement).value = (document.querySelector(".profile-details p") as HTMLElement).innerText;
    (document.getElementById("contact") as HTMLInputElement).value = (document.querySelector(".contact-info p:nth-of-type(1)") as HTMLElement).innerText.replace("📞", "").trim();
    (document.getElementById("email") as HTMLInputElement).value = (document.querySelector(".contact-info p:nth-of-type(2)") as HTMLElement).innerText.replace("📧", "").trim();
    (document.getElementById("address") as HTMLInputElement).value = (document.querySelector(".contact-info p:nth-of-type(3)") as HTMLElement).innerText.replace("📍", "").trim();

    const educationSections = document.querySelectorAll(".main-content section:nth-of-type(1) p") as NodeListOf<HTMLElement>;
    (document.getElementById("college") as HTMLInputElement).value = educationSections[0].innerText.split(":")[0];
    (document.getElementById("describe1") as HTMLInputElement).value = educationSections[0].innerText.split(":")[1].trim();
    if (educationSections[1]) {
        (document.getElementById("college2") as HTMLInputElement).value = educationSections[1].innerText.split(":")[0];
        (document.getElementById("describe2") as HTMLInputElement).value = educationSections[1].innerText.split(":")[1].trim();
    }

    (document.getElementById("skills") as HTMLInputElement).value = (document.querySelector(".main-content section:nth-of-type(2) p") as HTMLElement).innerText;
    (document.getElementById("experience") as HTMLInputElement).value = (document.querySelector(".main-content section:nth-of-type(3) p") as HTMLElement).innerText;
}
