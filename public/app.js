import { Invoice } from './classes/Invoice.js';
const invoice1 = new Invoice('Mario', 'Work on the Mario Website', 25000);
const invoice2 = new Invoice('Luigi', 'Work on the Luigi Website', 30000);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
invoices.forEach((inv) => {
    // we can't access inv.details here because it is private
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// inputs
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
