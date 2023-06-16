import { LitElement, TemplateResult } from 'lit';
import './asphalt-ventilation.js';
import './asphalt-roofing.js';
import './asphalt-flashing.js';
export declare class PurchaseOrder extends LitElement {
    tSquare: Number;
    roofMoney: Number;
    ventMoney: Number;
    flashingMoney: Number;
    constructor();
    _areaChange(): void;
    _totalPurchase(): void;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
//# sourceMappingURL=purchase-order.d.ts.map