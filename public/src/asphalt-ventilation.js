define(["exports","./application-shell.js","./result-item.js"],function(a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AsphaltVentilation=a.$asphaltVentilation=void 0;class c extends b.PolymerElement{static get is(){return"asphalt-ventilation"}static get properties(){return{ventilationPrices:{type:Array,value:[{x:"Ridge Ventilation",y:24},{x:"Box Ventilaion",y:24},{x:"Plumbing Stacks",y:24}]},ventilation:{type:Boolean,notify:!0,observer:"_ventilation",value:!1},ventilationPrice:{type:Number,notify:!0,observer:"_ventilation"},ridge:{type:Number,notify:!0,value:24},ridgeVentResult:{type:Number,notify:!0,observer:"_ventilation"},ridgeVentPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},ridgeVentTotal:{type:Number,notify:!0,observer:"_ventilation"},box:{type:Number,notify:!0,value:6},boxVentResult:{type:Number,notify:!0,observer:"_ventilation"},boxVentPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},boxVentTotal:{type:Number,notify:!0,observer:"_ventilation"},bVent:{type:Number,notify:!0,value:1},bVentResult:{type:Number,notify:!0,observer:"_ventilation"},bVentPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},bVentTotal:{type:Number,notify:!0,observer:"_ventilation"},pStack:{type:Number,notify:!0,value:4},pStackResult:{type:Number,notify:!0,observer:"_ventilation"},pStackPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},pStackTotal:{type:Number,notify:!0,observer:"_ventilation"},gooseneck:{type:Number,notify:!0,value:2},gooseneckResult:{type:Number,notify:!0,observer:"_ventilation"},gooseneckPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},gooseneckTotal:{type:Number,notify:!0,observer:"_ventilation"},asphaltSealant:{type:Number,notify:!0,value:2},sealantResult:{type:Number,notify:!0,observer:"_ventilation"},sealantPrice:{type:Number,notify:!0,observer:"_ventilation",value:24},sealantTotal:{type:Number,notify:!0,observer:"_ventilation"}}}constructor(){super()}connectedCallback(){super.connectedCallback()}ready(){super.ready(),console.log(this.tagName)}_areaChange(a){this._ventilation(a)}_ventilation(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){window.onerror=function(){console.log(arguments)},!1==this.ventilation&&(this.boxVentResult=this.box,this.$.bx.setAttribute("style","display:block; animation-duration: 2s; animation-name: slidein; "),this.$.rx.setAttribute("style","display:none;"),this.$.bxv.setAttribute("style","display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; "),this.$.rxv.setAttribute("style","display:none;"),this.boxVentTotal=this.boxVentPrice*s),!0==this.ventilation&&(this.ridgeVentResult=this.ridge,this.$.rx.setAttribute("style","display:block; animation-duration: 2s; animation-name: slidein; "),this.$.bx.setAttribute("style","display:none;"),this.$.rxv.setAttribute("style","display:grid; grid-template-columns: 120px 1fr 1.5em; animation-duration: 2s; animation-name: slidein; "),this.$.bxv.setAttribute("style","display:none;"),this.ridgeVentTotal=this.ridgeVentPrice*w),this.bVentResult=this.bVent,this.bVentTotal=this.bVentPrice*c,this.pStackResult=this.pStack,this.pStackTotal=this.pStackPrice*g,this.gooseneckResult=this.gooseneck,this.gooseneckTotal=this.gooseneckPrice*this.gooseneckResult,this.sealantResult=this.asphaltSealant,this.sealantTotal=this.sealantPrice*this.sealantResult,this.asphaltPrice=e+i+m+y+t+q}static get template(){return`
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
  result-item   { margin: auto;             width: 100%; }
  .boxed        { border: solid grey 1px;   border-radius: 3px;   padding: 12px;    background-color: #e8e8e8; }
  .result       { display: none; }
  .priced       { text-align: left;         font-size: .8em;      margin-top: 0px; }
  .money        { font-size: .9em;          color: #248746;       text-align: left; }

</style>

  <paper-card>

    <div style="display:grid; grid-template-columns: 1fr 100px ;">
      <h3>Ventilation</h3>
      <paper-toggle-button checked="{{ventilation}}" on-click="_ventilation"></paper-toggle-button>
      <i><p class="priced">Estimate:<span class="money"> \$ {{ventilationPrice}}</span></p></i>
      <h4>(Ridge / Box)</h4>
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
  `}}a.AsphaltVentilation=c,customElements.define("asphalt-ventilation",c);a.$asphaltVentilation={AsphaltVentilation:c}});