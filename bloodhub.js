// script.js

document.getElementById("donorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const contact = document.getElementById("contact").value;

    // Create a new donor entry
    const donorList = document.getElementById("donorList");
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${name}, Blood Group: ${bloodGroup}, Contact: ${contact}`;
    listItem.dataset.bloodGroup = bloodGroup;
    donorList.appendChild(listItem);

    // Clear form
    document.getElementById("donorForm").reset();
});

document.getElementById("search").addEventListener("input", function (event) {
    const query = event.target.value.toUpperCase();
    const donors = document.querySelectorAll("#donorList li");

    donors.forEach(donor => {
        const bloodGroup = donor.dataset.bloodGroup.toUpperCase();
        donor.style.display = bloodGroup.includes(query) ? "" : "none";
    });
});
