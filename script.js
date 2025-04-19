document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});

const toggleButton = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button, .download-btn');
const links = document.querySelectorAll('a');
const progressBars = document.querySelectorAll('progress');
const contactForm = document.getElementById('contactForm');
const projectContainer = document.querySelector('.project-container');
const projects = document.querySelectorAll('.project');

toggleButton.addEventListener('click', () => {
    // Toggle dark mode on the body
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    buttons.forEach(button => button.classList.toggle('dark-mode'));
    links.forEach(link => link.classList.toggle('dark-mode'));
    progressBars.forEach(progress => progress.classList.toggle('dark-mode'));

    // Toggle dark mode for Contact Form
    contactForm.classList.toggle('dark-mode');
    contactForm.querySelectorAll('input, textarea, button').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Toggle dark mode for My Projects
    projectContainer.classList.toggle('dark-mode');
    projects.forEach(project => project.classList.toggle('dark-mode'));

    // Update the icon and label
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        toggleButton.setAttribute('data-label', 'Switch to Light Mode');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        toggleButton.setAttribute('data-label', 'Switch to Dark Mode');
    }
});

// Set default theme to light mode
body.classList.add('light-mode');
toggleButton.setAttribute('data-label', 'Switch to Dark Mode');





