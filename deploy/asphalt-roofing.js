import { ResultItem } from './result-item.js';
import { LitElement, css, html } from 'lit';
class AsphaltRoofing extends LitElement {
    constructor() {
        super();
        this.mResult = 0;
        this.asphaltPrice = 0;
        this.squarefeet = 0;
        this.square = 0;
        this.bundles = false;
        this.conversion = false;
        this.plywoodResult = 0;
        this.plywoodPrice = 24;
        this.plywoodTotal = 0;
        this.sheathingNailResult = 0;
        this.sheathingNailPrice = 24;
        this.sheathingNailTotal = 0;
        this.shingles3Result = 0;
        this.shingles3Price = 21;
        this.shingles3Total = 0;
        this.shingles4Result = 0;
        this.shingles4Price = 30;
        this.shingles4Total = 0;
        this.starters = 24;
        this.startersResult = 0;
        this.startersPrice = 24;
        this.startersTotal = 0;
        this.cap = 60;
        this.cappingResult = 0;
        this.cappingPrice = 35;
        this.cappingTotal = 0;
        this.felt15Result = 0;
        this.felt15Price = 18;
        this.felt15Total = 0;
        this.felt30Result = 0;
        this.felt30Price = 36;
        this.felt30Total = 0;
        this.roofNailResult = 0;
        this.roofNailPrice = 24;
        this.roofNailTotal = 0;
        this.price = {
            plywood: 14.99,
            sheathingNail: 14.99,
            roofingNail: 14.99,
            shingles3: 14.99,
            shingles4: 14.99,
            starters: 14.99,
            capping: 14.99,
            felt15: 14.99,
            felt30: 14.99
        };
        this.IKO = {
            plywood: 14.99,
            sheathingNail: 14.99,
            roofingNail: 14.99,
            shingles3: 14.99,
            shingles4: 14.99,
            starters: 14.99,
            capping: 14.99,
            felt15: 14.99,
            felt30: 14.99
        };
        const inst = new ResultItem();
        if (typeof AsphaltRoofing !== 'undefined') {
            console.log(this.tagName + "undefined");
        }
    }
    _areaChange(event) {
    }
    _area() {
        this.square = this.squarefeet;
        this.mResult = this.asphaltPrice;
    }
    _conversion() {
        const sq = this.squarefeet;
        if (this.conversion == true) {
            this.shadowRoot.querySelector("#ply").setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein;");
            this.plywoodResult = this.squarefeet / 32 * 100;
            this.plywoodResult.toFixed(0);
            this.plywoodTotal = this.plywoodPrice * this.plywoodResult;
            this.shadowRoot.querySelector("#pny").setAttribute("style", "display:block; animation-duration: 3s; animation-name: slidein;");
            this.sheathingNailResult = Number(this.squarefeet * 320 / 7200).toFixed(0) + 1;
            this.sheathingNailTotal = this.sheathingNailPrice * this.sheathingNailResult;
        }
        ;
    }
    _bundles() {
        window.onerror = function (message, file, line, col, error) { console.log(arguments); };
        if (this.bundles == false) {
            this.shingles3Result = this.squarefeet * 3;
            this.shadowRoot.querySelector("#s3").setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
            this.shadowRoot.querySelector("#s4").setAttribute("style", "display:none;");
            this.shingles3Total = this.shingles3Price * this.shingles3Result;
        }
        ;
        if (this.bundles == true) {
            this.shingles4Result = this.squarefeet * 4;
            this.shadowRoot.querySelector("#s4").setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
            this.shadowRoot.querySelector("#s3").setAttribute("style", "display:none;");
            this.shingles4Total = this.shingles4Price * this.shingles4Result;
        }
        ;
    }
    _asphaltRoof() {
        this.startersResult = Number(this.starters / 120.33) * this.price.starters;
        this.startersTotal = Number(this.startersPrice * this.startersResult).toFixed(0);
        this.cappingResult = Number(Number(this.cap / 20.625).toFixed(0)) + 1;
        this.cappingTotal = Number(this.cappingPrice * this.cappingResult).toFixed(0);
        this.roofNailResult = Number(this.squarefeet * 320 / 7200).toFixed(0) + 1;
        this.roofNailTotal = Number(this.roofNailPrice * this.roofNailResult).toFixed(0);
        this.felt15Result = Number(this.squarefeet / 400 * 100).toFixed(0);
        this.felt15Total = Number(this.felt15Price * this.felt15Result).toFixed(0);
        this.felt30Result = Number(this.squarefeet / 200 * 100).toFixed(0);
        this.felt30Total = Number(this.felt30Price * this.felt30Result).toFixed(0);
        this.asphaltPrice = this.startersTotal + this.cappingTotal + this.felt15Total + this.felt30Total + this.roofNailTotal;
    }
    render() {
        return html `


<section>
    
  <h3>Roofing</h3>

  <div class="boxed">

  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; ">
    <h1 class="money">\$ ${this.asphaltPrice}</h1>
    <input type="checkbox" checked="${this.bundles}" @click="${this._asphaltRoof}">
    <input type="checkbox" checked="${this.conversion}" @click="${this._asphaltRoof}">
    <span>Total Square: ${this.square}</span>
    <h4>(3/4)</h4>
    <h4>Conversion</H4>
  </div>

  <input type="range" id="roofArea" value="${this.squarefeet}" max="100" @change="${this._areaChange}">

    <div style="display: grid; grid-template-columns: 1fr 1fr 1.5em;">
      <div class="x">Starter Rows:</div>
      <input type="range" id="ss" value="${this.starters}" max="100" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <!-- CAPPING -->
    <div style="display: grid; grid-template-columns: 1fr 1fr 1.5em;">
      <div class="x">Capping:</div>
      <input type="range" id="ridge" value="${this.cap}" max="250" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"       price="{{price.plywood}}"     total="{{plywoodTotal}}"></result-item>
      <result-item id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"        price="{{price.sheathingNail}}"    total="{{sheathingNailTotal}}"></result-item>
      <result-item id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"      price="{{price.shingles3}}"     total="{{shingles3Total}}"></result-item>
      <result-item id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"      price="{{price.shingles4}}"     total="{{shingles4Total}}"></result-item>
      <result-item            product="Roofing Nails:"    homework="{{roofNailResult}}"         unit="boxes"        price="{{price.roofingNail}}"     total="{{roofNailTotal}}"></result-item>
      <result-item            product="Starters:"         homework="{{startersResult}}"         unit="bundles"      price="{{price.starters}}"     total="{{startersTotal}}"></result-item>
      <result-item            product="Capping:"          homework="{{cappingResult}}"          unit="rolls"        price="{{price.capping}}"     total="{{cappingTotal}}"></result-item>
      <result-item id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"        price="{{price.felt15}}"     total="{{felt15Total}}"></result-item>
      <result-item id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"        price="{{price.felt30}}"     total="{{felt30Total}}"></result-item>
    </div>

  </div>

</section>
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result" id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"></result-print>
    <result-print class="result" id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"></result-print>
    <result-print class="result" id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"></result-print>
    <result-print class="result" id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"></result-print>
    <result-print class="result"           product="Roofing Nails:"    homework="{{roofNailResult}}"          unit="boxes"></result-print>
    <result-print class="result"           product="Starters:"         homework="{{startersResult}}"          unit="bundles"></result-print>
    <result-print class="result" id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"></result-print>
    <result-print class="result" id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"></result-print>
  </div>
  -->
  `;
    }
}
AsphaltRoofing.styles = css `

  :host {
      --secondary-text-color:                 blue;
      --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c */
      --paper-slider-active-color:            #248746; /* #1abc9c */
      --paper-slider-secondary-color:         #1abc9c;
      --paper-input-container-color:          black;
      --paper-input-container-focus-color:    #1abc9c;
    }
    
    @keyframes slidein {
      from  { transform: scale( .2, .2 ); }
      to    { transform: scale( 1, 1 ); }
    }

    @keyframes slideout {
      from  { transform: scale(  1,   1 ); }
      to    { transform: scale( .2,  .2 ); }
    }

    @media print  { 
                    paper-card  { display: none; }
                    .result     { display: block; }
                  }

    a, a:link, a:hover, a:visited, a:active   { text-decoration: none;    color: black; }
    h1            { font-size: 22px; }
    h3            { color: #e06f50; }
    h4            { font-size: .7em;            text-align: center;       margin: auto;           margin-top: 0px; }

    input         { font-style: italic; }
    section       { background-color: #303030;  color: #303030;             margin: 3px auto;       padding: 12px;      width: 100%;}
    .x            { text-align: right;        margin: auto 0px;     font-size: .9em; }
    .y            { text-align: left;         margin: auto 0px;     font-size: .8em; }
    .grid         { border-radius: 5px;       padding: 5px;         max-width: 300px; margin: auto; }
    result-item   { margin: auto;             width: 100%;          border-bottom: 1px dotted grey; }
    .boxed        { border: solid grey 1px;   border-radius: 3px;   padding: 12px;    background-color: #e8e8e8; }
    .result       { display: none; }

    .money        { font-size: 1em;          color: #248746;       text-align: left; }


`;
export { AsphaltRoofing };
customElements.define("asphalt-roofing", AsphaltRoofing);
//# sourceMappingURL=asphalt-roofing.js.map