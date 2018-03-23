
import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/polymer/lib/utils/gestures.js';

export class ResidentialRoofing extends PolymerElement {

  static get is() { return 'residential-roofing'; }

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

      layers: {
        type: Number,
        value: 2,
        noftify: true
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
        observer: '_flashing'
      },

      fascia: {
        type: Number,
        value: 40,
        noftify: true
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
        observer: '_roofType'
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
        noftify: true
      },

      startersResult: {
        type: Number,
        noftify: true
      },

      /* FLASHING */

      skylightsResult: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      headFlashing: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      backFlashing: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      gableFlashing: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      stepFlashing: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      valleyResult: {
        type: Number,
        noftify: true,
        observer: '_flashing'
      },

      /* MISC */

      bVentResult: {
        type: Number,
        noftify: true,
        observer: '_stacks'
      },

      pStackResult: {
        type: Number,
        noftify: true,
        observer: '_stacks'
      },

      gooseneckResult: {
        type: Number,
        noftify: true,
        observer: '_stacks'
      },

      ridgeVentResult: {
        type: Number,
        noftify: true
      },

      boxVentResult: {
        type: Number,
        noftify: true
      },

      asphaltSealant: {
        type: Number,
        noftify: true
      }

    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();Y
  }

  ready() {
    super.ready();
    console.log('Residential Estimate Ready!');
  }

  _areaChange(event) {
    this._flashing(event);
    this._roofType(event);
    this._asphaltRoof(event);
    this._stacks(event);
  }

  _roofType(conversion, plywoodResult, squarefeet) {
    if  ( this.conversion == false ) {
          this.plywoodResult = 0;
    };
    if  ( this.conversion == true  ) {
          this.plywoodResult = this.squarefeet / 32 * 100;
    };
  }

  _bundleType(bundles) {

  }

  _ventType(ventilation, bVentResult, ) {
    if    (this.ventilation == false){
      var x = window.document.querySelector('#f15');
      x.parentElement.removeChild(x);
    };
    if    (this.ventilation == true);
  }

  _asphaltRoof(squarefeet, square, shingles3, shingles4, shingles3Result, shingles4Result, felt15, felt30, felt15Result, felt30Result, roofNailResult) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    this.square           = this.squarefeet;
    this.shingles3Result  = this.square * 3;
    this.shingles4Result  = this.square * 4;
    this.felt15Result     = this.square / 400 * 100;
    this.felt30Result     = this.square / 200 * 100;
    this.roofNailResult   = this.square * 2.5;
  }

  _endo(starters, ridge, box) {

  }

  _flashing(valley, gable, head, back, step, chimney, skylights, valleyResult, gableFlashing, headFlashing, backFlashing, stepFlashing) {

  }

  _stacks(bVent, pStack, gooseneck, bVentResult, pStackResult, gooseneckResult) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    this.bVentResult      = this.bVent ;
    this.pStackResult     = this.pStack ;
    this.gooseneckResult  = this.gooseneck ;
  }

  _details(layers, garbage, fascia) {

  }

  static get template() {
    return `

    <style>
      a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
      h1 { font-size: 22px; }
      p { text-align: justify; margin: 5px; }
      .grid { border: 1px grey solid; border-radius: 15px; }
      .second { margin: auto; }
      table { width: 100%; padding: 0px; }
      paper-item { cursor: pointer; }
      paper-card { background-color: white; padding: 20px; margin: 0px 0px 5px 0px;  width: 100%; }
      paper-button { margin: 0.5em 1em 0.5em 0; background: #e8e8e8; color: black; text-shadow:none ; }
      paper-button:focus { background: #1abc9c; }
      paper-slider { --paper-slider-knob-color: #1abc9c; --paper-slider-active-color: #1abc9c; --paper-slider-secondary-color: #1abc9c; --paper-input-container-color: black; --paper-input-container-focus-color: #1abc9c; }
      paper-toggle-button { --paper-toggle-button-unchecked-bar-color: black; --paper-toggle-button-checked-button-color: #1abc9c; --paper-toggle-button-checked-bar-color: #1abc9c; }
    </style>

    <paper-card style="width="300px">

      <div>
        <h3>Purchase Order</h3>
        <paper-button raised onclick="print()">Print</paper-button>
      </div>

      <!-- TITLE -->
      <h3>Purchase Order</h3>
      <!-- PURCHASE FORM -->
      <form>
        <table>

          <tr>
            <td colspan="2"><paper-input type="text" label="Business Name"></paper-input></td>
          </tr>

          <tr>

            <!-- PROJECT NAME -->
            <td><paper-input type="text" label="Project"></paper-input></td>

            <!-- PROJECT START DTAE -->
            <td><paper-input type="date" label="Departure Date"></paper-input></td>

          </tr>
          <tr>

            <!-- PROJECT ESTIMATOR -->
            <td><paper-input type="text" label="Estimator"></paper-input></td>

            <!-- SUPERVISOR'S PHONE NUMBER -->
            <td><paper-input type="number" label="Phone Number"></paper-input></td>

          </tr>

          <tr>
            <!-- SHIPPING ADDRESS -->
            <td colspan="2"><paper-input type="text" label="Shipping Address"></paper-input></td>
          </tr>

          <tr>
            <!-- EMAIL -->
            <td colspan="2"><paper-input type="text" label="E-mail:"></paper-input></td>
          </tr>

        </table>
      </form>
      
      <div class="grid" style="display:grid; grid-gap: 3px; grid-template-columns: 1fr;">
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
        <result-item name="" product="Skylights:"         homework="{{skylightsResult}}"    unit="Units" ></result-item>
        <result-item name="" product="Ridge Ventilation:" homework="{{ridgeVentResult}}"    unit="Boxes" ></result-item>
        <result-item name="" product="Box Ventilation:"   homework="{{boxVentResult}}"      unit="Units" ></result-item>
        <result-item name="" product="Front Pan:"         homework="{{headFlashing}}"       unit="Units" ></result-item>
        <result-item name="" product="Back Pan:"          homework="{{backFlashing}}"       unit="Units" ></result-item>
        <result-item name="" product="Gable Flashing:"    homework="{{gableFlashing}}"      unit="Units" ></result-item>
        <result-item name="" product="Step Flashing:"     homework="{{stepFlashing}}"       unit="Bundles" ></result-item>
        <result-item name="" product="Sealant:"           homework="{{asphaltSealant}}"     unit="Tubes" ></result-item>
      </div>
      </div>

    </paper-card>

    <paper-card>
      <div class="information">
        <h3>Calculate Building Area</h3>
        <div style="display: grid; grid-gap: 20px; grid-template-columns: 1fr 1fr;">



        <!-- CONVERSION -->
        <div>Cedar to Asphalt Conversion</div>
        <paper-toggle-button checked="{{conversion}}" on-click="_roofType"></paper-toggle-button>

        <!-- 4 BUNDLE -->
        <div>4 Bundles per Square (100 ft<sup>2</sup>)</div>
        <paper-toggle-button checked="{{bundles}}" on-click="_bundleType"></paper-toggle-button>

        <!-- BOX / RIDGE -->
        <div>Box Ventilation or Ridge Ventilation</div>
        <paper-toggle-button checked="{{ventilation}}" on-click="_ventType"></paper-toggle-button>



        <!-- TOTAL AREA -->
        <div>Area Squared:</div>
        <paper-slider id="roofArea" value="{{squarefeet}}" max="40" on-change="_areaChange" editable></paper-slider>



        <!-- STARTERS -->
        <div>Starter Rows:</div>
        <paper-slider id="ss" value="{{starters}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- CAPPING -->
        <div>Capping:</div>
        <paper-slider id="ridge" value="{{ridge}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- BOX VENTS -->
        <div>Box Ventilation:</div>
        <paper-slider id="bxv" value="{{box}}" max="100" on-change="_areaChange" editable></paper-slider>



        <!-- VALLEY -->
        <div>Valley:</div>
        <paper-slider id="valley" value="{{valley}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- DECK -->
        <div>Deck Flashing:</div>
        <paper-slider id="gableFlash" value="{{gable}}" max="150" on-change="_areaChange" editable></paper-slider>

        <!-- HEAD FLASHING -->
        <div>Head Flashing:</div>
        <paper-slider id="headFlash" value="{{head}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- BACK FLASHING -->
        <div>Back Flashing:</div>
        <paper-slider id="backFlash" value="{{back}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- STEP FLASHING -->
        <div>Step Flashing:</div>
        <paper-slider id="stepFlash" value="{{step}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- CHIMNEY -->
        <div>Chimney:</div>
        <paper-slider id="chimney" value="{{chimney}}" max="10" on-change="_areaChange" editable></paper-slider>

        <!-- SKYLIGHT -->
        <div>Skylights:</div>
        <paper-slider id="skylight" value="{{skylights}}" max="20" on-change="_areaChange" editable></paper-slider>



        <!-- B VENT -->
        <div>B-Vent:</div>
        <paper-slider id="bv" value="{{bVent}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!--  STACK-->
        <div>Plumbing Stack:</div>
        <paper-slider id="ps" value="{{pStack}}" max="100" on-change="_areaChange" editable></paper-slider>

        <!-- GOOSENECK -->
        <div>Gooseneck:</div>
        <paper-slider id="gn" value="{{gooseneck}}" max="100" on-change="_areaChange" editable></paper-slider>



        <!-- LAYERS -->
        <div>Remove Existing Layers of Shingles</div>
        <paper-slider value="{{layers}}" max="5" on-change="_areaChange" editable></paper-slider>

        <!-- GARBAGE -->
        <div>Add Waste</div>
        <paper-slider value="{{garbage}}" max="20" on-change="_areaChange" editable></paper-slider>

        <!-- FASCIA -->
        <div>Fascia:</div>
        <paper-slider id="fascia" value="{{fascia}}" max="100" on-change="_areaChange" editable></paper-slider>

        </div>
      </div>
    </paper-card>

  `
  }

}

