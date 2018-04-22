import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ResultItem } from './result-item.js';

export class AsphaltRoofing extends PolymerElement {

    static get is() { return 'asphalt-roofing'; }

    static get properties() {
      return {

        mResult:              { type: Number, notify: true, observer: '_area'},
        asphaltPrice:         { type: Number, notify: true, observer: '_area'},

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
        shingles3Result:      { type: Number,  notify: true, observer: '_bundles' },
        shingles3Price:       { type: Number,  notify: true, observer: '_bundles', value: 21 },
        shingles3Total:       { type: Number,  notify: true, observer: '_bundles' },

        shingles4Result:      { type: Number,  notify: true, observer: '_bundles' },
        shingles4Price:       { type: Number,  notify: true, observer: '_bundles', value: 30 },
        shingles4Total:       { type: Number,  notify: true, observer: '_bundles' } ,

        starters:             { type: Number,  notify: true, observer: '_asphaltRoof', value: 24 },
        startersResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
        startersPrice:        { type: Number,  notify: true, observer: '_asphaltRoof', value: 24 },
        startersTotal:        { type: Number,  notify: true, observer: '_asphaltRoof' },

        cap:                  { type: Number,  notify: true, value: 60 },
        cappingResult:        { type: Number,  notify: true, obeserver: "_asphaltRoof" },
        cappingPrice:         { type: Number,  notify: true, observer: '_asphaltRoof', value: 35 },
        cappingTotal:         { type: Number,  notify: true, observer: '_asphaltRoof' },

        /* FELT */
        felt15Result:         { type: Number,  notify: true, observer: '_asphaltRoof' },
        felt15Price:          { type: Number,  notify: true, observer: '_asphaltRoof', value: 18 },
        felt15Total:          { type: Number,  notify: true, observer: '_asphaltRoof' },

        felt30Result:         { type: Number,  notify: true, observer: '_asphaltRoof' },
        felt30Price:          { type: Number,  notify: true, observer: '_asphaltRoof', value: 36 },
        felt30Total:          { type: Number,  notify: true, observer: '_asphaltRoof' },

        /* NAILS */
        roofNailResult:       { type: Number,  notify: true, observer: '_asphaltRoof' },
        roofNailPrice:        { type: Number,  notify: true, observer: '_asphaltRoof', value: 24 },
        roofNailTotal:        { type: Number,  notify: true, observer: '_asphaltRoof' },

price: {
  type: Array,
  value:
    {
      plywood:          14.99,
      sheathingNail:    14.99,
      roofingNail:      14.99,
      shingles3:        14.99,
      shingles4:        14.99,
      starters:         14.99,
      capping:          14.99,
      felt15:           14.99,
      felt30:           14.99
    }
  },

  IKO: {
    type: Array,
    value:
      {
        plywood:          14.99,
        sheathingNail:    14.99,
        roofingNail:      14.99,
        shingles3:        14.99,
        shingles4:        14.99,
        starters:         14.99,
        capping:          14.99,
        felt15:           14.99,
        felt30:           14.99
      }
    }
  
  };
}

//static get observers() {
//    return [ 'thingCountChanged' ];
//}

constructor() {
  super();
  if (typeof AsphaltRoofing !== 'undefined') { console.log(this.tagName + "undefined"); }
}

connectedCallback() {
  super.connectedCallback();
  //console.log('Menu-Item Connected!');
}

ready() {
  super.ready();
  //this.addEventListener('keypress', e => this.handlePress(e));
  //var sq = new OneSquare();
  const inst = new ResultItem();
  console.log(this.tagName);
}

_areaChange(event) {
  this._area(event);
  this._conversion(event);
  this._bundles(event);
  this._asphaltRoof(event)
}

_area( square, squarefeet, mResult, asphaltPrice  ) {
    this.square           = this.squarefeet;
    this.mResult          = this.asphaltPrice;
  }

  _conversion( conversion, plywoodResult, squarefeet, sheathingNailTotal, sheathingNailPrice, sheathingNailResult, plywoodTotal, plywoodPrice ) {
    window.onerror = function(message, file, line, col, error){ console.log(arguments); }
    if ( this.conversion == false )  {  this.$.ply.setAttribute("style", "display:none; animation-duration: 2s; animation-name: slideout; ");
                                        this.$.pny.setAttribute("style", "display:none; animation-duration: 2s; animation-name: slideout; ");
                                      };

    if ( this.conversion == true  )  {  this.$.ply.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein;");
                                        this.plywoodResult = parseInt(this.squarefeet / 32 * 100).toFixed(0);
                                        this.plywoodTotal           = this.plywoodPrice         * this.plywoodResult; 
                                        this.$.pny.setAttribute("style", "display:block; animation-duration: 3s; animation-name: slidein;");
                                        this.sheathingNailResult    = Number(parseInt(this.squarefeet * 320 / 7200).toFixed(0)) + 1;
                                        this.sheathingNailTotal     = this.sheathingNailPrice   * this.sheathingNailResult;
                                      };
  }

