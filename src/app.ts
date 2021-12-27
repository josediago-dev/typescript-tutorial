// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format() {
        return `${this.client} owes P${this.amount} for ${this.details}`;
    }
}

const invoice1 = new Invoice('Mario', 'Work on the Mario Website', 25000);
const invoice2 = new Invoice('Luigi', 'Work on the Luigi Website', 30000);
let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// inputs
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});