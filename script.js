document.addEventListener('DOMContentLoaded', () => {
  // Event listener for clicking a Portfolio link (if exists)
  const portfolioLink = document.getElementById('portfolioLink');
  if (portfolioLink) {
    portfolioLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Opening Portfolio...');
      window.open('https://github.com/Bravinkibet/my-portfolio', '_blank');
    });
  }

  // Event listener for header click
  document.querySelector('header').addEventListener('click', () => {
    alert('Header clicked!');
  });

  // Change background of Personal Profile on hover
  const personalProfile = document.getElementById('personalProfile');
  if (personalProfile) {
    personalProfile.addEventListener('mouseover', () => {
      personalProfile.style.backgroundColor = '#f0f0f0';
    });
    personalProfile.addEventListener('mouseout', () => {
      personalProfile.style.backgroundColor = '#fff';
    });
  }

  // Alert on Enter key press anywhere
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  });

  // Context menu alert on Career Objectives section
  const careerObjectives = document.getElementById('careerObjectives');
  if (careerObjectives) {
    careerObjectives.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      alert('Context menu opened on Career Objectives section!');
    });
  }

  // Add a subtle 3D tilt effect to each main section on hover
  document.querySelectorAll('.main-section').forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'perspective(1000px) rotateX(2deg) translateY(-5px)';
      section.style.transition = 'transform 0.3s ease-out';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
      section.style.transition = 'transform 0.3s ease-out';
    });
  });
});
