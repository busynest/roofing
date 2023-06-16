import { LitElement, TemplateResult } from 'lit';
export declare class AsphaltVentilation extends LitElement {
    private mResult;
    private ventilation;
    private ventilationPrice;
    private ridge;
    private ridgeVentResult;
    private ridgeVentPrice;
    private ridgeVentTotal;
    private box;
    private boxVentResult;
    private boxVentPrice;
    private boxVentTotal;
    private bVent;
    private bVentResult;
    private bVentPrice;
    private bVentTotal;
    private pStack;
    private pStackResult;
    private pStackPrice;
    private pStackTotal;
    private gooseneck;
    private gooseneckResult;
    private gooseneckPrice;
    private gooseneckTotal;
    private asphaltSealant;
    private sealantResult;
    private sealantPrice;
    private sealantTotal;
    private price;
    constructor();
    _areaChange(event: Event): void;
    _ventilation(): void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "asphalt-ventilation": AsphaltVentilation;
    }
}
//# sourceMappingURL=asphalt-ventilation.d.ts.map