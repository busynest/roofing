
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/utils/gestures.js';
import { updateMetadata } from './metadata.js';



export class PurchaseOrder extends PolymerElement {

  static get is() { return 'purchase-order'; }

  static get properties() {
    return {
      
      /* AREA */
      
      squarefeet:           { type: Number, notify: true, observer: '_area', value: 21 },
      square:               { type: Number, notify: true, observer: '_area'},
     
      /* CONVERSION */
     
      conversion:           { type: Boolean, notify: true, observer: '_conversion', value: false},
      plywoodResult:        { type: Number,  notify: true, observer: '_conversion' },
      
      /* ASPHALT */
      
      bundles:              { type: Boolean, notify: true, observer: '_bundles', value: false },
      
      shingles3Result:      { type: Number,  notify: true, observer: '_bundles' },
      shingles4Result:      { type: Number,  notify: true, observer: '_bundles' },
      
      felt15Result:         { type: Number, notify: true, observer: '_asphaltRoof' },
      felt30Result:         { type: Number, notify: true, observer: '_asphaltRoof' },

      roofNailResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
      
      starters:             { type: Number,  notify: true, observer: '_asphaltRoof', value: 24 },
      startersResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
      
      asphaltSealant:       { type: Number,  notify: true, observer: '_asphaltRoof', value: 2 },
      sealantResult:        { type: Number,  notify: true, observer: '_asphaltRoof' },
      
      /* VENTILATION */
      
      ventilation:          { type: Boolean, notify: true, observer: '_ventilation', value: false, },

      ridge:                { type: Number,  notify: true, observer: '_ventilation', value: 24 },
      ridgeVentResult:      { type: Number,  notify: true, observer: '_ventilation' },

      box:                  { type: Number,  notify: true, observer: '_ventilation', value: 4 },
      boxVentResult:        { type: Number,  notify: true, observer: '_ventilation' },
      
      /** CAPPING */
      
      cap:                  { type: Number, notify: true, value: 60 },
      cappingResult:        { type: Number, notify: true, obeserver: "_asphaltRoof" },

      bVent:                { type: Number, value: 1, notify: true },
      bVentResult:          { type: Number, notify: true, observer: '_asphaltRoof' },

      pStack:               { type: Number, value: 4, notify: true },
      pStackResult:         { type: Number, notify: true, observer: '_asphaltRoof' },

      gooseneck:            { type: Number, notify: true, value: 1 },
      gooseneckResult:      { type: Number, notify: true, observer: '_asphaltRoof' },

      chimney:              { type: Number, notify: true, observer: '_flashing', value: 1 },
      skylights:            { type: Number, notify: true, observer: '_flashing', value: 2 },

      gable:                { type: Number, notify: true, observer: '_flashing', value: 0 },
      gableFlashing:        { type: Number, notify: true, observer: '_flashing' },

      head:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      headFlashing:         { type: Number, notify: true, observer: '_flashing' },

      back:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      backFlashing:         { type: Number, notify: true, observer: '_flashing' },

      step:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      stepFlashing:         { type: Number, notify: true, observer: '_flashing' },

      valley:               { type: Number, notify: true, observer: '_flashing', value: 24 },
      valleyResult:         { type: Number, notify: true, observer: '_flashing' }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    updateMetadata({
      title: 'Purchase Order',
      description: 'A Purchase Order for Residential Roofing Contractors to help with supplies management.',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
    console.log('Residential Estimate Ready!');
  }

  _areaChange(event) {
    this._area(event);
    this._conversion(event);
    this._bundles(event);
    this._asphaltRoof(event);
    this._ventilation(event);
    this._flashing(event);
  }

  _area( square, squarefeet ) {
    this.square           = this.squarefeet;
  }
  _conversion( conversion, plywoodResult ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.conversion == false )  { this.$.ply.setAttribute("style", "display:none;"); this.$.pny.setAttribute("style", "display:none;"); };
    if ( this.conversion == true  )  { this.plywoodResult = parseInt(this.squarefeet / 32 * 100).toFixed(0); this.$.ply.setAttribute("style", "display:block;"); this.$.pny.setAttribute("style", "display:block;");};
  }

  _bundles( bundles, shingles3Result, shingles4Result ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.bundles == false )     { this.shingles3Result  = this.squarefeet * 3; this.$.s3.setAttribute("style", "display:block;"); this.$.s4.setAttribute("style", "display:none;"); };
    if ( this.bundles == true )      { this.shingles4Result  = this.squarefeet * 4; this.$.s4.setAttribute("style", "display:block;"); this.$.s3.setAttribute("style", "display:none;"); };
  }

  _ventilation( ventilation, box, boxVentResult, ridge, ridgeVentResult ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.ventilation == false ) { this.boxVentResult   = this.box;    this.$.bx.setAttribute("style", "display:block;"); this.$.rx.setAttribute("style", "display:none;"); this.$.rxv.setAttribute("style", "display:none;"); this.$.aac.setAttribute("style", "display:none;"); this.$.aad.setAttribute("style", "display:none;");    this.$.bxv.setAttribute("style", "display:block;"); this.$.aaa.setAttribute("style", "display:block;"); this.$.aab.setAttribute("style", "display:block;"); };
    if ( this.ventilation == true )  { this.ridgeVentResult = this.ridge;  this.$.rx.setAttribute("style", "display:block;"); this.$.bx.setAttribute("style", "display:none;"); this.$.bxv.setAttribute("style", "display:none;"); this.$.aaa.setAttribute("style", "display:none;"); this.$.aab.setAttribute("style", "display:none;");    this.$.rxv.setAttribute("style", "display:block;"); this.$.aac.setAttribute("style", "display:block;"); this.$.aad.setAttribute("style", "display:block;"); };
  }

