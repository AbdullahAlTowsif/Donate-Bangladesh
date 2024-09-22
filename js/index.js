document.getElementById('btn-toggle').addEventListener('click', function() {
    if (window.location.href.includes('blog.html')) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'blog.html';
    }
});
