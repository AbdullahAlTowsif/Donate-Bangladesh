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
const historySection = document.getElementById('history-section');

// total amount
const totalBalance = document.getElementById('account-balance');


let sum = 0;
let updatedBalance = 0;

// input fields buttons
const buttonNoakhali = document.getElementById('btn-noakhali');
buttonNoakhali.addEventListener('click', function(){

    const N_Donation = parseFloat(document.getElementById('noakhali-donate-field').value);
    const noakhaliTotalDonate = document.getElementById('noakhali-amount');

    sum+=N_Donation;
    noakhaliTotalDonate.innerText = sum;

    const totalBalanceValue = parseFloat(totalBalance.innerText);
    updatedBalance = totalBalanceValue - N_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${N_Donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
    <p>Date: ${new Date().toString()}</p>
    `

    // const historyContainer = document.getElementById('add-history');
    historySection.appendChild(historyItem);
});






// history button functionality
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary-color', 'text-head-color');
    historyTab.classList.remove('bg-white', 'text-secondary-color');

    donationTab.classList.add('bg-white', 'text-secondary-color');
    donationTab.classList.remove('bg-primary-color', 'text-head-color');

    fullForm.classList.add('hidden');
    footer.classList.add('hidden');
    historySection.classList.remove('hidden');

});

// donation button functionality
donationTab.addEventListener('click', function(){
    donationTab.classList.remove('bg-white', 'text-secondary-color');
    donationTab.classList.add('bg-primary-color', 'text-head-color');

    historyTab.classList.remove('bg-primary-color', 'text-head-color');
    historyTab.classList.add('bg-white', 'text-secondary-color');

    fullForm.classList.remove('hidden');
    footer.classList.remove('hidden');
    historySection.classList.add('hidden');

});