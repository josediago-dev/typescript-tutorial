// classes
class Invoice {
    // by adding access modifiers, we can directly assign values to client, details and amount
    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number
    ) {}

    format() {
        return `${this.client} owes P${this.amount} for ${this.details}`;
    }
}

const invoice1 = new Invoice('Mario', 'Work on the Mario Website', 25000);
const invoice2 = new Invoice('Luigi', 'Work on the Luigi Website', 30000);
let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach((inv) => {
    // we can't access inv.details here because it is private
    console.log(inv.client, inv.amount, inv.format());
});


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