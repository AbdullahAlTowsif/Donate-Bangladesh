// changing the pages
document.getElementById('btn-toggle').addEventListener('click', function(event) {
    event.preventDefault();
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

// 1st card
const buttonNoakhali = document.getElementById('btn-noakhali');
buttonNoakhali.addEventListener('click', function(event){
    event.preventDefault();
    const N_Donation = parseFloat(document.getElementById('noakhali-donate-field').value);
    const noakhaliTotalDonate = document.getElementById('noakhali-amount');
    const noakhaliTotalDonateValue = parseFloat(noakhaliTotalDonate.innerText);
    sum = noakhaliTotalDonateValue;

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

// 2nd card
const buttonFeni = document.getElementById('btn-feni');
buttonFeni.addEventListener('click', function(event){
    event.preventDefault();
    const F_Donation = parseFloat(document.getElementById('feni-donate-field').value);
    const feniTotalDonate = document.getElementById('feni-amount');
    const feniTotalDonateValue = parseFloat(feniTotalDonate.innerText);
    sum = feniTotalDonateValue;

    sum+=F_Donation;
    feniTotalDonate.innerText = sum;

    const totalBalanceValue = parseFloat(totalBalance.innerText);
    updatedBalance = totalBalanceValue - F_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${F_Donation} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
    <p>Date: ${new Date().toString()}</p>
    `

    // const historyContainer = document.getElementById('add-history');
    historySection.appendChild(historyItem);
});

// 3rd card
const buttonQuota = document.getElementById('btn-quota');
buttonQuota.addEventListener('click', function(event){
    event.preventDefault();
    const Q_Donation = parseFloat(document.getElementById('quota-donate-field').value);
    const quotaTotalDonate = document.getElementById('quota-amount');
    const quotaTotalDonateValue = parseFloat(quotaTotalDonate.innerText);
    sum = quotaTotalDonateValue;

    sum+=Q_Donation;
    quotaTotalDonate.innerText = sum;

    const totalBalanceValue = parseFloat(totalBalance.innerText);
    updatedBalance = totalBalanceValue - Q_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${Q_Donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
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