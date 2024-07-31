document.addEventListener('DOMContentLoaded', (event) => {
    function showPage(pageId) {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'block';
    }

    window.showPage = showPage;
    showPage('home');
});
