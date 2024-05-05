export interface AmortizationRow {
    month: string;
    initialBalance: number;
    interest: number;
    principal: number;
    monthlyPayment: number;
    finalBalance: number;
    status: string;
}