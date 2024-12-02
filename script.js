// JavaScript code for the cake project

// Handle navigation search
document.querySelector('.search-icon').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput) {
        alert(`Searching for: ${searchInput}`);
    }
});

// Change delivery location dynamically
document.querySelector('.add-icon').addEventListener('click', () => {
    const newLocation = prompt("Enter your delivery location:");
    if (newLocation) {
        document.querySelector('.add-second').textContent = newLocation;
    }
});

// Add "See More" click event for boxes
document.querySelectorAll('.box-content p').forEach(box => {
    box.addEventListener('click', () => {
        alert(`Loading more details for ${box.previousElementSibling.textContent} cakes.`);
    });
});

// Back to Top functionality
document.querySelector('.foot-pannel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer links interactions
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', () => {
        alert(`Navigating to ${link.textContent}`);
    });
});
