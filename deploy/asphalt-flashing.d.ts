import { LitElement, PropertyValueMap, TemplateResult } from 'lit';
import './result-item.js';
export declare class AsphaltFlashing extends LitElement {
    private mResult;
    private flashingLength;
    private flashingPrice;
    private gable;
    private gableFlashing;
    private head;
    private headFlashing;
    private back;
    private backFlashing;
    private step;
    private stepFlashing;
    private valley;
    private valleyResult;
    private chimney;
    private skylights;
    private price;
    private gableTotal;
    private headTotal;
    private backTotal;
    private stepTotal;
    private valleyTotal;
    constructor();
    _areaChange(event: Event): void;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    private _flashing;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "asphalt-flashing": AsphaltFlashing;
    }
}
//# sourceMappingURL=asphalt-flashing.d.ts.map