let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.transform = translateX(${(i - index) * 100}%);
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
});

// Auto turn every 6 seconds
setInterval(() => {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}, 6000);

// Initial display
showPage(currentPage);