import { LitElement, TemplateResult } from 'lit';
export declare class SubContract extends LitElement {
    business: String;
    bizAddress: String;
    bizSales: String;
    bizPhone: Number;
    square: Number;
    rate: Number;
    servicePrice: Number;
    serviceTaxes: Number;
    businessName: String;
    warrantyYears: Number;
    constructor();
    _deal(square: any, rate: any): void;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "sub-contract": SubContract;
    }
}
//# sourceMappingURL=sub-contract.d.ts.map