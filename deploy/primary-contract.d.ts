import { LitElement, TemplateResult } from 'lit';
export declare class PrimaryContract extends LitElement {
    business: String;
    bizAddress: String;
    bizSales: String;
    bizPhone: Number;
    square: Number;
    rate: Number;
    servicePrice: Number;
    serviceTaxes: Number;
    serviceDeposit: Number;
    businessName: String;
    warrantyYears: Number;
    constructor();
    _deal(square: any, rate: any): void;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "primary-contract": PrimaryContract;
    }
}
//# sourceMappingURL=primary-contract.d.ts.map