function toggleSkills(elementId) {
    const skills = document.getElementById(elementId);
    if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}
