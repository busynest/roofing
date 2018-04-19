define(["exports","./application-shell.js","./metadata.js"],function(a,b,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.PurchaseOrder=a.$purchaseOrder=void 0;const d=class extends b.PolymerElement{static get is(){return"purchase-order"}static get properties(){return{tSquare:{type:String,notify:!0},roofMoney:{type:String,notify:!0},ventMoney:{type:String,notify:!0},flashingMoney:{type:String,notify:!0}}}constructor(){super()}connectedCallback(){super.connectedCallback(),(0,c.updateMetadata)({title:"Purchase Order",description:"A Purchase Order for Residential Roofing Contractors to help with supplies management.",url:document.location.href})}ready(){super.ready(),console.log(this.tagName)}static get template(){return`

    <style>
    :host {
      --secondary-text-color:                 blue;
      --paper-slider-knob-color:              #50e0d1; /* #1abc9c */
      --paper-slider-active-color:            #50e0d1; /* #1abc9c */
      --paper-slider-secondary-color:         #1abc9c;
      --paper-input-container-color:          black;
      --paper-input-container-focus-color:    #1abc9c;
    }

    @media only screen and (min-width: 840px) {
                        .roofing { display: grid; grid-template-columns: 1fr 1fr; }
                        .appTitle { font-size: .9em; }
                        }

    a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
    h1                  { font-size: 22px; }
    h3                  { color: #e06f50; margin: auto; }
    h4                  { color: #e06f50; font-style: italic; }
    paper-input         { font-style: italic; }
    paper-card          { background-color: #e8e8e8; padding: 12px; margin: 3px auto ; width: 100%;}
    paper-button        { background-color: #e06f50; margin: auto; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
    .grid               { border-radius: 5px; padding: 5px; max-width: 300px; margin: auto; }
    .body               { margin: auto; max-width: 600px; }
    asphalt-roofing     { margin: auto; max-width: 450px; width: 100%; }
    asphalt-ventilation { margin: auto; max-width: 450px; width: 100%; }
    asphalt-flashing    { margin: auto; max-width: 450px; width: 100%; }
    .scheme             { text-align: right; }
    fieldset            { background-color: #e8e8e8; }
    .head               { background-color: #303030; border-radius: 3px; padding: 12px;}

  </style>
  
  <paper-card>
  
    <!-- PURCHASE FORM -->

    <form>

      <div style="display: grid; grid-gap: 15px; grid-template-columns: 1fr 1fr;">
      <h3>Purchase Order</h3>
      <paper-button raised onclick="print()">Print</paper-button>
        <paper-input type="text"    label="Contractor"></paper-input>
        <paper-input type="text"    label="Project"></paper-input>
        <paper-input type="text"    label="Estimator"></paper-input>
        <paper-input type="number"  label="Phone Number"></paper-input>
        <paper-input type="date"    label="Departure Date"></paper-input>
        <paper-input type="text"    label="Shipping Address"></paper-input>
      </div>

    </form>

    <div class="head" style="display: grid; grid-template-columns: 1fr 1fr ;">
      <div>
        <h4>Estimated</h4><p>Cost per Square </p>{{tSquare}}<span id="cost" value="{{cost}}"></span>
      </div>
      <div>
        <h4 class="scheme" >Color Scheme</h4>
      </div>
    </div>

    <div class="body" style="display: grid; grid-template-columns: 1fr ;">

      <div>
        <h3>Ashpalt</h3>
        <h4>Shingles</h4><p>Three bundles per square / Four bundles per square</p>
        <h4>Conversion</h4><p>Retrofitting an existing roof from cedar shakes to asphalt shingles reqires an additional installation of 5/8 plywood.</p>
        <h4>Waste</h4><p>Bin size, Drop zone, and walking distance.</p>
        <h4>Underlay</h4><p>15 pound felt covers 400 square feet. 30 pound felt covers 200 square feet. Synthetic. Sticky waterproof.</p>
      </div>

      <asphalt-roofing      mResult="{{roofMoney}}"   square="{{tSquare}}"></asphalt-roofing>

      <div>
        <h3>Ventilation</h3>
        <h4>Ventilation</h4><p>Box ventilation or Ridge Ventilation, Soffit ventilation.</p>
      </div>

      <asphalt-ventilation  mResult="{{ventMoney}}"></asphalt-ventilation>
      
      <div>
        <h3>Flashing</h3>
        <h4>Skylights</h4><p>Flashing</p>
        <h4>Chimney</h4><p>Flashing</p>
        <h4>Flashing</h4><p>Head Flashing. Back Flashing. Step Flashing. Gable Flashing. Valley Flashing.</p>
      </div>

      <asphalt-flashing     mResult="{{flashingMoney}}"></asphalt-flashing>
    </div>
  
  </paper-card>
  `}};a.PurchaseOrder=d,customElements.define("purchase-order",d);a.$purchaseOrder={PurchaseOrder:d}});