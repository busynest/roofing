define(["exports","./application-shell.js","./result-item.js"],function(a,b,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AsphaltRoofing=a.$asphaltRoofing=void 0;class d extends b.PolymerElement{static get is(){return"asphalt-roofing"}static get properties(){return{ventilationPrices:{type:Array,value:[{x:"Ridge Ventilation",y:24},{x:"Box Ventilaion",y:24},{x:"Plumbing Stacks",y:24}]},mResult:{type:Number,notify:!0,observer:"_areaChange"},asphaltPrice:{type:Number,notify:!0,observer:"_asphaltRoof"},squarefeet:{type:Number,notify:!0,observer:"_area",value:21},square:{type:Number,notify:!0,observer:"_area"},bundles:{type:Boolean,notify:!0,observer:"_bundles",value:!1},conversion:{type:Boolean,notify:!0,observer:"_conversion",value:!1},plywoodResult:{type:Number,notify:!0,observer:"_conversion"},plywoodPrice:{type:Number,notify:!0,observer:"_conversion",value:24},plywoodTotal:{type:Number,notify:!0,observer:"_conversion"},sheathingNailResult:{type:Number,notify:!0,observer:"_conversion"},sheathingNailPrice:{type:Number,notify:!0,observer:"_conversion",value:24},sheathingNailTotal:{type:Number,notify:!0,observer:"_conversion"},shingles3Result:{type:Number,notify:!0,observer:"_bundles"},shingles3Price:{type:Number,notify:!0,observer:"_bundles",value:21},shingles3Total:{type:Number,notify:!0,observer:"_bundles"},shingles4Result:{type:Number,notify:!0,observer:"_bundles"},shingles4Price:{type:Number,notify:!0,observer:"_bundles",value:30},shingles4Total:{type:Number,notify:!0,observer:"_bundles"},starters:{type:Number,notify:!0,observer:"_asphaltRoof",value:24},startersResult:{type:Number,notify:!0,observer:"_asphaltRoof"},startersPrice:{type:Number,notify:!0,observer:"_asphaltRoof",value:24},startersTotal:{type:Number,notify:!0,observer:"_asphaltRoof"},cap:{type:Number,notify:!0,value:60},cappingResult:{type:Number,notify:!0,obeserver:"_asphaltRoof"},cappingPrice:{type:Number,notify:!0,observer:"_asphaltRoof",value:35},cappingTotal:{type:Number,notify:!0,observer:"_asphaltRoof"},felt15Result:{type:Number,notify:!0,observer:"_asphaltRoof"},felt15Price:{type:Number,notify:!0,observer:"_asphaltRoof",value:18},felt15Total:{type:Number,notify:!0,observer:"_asphaltRoof"},felt30Result:{type:Number,notify:!0,observer:"_asphaltRoof"},felt30Price:{type:Number,notify:!0,observer:"_asphaltRoof",value:36},felt30Total:{type:Number,notify:!0,observer:"_asphaltRoof"},roofNailResult:{type:Number,notify:!0,observer:"_asphaltRoof"},roofNailPrice:{type:Number,notify:!0,observer:"_asphaltRoof",value:24},roofNailTotal:{type:Number,notify:!0,observer:"_asphaltRoof"}}}constructor(){super()}connectedCallback(){super.connectedCallback()}ready(){super.ready();new c.ResultItem;console.log(this.tagName)}_areaChange(a){this._area(a),this._conversion(a),this._bundles(a),this._asphaltRoof(a)}_area(){this.square=this.squarefeet}_conversion(){window.onerror=function(){console.log(arguments)},!1==this.conversion&&(this.$.ply.setAttribute("style","display:none; animation-duration: 2s; animation-name: slideout; "),this.$.pny.setAttribute("style","display:none; animation-duration: 2s; animation-name: slideout; ")),!0==this.conversion&&(this.$.ply.setAttribute("style","display:block; animation-duration: 2s; animation-name: slidein;"),this.plywoodResult=parseInt(100*(this.squarefeet/32)).toFixed(0),this.plywoodTotal=this.plywoodPrice*this.plywoodResult,this.$.pny.setAttribute("style","display:block; animation-duration: 3s; animation-name: slidein;"),this.sheathingNailResult=+parseInt(320*this.squarefeet/7200).toFixed(0)+1,this.sheathingNailTotal=this.sheathingNailPrice*this.sheathingNailResult)}_bundles(){window.onerror=function(){console.log(arguments)},!1==this.bundles&&(this.shingles3Result=3*this.squarefeet,this.$.s3.setAttribute("style","display:block; animation-duration: 2s; animation-name: slidein; "),this.$.s4.setAttribute("style","display:none;"),this.shingles3Total=this.shingles3Price*this.shingles3Result),!0==this.bundles&&(this.shingles4Result=4*this.squarefeet,this.$.s4.setAttribute("style","display:block; animation-duration: 2s; animation-name: slidein; "),this.$.s3.setAttribute("style","display:none;"),this.shingles4Total=this.shingles4Price*this.shingles4Result)}_asphaltRoof(){this.startersResult=this.starters,this.startersTotal=this.startersPrice*this.startersResult,this.cappingResult=+parseInt(this.cap/20.625).toFixed(0)+1,this.cappingTotal=this.cappingPrice*this.cappingResult,this.roofNailResult=+parseInt(320*this.squarefeet/7200).toFixed(0)+1,this.roofNailTotal=this.roofNailPrice*this.roofNailResult,this.felt15Result=parseInt(100*(this.squarefeet/400)).toFixed(0),this.felt15Total=this.felt15Price*this.felt15Result,this.felt30Result=parseInt(100*(this.squarefeet/200)).toFixed(0),`  `,this.felt30Total=this.felt30Price*this.felt30Result,this.asphaltPrice=this.startersTotal+this.cappingTotal+this.felt15Total+this.felt30Total+this.roofNailTotal}static get template(){return`
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
    
  <div style=" display:grid; grid-template-columns: 1fr 100px 100px ;">
    <h3>Roofing</h3>
    <paper-toggle-button checked="{{bundles}}" on-click="_asphaltRoof"></paper-toggle-button>
    <paper-toggle-button checked="{{conversion}}" on-click="_asphaltRoof"></paper-toggle-button>
    <i><p class="priced">Estimate:<span class="money"> \$ {{asphaltPrice}}</span></p></i>
    <h4>(3/4)</h4>
    <h4>Conversion</H4>
  </div>

  <div class="boxed">

    <div style="display: grid; grid-template-columns: 1fr 1fr 1.5em;;">
      <div class="x">Total Square:</div>
      <paper-slider id="roofArea" value="{{squarefeet}}" max="100" on-change="_areaChange" editable></paper-slider>
      <i class="y">Sq</i>
    </div>

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
      <result-item id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"       price="21.50"     total="{{plywoodTotal}}"></result-item>
      <result-item id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"        price="103.00"    total="{{sheathingNailTotal}}"></result-item>
      <result-item id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"      price="23.00"     total="{{shingles3Total}}"></result-item>
      <result-item id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"      price="30.00"     total="{{shingles4Total}}"></result-item>
      <result-item            product="Roofing Nails:"    homework="{{roofNailResult}}"         unit="boxes"        price="65.00"     total="{{roofNailTotal}}"></result-item>
      <result-item            product="Starters:"         homework="{{startersResult}}"         unit="bundles"      price="22.00"     total="{{startersTotal}}"></result-item>
      <result-item            product="Capping:"          homework="{{cappingResult}}"          unit="rolls"        price="36.00"     total="{{cappingTotal}}"></result-item>
      <result-item id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"        price="30.50"     total="{{felt15Total}}"></result-item>
      <result-item id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"        price="36.00"     total="{{felt30Total}}"></result-item>
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
  `}}a.AsphaltRoofing=d,customElements.define(d.is,d);a.$asphaltRoofing={AsphaltRoofing:d}});