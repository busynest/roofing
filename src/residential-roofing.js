
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class ResidentialRoofing extends PolymerElement {

  static get is() { return 'residential-roofing'; }

  static get properties() {
    return {
      area: {
        type: Number,
        observer: 'squareFeet'
      },
      areaResult: Number,
      valley: Number,
    };
  }

  static get observers() {
    return [
      'squareFeet(area)',
    ];
  }

  squareFeet(area) {
    document.getElementById("feltValley");
    this.textContent = 'Felt for Valley: ' + area + 'Rolls';
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
      a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
      h1 { font-size: 22px; }
      p { text-align: justify; margin: 5px; }
      table { width: 100%; padding: 0px;}
      paper-item { cursor: pointer; }
      paper-card { background-color: white; padding: 20px; margin: 0px 0px 10px 0px; width: 100%; }
      paper-button { margin: 0.5em 1em 0.5em 0; background: #e8e8e8; color: black; text-shadow:none ; }
      paper-button:focus { background: #1abc9c; }
      paper-slider { --paper-slider-knob-color: #1abc9c; --paper-slider-active-color: #1abc9c; --paper-slider-secondary-color: #1abc9c; --paper-input-container-color: black; --paper-input-container-focus-color: #1abc9c; }
      paper-toggle-button { --paper-toggle-button-unchecked-bar-color: black; --paper-toggle-button-checked-button-color: #1abc9c; --paper-toggle-button-checked-bar-color: #1abc9c; }
    </style>

    <paper-card>
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

            <!--  -->
            <result-item
               name="arValley"
               product="Felt for Valley:"
               identity="feltValley"
               unit="Rolls">
               {{areaResult}}
            </result-item>

         </div>
      </paper-card>

      <paper-card>
        <div class="information">
          <h3>Calculate Building Area</h3>
          <div style="display: grid; grid-gap: 20px; grid-template-columns: 1fr 1fr;">
            <!-- RIDGE -->
            <div>Ridge Ventilation:</div>
            <paper-slider id="rv" value="{{area}}" max="100" editable></paper-slider>
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
**/