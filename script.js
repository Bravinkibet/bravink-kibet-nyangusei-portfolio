document.addEventListener('DOMContentLoaded', () => {
    // Event listener for clicking the Portfolio link
    document.getElementById('portfolioLink').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Opening Portfolio...');
        // Replace with actual portfolio URL if available
        window.open('https://github.com/Bravinkibet/my-portfolio', '_blank');
    });

    // Event listener for clicking the header
    document.querySelector('header').addEventListener('click', () => {
        alert('Header clicked!');
    });

    // Event listener for mouseover on personal profile section
    document.getElementById('personalProfile').addEventListener('mouseover', () => {
        document.getElementById('personalProfile').style.backgroundColor = '#f0f0f0';
    });

    // Event listener for mouseout on personal profile section
    document.getElementById('personalProfile').addEventListener('mouseout', () => {
        document.getElementById('personalProfile').style.backgroundColor = '#fff';
    });

    // Event listener for pressing Enter key anywhere on the page
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });

    // Event listener for context menu (right-click) on career objectives section
    document.getElementById('careerObjectives').addEventListener('contextmenu', (event) => {
        event.preventDefault();
        alert('Context menu opened on Career Objectives section!');
    });
});
