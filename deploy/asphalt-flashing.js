import { LitElement, css, html } from 'lit';
import './result-item.js';
class AsphaltFlashing extends LitElement {
    constructor() {
        super();
        this.mResult = 0;
        this.flashingLength = 10;
        this.flashingPrice = 0;
        this.gable = 0;
        this.gableFlashing = 0;
        this.head = 0;
        this.headFlashing = 0;
        this.back = 0;
        this.backFlashing = 0;
        this.step = 0;
        this.stepFlashing = 0;
        this.valley = 0;
        this.valleyResult = 0;
        this.chimney = 0;
        this.skylights = 0;
        this.price = {
            gable: 14.99,
            head: 14.99,
            back: 14.99,
            step: 14.99,
            valley: 14.99
        };
        this.gableTotal = 0;
        this.headTotal = 0;
        this.backTotal = 0;
        this.stepTotal = 0;
        this.valleyTotal = 0;
    }
    _areaChange(event) {
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        this._flashing();
    }
    _flashing() {
        window.onerror = function (message, file, line, col, error) { console.log(arguments); };
        this.valleyResult = Number((this.valley / this.flashingLength).toFixed(0));
        const valleyTotal = Number((this.valleyResult * this.price.valley).toFixed(0));
        this.gableFlashing = Number((this.gable / this.flashingLength).toFixed(0));
        const gableTotal = Number((this.gableFlashing * this.price.gable).toFixed(0));
        this.headFlashing = Number(((this.head + (this.chimney * 5) + (this.skylights * 5)) / this.flashingLength).toFixed(0));
        const headTotal = Number((this.headFlashing * this.price.head).toFixed(0));
        this.backFlashing = Number(((this.back + (this.chimney * 5) + (this.skylights * 5)) / this.flashingLength).toFixed(0));
        const backTotal = Number((this.backFlashing * this.price.back).toFixed(0));
        this.stepFlashing = Number(((this.step + (this.chimney * 3) + (this.skylights * 5)) / this.flashingLength).toFixed(0));
        const stepTotal = Number((this.stepFlashing * this.price.step).toFixed(0));
        this.flashingPrice = valleyTotal + gableTotal + headTotal + backTotal + stepTotal;
    }
    render() {
        return html `

<section>

  <h3>Flashing</h3>

  <div class="boxed">

  <div style=" display:grid; grid-template-columns: 1fr 1fr 1fr; ">
    <h1 class="money">\$ ${this.flashingPrice}</h1>
    <span>Length: ${this.flashingLength}</span>
    <span></span>
  </div>

  <input type="range" value="${this.flashingLength}" min="8" max="12" step="3">

    <div class="mainBox">

    <!-- SKYLIGHT -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Skylights:</div>
      <input type="reange" id="skylight" value="${this.skylights}" max="10" @change="${this._areaChange}">
      <i class="y">ea</i>
    </div>

    <!-- CHIMNEY -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Chimney:</div>
      <input type="reange" id="chimney" value="${this.chimney}" max="10" @change="${this._areaChange}">
      <i class="y">ea</i>
    </div>

    <!-- VALLEY -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Valley:</div>
      <input type="reange" id="valley" value="${this.valley}" max="180" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <!-- GABLE -->
    <div id="tin1" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Gable Flashing:</div>
      <input type="reange" id="gableFlash" value="${this.gable}" max="180" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <!-- HEAD FLASHING -->
    <div id="tin2" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Head Flashing:</div>
      <input type="reange" id="headFlash" value="${this.head}" max="180" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <!-- BACK FLASHING -->
    <div id="tin3" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Back Flashing:</div>
      <input type="reange" id="backFlash" value="${this.back}" max="180" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>

    <!-- STEP FLASHING -->
    <div id="tin4" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Step Flashing:</div>
      <input type="reange" id="stepFlash" value="${this.step}" max="180" @change="${this._areaChange}">
      <i class="y">ft</i>
    </div>
    
    </div>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="gb"    product="Gable Flashing:"     homework="${this.gableFlashing}"    unit="units"      price="${this.price.gable}"        total="${this.gableTotal}"></result-item>
      <result-item            product="Front Pan:"          homework="${this.headFlashing}"     unit="units"      price="${this.price.head}"         total="${this.headTotal}"></result-item>
      <result-item            product="Back Pan:"           homework="${this.backFlashing}"     unit="units"      price="${this.price.back}"         total="${this.backTotal}"></result-item>
      <result-item            product="Step Flashing:"      homework="${this.stepFlashing}"     unit="bundles"    price="${this.price.step}"         total="${this.stepTotal}"></result-item>
      <result-item            product="Valley Flashing:"    homework="${this.valleyResult}"     unit="units"      price="${this.price.valley}"       total="${this.valleyTotal}"></result-item>
    </div>

  </div>

</section>
<!--
<div class="result" style="display: grid; grid-template-columns: 1fr;">
  <result-print class="result"   id="gb"    product="Gable Flashing:"     homework="{{gableFlashing}}"    unit="units"></result-print>
  <result-print class="result"           product="Front Pan:"          homework="{{headFlashing}}"     unit="units"></result-print>
  <result-print class="result"           product="Back Pan:"           homework="{{backFlashing}}"     unit="units"></result-print>
  <result-print class="result"           product="Step Flashing:"      homework="{{stepFlashing}}"     unit="bundles"></result-print>
  <result-print class="result"           product="Valley Flashing:"    homework="{{valleyResult}}"     unit="units"></result-print>
  <result-print class="result"           product="Caulking:"           homework="{{sealantResult}}"    unit="tubes"></result-print>
</div>
-->
  `;
    }
}
AsphaltFlashing.styles = css `

  :host {
      --secondary-text-color:                 blue;
      --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c */
      --paper-slider-disabled-knob-color:     #e06f50;
      --paper-slider-active-color:            #248746; /* #1abc9c */
      --paper-slider-secondary-color:         #1abc9c;
      --paper-input-container-color:          black;
      --paper-input-container-focus-color:    #1abc9c;
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
    .mainBox      { border-top: dotted grey 1px; margin-top: 12px; padding-top: 12px; border-bottom: dotted grey 1px; padding-bottom: 12px; }
    .result       { display: none; }

    .money        { font-size: .9em;          color: #248746;       text-align: left; }

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

`;
export { AsphaltFlashing };
customElements.define("asphalt-flashing", AsphaltFlashing);
//# sourceMappingURL=asphalt-flashing.js.map