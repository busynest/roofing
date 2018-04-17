import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

export class AsphaltRoofing extends PolymerElement {

    static get is() { return 'asphalt-roofing'; }

    static get properties() {
      return {
ventilationPrices: {
  type: Array,
  value: [
    { x:'Ridge Ventilation', y:24 }, { x:'Box Ventilaion', y:24 }, { x:'Plumbing Stacks' , y:24 }
  ]
},

mResult:              { type: Number, notify: true, observer: '_area'},
asphaltPrice:         { type: Number, notify: true, observer: '_asphaltRoof'},

/* AREA */
      
squarefeet:           { type: Number, notify: true, observer: '_area', value: 21 },
square:               { type: Number, notify: true, observer: '_area'},

/* CONVERSION */

bundles:              { type: Boolean, notify: true, observer: '_bundles', value: false },
conversion:           { type: Boolean, notify: true, observer: '_conversion', value: false },

plywoodResult:        { type: Number,  notify: true, observer: '_conversion' },
plywoodPrice:         { type: Number,  notify: true, observer: '_conversion', value: 24 },
plywoodTotal:         { type: Number,  notify: true, observer: '_conversion' },

sheathingNailResult:  { type: Number,  notify: true, observer: '_conversion' },
sheathingNailPrice:   { type: Number,  notify: true, observer: '_conversion', value: 24 },
sheathingNailTotal:   { type: Number,  notify: true, observer: '_conversion' },

/* SHINGLES */

starters:             { type: Number,  notify: true, observer: '_asphaltRoof', value: 24 },
startersResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
startersPrice:        { type: Number, notify: true, observer: '_asphaltRoof', value: 24 },
startersTotal:        { type: Number, notify: true, observer: '_asphaltRoof' },

cap:                  { type: Number, notify: true, value: 60 },
cappingResult:        { type: Number, notify: true, obeserver: "_asphaltRoof" },
cappingPrice:         { type: Number, notify: true, observer: '_asphaltRoof', value: 24 },
cappingTotal:         { type: Number, notify: true, observer: '_asphaltRoof' },

shingles3Result:      { type: Number,  notify: true, observer: '_bundles' },
shingles3Price:       { type: Number,  notify: true, observer: '_bundles', value: 24 },
shingles3Total:       { type: Number,  notify: true, observer: '_bundles' },

shingles4Result:      { type: Number,  notify: true, observer: '_bundles' },
shingles4Price:       { type: Number,  notify: true, observer: '_bundles', value: 24 },
shingles4Total:       { type: Number,  notify: true, observer: '_bundles' } ,

/* FELT */

felt15Result:         { type: Number, notify: true, observer: '_asphaltRoof' },
felt15Price:          { type: Number, notify: true, observer: '_asphaltRoof', value: 24 },
felt15Total:          { type: Number, notify: true, observer: '_asphaltRoof' },

felt30Result:         { type: Number, notify: true, observer: '_asphaltRoof' },
felt30Price:           { type: Number, notify: true, observer: '_asphaltRoof', value: 24 },
felt30Total:          { type: Number, notify: true, observer: '_asphaltRoof' },

/* NAILS */

roofNailResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
roofNailPrice:         { type: Number, notify: true, observer: '_asphaltRoof', value: 24 },
roofNailTotal:        { type: Number, notify: true, observer: '_asphaltRoof' }
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
  this._area(event);
  this._conversion(event);
  this._bundles(event);
  this._asphaltRoof(event)
}

_area( square, squarefeet ) {
    this.square           = this.squarefeet;
  }

  _conversion( conversion, plywoodResult ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.conversion == false )  {  this.$.ply.setAttribute("style", "display:none; animation-duration: 2s; animation-name: slideout; ");
                                        this.$.pny.setAttribute("style", "display:none; animation-duration: 2s; animation-name: slideout; ");
                                      };

    if ( this.conversion == true  )  {  this.plywoodResult = parseInt(this.squarefeet / 32 * 100).toFixed(0);
                                        this.$.ply.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein;");
                                        this.$.pny.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein;");
                                        this.sheathingNailTotal     = this.sheathingNail3Price  * this.sheathingNailResult;
                                        this.plywoodTotal           = this.plywoodPrice  * this.plywoodResult;
                                      };
  }

