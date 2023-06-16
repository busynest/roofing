import { LitElement, TemplateResult } from 'lit';
export declare class AsphaltRoofing extends LitElement {
    private mResult;
    private asphaltPrice;
    private squarefeet;
    private square;
    private bundles;
    private conversion;
    private plywoodResult;
    private plywoodPrice;
    private plywoodTotal;
    private sheathingNailResult;
    private sheathingNailPrice;
    private sheathingNailTotal;
    private shingles3Result;
    private shingles3Price;
    private shingles3Total;
    private shingles4Result;
    private shingles4Price;
    private shingles4Total;
    private starters;
    private startersResult;
    private startersPrice;
    private startersTotal;
    private cap;
    private cappingResult;
    private cappingPrice;
    private cappingTotal;
    private felt15Result;
    private felt15Price;
    private felt15Total;
    private felt30Result;
    private felt30Price;
    private felt30Total;
    private roofNailResult;
    private roofNailPrice;
    private roofNailTotal;
    private price;
    private IKO;
    constructor();
    _areaChange(event: Event): void;
    _area(): void;
    _conversion(): void;
    _bundles(): void;
    _asphaltRoof(): void;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "asphalt-roofing": AsphaltRoofing;
    }
}
//# sourceMappingURL=asphalt-roofing.d.ts.map