import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { ResultItem } from './result-item.js';

export class AsphaltVentilation extends PolymerElement {

  static get is() { return 'asphalt-ventilation'; }

    static get properties() {
      return {
        
        mResult:              { type: Number,   notify: true, observer: '_areaChange'},
        ventilation:          { type: Boolean, notify: true, observer: '_ventilation', value: false },
        ventilationPrice:     { type: Number,  notify: true, observer: '_ventilation' },

        ridge:                { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        ridgeVentResult:      { type: Number,  notify: true, observer: '_ventilation' },
        ridgeVentPrice:       { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        ridgeVentTotal:       { type: Number,  notify: true, observer: '_ventilation' },

        box:                  { type: Number,  notify: true, observer: '_ventilation', value: 6 },
        boxVentResult:        { type: Number,  notify: true, observer: '_ventilation' },
        boxVentPrice:         { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        boxVentTotal:         { type: Number,  notify: true, observer: '_ventilation' },

        bVent:                { type: Number,  notify: true, observer: '_ventilation', value: 1 },
        bVentResult:          { type: Number,  notify: true, observer: '_ventilation' },
        bVentPrice:           { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        bVentTotal:           { type: Number,  notify: true, observer: '_ventilation' },

        pStack:               { type: Number,  notify: true, observer: '_ventilation', value: 4 },
        pStackResult:         { type: Number,  notify: true, observer: '_ventilation' },
        pStackPrice:          { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        pStackTotal:          { type: Number,  notify: true, observer: '_ventilation' },

        gooseneck:            { type: Number,  notify: true, observer: '_ventilation', value: 2 },
        gooseneckResult:      { type: Number,  notify: true, observer: '_ventilation' },
        gooseneckPrice:       { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        gooseneckTotal:       { type: Number,  notify: true, observer: '_ventilation' },

        asphaltSealant:       { type: Number,  notify: true, observer: '_ventilation', value: 2 },
        sealantResult:        { type: Number,  notify: true, observer: '_ventilation' },
        sealantPrice:         { type: Number,  notify: true, observer: '_ventilation', value: 24 },
        sealantTotal:         { type: Number,  notify: true, observer: '_ventilation' },

price: {
  type: Array,
  notify: true,
  observer: '_ventilation',
  value:
    {
      gooseneck:          14.99,
      sealant:            14.99,
      pStack:             14.99,
      bVent:              14.99,
      boxVent:            14.99,
      ridgeVent:          14.99
    }
  },

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
    ventilationPrice, price,
    ventilation,    
    bVent,          bVentResult,      bVentPrice,       bVentTotal,
    pStack,         pStackResult,     pStackPrice,      pStackTotal,
    gooseneck,      gooseneckResult,  gooseneckPrice,   gooseneckTotal,
    asphaltSealant, sealantResult,    sealantPrice,     sealantTotal,
    box,            boxVentResult,    boxVentPrice,     boxVentTotal,
    ridge,          ridgeVentResult,  ridgeVentPrice,   ridgeVentTotal
  ) {
      window.onerror = function(message, file, line, col, error){ console.log(arguments); }

      if ( this.ventilation == false ) {

        this.$.bx.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
        this.$.rx.setAttribute("style", "display:none;");

        this.$.bxv.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
        this.$.rxv.setAttribute("style", "display:none;");



      };

      if ( this.ventilation == true )  {
        
        this.$.rx.setAttribute("style", "display:block; animation-duration: 2s; animation-name: slidein; ");
        this.$.bx.setAttribute("style", "display:none;");

        this.$.rxv.setAttribute("style", "display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; ");
        this.$.bxv.setAttribute("style", "display:none;");

        /** 10' or 12' */

      };

      this.ridgeVentResult    = Number((this.ridge / 40).toFixed(0));
      this.boxVentTotal       = Number((this.box                * this.price.boxVent).toFixed(0));
      this.ridgeVentTotal     = Number((this.ridgeVentResult    * this.price.ridgeVent).toFixed(0));

      this.bVentTotal         = Number((this.bVent              * this.price.bVent).toFixed(0));
      this.pStackTotal        = Number((this.pStack             * this.price.pStack).toFixed(0));
      this.gooseneckTotal     = Number((this.gooseneck          * this.price.gooseneck).toFixed(0)); 
      this.sealantTotal       = Number((this.asphaltSealant     * this.price.sealant).toFixed(0));
      
      this.ventilationPrice   = this.bVentTotal + this.pStackTotal + this.gooseneckTotal + this.ridgeVentTotal + this.boxVentTotal + this.sealantTotal;
    


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

  <h3>Ventilation</h3>

  <div class="boxed">
  
    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr;">
      <h1 class="money">\$ {{ventilationPrice}}</h1>  
      <span></span>
      <paper-toggle-button checked="{{ventilation}}" on-click="_ventilation"></paper-toggle-button>
      <span></span>
      <span></span>
      <h4>(Ridge / Box)</h4>
    </div>

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
        <result-item id="rx"    product="Ridge Ventilation:"    homework="{{ridgeVentResult}}"      unit="boxes"    price="{{price.ridgeVent}}"        total="{{ridgeVentTotal}}"></result-item>
        <result-item id="bx"    product="Box Ventilation:"      homework="{{box}}"                  unit="units"    price="{{price.boxVent}}"         total="{{boxVentTotal}}" ></result-item>
        <result-item            product="Gas Vent type-B:"      homework="{{bVent}}"                unit="units"    price="{{price.bVent}}"           total="{{bVentTotal}}" ></result-item>
        <result-item            product="Plumbing Vent:"        homework="{{pStack}}"               unit="units"    price="{{price.pStack}}"          total="{{pStackTotal}}" ></result-item>
        <result-item            product="Gooseneck:"            homework="{{gooseneck}}"            unit="units"    price="{{price.gooseneck}}"       total="{{gooseneckTotal}}" ></result-item>
        <result-item            product="Caulking:"             homework="{{asphaltSealant}}"       unit="tubes"    price="{{price.sealant}}"         total="{{sealantTotal}}" ></result-item>
      </div>

    </div>

  </paper-card>
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result  "id="rx"    product="Ridge Ventilation:"     homework="{{ridgeVentResult}}"    unit="boxes"></result-print>
    <result-print class="result  "id="bx"    product="Box Ventilation:"       homework="{{boxVentResult}}"      unit="units"></result-print>
    <result-print class="result"           product="Gas Vent type-B:"         homework="{{bVentResult}}"        unit="units"></result-print>
    <result-print class="result"           product="Plumbing Vent:"           homework="{{pStackResult}}"       unit="units"></result-print>
    <result-print class="result"           product="Gooseneck:"               homework="{{gooseneckResult}}"    unit="units"></result-print>
  </div>
-->
  `
    }
  }
customElements.define("asphalt-ventilation", AsphaltVentilation);