  _flashing(
    valley, valleyResult,
    gable, gableFlashing,
    head, headFlashing,
    back, backFlashing,
    step, stepFlashing,
    chimney, skylights
  ) {
      window.onerror = function(message, file, line, col, error){ console.log(arguments); }
      this.valleyResult     = this.valley;
      this.gableFlashing    = this.gable;
      this.headFlashing     = this.head       + ( this.chimney  * .5 )      + ( this.skylights * .5 );
      this.backFlashing     = this.back       + ( this.chimney  * .5 )      + ( this.skylights * .5 );
      this.stepFlashing     = this.step       + ( this.chimney  * .3 )      + ( this.skylights * .5 );
    }

  _asphaltRoof(
    squarefeet,
    roofNailResult,
    bVent, bVentResult,
    pStack, pStackResult,
    gooseneck, gooseneckResult,
    starters, startersResult,
    cap, cappingResult,
    asphaltSealant, sealantResult,
    felt15Result, felt30Result 
  ) {
      window.onerror = function(message, file, line, col, error){ console.log(arguments); }
      this.roofNailResult   = Number(parseInt(this.squarefeet * 320 / 7200).toFixed(0)) + 1;
      this.bVentResult      = this.bVent;
      this.pStackResult     = this.pStack;
      this.gooseneckResult  = this.gooseneck;
      this.startersResult   = this.starters;
      this.cappingResult    = this.cap;
      this.sealantResult    = this.asphaltSealant;
      this.felt15Result     = parseInt(this.squarefeet / 400 * 100).toFixed(0);
      this.felt30Result     = parseInt(this.squarefeet / 200 * 100).toFixed(0);
    }

