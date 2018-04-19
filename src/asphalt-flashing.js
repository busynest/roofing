import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ResultItem } from './result-item.js';

export class AsphaltFlashing extends PolymerElement {

    static get is() { return 'asphalt-flashing'; }

    static get properties() {
      return {

      ventilationPrices: {
          type: Array,
          value: [ { x:'Ridge Ventilation', y:24 }, { x:'Box Ventilaion', y:24 }, { x:'Plumbing Stacks' , y:24 } ]
      },
 
      /* FLASHING */

      flashing:             { type: Boolean, notify: true, observer: '_flashing', value: false },
      
      gable:                { type: Number, notify: true, observer: '_flashing', value: 0 },
      gableFlashing:        { type: Number, notify: true, observer: '_flashing' },

      head:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      headFlashing:         { type: Number, notify: true, observer: '_flashing' },

      back:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      backFlashing:         { type: Number, notify: true, observer: '_flashing' },

      step:                 { type: Number, notify: true, observer: '_flashing', value: 0 },
      stepFlashing:         { type: Number, notify: true, observer: '_flashing' },

      valley:               { type: Number, notify: true, observer: '_flashing', value: 24 },
      valleyResult:         { type: Number, notify: true, observer: '_flashing' },

      chimney:              { type: Number, notify: true, observer: '_flashing', value: 1 },
      skylights:            { type: Number, notify: true, observer: '_flashing', value: 2 },

      cost:                 { type: Number, notify: true, observer: '_areaChange', value: 24 }

};

}

//static get observers() {
//    return [ 'thingCountChanged' ];
//}

constructor() {
  super();
  //console.log('Menu-Item Constructor!');
}

connectedCallback() {
  super.connectedCallback();
  //console.log('Menu-Item Connected!');
}

ready() {
  super.ready();
  //this.addEventListener('keypress', e => this.handlePress(e));
  //var sq = new OneSquare();
  console.log(this.tagName);
}

_areaChange(event) {
  this._flashing(event);
}

_flashing(
  flashing,
  valley, valleyResult,
  gable, gableFlashing,
  head, headFlashing,
  back, backFlashing,
  step, stepFlashing,
  chimney, skylights
) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    
    if ( this.flashing == false )  {
      this.$.tin1.setAttribute("style", "display:none;");
      this.$.tin2.setAttribute("style", "display:none;");
      this.$.tin3.setAttribute("style", "display:none;");
      this.$.tin4.setAttribute("style", "display:none;");
    }
    if ( this.flashing == true )  {
      this.$.tin1.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
      this.$.tin2.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
      this.$.tin3.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
      this.$.tin4.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
    };

    this.valleyResult     = this.valley;
    this.gableFlashing    = this.gable;
    this.headFlashing     = this.head       + ( this.chimney  * .5 )      + ( this.skylights * .5 );
    this.backFlashing     = this.back       + ( this.chimney  * .5 )      + ( this.skylights * .5 );
    this.stepFlashing     = this.step       + ( this.chimney  * .3 )      + ( this.skylights * .5 );
  }

static get template() {
  return `
  <style>
  :host {
    --secondary-text-color: blue;
    --paper-slider-knob-color: #50e0d1; /* #1abc9c */
    --paper-slider-active-color: #50e0d1; /* #1abc9c */
    --paper-slider-secondary-color: #1abc9c;
    --paper-input-container-color: black;
    --paper-input-container-focus-color: #1abc9c;
    
  }
  
  @keyframes slidein {
    from  { transform: scale( .2, .2 ); }
    to    { transform: scale( 1, 1 ); }
  }

  @keyframes slideout {
    from  { transform: scale( 1, 1 ); }
    to    { transform: scale( .2, .2 ); }
  }

  @media print { paper-card { display: none; } .result { display: block; } }

  a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
  h1            { font-size: 22px; }
  h3            { color: #e06f50; }
  h4            { font-size: .7em; text-align: center; margin: auto; margin-top: 0px; }
  
  paper-input   { font-style: italic; }
  paper-item    { cursor: pointer;}
  paper-card    { background-color: #e8e8e8; padding: 12px; margin: 3px auto; width: 100%;}
  paper-button  { background-color: #50e0d2; color: black; margin: 10px 0px 10px 0px; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
  paper-slider  { width: 100%; height: 2em; --paper-slider-input-container-input: { font-size: .9em; font-weight: bold; } --paper-slider-input {  width: 600px; } }
  paper-slider.input { background-color: black; }
  paper-toggle-button { 
    --paper-toggle-button-unchecked-bar-color:  grey;
    --paper-toggle-button-unchecked-button-color: #e06f50;
    --paper-toggle-button-checked-bar-color: grey;
    --paper-toggle-button-checked-button-color: #57e050;
    margin: auto;}

  .x { text-align: center; margin: auto 0px; font-size: .9em; }
  .y { text-align: left; margin: auto 0px; font-size: .8em; }
  .grid { border-radius: 5px; padding: 5px; max-width: 300px; margin: auto; }
  fieldset { border-radius: 3px; }
  result-item { margin: auto;  width: 100%; }
  .boxed { border: solid grey 1px; border-radius: 3px; padding: 12px; }
  .result { display: none; }
  .priced { text-align: left; font-size: .8em; margin-top:0px; }
  .money { font-size: .9em; color: #248746; text-align: left; }

</style>

<paper-card>

  <div style=" display:grid; grid-template-columns: 1fr 100px; ">
    <h3>Flashing</h3>
    <paper-toggle-button checked="{{flashing}}" on-click="_ventilation"></paper-toggle-button>
    <i><p class="priced">Estimate:<span class="money"> \$ {{asphaltPrice}}</span></p></i>
    <h4>12 Feet Long</h4>
  </div>

  <div class="boxed">

    <!-- SKYLIGHT -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Skylights:</div>
      <paper-slider id="skylight" value="{{skylights}}" max="10" on-change="_areaChange" editable></paper-slider>
      <i class="y">ea</i>
    </div>

    <!-- CHIMNEY -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Chimney:</div>
      <paper-slider id="chimney" value="{{chimney}}" max="10" on-change="_areaChange" editable></paper-slider>
      <i class="y">ea</i>
    </div>

    <!-- VALLEY -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Valley:</div>
      <paper-slider id="valley" value="{{valley}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- GABLE -->
    <div id="tin1" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Gable Flashing:</div>
      <paper-slider id="gableFlash" value="{{gable}}" max="150" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- HEAD FLASHING -->
    <div id="tin2" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Head Flashing:</div>
      <paper-slider id="headFlash" value="{{head}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- BACK FLASHING -->
    <div id="tin3" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Back Flashing:</div>
      <paper-slider id="backFlash" value="{{back}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- STEP FLASHING -->
    <div id="tin4" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Step Flashing:</div>
      <paper-slider id="stepFlash" value="{{step}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="gb"    product="Gable Flashing:"     homework="{{gableFlashing}}"    unit="units"></result-item>
      <result-item            product="Front Pan:"          homework="{{headFlashing}}"     unit="units"></result-item>
      <result-item            product="Back Pan:"           homework="{{backFlashing}}"     unit="units"></result-item>
      <result-item            product="Step Flashing:"      homework="{{stepFlashing}}"     unit="bundles"></result-item>
      <result-item            product="Valley Flashing:"    homework="{{valleyResult}}"     unit="units"></result-item>
    </div>

  </div>

</paper-card>
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
  `
    }
  }
customElements.define('asphalt-flashing', AsphaltFlashing);