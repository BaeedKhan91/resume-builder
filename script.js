function addWorkExperience() {
  const container = document.getElementById("workExperienceContainer");
  const newTextArea = document.createElement("textarea");
  newTextArea.rows = 3;
  newTextArea.placeholder = "Enter here";
  newTextArea.className = "workex-item";
  container.appendChild(newTextArea);
}

function removeWorkExperience() {
  const container = document.getElementById("workExperienceContainer");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

function addAcademic() {
  const container = document.getElementById("academicContainer");
  const newTextArea = document.createElement("textarea");
  newTextArea.rows = 3;
  newTextArea.placeholder = "Enter here";
  newTextArea.className = "academic-item";
  container.appendChild(newTextArea);
}

function removeAcademic() {
  const container = document.getElementById("academicContainer");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

function generateCv() {
  // Personal Information
  document.getElementById("t1").textContent = document.getElementById("namef").value;
  document.getElementById("t2").textContent = document.getElementById("namef").value;
  document.getElementById("cv-number").textContent = document.getElementById("phoneNumber").value;
  document.getElementById("cv-address").textContent = document.getElementById("address").value;

  // Links
  document.getElementById("cv-linkedin").href = document.getElementById("linkedin").value;
  document.getElementById("cv-facebook").href = document.getElementById("facebook").value;
  document.getElementById("cv-github").href = document.getElementById("github").value;

  // Objective
  document.getElementById("cv-objective").textContent = document.getElementById("objective").value;

  // Work Experience
  const workExperienceList = document.getElementById("cv-workexperience");
  workExperienceList.innerHTML = ""; // Clear existing items
  document.querySelectorAll("#workExperienceContainer textarea").forEach((textarea) => {
    if (textarea.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = textarea.value;
      workExperienceList.appendChild(li);
    }
  });

  // Academic Qualification
  const academicList = document.getElementById("cv-academic");
  academicList.innerHTML = ""; // Clear existing items
  document.querySelectorAll("#academicContainer textarea").forEach((textarea) => {
    if (textarea.value.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = textarea.value;
      academicList.appendChild(li);
    }
  });
}

function printCV() {
  window.print();
}