  _bundles( bundles, shingles3Result, shingles4Result, shingles3Price, shingle4Price, shingles3Total, shingles4Total ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.bundles == false )     {  this.shingles3Result  = this.squarefeet * 3;
                                        this.$.s3.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
                                        this.$.s4.setAttribute("style", "display:none;");
                                        this.shingles3Total    = this.shingles3Price  * this.shingles3Result;

                                      };
    if ( this.bundles == true )      {  this.shingles4Result  = this.squarefeet * 4;
                                        this.$.s4.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
                                        this.$.s3.setAttribute("style", "display:none;");
                                        this.shingles4Total    = this.shingles4Price  * this.shingles4Result;

                                      };
  }

  _asphaltRoof(
    squarefeet,
    felt15Result,     felt15Price,      felt15Total,
    felt30Result,     felt30Price,      felt30Total,
    roofNailResult,   roofNailPrice,    roofNailTotal,
    starters,         startersResult,   startersPrice,    startersTotal,
    cap,              cappingResult,    cappingPrice,     cappingTotal
  ) {

    this.roofNailResult   = Number(parseInt(this.squarefeet * 320 / 7200).toFixed(0)) + 1;
    this.roofNailTotal    = this.roofNailPrice  * this.roofNailResult;
    

    this.startersResult   = this.starters;
    this.startersTotal    = this.startersPrice  * this.startersResult;

    this.cappingResult    = this.cap;
    this.cappingTotal     = this.cappingPrice   * this.cappingResult;
      
    this.felt15Result     = parseInt(this.squarefeet / 400 * 100).toFixed(0);
    this.felt15Total      = this.felt15Price    * this.felt15Result;

    this.felt30Result     = parseInt(this.squarefeet / 200 * 100).toFixed(0);
    this.felt30Total      = this.felt30Price    * this.felt30Result;

    this.asphaltPrice =   this.startersTotal + this.cappingTotal +
                          this.felt15Total + this.felt30Total + this.roofingNailTotal +
                          this.shingles3Total + this.shingles4Total ; 
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
  paper-slider  { width: 100%; height: 2em; --paper-slider-input-container-input: { font-size: .9em; font-weight: bold; } --paper-slider-input {  width: 600px; } }
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
  .priced { text-align: left; font-size: .8em; }
  .money { font-size: .9em; color: #248746; text-align: left; }
</style>

<paper-card class="boxForm max">
    
  <div style=" display:grid; grid-template-columns: 1fr 1fr ;">
    <h3>Roofing</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
      <paper-toggle-button checked="{{conversion}}" on-click="_asphaltRoof"></paper-toggle-button>
      <h4>Conversion</H4>
      <h4>(3/4)</h4>
      <paper-toggle-button checked="{{bundles}}" on-click="_asphaltRoof"></paper-toggle-button>
    </div>
    <i class="priced"><p>Estimate:<span class="money"> \$ {{asphaltPrice}}</span></p></i>
  </div>

  <div class="boxed">

    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;;">
      <div class="x">Total Square:</div>
      <paper-slider id="roofArea" value="{{squarefeet}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">Sq</i>
    </div>

    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Starter Rows:</div>
      <paper-slider id="ss" value="{{starters}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- CAPPING -->
    <div style="display: grid; grid-template-columns: 120px 1fr 1.5em;">
      <div class="x">Capping:</div>
      <paper-slider id="ridge" value="{{cap}}" max="800" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="ply"   product="Plywood:"          homework="{{plywoodResult}}"    unit="sheets"       price="21.50"     total="{{plywoodTotal}}"></result-item>
      <result-item id="pny"   product="Sheathing Nails:"  homework="{{plyNailResult}}"    unit="boxes"        price="103.00"    total="{{plyNailTotal}}"></result-item>
      <result-item id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"  unit="bundles"      price="23.00"     total="{{shingles3Total}}"></result-item>
      <result-item id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"  unit="bundles"      price="30.00"     total="{{shingles4Total}}"></result-item>
      <result-item            product="Roofing Nails:"    homework="{{roofNailResult}}"   unit="boxes"        price="65.00"     total="{{roofNailTotal}}"></result-item>
      <result-item            product="Starters:"         homework="{{startersResult}}"   unit="bundles"      price="22.00"     total="{{startersTotal}}"></result-item>
      <result-item            product="Capping:"          homework="{{cappingResult}}"    unit="rolls"        price="36.00"     total="{{cappingTotal}}"></result-item>
      <result-item id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"     unit="rolls"        price="30.50"     total="{{felt15Total}}"></result-item>
      <result-item id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"     unit="rolls"        price="36.00"     total="{{felt30Total}}"></result-item>
    </div>

  </div>

  </paper-card>
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result" id="ply"   product="Plywood:"          homework="{{plywoodResult}}"    unit="sheets"></result-print>
    <result-print class="result" id="pny"   product="Sheathing Nails:"  homework="{{plyNailResult}}"    unit="boxes"></result-print>
    <result-print class="result" id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"  unit="bundles"></result-print>
    <result-print class="result" id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"  unit="bundles"></result-print>
    <result-print class="result"           product="Roofing Nails:"    homework="{{roofNailResult}}"   unit="boxes"></result-print>
    <result-print class="result"           product="Starters:"         homework="{{startersResult}}"   unit="bundles"></result-print>
    <result-print class="result" id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"     unit="rolls"></result-print>
    <result-print class="result" id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"     unit="rolls"></result-print>
  </div>
  -->
  `
    }
  }
customElements.define('asphalt-roofing', AsphaltRoofing);