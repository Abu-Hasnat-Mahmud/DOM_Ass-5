let isPromoCodeApply = false;

function costSet(id, value) {
    let amountId = document.getElementById(id + '-cost');

    let amount = parseInt(amountId.innerText);
    if (value > 0) {
        amountId.innerText = value;

    } else {
        amountId.innerText = 0;
    }
    isPromoCodeApply = false;

    // total cost calculation
    totalCost();
}

// total cost calculation
function totalCost() {
    let subTotalId = document.getElementById('sub-total');

    const memory = document.getElementById('memory-cost').innerText;
    const storage = document.getElementById('storage-cost').innerText;
    const delivery = document.getElementById('delivery-cost').innerText;

    let totalAmt = parseInt(memory) + parseInt(storage) + parseInt(delivery);

    subTotalId.innerText = 1299 + totalAmt;
    document.getElementById('total-amount').innerText = 1299 + totalAmt;
}

// cost calculation
totalCost();

// memory zero add listener
document.getElementById('btn-zero-memory').addEventListener('click', function () {
    // funciton for 0 cost
    costSet('memory', 0);
});

// 16 gb memory add listener
document.getElementById('btn-16-memory').addEventListener('click', function () {
    costSet('memory', 180);
});


// storage cost set listener
document.getElementById('btn-zero-storage').addEventListener('click', function () {
    // funciton for 0 cost
    costSet('storage', 0);
});

document.getElementById('btn-512-storage').addEventListener('click', function () {

    costSet('storage', 100);
});
document.getElementById('btn-1TB-storage').addEventListener('click', function () {

    costSet('storage', 180);
});


// delivery cost set listener
document.getElementById('btn-zero-delivery').addEventListener('click', function () {
    // funciton for 0 cost
    costSet('delivery', 0);
});

document.getElementById('btn-20-delivery').addEventListener('click', function () {

    costSet('delivery', 20);
});


// promocode listener
document.getElementById('btn-promo').addEventListener('click', function () {
    let inputPromo = document.getElementById('input-promo').value;

    // promo code check 
    if (inputPromo == 'stevekaku' && isPromoCodeApply == false) {
        let totalAmountId = document.getElementById('total-amount');

        let totalAmount = parseInt(totalAmountId.innerText);

        const tweentyPercent = totalAmount * .2;

        totalAmountId.innerText = totalAmount - tweentyPercent;

        isPromoCodeApply = true;

    }

    // clear input box
    document.getElementById('input-promo').value = '';
});