  _bundles( bundles, squarefeet, shingles3Result, shingles4Result, shingles3Price, shingle4Price, shingles3Total, shingles4Total ) {
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
    price,

    asphaltPrice,
    squarefeet,
    starters,         startersResult,   startersPrice,    startersTotal,
    cap,              cappingResult,    cappingPrice,     cappingTotal,
                      felt15Result,     felt15Price,      felt15Total,
                      felt30Result,     felt30Price,      felt30Total,
                      roofNailResult,   roofNailPrice,    roofNailTotal
  ) {
    // 1 STARTERS
    this.startersResult   = Number(((this.starters / 120.33 ) * this.price.starters).toFixed(0));
    this.startersTotal    = Number((this.startersPrice  * this.startersResult).toFixed(0));
    // 2 CAPPING
    this.cappingResult    = Number(parseInt(this.cap / 20.625).toFixed(0))  +  1;
    this.cappingTotal     = Number((this.cappingPrice   * this.cappingResult).toFixed(0));
    // 3 SHINGLE NAILS
    this.roofNailResult   = Number(parseInt(this.squarefeet * 320 / 7200).toFixed(0)) + 1;
    this.roofNailTotal    = Number((this.roofNailPrice  * this.roofNailResult).toFixed(0));
    // 4 FELT 15
    this.felt15Result     = parseInt(this.squarefeet / 400 * 100).toFixed(0);
    this.felt15Total      = Number((this.felt15Price    * this.felt15Result).toFixed(0));
    // 5 FELT 30
    this.felt30Result     = parseInt(this.squarefeet / 200 * 100).toFixed(0);`  `
    this.felt30Total      = Number((this.felt30Price    * this.felt30Result).toFixed(0));
    // 6 TOTAL
    this.asphaltPrice     = this.startersTotal + this.cappingTotal + this.felt15Total + this.felt30Total + this.roofNailTotal;
  }

static get template() {
  return `
  <style>
  :host {
    --secondary-text-color:                 blue;
    --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c */
    --paper-slider-active-color:            #248746; /* #1abc9c */
    --paper-slider-secondary-color:         #1abc9c;
    --paper-input-container-color:          black;
    --paper-input-container-focus-color:    #1abc9c;
  }
  iron-input: {width:50px;}
  
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
  .result       { display: none; }

  .money        { font-size: 1em;          color: #248746;       text-align: left; }

</style>

<paper-card>
    
  <h3>Roofing</h3>

  <div class="boxed">

  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; ">
    <h1 class="money">\$ {{asphaltPrice}}</h1>
    <paper-toggle-button checked="{{bundles}}" on-click="_asphaltRoof"></paper-toggle-button>
    <paper-toggle-button checked="{{conversion}}" on-click="_asphaltRoof"></paper-toggle-button>
    <span>Total Square: {{square}}</span>
    <h4>(3/4)</h4>
    <h4>Conversion</H4>
  </div>

  <paper-slider id="roofArea" value="{{squarefeet}}" max="100" on-change="_areaChange"></paper-slider>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1.5em;">
      <div class="x">Starter Rows:</div>
      <paper-slider id="ss" value="{{starters}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <!-- CAPPING -->
    <div style="display: grid; grid-template-columns: 1fr 1fr 1.5em;">
      <div class="x">Capping:</div>
      <paper-slider id="ridge" value="{{cap}}" max="250" on-change="_areaChange" editable></paper-slider>
      <i class="y">ft</i>
    </div>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"       price="{{price.plywood}}"     total="{{plywoodTotal}}"></result-item>
      <result-item id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"        price="{{price.sheathingNail}}"    total="{{sheathingNailTotal}}"></result-item>
      <result-item id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"      price="{{price.shingles3}}"     total="{{shingles3Total}}"></result-item>
      <result-item id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"      price="{{price.shingles4}}"     total="{{shingles4Total}}"></result-item>
      <result-item            product="Roofing Nails:"    homework="{{roofNailResult}}"         unit="boxes"        price="{{price.roofingNail}}"     total="{{roofNailTotal}}"></result-item>
      <result-item            product="Starters:"         homework="{{startersResult}}"         unit="bundles"      price="{{price.starters}}"     total="{{startersTotal}}"></result-item>
      <result-item            product="Capping:"          homework="{{cappingResult}}"          unit="rolls"        price="{{price.capping}}"     total="{{cappingTotal}}"></result-item>
      <result-item id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"        price="{{price.felt15}}"     total="{{felt15Total}}"></result-item>
      <result-item id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"        price="{{price.felt30}}"     total="{{felt30Total}}"></result-item>
    </div>

  </div>

  </paper-card>
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result" id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"></result-print>
    <result-print class="result" id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"></result-print>
    <result-print class="result" id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"></result-print>
    <result-print class="result" id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"></result-print>
    <result-print class="result"           product="Roofing Nails:"    homework="{{roofNailResult}}"          unit="boxes"></result-print>
    <result-print class="result"           product="Starters:"         homework="{{startersResult}}"          unit="bundles"></result-print>
    <result-print class="result" id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"></result-print>
    <result-print class="result" id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"></result-print>
  </div>
  -->
  `
    }
  }
customElements.define("asphalt-roofing", AsphaltRoofing);