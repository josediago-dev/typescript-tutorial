export class Invoice {
    // by adding access modifiers, we can directly assign values to client, details and amount
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes P${this.amount} for ${this.details}`;
    }
}
