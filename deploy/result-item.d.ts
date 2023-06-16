import { LitElement, TemplateResult } from "lit";
export declare class ResultItem extends LitElement {
    name: String;
    product: String;
    identity: String;
    unit: String;
    homework: Number;
    price: Number;
    total: Number;
    constructor();
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "result-item": ResultItem;
    }
}
//# sourceMappingURL=result-item.d.ts.map