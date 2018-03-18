
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class ResidentialRoofing extends PolymerElement {

  static get is() { return 'residential-roofing'; }

  static get properties() {
    return {

      starters: {
        type: Number,
        observer: 'myNameChanged'
      },
      area: {
        type: Object,
        value: function() {
          return {'squareFeet':{}};
        }
      },
      valley: Number,
      sky: Number,
      head: Number,
      back: Number,
      step: Number,
      gable: Number,
      bvent: Number,
      pulmbstack: Number,
      gooseneck: Number,
      boxvent: Number,
      ridgevent: Number,
      fascia: Number,
      chimney: Number,
/**
      chimneyFlash: chimney * 12,
      chimneyBackFlash: chimney * 0.5,
**/
      

    };
  }

  static get observers() {
    return [
      'reRoof(area, shingles, underlay, coilNail)',
      'conversion(area, shingles, underlay, coilNail, plywood)',
      'ventilation(ridgevent, boxvent)',
      'flashing(head, back, step, gable)',
      'chimneyFlash(head. back, step)',
      'shingles(3s, 4s)',
      'accessories(pulmbstack, gooseneck)',
      'starterShingles(starters)'
    ];
  }

  reRoof(area, shingles, underlay, coilNail) {
    //document.getElementById("squarefeet").innerHTML = area;
    this.textContent = 'Hi! My name is ' + area;
  }

  conversion(area) {
    var   plywood = 32,
          plywoodNails = 2.5;
    document.getElementById("plywood").innerHTML = (area / plywood * 100).toFixed(0);
  }

  shingles(area) {
    var   shingles3 = 3,
          shingles4 = 4,
          shingleNails = 2.5;
    document.getElementById("coilNail").innerHTML = (area * coilNail).toFixed(0);
    document.getElementById("shingles3").innerHTML = (area * 3).toFixed(0);
    document.getElementById("shingles4").innerHTML = (area * 4).toFixed(0);
    document.getElementById("startersResults").innerHTML = parseInt(document.getElementById("skylight").value);
  }

  underlay() {
    var   felt15 = 400,
          felt30 = 200,
          feltLinear = 25,
          feltEaves = 25;
    return
    document.getElementById("felt15").innerHTML = (area / felt15 * 100).toFixed(0);
    document.getElementById("felt30").innerHTML = (area / felt30 * 100).toFixed(0);
  }

  valley() {
    document.getElementById("feltEaves").innerHTML = feaves / feltEaves;
    document.getElementById("feltValley").innerHTML = fvalley / feltLinear;
    document.getElementById("feltValley").innerHTML = (valley / feltLinear).toFixed(0);
    document.getElementById("valleyResult12").innerHTML = (valley / flash).toFixed(0);
  }

  flashing() {
    var   flash = 12;
    document.getElementById("headResult12").innerHTML = ((sky * 5 + head) / flash).toFixed(0);
    document.getElementById("backResult12").innerHTML = ((sky * 5 + back + chimneyBackFlash) / flash).toFixed(0);
    document.getElementById("gableResult12").innerHTML = (gable / flash).toFixed(0);
    document.getElementById("stepResult").innerHTML = (sky * 10 + step + chimneyFlash).toFixed(0);
  }

  ventilation() {
    var   ridgeVents = 4;
    document.getElementById("bVentResults").innerHTML = bvent;
    document.getElementById("boxVentResults").innerHTML = boxvent;
    document.getElementById("ridgeVentResults").innerHTML = (ridge * ps).toFixed(0);
    document.getElementById("ridgeVentResults").innerHTML = (ridgevent / ridgeVents).toFixed(0);
  }

  skylights() {
    var   flash = 12;
    document.getElementById("skylights").innerHTML = parseInt(document.getElementById("skylight").value);
  }

  accessories() {
    document.getElementById("gooseneckResults").innerHTML = (gooseneck).toFixed(0);
    document.getElementById("plumbingStackResults").innerHTML = pulmbstack;
  }



  constructor() {
    super();
    //console.log('Asphalt Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Asphalt Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Residential Estimate Ready!');
  }

  static get template() {
    return `

    <style>

      a, a:link, a:hover, a:visited, a:active {
        text-decoration: none;
        color: black;
      }

      h1 {
        font-size: 22px;
      }

      p {
        text-align: justify;
        margin: 5px;
      }

      table {
        width: 100%;
        padding: 0px;
      }

      ul {
        list-style: none;
        text-align: left;
      }

      paper-item {
        cursor: pointer;
      }

      paper-card {
        background-color: white;
        padding: 20px;
        margin: 0px 0px 10px 0px;
        width: 100%;
      }

      paper-button {
        margin: 0.5em 1em 0.5em 0;
        background: #e8e8e8;
        color: black;
        text-shadow:none ;
      }

      paper-button:focus {
        background: #1abc9c;
      }

      paper-input {
        --paper-input-container-color: black;
        --paper-input-container-focus-color: #1abc9c;
        --paper-input-container-underline: {
          color: black;
        };
      }

      paper-slider {
        --paper-slider-knob-color: #1abc9c;
        --paper-slider-active-color: #1abc9c;
        --paper-slider-secondary-color: #1abc9c;
        --paper-input-container-color: black;
        --paper-input-container-focus-color: #1abc9c;
      }

      paper-toggle-button {
        --paper-toggle-button-unchecked-bar-color: black;
        --paper-toggle-button-checked-button-color: #1abc9c;
        --paper-toggle-button-checked-bar-color: #1abc9c;
      }

      .tableLeft {
        width: auto;
        text-align: right;
        align-items: right;
      }
      .homeworkOne {
        width: 3em;
        text-align: center;
      }
      .homeworkToggle {
        width: 1em;
        text-align: center;
      }
      .tableDetail {
        width: auto;
        text-align: left;
      }

    </style>

    <paper-card>

      <!-- PURCHASE ORDER FORM -->
      <purchase-order></purchase-order>

      <!-- CALCULATOR RESULTS -->
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit</th>

         <div
            class="grid"
            style="
              display:grid;
              grid-gap: 20px;
              grid-template-columns: 1fr 1fr;">

            <!-- PRINT -->
            <paper-button raised onclick="print()">Print</paper-button>

            <!-- CALCULATE -->
            <paper-button raised icon="refresh" onclick="roofCalc()">Calculate</paper-button>

            <div
              id="{{name}}"
              style="display: flex;">
              <div>{{product}}</div>
              <div><strong id="{{identity}}"></strong></div>
              <div>{{unit}}</div>
              <iron-icon hidden icon="icons:highlight-off" onclick="remove(this.parentNode)"></iron-icon>
            </div>

            <!-- SQUARE FEET -->
            <result-item
               name="arArea"
               product="Total Area:"
               identity="squarefeet"
               unit="Square Feet">
            </result-item>

            <!-- PLYWOOD -->
            <result-item
               name="arPly"
               product="Plywood:"
               identity="plywood"
               unit="Sheets">
            </result-item>

            <!-- 15 FELT -->
            <result-item
               name="arFeltOne"
               product="15 Pound Felt:"
               identity="felt15"
               unit="Rolls">
            </result-item>

            <!-- 30 FELT -->
            <result-item
               name="arFeltTwo"
               product="30 Pound Felt:"
               identity="felt30"
               unit="Rolls">
            </result-item>

            <!-- 3 SHINGLES -->
            <result-item
               name="arSinThree"
               product="Shingles 3 Pack:"
               identity="shingles3"
               unit="Bundles">
            </result-item>

            <!-- 4 SHINGLES -->
            <result-item
               name="arSinFour"
               product="Shingles 4 Pack:"
               identity="shingles4"
               unit="Bundles">
            </result-item>

            <!-- COILSS -->
            <result-item
               name="arNail"
               product="Coils of Nails:"
               identity="coilNail"
               unit="Rolls">
            </result-item>

            <!-- SKYLIGHTS -->
            <result-item
               name="arSky"
               product="Skylights:"
               identity="skylights"
               unit="Skylights">
            </result-item>

            <!-- FLASHING -->
            <result-item
               name="arFlash"
               product="Valley Flashing:"
               identity="valleyResult12"
               unit="Pieces">
            </result-item>

            <!--  -->
            <result-item
               name="arValley"
               product="Felt for Valley:"
               identity="feltValley"
               unit="Rolls">
            </result-item>

            <!--  -->
            <result-item
               name="arBV"
               product="B-vents:"
               identity="bVentResults"
               unit="Vents">
            </result-item>

            <!--  -->
            <result-item
               name="arPlumb"
               product="Plumbing Stacks:"
               identity="plumbingStackResults"
               unit="Stacks">
            </result-item>

            <!--  -->
            <result-item
               name="arGoose"
               product="Gooseneck:"
               identity="gooseneckResults"
               unit="Vents">
            </result-item>

            <!-- STARTERS -->
            <result-item
               name="arStart"
               product="Starter Shingles:"
               identity="startersResults"
               unit="Starters">
            </result-item>

            <!--  -->
            <result-item
               name="arBox"
               product="Box Ventilation:"
               identity="boxVentResults"
               unit="Box Vents">
            </result-item>

            <!--  -->
            <result-item
               name="arRidgeVent"
               product="Ridge Ventilation:"
               identity="ridgeVentResults"
               unit="Pieces">
            </result-item>

            <!--  -->
            <result-item
               name="arHead"
               product="Headwall:"
               identity="headResult12"
               unit="Pieces">
            </result-item>

            <!--  -->
            <result-item
               name="arBack"
               product="Backpan:"
               identity="backResult12"
               unit="Pieces">
            </result-item>

            <!--  -->
            <result-item
               name="arDrip"
               product="Drip Edge:"
               identity="gableResult12"
               unit="Pieces">
            </result-item>

            <!--  -->
            <result-item
               name="arStep"
               product="Step:"
               identity="stepResult"
               unit="Bundles">
            </result-item>

            <!--  -->
            <result-item
               name="arSeal"
               product="Sealant:"
               identity="asphaltSealantHome"
               unit="Tubes">
            </result-item>

         </div>
      </paper-card>

      <paper-card>
        <div class="information">
          <h3>Calculate Building Area</h3>
<!-- 
            <paper-checkbox></paper-checkbox><paper-item>Hip Roof: Rectangle Building</paper-item>
            <paper-checkbox></paper-checkbox><paper-item>Hip Roof: Square Building A X L ÷ 2</paper-item>
            <paper-checkbox></paper-checkbox><paper-item>Gable Roof Area = 2 x A x L</paper-item>
            <paper-checkbox></paper-checkbox><paper-item>Lean-to Roof A x L</paper-item>
            <paper-checkbox></paper-checkbox><paper-item>Mansard Roof (A + L) x C ÷ 2</paper-item>

        (<paper-slider label="Side C"></paper-slider>
        +<paper-slider label="Side L"></paper-slider> )
        X<paper-slider label="Side A"></paper-slider> / 2
        <paper-button raised onclick="slope()">Slope</paper-button>
        <strong id="slopeArea" class="homework">one</strong>
        Roof Slope:<paper-slider pin id="roofSlope" editable max="18"></paper-slider>

            <div class="importantItem">Roof Area: (1 Square = 100 ft<sup>2</sup>)<paper-slider pin id="roofArea" value="18" max="100" editable></paper-slider></div>
-->
      <div style="display: grid; grid-gap: 20px; grid-template-columns: 1fr 1fr;">



            <!-- CONVERSION -->
            <div>Cedar to Asphalt Conversion</div>
            <paper-toggle-button checked onclick="arPly.remove(), arDrip.remove()"></paper-toggle-button>

            <!-- 4 BUNDLE -->
            <div>4 Bundles per Square (100 ft<sup>2</sup>)</div>
            <paper-toggle-button onclick="arSinThree.remove()"></paper-toggle-button>

            <!-- BOX / RIDGE -->
            <div>Box Ventilation or Ridge Ventilation</div>
            <paper-toggle-button onclick="arBox.remove()"></paper-toggle-button>



            <!-- STARTERS -->
            <div><i>Linear Feet</i> Starter Rows:</div>
            <paper-slider id="ss" value="{{starters::input}}" max="400" editable></paper-slider>

            <!-- CAPPING -->
            <div>Capping:</div>
            <paper-slider id="ridge" value="24" max="100" editable></paper-slider>

            <!-- VALLEY -->
            <div>Valley:</div>
            <paper-slider id="valley" value="24" max="100" editable></paper-slider>

            <!-- FASCIA -->
            <div>Fascia:</div>
            <paper-slider id="fascia" value="40" max="100" editable></paper-slider>

            <!-- DECK -->
            <div>Deck Flashing:</div>
            <paper-slider id="gableFlash" value="14" max="150" editable></paper-slider>

            <!-- HEAD FLASHING -->
            <div>Head Flashing:</div>
            <paper-slider id="headFlash" value="10" max="100" editable></paper-slider>

            <!-- BACK FLASHING -->
            <div>Back Flashing:</div>
            <paper-slider id="backFlash" value="10" max="100" editable></paper-slider>

            <!-- STEP FLASHING -->
            <div>Step Flashing:</div>
            <paper-slider id="stepFlash" value="10" max="100" editable></paper-slider>

            <!-- B VENT -->
            <div>B-Vent:</div>
            <paper-slider id="bv" value="1" max="100" editable></paper-slider>

            <!--  STACK-->
            <div>Plumbing Stack:</div>
            <paper-slider id="ps" value="4" max="100" editable></paper-slider>

            <!-- GOOSENECK -->
            <div>Gooseneck:</div>
            <paper-slider id="gn" value="3" max="100" editable></paper-slider>

            <!-- CHIMNEY -->
            <div>Chimney:</div>
            <paper-slider id="chimney" value="2" max="10" editable></paper-slider>

            <!-- SKYLIGHT -->
            <div>Skylights:</div>
            <paper-slider id="skylight" value="2" max="20" editable></paper-slider>

            <!-- RIDGE -->
            <div>Ridge Ventilation:</div>
            <paper-slider id="rv" value="24" max="100" editable></paper-slider>

            <!-- RIDGE UNITS -->
            <div><i>Number of Units</i> Box Ventilation:</div>
            <paper-slider id="bxv" value="2" max="100" editable></paper-slider>

            <!-- LAYERS -->
            <div>Remove Existing Layers of Shingles</div>
            <paper-slider value="2" max="5" editable></paper-slider>

            <!-- GARBAGE -->
            <div>Add Waste</div>
            <paper-slider value="10" max="20" editable></paper-slider>

          </div>

        </div>
      </paper-card>

  `
  }

}

