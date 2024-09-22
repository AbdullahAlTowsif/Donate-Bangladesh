// changing the pages
document.getElementById('btn-toggle').addEventListener('click', function() {
    if (window.location.href.includes('blog.html')) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'blog.html';
    }
});

// get all the attr by id
const historyTab = document.getElementById('btn-history');
const donationTab = document.getElementById('btn-donation');
const fullForm = document.getElementById('full-form');
const footer = document.getElementById('empty-footer');


// history button functionality
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary-color', 'text-head-color');
    historyTab.classList.remove('bg-white', 'text-secondary-color');

    donationTab.classList.add('bg-white', 'text-secondary-color');
    donationTab.classList.remove('bg-primary-color', 'text-head-color');

    fullForm.classList.add('hidden');
    footer.classList.add('hidden');

});

// donation button functionality
donationTab.addEventListener('click', function(){
    donationTab.classList.remove('bg-white', 'text-secondary-color');
    donationTab.classList.add('bg-primary-color', 'text-head-color');

    historyTab.classList.remove('bg-primary-color', 'text-head-color');
    historyTab.classList.add('bg-white', 'text-secondary-color');

    fullForm.classList.remove('hidden');
    footer.classList.remove('hidden');

});