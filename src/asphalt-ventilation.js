import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

export class AsphaltVentilation extends PolymerElement {

    static get properties() {
      return {
ventilationPrices: {
  type: Array,
  value: [
    { x:'Ridge Ventilation', y:24 }, { x:'Box Ventilaion', y:24 }, { x:'Plumbing Stacks' , y:24 }
  ]
},

/* VENTILATION */

ventilation:          { type: Boolean, notify: true, observer: '_ventilation', value: false },
ventilationPrice:     { type: Number,  notify: true, observer: '_ventilation' },

ridge:                { type: Number,  notify: true, value: 24 },
ridgeVentResult:      { type: Number,  notify: true, observer: '_ventilation' },
ridgeVentPrice:       { type: Number,  notify: true, observer: '_ventilation', value: 24 },
ridgeVentTotal:       { type: Number,  notify: true, observer: '_ventilation' },

box:                  { type: Number,  notify: true, value: 6 },
boxVentResult:        { type: Number,  notify: true, observer: '_ventilation' },
boxVentPrice:         { type: Number,  notify: true, observer: '_ventilation', value: 24 },
boxVentTotal:         { type: Number,  notify: true, observer: '_ventilation' },

bVent:                { type: Number, notify: true, value: 1 },
bVentResult:          { type: Number, notify: true, observer: '_ventilation' },
bVentPrice:           { type: Number, notify: true, observer: '_ventilation', value: 24 },
bVentTotal:           { type: Number, notify: true, observer: '_ventilation' },

pStack:               { type: Number, notify: true, value: 4 },
pStackResult:         { type: Number, notify: true, observer: '_ventilation' },
pStackPrice:          { type: Number, notify: true, observer: '_ventilation', value: 24 },
pStackTotal:          { type: Number, notify: true, observer: '_ventilation' },

gooseneck:            { type: Number, notify: true, value: 2 },
gooseneckResult:      { type: Number, notify: true, observer: '_ventilation' },
gooseneckPrice:       { type: Number, notify: true, observer: '_ventilation', value: 24 },
gooseneckTotal:       { type: Number, notify: true, observer: '_ventilation' },

asphaltSealant:       { type: Number,  notify: true, value: 2 },
sealantResult:        { type: Number,  notify: true, observer: '_ventilation' },
sealantPrice:         { type: Number, notify: true,  observer: '_ventilation', value: 24 },
sealantTotal:         { type: Number, notify: true,  observer: '_ventilation' }

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
  this._ventilation(event);
}

_ventilation(
    ventilation,    
    bVent,          bVentResult,      bVentPrice,       bVentTotal,
    pStack,         pStackResult,     pStackPrice,      pStackTotal,
    gooseneck,      gooseneckResult,  gooseneckPrice,   gooseneckTotal,
    asphaltSealant, sealantResult,    sealantPrice,     sealantTotal,
    box,            boxVentResult,    boxVentPrice,     boxVentTotal,
    ridge,          ridgeVentResult,  ridgeVentPrice,   ridgeVentTotal
  ) {
      window.onerror = function(message, file, line, col, error){ console.log(arguments); }

      if ( this.ventilation == false ) {  this.boxVentResult   = this.box;

        this.$.bx.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
        this.$.rx.setAttribute("style", "display:none;");

        this.$.bxv.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
        this.$.rxv.setAttribute("style", "display:none;");

        this.boxVentTotal      = this.boxVentPrice * boxVentResult;

      };

      if ( this.ventilation == true )  {  this.ridgeVentResult = this.ridge;

        this.$.rx.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
        this.$.bx.setAttribute("style", "display:none;");

        this.$.rxv.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
        this.$.bxv.setAttribute("style", "display:none;");

        this.ridgeVentTotal      = this.ridgeVentPrice * ridgeVentResult;

      };

      this.bVentResult     = this.bVent;
      this.bVentTotal      = this.bVentPrice * bVentResult;

      this.pStackResult     = this.pStack;
      this.pStackTotal      = this.pStackPrice * pStackResult;

      this.gooseneckResult  = this.gooseneck;
      this.gooseneckTotal   = this.gooseneckPrice * this.gooseneckResult; 

      this.sealantResult    = this.asphaltSealant;
      this.sealantTotal     = this.sealantPrice * this.sealantResult
      
      this.asphaltPrice    = bVentTotal + pStackTotal + gooseneckTotal +
                              ridgeVentTotal + boxVentPrice + sealantTotal;
    
    }

static get template() {
  return html`
  <style>

  :host {
    --secondary-text-color: blue;
    --paper-slider-knob-color: #50e0d1; /* #1abc9c */
    --paper-slider-active-color: #50e0d1; /* #1abc9c */
    --paper-slider-secondary-color: #1abc9c;
    --paper-input-container-color: black;
    --paper-input-container-focus-color: #1abc9c;
    
  }
  iron-input: {width:50px;}
  
  @keyframes slidein {
    from  { transform: scale( .2, .2 ); }
    to    { transform: scale( 1, 1 ); }
  }

  @keyframes slideout {
    from  { transform: scale( 1, 1 ); }
    to    { transform: scale( .2, .2 ); }
  }

  @media print { paper-card { display: none; } .result { display: block; } }

  @media only screen and (min-width: 840px) { .roofing { display: grid; grid-template-columns: 1fr 1fr; } .appTitle { font-size: .9em; } }


  a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
  h1            { font-size: 22px; }
  h3            { color: #e06f50; }
  .info         { margin: auto ;}
  .i            { margin: auto; font-siz: .1em; font-style: italic; }
  .ii           { border-left: 1px solid grey; border-right: 1px solid grey; }
  paper-input   { font-style: italic; }
  paper-item    { cursor: pointer;}
  paper-card    { background-color: #e8e8e8; padding: 12px; margin: 3px auto ; width: 100%; }
  .max          { max-width: 450px; }
  paper-button  { background-color: #50e0d2; color: black; margin: 10px 0px 10px 0px; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
  paper-slider  { width: 100%; height: 2em;
                --paper-slider-input-container-input: { font-size: .9em; font-weight: bold; }
                --paper-slider-input                  {  width: 600px; }
                }
  paper-toggle-button { 
    --paper-toggle-button-unchecked-bar-color:  grey;
    --paper-toggle-button-unchecked-button-color: #e06f50;
    --paper-toggle-button-checked-bar-color: grey;
    --paper-toggle-button-checked-button-color: #57e050;
    margin-left: 0px;}
  .x { text-align: center; margin: auto 0px; font-size: .9em;}
  .y { text-align: left; margin: auto 0px; font-size: .8em;}
  .grid { border-radius: 5px; padding: 5px; max-width: 300px; margin: auto; }
  paper-slider.input { background-color: black; }
  fieldset { border-radius: 3px; }
  result-item { margin: auto; }
  .boxed { border: solid grey 1px; border-radius: 3px; padding: 12px;}
  .result { display: none; }
</style>

  <paper-card class="boxForm max">

    <div style=" display:grid; grid-template-columns: 1fr 1fr ; ">
      <div>    
        <h3>Ventilation</h3>
        <i class="priced"><p>Estimate:</p>{{ventilationPrice}}</i>
      </div>
      <div style="display: grid; grid-template-columns: 75% 1fr;">
        <h4>(Ridge / Box)</h4>
        <paper-toggle-button checked="{{ventilation}}" on-click="_ventilation"></paper-toggle-button>
      </div>
    </div>

    <div class="boxed">
  
      <!-- RIDGE VENTILATION -->
      <div id="rxv" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">Ridge Vent:</div>
        <paper-slider value="{{ridge}}" max="100" on-change="_ventilation" editable></paper-slider>
        <i class="y">ft</i>
      </div>
  
      <!-- BOX VENTS -->
      <div id="bxv" style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">Box Ventilation:</div>
        <paper-slider value="{{box}}" max="25" on-change="_areaChange" editable></paper-slider>
        <i class="y">ea</i>
      </div>
  
      <!-- B VENT -->
      <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">B-Vent:</div>
        <paper-slider id="bv" value="{{bVent}}" max="12" on-change="_areaChange" editable></paper-slider>
        <i class="y">ea</i>
      </div>
  
      <!-- STACK-->
      <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">Plumbing Stack:</div>
        <paper-slider id="ps" value="{{pStack}}" max="24" on-change="_areaChange" editable></paper-slider>
        <i class="y">ea</i>
      </div>
  
      <!-- GOOSENECK -->
      <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">Gooseneck:</div>
        <paper-slider id="gn" value="{{gooseneck}}" max="12" on-change="_areaChange" editable></paper-slider>
        <i class="y">ea</i>
      </div>
  
      <!-- SEALANT -->
      <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
        <div class="x">Sealant:</div>
        <paper-slider id="sl" value="{{asphaltSealant}}" max="24" on-change="_areaChange" editable></paper-slider>
        <i class="y">ea</i>
      </div>

      <div style="display: grid; grid-template-columns: 1fr;">
        <result-item id="rx"    product="Ridge Ventilation:"    homework="{{ridgeVentResult}}"    unit="boxes"    price="{{ridgVentPrice}}" ></result-item>
        <result-item id="bx"    product="Box Ventilation:"      homework="{{boxVentResult}}"      unit="units"    price="{{boxVentPrice}}" ></result-item>
        <result-item            product="Gas Vent type-B:"      homework="{{bVentResult}}"        unit="units"    price="{{bVentPrice}}" ></result-item>
        <result-item            product="Plumbing Vent:"        homework="{{pStackResult}}"       unit="units"    price="{{pStackPrice}}" ></result-item>
        <result-item            product="Gooseneck:"            homework="{{gooseneckResult}}"    unit="units"    price="{{gooseneckPrice}}" ></result-item>
        <result-item            product="Caulking:"             homework="{{sealantResult}}"      unit="tubes"    price="{{sealantPrice}}" ></result-item>
      </div>

    </div>

  </paper-card>
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result  "id="rx"    product="Ridge Ventilation:"    homework="{{ridgeVentResult}}"    unit="boxes"></result-print>
    <result-print class="result  "id="bx"    product="Box Ventilation:"      homework="{{boxVentResult}}"      unit="units"></result-print>
    <result-print class="result"           product="Gas Vent type-B:"      homework="{{bVentResult}}"        unit="units"></result-print>
    <result-print class="result"           product="Plumbing Vent:"        homework="{{pStackResult}}"       unit="units"></result-print>
    <result-print class="result"           product="Gooseneck:"            homework="{{gooseneckResult}}"    unit="units"></result-print>
  </div>
-->
  `
    }
  }
customElements.define('asphalt-ventilation', AsphaltVentilation);