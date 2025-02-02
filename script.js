const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const projects = box.getAttribute('data-projects');
        const projectsList = box.querySelector('.projects-list');
        projectsList.textContent = `Projects: ${projects}`;
        projectsList.style.maxHeight = '100px'; // Set max-height to show the list
        projectsList.style.opacity = '1'; // Set opacity to 1 to fade in
        projectsList.style.transition = 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out'; // Add transition effect
        projectsList.style.zIndex = '1'; // Set z-index to 1 to make sure the list is on top of the other elements
    });

    box.addEventListener('mouseleave', () => {
        const projectsList = box.querySelector('.projects-list');
        projectsList.style.maxHeight = '0'; // Reset max-height to hide the list
        projectsList.style.opacity = '0'; // Fade out
    });
});