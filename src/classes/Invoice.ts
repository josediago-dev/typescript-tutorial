export class Invoice {
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