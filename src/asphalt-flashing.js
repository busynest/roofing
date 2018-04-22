import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ResultItem } from './result-item.js';

export class AsphaltFlashing extends PolymerElement {

    static get is() { return 'asphalt-flashing'; }

    static get properties() {
      return {

        mResult:              { type: Number,   notify: true, observer: '_areaChange'},

        flashingLength:       { type: Number,   notify: true, observer: '_flashing', value: 10 },
        flashingPrice:        { type: Number,   notify: true, observer: '_flashing' },
      
        gable:                { type: Number,   notify: true, observer: '_flashing', value: 0 },
        gableFlashing:        { type: Number,   notify: true, observer: '_flashing' },

        head:                 { type: Number,   notify: true, observer: '_flashing', value: 0 },
        headFlashing:         { type: Number,   notify: true, observer: '_flashing' },

        back:                 { type: Number,   notify: true, observer: '_flashing', value: 0 },
        backFlashing:         { type: Number,   notify: true, observer: '_flashing' },

        step:                 { type: Number,   notify: true, observer: '_flashing', value: 0 },
        stepFlashing:         { type: Number,   notify: true, observer: '_flashing' },

        valley:               { type: Number,   notify: true, observer: '_flashing', value: 0 },
        valleyResult:         { type: Number,   notify: true, observer: '_flashing' },

        chimney:              { type: Number,   notify: true, observer: '_flashing', value: 0 },
        skylights:            { type: Number,   notify: true, observer: '_flashing', value: 0 },

      price: {
        type: Array,
        value:
          {
            gable:   14.99,
            head:    14.99,
            back:    14.99,
            step:    14.99,
            valley:  14.99
          }
        }

};

}

//static get observers() {
//    return [ 'thingCountChanged' ];
//}

constructor() {
  super();
}

connectedCallback() {
  super.connectedCallback();
}

ready() {
  super.ready();
  console.log(this.tagName);
}

_areaChange(event) {
  this._flashing(event);
}

_flashing(
  flashingPrice,  price,
  flashing,       flashingLength,
  valley,         valleyResult,
  gable,          gableFlashing,
  head,           headFlashing,
  back,           backFlashing,
  step,           stepFlashing,
  chimney,        skylights
) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  /*  
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
*/
    this.valleyResult     = Number((this.valley                                                                / this.flashingLength).toFixed(0));
    this.valleyTotal      = Number((this.valleyResult * this.price.valley).toFixed(0));

    this.gableFlashing    = Number((this.gable                                                                 / this.flashingLength).toFixed(0));
    this.gableTotal       = Number((this.gableFlashing * this.price.gable).toFixed(0));

    this.headFlashing     = Number((( this.head        + ( this.chimney  * 5 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    this.headTotal        = Number((this.headFlashing * this.price.head).toFixed(0));

    this.backFlashing     = Number((( this.back        + ( this.chimney  * 5 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    this.backTotal        = Number((this.backFlashing * this.price.back).toFixed(0));

    this.stepFlashing     = Number((( this.step        + ( this.chimney  * 3 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    this.stepTotal        = Number((this.stepFlashing * this.price.step).toFixed(0));

    this.flashingPrice    = this.valleyTotal + this.gableTotal + this.headTotal + this.backTotal + this.stepTotal;

  }

static get template() {
  return `
  <style>
  :host {
    --secondary-text-color:                 blue;
    --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c */
    --paper-slider-disabled-knob-color:     #e06f50;
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

  paper-input   { font-style: italic; }
  paper-card    { background-color: #303030;  color: #303030;             margin: 3px auto;       padding: 12px;      width: 100%;}
  paper-slider  { width: 100%;                height: 2em;
                  --paper-slider-input-container-input: { font-size: 1em; font-weight: bold; }
                  --paper-slider-input:                 { width: 100px; color:white; }
                }
  paper-toggle-button { margin: auto;
                        --paper-toggle-button-unchecked-bar-color:      grey;
                        --paper-toggle-button-unchecked-button-color:   #e06f50;
                        --paper-toggle-button-checked-bar-color:        grey;
                        --paper-toggle-button-checked-button-color:     #57e050;
                      }

  .x            { text-align: right;        margin: auto 0px;     font-size: .9em; }
  .y            { text-align: left;         margin: auto 0px;     font-size: .8em; }
  .grid         { border-radius: 5px;       padding: 5px;         max-width: 300px; margin: auto; }
  result-item   { margin: auto;             width: 100%;          border-bottom: 1px dotted grey; }
  .boxed        { border: solid grey 1px;   border-radius: 3px;   padding: 12px;    background-color: #e8e8e8; }
  .mainBox      { border-top: dotted grey 1px; margin-top: 12px; padding-top: 12px; border-bottom: dotted grey 1px; padding-bottom: 12px; }
  .result       { display: none; }

  .money        { font-size: .9em;          color: #248746;       text-align: left; }

</style>

<paper-card>

<h3>Flashing</h3>

  <div class="boxed">

  <div style=" display:grid; grid-template-columns: 1fr 1fr 1fr; ">
    <h1 class="money">\$ {{flashingPrice}}</h1>
    <span>Length: {{flashingLength}}</span>
    <span></span>
  </div>

  <paper-slider value="{{flashingLength}}" snaps="" min="8" max="12" max-markers="3" step="2"></paper-slider>

    <div class="mainBox">

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
      <paper-slider id="valley" value="{{valley}}" max="180" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- GABLE -->
    <div id="tin1" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Gable Flashing:</div>
      <paper-slider id="gableFlash" value="{{gable}}" max="180" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- HEAD FLASHING -->
    <div id="tin2" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Head Flashing:</div>
      <paper-slider id="headFlash" value="{{head}}" max="180" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- BACK FLASHING -->
    <div id="tin3" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Back Flashing:</div>
      <paper-slider id="backFlash" value="{{back}}" max="180" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- STEP FLASHING -->
    <div id="tin4" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Step Flashing:</div>
      <paper-slider id="stepFlash" value="{{step}}" max="180" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>
    
    </div>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="gb"    product="Gable Flashing:"     homework="{{gableFlashing}}"    unit="units"      price="{{price.gable}}"        total="{{gableTotal}}"></result-item>
      <result-item            product="Front Pan:"          homework="{{headFlashing}}"     unit="units"      price="{{price.head}}"         total="{{headTotal}}"></result-item>
      <result-item            product="Back Pan:"           homework="{{backFlashing}}"     unit="units"      price="{{price.back}}"         total="{{backTotal}}"></result-item>
      <result-item            product="Step Flashing:"      homework="{{stepFlashing}}"     unit="bundles"    price="{{price.step}}"         total="{{stepTotal}}"></result-item>
      <result-item            product="Valley Flashing:"    homework="{{valleyResult}}"     unit="units"      price="{{price.valley}}"       total="{{valleyTotal}}"></result-item>
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
customElements.define("asphalt-flashing", AsphaltFlashing);

/*
<paper-toggle-button checked="{{flashing}}"></paper-toggle-button>
      flashing:             { type: Boolean,  notify: true, observer: '_flashing', value: false },
*/