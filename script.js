function addWorkExperience() {
    const container = document.getElementById('workExperienceContainer');
    const newTextArea = document.createElement('textarea');
    newTextArea.rows = 3;
    newTextArea.placeholder = 'Enter here';
    container.appendChild(newTextArea);
  }
  
  function removeWorkExperience() {
    const container = document.getElementById('workExperienceContainer');
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  }
  
  function addAcademic() {
    const container = document.getElementById('academicContainer');
    const newTextArea = document.createElement('textarea');
    newTextArea.rows = 3;
    newTextArea.placeholder = 'Enter here';
    container.appendChild(newTextArea);
  }
  
  function removeAcademic() {
    const container = document.getElementById('academicContainer');
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
  }
  