customElements.define('residential-roofing', ResidentialRoofing);

/** ROOFING CALCULATOR
    
    roofCalc() {

    var area = parseInt(document.getElementById("roofArea").value),
      valley = parseInt(document.getElementById("valley").value),
      sky = parseInt(document.getElementById("skylight").value),
      head = parseInt(document.getElementById("headFlash").value),
      back = parseInt(document.getElementById("backFlash").value),
      step = parseInt(document.getElementById("stepFlash").value),
      gable = parseInt(document.getElementById("gableFlash").value),
      bvent = parseInt(document.getElementById("bv").value),
      pulmbstack = parseInt(document.getElementById("ps").value),
      gooseneck = parseInt(document.getElementById("gn").value),
      starters = parseInt(document.getElementById("ss").value),
      boxvent = parseInt(document.getElementById("bxv").value),
      ridgevent = parseInt(document.getElementById("rv").value),
      fascia = parseInt(document.getElementById("fascia").value),
      chimney = parseInt(document.getElementById("chimney").value),
  
      chimneyFlash = chimney * 12,
      chimneyBackFlash = chimney * 0.5,
      ridgeVents = 4,
      plywood = 32,
      felt15 = 400,
      felt30 = 200,
      feltLinear = 25,
      feltEaves = 25,
      shingles3 = 3,
      shingles4 = 4,
      coilNail = 2.5,
      flash = 12;
      
      document.getElementById("squarefeet").innerHTML = area,
      document.getElementById("plywood").innerHTML = (area / plywood * 100).toFixed(0),
      document.getElementById("felt15").innerHTML = (area / felt15 * 100).toFixed(0),
      document.getElementById("felt30").innerHTML = (area / felt30 * 100).toFixed(0),
      document.getElementById("shingles3").innerHTML = (area * 3).toFixed(0),
      document.getElementById("shingles4").innerHTML = (area * 4).toFixed(0),
      document.getElementById("feltEaves").innerHTML = feaves / feltEaves;
      document.getElementById("coilNail").innerHTML = (area * coilNail).toFixed(0),
      document.getElementById("feltValley").innerHTML = fvalley / feltLinear;
      document.getElementById("skylights").innerHTML = parseInt(document.getElementById("skylight").value),
      document.getElementById("headResult12").innerHTML = ((sky * 5 + head) / flash).toFixed(0),
      document.getElementById("backResult12").innerHTML = ((sky * 5 + back + chimneyBackFlash) / flash).toFixed(0),
      document.getElementById("gableResult12").innerHTML = (gable / flash).toFixed(0),
      document.getElementById("stepResult").innerHTML = (sky * 10 + step + chimneyFlash).toFixed(0),
      document.getElementById("bVentResults").innerHTML = bvent,
      document.getElementById("plumbingStackResults").innerHTML = pulmbstack,
      document.getElementById("startersResults").innerHTML = parseInt(document.getElementById("skylight").value),
      document.getElementById("boxVentResults").innerHTML = boxvent,
      document.getElementById("ridgeVentResults").innerHTML = (ridge * ps).toFixed(0),
      document.getElementById("gooseneckResults").innerHTML = (gooseneck).toFixed(0),
      document.getElementById("feltValley").innerHTML = (valley / feltLinear).toFixed(0),
      document.getElementById("valleyResult12").innerHTML = (valley / flash).toFixed(0),
      document.getElementById("ridgeVentResults").innerHTML = (ridgevent / ridgeVents).toFixed(0);
    }

    <paper-card class="information">

      <h3>Asphalt Roofing</h3><p>The majority of roofs have asphalt shingles due to the low cost, and ease of installation.</p>
      <p>Unfortunately, asphalt shingles have a low insulative value and a shorter lifespan than other roofing materials. Asphalt shingles are made from petroleum products and are not usually recyclable because of the layer of fiberglass added to the shingles.</p>
    
    </paper-card>


         starters: {
        type: Number,
        value() {
          return {ss: ""};
        }
      },

      area:  {
        type: Number,
        value() {
          return {roofArea: ""};
        }
      },

      valley:  {
        type: Number,
        value() {
          return {valley: ""};
        }
      },

      sky:  {
        type: Number,
        value() {
          return {skylight: ""};
        }
      },

      head: {
        type: Number,
        value() {
          return {headFlash: ""};
        }
      },

      back:  {
        type: Number,
        value() {
          return {backFlash: ""};
        }
      },

      step:  {
        type: Number,
        value() {
          return {stepFlash: ""};
        }
      },

      gable:  {
        type: Number,
        value() {
          return {gableFlash: ""};
        }
      },

      bvent:  {
        type: Number,
        value() {
          return {bv: ""};
        }
      },

      pulmbstack:  {
        type: Number,
        value() {
          return {ps: ""};
        }
      },

      gooseneck:  {
        type: Number,
        value() {
          return {gn: ""};
        }
      },

      boxvent:  {
        type: Number,
        value() {
          return {bxv: ""};
        }
      },

      ridgevent:  {
        type: Number,
        value() {
          return {rv: ""};
        }
      },

      fascia:  {
        type: Number,
        value() {
          return {fascia: ""};
        }
      },

      chimney:  {
        type: Number,
        value() {
          return {chimney: ""};
        }
      }


    **/