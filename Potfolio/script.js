
import { projectData } from './data/projects.js';
const contactBtn = document.querySelector('#contactBtn');
contactBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been submitted.');
});

const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const viewBtns = document.querySelectorAll('.view-project');

viewBtns.forEach((btn, idx) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const project = projectData[idx];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImg').src = project.img;
    document.getElementById('modalImg').alt = project.title + ' Screenshot';
    document.getElementById('modalDesc').textContent = project.desc;
    const detailsList = document.getElementById('modalDetails');
    detailsList.innerHTML = '';
    project.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      detailsList.appendChild(li);
    });
    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