customElements.define('residential-roofing', ResidentialRoofing);

/**
      area: {
        type: Object,
        value: function() {
          return {'squareFeet':{}};
        }
      },

        <!-- CALCULATED SQUARE FEET -->
        <result-item
          name="arArea"
          product="Total Area:"
          identity="squareFeet"
          unit="Square Feet">
            [[area]]
        </result-item>

                <dom-repeat items="{{stuff}}">
          <template>
            <!-- SHINGLES: TYPE 3 -->
            <result-item
              name="arSinThree"
              product="Shingles 3 Pack:"
              identity="shingles3"
              unit="Bundles">
            </result-item>
          </template>
        </dom-repeat>



export class ResidentialRoofing extends PolymerElement {
  static get is() { return 'residential-roofing'; }
  static get properties() {
      return {
          products: {
              type: Array,
              value: [{text:'Total Area:', id:'squarefeet', name:'arArea', unit:'Square Feet'}],
              observer:'roofMath',
          }
      };
  }
  
  static get observers() {
      return [
          'roofMath(products.*)'
      ];
  }
  roofMath(homework) {
      area = {{tArea}}
      or
      old code:
          area = parseInt(document.getElementById("roofArea").value);
          document.getElementById("squarefeet").innerHTML = area;
  }
  
  static get template() {
      return `
<paper-card>
  <div class="grid"style="display:grid; grid-gap: 20px; grid-template-columns: 1fr 1fr;">
      <dom-repeat items="[[products]]" as="product">
          <template>
              <div id="[[product.name]]" style="display: flex;">
                  <div>[[product.text]]</div>
                  <div><strong id=[[product.id]]"></strong></div>
                  <div>[[product.unit]]</div>
                  <iron-icon hidden icon="icons:highlight-off" onclick="remove(this.parentNode)"></iron-icon>
              </div>
          </template>
      </dom-repeat>
  </div>
</paper-card>
<paper-card>
  <!-- TOTAL AREA -->
  <div>Total Area:</div>
  <paper-slider id="roofArea" value="{{tArea}}" max="400" editable></paper-slider>
</paper-card>

number value from paper-slider to show in product.id

How to Observers: get <Paper-Slider value="">, then "observe changes to multiple properties" 

  _areaChange(event) {
    //this._reRoof(event);
    //this._conversion(event);
    this._squareFeet(event);
  }

    //console.log('path: ' + products.path);
    //console.log('value: ' + products.value);

  //_squareFeet(squarefeet, square) {
  //  this.square = this.squarefeet;
  //}

    //static get observers() {
  //  return [
  //    '_squareFeet(squarefeet, square)',
  //    'shingleType(area)',
  //    'outputMath()'
  //    'roofMath(products.*)'
  //  ];
  //}

      //this.textContent = 'Hi! My name is ' + area;

          //document.getElementById("roofArea").addEventListener('onchange', this._areaChange);
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    //const childElement = getElementById("roofArea");
    //childElement.addEventListener('change' this.onChange.)

**/