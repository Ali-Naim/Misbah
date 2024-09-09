let currentSectionIndex = 0;
const sections = document.querySelectorAll('.form-section');

function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            section.classList.add('active');
        }
    });
}

function nextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showSection(currentSectionIndex);
    }
}

function previousSection() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showSection(currentSectionIndex);
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Now generating PDF...');
    // Add your PDF generation logic here using jsPDF or similar libraries.


    
});

// Show the first section initially
showSection(currentSectionIndex);
