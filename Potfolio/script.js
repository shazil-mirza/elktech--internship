
const contactBtn = document.querySelector('#contactBtn');
contactBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been submitted.');
});


const projectData = [
  {
    title: ' Green Shield – Plant Disease Detection System',
    img: '../Green Shield.png',
    desc: 'A machine learning–based web application that detects plant diseases from images and provides treatment recommendations. Integrated trained ML models with a backend system to deliver real-time predictions and deployment-ready solutions.',
    details: [
      'ML-based disease detection from plant images',
      'Real-time prediction system',
      'Treatment recommendations engine',
      'Backend integration with trained models',
      'Production-ready deployment'
    ]
  },
  {
    title: ' Scalable RESTful API (MERN Stack)',
    img: '../REST API.png',
    desc: 'Designed and developed secure REST APIs using Node.js, Express, and MongoDB following MVC architecture. Implemented middleware, authentication, validation, and clean service-controller separation for scalable applications.',
    details: [
      'Node.js and Express backend',
      'MongoDB database integration',
      'MVC architecture pattern',
      'Authentication and middleware',
      'Service-controller separation'
    ]
  },
  {
    title: ' AI Data Preprocessing & Model Integration',
    img: '../Ai processing .png',
    desc: 'Built data preprocessing pipelines for machine learning models, including cleaning, transformation, and optimization. Successfully integrated ML models into backend systems for production-ready applications.',
    details: [
      'Data cleaning and transformation',
      'Feature engineering and optimization',
      'ML model integration',
      'Backend system integration',
      'Production-ready implementations'
    ]
  },
  {
    title: ' Weather App',
    img: '../weather app.png',
    desc: 'A dynamic weather application built with JavaScript that provides real-time weather data fetching from public APIs. Users can search weather by city, view current temperature, and get detailed weather forecasts with an intuitive and responsive user interface.',
    details: [
      'Real-time weather API integration',
      'Search by city functionality',
      'Current temperature and conditions',
      'Responsive and clean UI design',
      'Built with vanilla JavaScript'
    ]
  }
];


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
