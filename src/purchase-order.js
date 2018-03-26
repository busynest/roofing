
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/utils/gestures.js';
import { updateMetadata } from './metadata.js';



export class PurchaseOrder extends PolymerElement {

  static get is() { return 'purchase-order'; }

  static get properties() {
    return {

      /* CONTROL CENTRE */

      conversion: {
        type: Boolean,
        value: true,
        noftify: true
      },

      bundles: {
        type: Boolean,
        value: true,
        noftify: true
      },

      ventilation: {
        type: Boolean,
        value: true,
        noftify: true
      },

      /* AREA INPUT */

      squarefeet: {
        type: Number,
        value: 10,
        noftify: true
      },

      /* AREA OUTPUT */

      square: {
        type: Number,
        value: 21,
        noftify: true,
        observer: '_asphaltRoof'
      },

      garbage: {
        type: Number,
        value: 10,
        noftify: true
      },
      
      /* INPUT */

      starters: {
        type: Number,
        value: 24,
        noftify: true
      },

      ridge: {
        type: Number,
        value: 24,
        noftify: true
      },

      valley: {
        type: Number,
        value: 24,
        noftify: true,
        observer: '_asphaltRoof'
      },

      gable: {
        type: Number,
        value: 14,
        noftify: true
      },

      head: {
        type: Number,
        value: 10,
        noftify: true
      },

      back: {
        type: Number,
        value: 10,
        noftify: true
      },

      step: {
        type: Number,
        value: 10,
        noftify: true
      },

      bVent: {
        type: Number,
        value: 1,
        noftify: true
      },

      pStack: {
        type: Number,
        value: 4,
        noftify: true
      },
      
      gooseneck: {
        type: Number,
        value: 3,
        noftify: true
      },

      chimney: {
        type: Number,
        value: 2,
        noftify: true
      },

      skylights: {
        type: Number,
        value: 2,
        noftify: true
      },

      box: {
        type: Number,
        value: 4,
        noftify: true
      },

      /* OUTPUT */

      plywoodResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      shingles3Result: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      shingles4Result: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      felt15Result: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      felt30Result: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      roofNailResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      startersResult: {
        type: Number,
        noftify: true,
        obeserver: '_asphaltRoof'
      },

      /* FLASHING */

      headFlashing: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      backFlashing: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      gableFlashing: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      stepFlashing: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      valleyResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      /* MISC */

      bVentResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      pStackResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      gooseneckResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      ridgeVentResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      boxVentResult: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      asphaltSealant: {
        type: Number,
        noftify: true,
        observer: '_asphaltRoof'
      },

      asphaltSealantResult: {
        type: Number,
        notify: true,
        observer: '_asphaltRoof'
      },

      startersResult: {
        type: Number,
        notify: true,
        observer: '_asphaltRoof'
      },

      cappingResults: {
        type: Number,
        notify: true,
        obeserver: "_asphaltRoof"
      },

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
    this._asphaltRoof(event);
  }

  _ventilation(ventilation, bVentResult, ) {
    if    (this.ventilation == false){
      var x = window.document.querySelector('#f15');
      x.parentElement.removeChild(x);
    };
    if    (this.ventilation == true);
  }

  _asphaltRoof(
    conversion, plywoodResult,
    squarefeet, square,
    shingles3, shingles4, shingles3Result, shingles4Result,
    felt15, felt30, felt15Result, felt30Result,
    roofNailResult,
    bVent, bVentResult,
    pStack, pStackResult,
    gooseneck, gooseneckResult,
    starters, startersResult,
    ridge, cappingResult,
    box, boxVentResult,
    asphaltSealant, asphaltSealantResult,
    valley, valleyResult,
    gable, gableFlashing,
    head, headFlashing,
    back, backFlashing,
    step, stepFlashing,
    chimney, skylights
       )
    {
      window.onerror = function(message, file, line, col, error){ console.log(arguments); }
      this.square           = this.squarefeet;
      this.shingles3Result  = this.square * 3;
      this.shingles4Result  = this.square * 4;
      this.felt15Result     = this.square / 400 * 100;
      this.felt30Result     = this.square / 200 * 100;
      this.roofNailResult   = this.square * 2.5;
      this.bVentResult      = this.bVent;
      this.pStackResult     = this.pStack;
      this.gooseneckResult  = this.gooseneck;
      this.startersResult   = this.starters;
      this.cappingResult    = this.ridge;
      this.bocBentResult    = this.box;
      var headNum           = .5,
          backNum           = .5,
          stepChimney       = .3,
          stepSky           = .5;
      this.valleyResult     = this.valley;
      this.gableFlashing    = this.gable;
      this.headFlashing     = this.head       + ( this.chimney  * headNum )      + ( this.skylights * headNum ) ;
      this.backFlashing     = this.back       + ( this.chimney  * backNum )      + ( this.skylights * backNum ) ;
      this.stepFlashing     = this.step       + ( this.chimney  * stepChimney )  + ( this.skylights * stepSky ) ;
      this.asphaltSealant   = this.asphaltSealantResult;
      if  ( this.conversion == false ) {
        this.plywoodResult = 0;
      };
      if  ( this.conversion == true  ) {
        this.plywoodResult = this.squarefeet / 32 * 100;
      };
    }

  static get template() {
    return html`

    <style>
      :host {
        --paper-slider-knob-color: #1abc9c;
        --paper-slider-active-color: #1abc9c;
        --paper-slider-secondary-color: #1abc9c;
        --paper-input-container-color: black;
        --paper-input-container-focus-color: #1abc9c;
        --paper-toggle-button-unchecked-bar-color: black;
        --paper-toggle-button-checked-button-color: #1abc9c;
        --paper-toggle-button-checked-bar-color: #1abc9c;
      }
      @media print { .information { display: none; } }
      a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
      h1 { font-size: 22px; }
      .grid { border: 1px grey solid; border-radius: 5px; padding: 5px;}
      .second { margin: auto; }
      .info {margin: auto ;}
      .details { text-align: right; }
      .detailBox { margin-bottom: 18px; }
      .x { text-align: right ; }
      .calculator { max-width: 600px; margin: auto; }
      .service { border: 50px; [elevation 5] }
      table { width: 100%; padding: 0px; }
      paper-item { cursor: pointer; }
      paper-card { background-color: white; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
      paper-button { margin: 0.5em 1em 0.5em 0; background: #1abc9c; color: black; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
      paper-button:focus { background: #e8e8e8; }
      paper-slider { width: 100% }
      paper-toggle-button { margin: auto; }
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
            <td colspan="2"><paper-input type="text" label="Business Name"></paper-input></td>
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
          <tr>
            <td colspan="2"><paper-input type="text" label="E-mail:"></paper-input></td>
          </tr>

        </table>
      </form>
      
      <paper-card class="grid" style="display:grid; grid-gap: 3px; grid-template-columns: 1fr;">
      <div class="second">

        <result-item name="" product="Area:"              homework="{{square}}"             unit="Square" ></result-item>
        <result-item name="" product="Plywood:"           homework="{{plywoodResult}}"      unit="Sheets" ></result-item>
        <result-item id="f15" name="f15" product="15 Pound Felt:"  homework="{{felt15Result}}"       unit="Rolls" ></result-item>
        <result-item name="f30" product="30 Pound Felt:"  homework="{{felt30Result}}"       unit="Rolls" ></result-item>
        <result-item name="" product="Shingles 3\'s:"     homework="{{shingles3Result}}"    unit="Bundles" ></result-item>
        <result-item name="" product="Shingles 4\'s:"     homework="{{shingles4Result}}"    unit="Bundles" ></result-item>
        <result-item name="" product="Roofing Nails:"     homework="{{roofNailResult}}"     unit="Boxes" ></result-item>
        <result-item name="" product="Valley Flashing:"   homework="{{valleyResult}}"       unit="Units" ></result-item>
        <result-item name="" product="B-Vent:"            homework="{{bVentResult}}"        unit="Units" ></result-item>
        <result-item name="" product="Plumbing Stack:"    homework="{{pStackResult}}"       unit="Units" ></result-item>
        <result-item name="" product="Gooseneck:"         homework="{{gooseneckResult}}"    unit="Units" ></result-item>
        <result-item name="" product="Starter Shingles:"  homework="{{startersResult}}"     unit="Bundles" ></result-item>
        <result-item name="" product="Ridge Ventilation:" homework="{{ridgeVentResult}}"    unit="Boxes" ></result-item>
        <result-item name="" product="Box Ventilation:"   homework="{{boxVentResult}}"      unit="Units" ></result-item>
        <result-item name="" product="Front Pan:"         homework="{{headFlashing}}"       unit="Units" ></result-item>
        <result-item name="" product="Back Pan:"          homework="{{backFlashing}}"       unit="Units" ></result-item>
        <result-item name="" product="Step Flashing:"     homework="{{stepFlashing}}"       unit="Bundles" ></result-item>
        <result-item name="" product="Gable Flashing:"    homework="{{gableFlashing}}"      unit="Units" ></result-item>
        <result-item name="" product="Caulking:"           homework="{{asphaltSealant}}"     unit="Tubes" ></result-item>
      </div>
      </paper-card>

    </paper-card>

    <paper-card class="information">
      <div>

        <h3>Calculate Building Area</h3>
        <div class="detailBox" style="display: grid; grid-template-columns: 1fr 60px;">

          <!-- CONVERSION -->
          <div class="details"><i>Conversion</i></div>
          <paper-toggle-button checked="{{conversion}}" on-click="_asphaltRoof"></paper-toggle-button>

          <!-- 4 BUNDLE -->
          <div class="details"><i>3 / 4 Bundles</i></div>
          <paper-toggle-button checked="{{bundles}}" on-click="_asphaltRoof"></paper-toggle-button>

          <!-- BOX / RIDGE -->
          <div class="details"><i>Box / Ridge Ventilation</i></div>
          <paper-toggle-button checked="{{ventilation}}" on-click="_asphaltRoof"></paper-toggle-button>

        </div>

        <div class="calculator" style="display: grid; grid-template-columns: 120px 1fr;">

          <!-- TOTAL AREA -->
          <div class="x">Area Squared:</div>
          <paper-slider id="roofArea" value="{{squarefeet}}" max="40" on-change="_areaChange" editable></paper-slider>

          <!-- STARTERS -->
          <div class="x">Starter Rows:</div>
          <paper-slider id="ss" value="{{starters}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- CAPPING -->
          <div class="x">Capping:</div>
          <paper-slider id="ridge" value="{{ridge}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- BOX VENTS -->
          <div class="x">Box Ventilation:</div>
          <paper-slider id="bxv" value="{{box}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- VALLEY -->
          <div class="x">Valley:</div>
          <paper-slider id="valley" value="{{valley}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- DECK -->
          <div class="x">Deck Flashing:</div>
          <paper-slider id="gableFlash" value="{{gable}}" max="150" on-change="_areaChange" editable></paper-slider>

          <!-- HEAD FLASHING -->
          <div class="x">Head Flashing:</div>
          <paper-slider id="headFlash" value="{{head}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- BACK FLASHING -->
          <div class="x">Back Flashing:</div>
          <paper-slider id="backFlash" value="{{back}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- STEP FLASHING -->
          <div class="x">Step Flashing:</div>
          <paper-slider id="stepFlash" value="{{step}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- CHIMNEY -->
          <div class="x">Chimney:</div>
          <paper-slider id="chimney" value="{{chimney}}" max="10" on-change="_areaChange" editable></paper-slider>

          <!-- SKYLIGHT -->
          <div class="x">Skylights:</div>
          <paper-slider id="skylight" value="{{skylights}}" max="20" on-change="_areaChange" editable></paper-slider>

          <!-- B VENT -->
          <div class="x">B-Vent:</div>
          <paper-slider id="bv" value="{{bVent}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!--  STACK-->
          <div class="x">Plumbing Stack:</div>
          <paper-slider id="ps" value="{{pStack}}" max="100" on-change="_areaChange" editable></paper-slider>

          <!-- GOOSENECK -->
          <div class="x">Gooseneck:</div>
          <paper-slider id="gn" value="{{gooseneck}}" max="100" on-change="_areaChange" editable></paper-slider>

        </div>
      </div>
    </paper-card>

  `
  }

}

customElements.define('purchase-order', PurchaseOrder);