  static get template() {
    return html`

    <style>
      :host {
        --secondary-text-color: blue;
        --paper-slider-knob-color: #1abc9c;
        --paper-slider-active-color: #1abc9c;
        --paper-slider-secondary-color: #1abc9c;
        --paper-input-container-color: black;
        --paper-input-container-focus-color: #1abc9c;
      }
      @media print { .information { display: none; } }
      a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
      h1 { font-size: 22px; }
      h4 { font-size: 12px; text-align: center; margin: auto; margin-bottom: 15px;}
      .grid { border: 1px grey solid; border-radius: 5px; padding: 5px;}
      .second { margin: auto; }
      .info {margin: auto ;}
      .i { margin: auto; font-siz: .1em; font-style: italic; }
      .ii { border-left: 1px solid grey; border-right: 1px solid grey; }
      .iii {  margin-bottom: 15px; }
      .service { border: 50px; [elevation 5] }
      table { width: 100%; padding: 0px; }
      paper-input { font-style: italic; }
      paper-item { cursor: pointer;}
      paper-card { background-color: #e8e8e8; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
      paper-button { margin: 0.5em 1em 0.5em 0; background: #1abc9c; color: black; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
      paper-button:focus { background: #e8e8e8; }
      paper-slider { width: 100% }
      paper-toggle-button { 
        --paper-toggle-button-unchecked-bar-color:  #ee9d40;
        --paper-toggle-button-unchecked-button-color: #ee9d40;
        --paper-toggle-button-checked-button-color: #1abc9c;
        --paper-toggle-button-checked-bar-color: #1abc9c;
        margin-left: 0px;}
      .x { text-align: right; margin: auto 0px; }
      .y { text-align: right; margin: auto; }
      .calculator { max-width: 600px; margin: auto; }
    </style>

    <paper-card class="service">

      <div>
        <!-- PAGE TITLE -->
        <h3>Roofing Purchase Order</h3>
        <paper-button raised  class="information" onclick="print()">Print</paper-button>
      </div>

      <!-- PURCHASE FORM -->
      <form>
        <table>
          <tr>
            <td colspan="2"><paper-input type="text" label="Contractor"></paper-input></td>
          </tr>
          <tr>
            <td><paper-input type="text" label="Project"></paper-input></td>
            <td><paper-input type="date" label="Departure Date"></paper-input></td>
          </tr>
          <tr>
            <td><paper-input type="text" label="Estimator"></paper-input></td>
            <td><paper-input type="number" label="Phone Number"></paper-input></td>
          </tr>
          <tr>
            <td colspan="2"><paper-input type="text" label="Shipping Address"></paper-input></td>
          </tr>
        </table>
      </form>

      <div style="display: grid; grid-template-columns: 97px 1fr;">
        <div class="x">Total Square:</div>
        <paper-slider id="roofArea" value="{{squarefeet}}" max="100" on-change="_areaChange" editable></paper-slider>
      </div>

      <div class="iii" style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
        <div class="ii">
          <h4><i>Conversion</i></h4>
          <div style="display: grid; grid-template-columns: 1fr 40px 1fr;"><div class="i">N</div><paper-toggle-button checked="{{conversion}}" on-click="_asphaltRoof"></paper-toggle-button><div class="i">Y</div></div>
        </div>
        <div>
          <h4><i>Bundles</i></h4>
          <div style="display: grid; grid-template-columns: 1fr 40px 1fr;"><div class="i">3</div><paper-toggle-button checked="{{bundles}}" on-click="_asphaltRoof"></paper-toggle-button><div class="i">4</div></div>
        </div>
        <div class="ii">
          <h4><i>Ventilation</i></h4>
          <div style="display: grid; grid-template-columns: 1fr 40px 1fr;"><div class="i">box</div><paper-toggle-button checked="{{ventilation}}" on-click="_ventilation"></paper-toggle-button><div class="i">ridge</div></div>
        </div>
      </div>

      <paper-card class="grid" style="display:grid; grid-gap: 3px; grid-template-columns: 1fr;">
      <div class="second">
        <result-item id="ply" product="Plywood:"          homework="{{plywoodResult}}"      unit="sheets" ></result-item>
        <result-item id="pny" product="Sheathing Nails:"  homework="{{plyNailResult}}"      unit="boxes" ></result-item>
        <result-item id="s3" product="Shingles 3\'s:"     homework="{{shingles3Result}}"    unit="bundles" ></result-item>
        <result-item id="s4" product="Shingles 4\'s:"     homework="{{shingles4Result}}"    unit="bundles" ></result-item>
        <result-item product="Roofing Nails:"             homework="{{roofNailResult}}"     unit="boxes" ></result-item>
        <result-item name="" product="Starters:"          homework="{{startersResult}}"     unit="bundles" ></result-item>
        <result-item id="f15" product="15 Pound Felt:"    homework="{{felt15Result}}"       unit="rolls" ></result-item>
        <result-item id="f30" product="30 Pound Felt:"    homework="{{felt30Result}}"       unit="rolls" ></result-item>
        <result-item id="rx" product="Ridge Ventilation:" homework="{{ridgeVentResult}}"    unit="boxes" ></result-item>
        <result-item id="bx" product="Box Ventilation:"   homework="{{boxVentResult}}"      unit="ea" ></result-item>
        <result-item name="" product="Gas Vent type-B:"   homework="{{bVentResult}}"        unit="ea" ></result-item>
        <result-item name="" product="Plumbing Vent:"     homework="{{pStackResult}}"       unit="ea" ></result-item>
        <result-item name="" product="Gooseneck:"         homework="{{gooseneckResult}}"    unit="ea" ></result-item>
        <result-item name="" product="Front Pan:"         homework="{{headFlashing}}"       unit="ea" ></result-item>
        <result-item name="" product="Back Pan:"          homework="{{backFlashing}}"       unit="ea" ></result-item>
        <result-item name="" product="Step Flashing:"     homework="{{stepFlashing}}"       unit="bundles" ></result-item>
        <result-item name="" product="Gable Flashing:"    homework="{{gableFlashing}}"      unit="ea" ></result-item>
        <result-item name="" product="Valley Flashing:"   homework="{{valleyResult}}"       unit="ea" ></result-item>
        <result-item name="" product="Caulking:"          homework="{{sealantResult}}"      unit="tubes" ></result-item>
      </div>
      </paper-card>
    </paper-card>

    <paper-card class="information estimate">
        <h3>Calculate Building Area</h3>
        <div class="calculator" style="display: grid; grid-template-columns: 120px 1fr 1em;">

          <div class="x">Starter Rows:</div>
          <paper-slider id="ss" value="{{starters}}" max="100" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- CAPPING -->
          <div class="x">Capping:</div>
          <paper-slider id="ridge" value="{{cap}}" max="800" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- RIDGE VENTILATION -->
          <div id="aaa" class="x">Ridge Vent:</div>
          <paper-slider class="rxv" value="{{ridge}}" max="100" on-change="_ventilation" editable></paper-slider>
          <i id="aab" class="y">ft</i>

          <!-- BOX VENTS -->
          <div id="aac" class="x">Box Ventilation:</div>
          <paper-slider class="bxv" value="{{box}}" max="25" on-change="_areaChange" editable></paper-slider>
          <i id="aad" class="y">ea</i>

          <!-- B VENT -->
          <div class="x">B-Vent:</div>
          <paper-slider id="bv" value="{{bVent}}" max="25" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- STACK-->
          <div class="x">Plumbing Stack:</div>
          <paper-slider id="ps" value="{{pStack}}" max="25" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- GOOSENECK -->
          <div class="x">Gooseneck:</div>
          <paper-slider id="gn" value="{{gooseneck}}" max="25" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- SEALANT -->
          <div class="x">Sealant:</div>
          <paper-slider id="sl" value="{{asphaltSealant}}" max="25" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- SKYLIGHT -->
          <div class="x">Skylights:</div>
          <paper-slider id="skylight" value="{{skylights}}" max="10" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- CHIMNEY -->
          <div class="x">Chimney:</div>
          <paper-slider id="chimney" value="{{chimney}}" max="10" on-change="_areaChange" editable></paper-slider>
          <i class="y">ea</i>

          <!-- VALLEY -->
          <div class="x">Valley:</div>
          <paper-slider id="valley" value="{{valley}}" max="100" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- GABLE -->
          <div class="x">Gable Flashing:</div>
          <paper-slider id="gableFlash" value="{{gable}}" max="150" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- HEAD FLASHING -->
          <div class="x">Head Flashing:</div>
          <paper-slider id="headFlash" value="{{head}}" max="100" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- BACK FLASHING -->
          <div class="x">Back Flashing:</div>
          <paper-slider id="backFlash" value="{{back}}" max="100" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

          <!-- STEP FLASHING -->
          <div class="x">Step Flashing:</div>
          <paper-slider id="stepFlash" value="{{step}}" max="100" on-change="_areaChange" editable></paper-slider>
          <i class="y">ft</i>

        </div>
    </paper-card>

  `
  }

}

customElements.define('purchase-order', PurchaseOrder);