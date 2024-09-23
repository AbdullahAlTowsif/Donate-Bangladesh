// common function to get value by id
function getValueById(id){
    return document.getElementById(id);
}

function addHidden(id){
    document.getElementById(id).classList.add('hidden');
}

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
const historyTab = getValueById('btn-history');
const donationTab = getValueById('btn-donation');
const fullForm = getValueById('full-form');
const footer = getValueById('empty-footer');
const historySection = getValueById('history-section');

// total amount
const totalBalance = getValueById('account-balance');


let sum = 0;
let updatedBalance = 0;


// 1st card
const buttonNoakhali = getValueById('btn-noakhali');
buttonNoakhali.addEventListener('click', function(event){
    event.preventDefault();
    const N_Donation = parseFloat(getValueById('noakhali-donate-field').value);
    const noakhaliTotalDonate = getValueById('noakhali-amount');
    const noakhaliTotalDonateValue = parseFloat(noakhaliTotalDonate.innerText);
    const totalBalanceValue = parseFloat(totalBalance.innerText);
    const my_modal = getValueById('my_modal_1');

    if(N_Donation > totalBalanceValue || isNaN(N_Donation) || N_Donation < 0){
        alert('Invalid Donation Amount');
        addHidden('my_modal_1');
        window.location.reload();
        return;
    }
    sum = noakhaliTotalDonateValue;

    sum+=N_Donation;
    noakhaliTotalDonate.innerText = sum;

    updatedBalance = totalBalanceValue - N_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${N_Donation} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
    <p class="bg-gray-50">Date: ${new Date().toString()}</p>
    `

    historySection.appendChild(historyItem);
});

// 2nd card
const buttonFeni = getValueById('btn-feni');
buttonFeni.addEventListener('click', function(event){
    event.preventDefault();
    const F_Donation = parseFloat(getValueById('feni-donate-field').value);
    const feniTotalDonate = getValueById('feni-amount');
    const feniTotalDonateValue = parseFloat(feniTotalDonate.innerText);
    const totalBalanceValue = parseFloat(totalBalance.innerText);
    const my_modal = getValueById('my_modal_1');

    if(F_Donation > totalBalanceValue || isNaN(F_Donation) || F_Donation < 0){
        alert('Invalid Donataion Amount');
        addHidden('my_modal_1');
        window.location.reload();
        return;
    }


    sum = feniTotalDonateValue;

    sum+=F_Donation;
    feniTotalDonate.innerText = sum;

    updatedBalance = totalBalanceValue - F_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${F_Donation} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
    <p class="bg-gray-50">Date: ${new Date().toString()}</p>
    `

    historySection.appendChild(historyItem);
});

// 3rd card
const buttonQuota = getValueById('btn-quota');
buttonQuota.addEventListener('click', function(event){
    event.preventDefault();
    const Q_Donation = parseFloat(getValueById('quota-donate-field').value);
    const quotaTotalDonate = getValueById('quota-amount');
    const quotaTotalDonateValue = parseFloat(quotaTotalDonate.innerText);
    const totalBalanceValue = parseFloat(totalBalance.innerText);
    const my_modal = getValueById('my_modal_1');

    if(Q_Donation > totalBalanceValue || isNaN(Q_Donation) || Q_Donation < 0){
        alert('Invalid Donation Amount');
        addHidden('my_modal_1');
        window.location.reload();
        return;
    }    


    sum = quotaTotalDonateValue;

    sum+=Q_Donation;
    quotaTotalDonate.innerText = sum;

    updatedBalance = totalBalanceValue - Q_Donation;
    totalBalance.innerText = updatedBalance;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'space-y-4 max-w-6xl container mx-auto p-8 border rounded-xl mb-6';
    historyItem.innerHTML = `
    <h3 class="text-xl font-bold text-head-color">${Q_Donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    <p class="bg-gray-50">Date: ${new Date().toString()}</p>
    `

    historySection.appendChild(historyItem);
});






// history button functionality
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary-color', 'text-head-color');
    historyTab.classList.remove('bg-white', 'text-secondary-color');

    donationTab.classList.add('bg-white', 'text-secondary-color');
    donationTab.classList.remove('bg-primary-color', 'text-head-color');

    addHidden('full-form');
    addHidden('empty-footer');
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
    addHidden('history-section');

});