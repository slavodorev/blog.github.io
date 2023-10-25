document.addEventListener('DOMContentLoaded', function() {
    const customButton = document.getElementById('customButton');
    const overlay = document.getElementById('overlay');
    const closeOverlay = document.getElementById('closeOverlay');
    const skills = document.querySelectorAll('.skill');

    customButton.addEventListener('click', function() {
        this.classList.toggle('active');
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
        
        if (this.classList.contains('active')) {
            skills.forEach(skill => {
                skill.addEventListener('click', function() {
                    const link = this.querySelector('a').getAttribute('href');
                    window.location.href = link;
                });
            });
        } else {
            skills.forEach(skill => {
                skill.removeEventListener('click', function() {});
            });
        }
    });

    closeOverlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        customButton.classList.remove('active');
        skills.forEach(skill => {
            skill.removeEventListener('click', function() {});
        });
    });
});
