import { LitElement, css, html } from 'lit';
import './asphalt-ventilation.js';
import './asphalt-roofing.js';
import './asphalt-flashing.js';
class PurchaseOrder extends LitElement {
    constructor() {
        super();
        this.tSquare = 0;
        this.roofMoney = 0;
        this.ventMoney = 0;
        this.flashingMoney = 0;
    }
    _areaChange() {
        this._totalPurchase();
    }
    _totalPurchase() {
    }
    render() {
        return html `
  
  <section>
  
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

    <div class="head">
      <div style="display: grid; grid-template-columns: 1fr 1fr ;">
        <h4>Estimated</h4>
        <h4 class="scheme" >Color Scheme</h4>
      </div>
      <div class="boxed"  style="display: grid; grid-template-columns: 1fr 1fr ;">
        <div>
                        <h3>Roofing:</h3>{{roofMoney}}
                        <h3>Ventilation:</h3>{{ventMoney}}
                        <h3>Flashing:{{flashingMoney}}</h3>

          <p>Cost per Square </p>{{tSquare}}<span id="cost" value="{{cost}}"></span>
        </div>
        <div>
          Blue
        </div>
      </div>
    </div>

    <div class="body" style="display: grid; grid-template-columns: 1fr ;">
<!--
      <div>
        <h3>Ashpalt</h3>
        <h4>Shingles</h4><p>Three bundles per square / Four bundles per square</p>
        <h4>Conversion</h4><p>Retrofitting an existing roof from cedar shakes to asphalt shingles reqires an additional installation of 5/8 plywood.</p>
        <h4>Waste</h4><p>Bin size, Drop zone, and walking distance.</p>
        <h4>Underlay</h4><p>15 pound felt covers 400 square feet. 30 pound felt covers 200 square feet. Synthetic. Sticky waterproof.</p>
      </div>
-->
      <asphalt-roofing   mResult="{{roofMoney}}" square="{{tSquare}}" ></asphalt-roofing> <!--       -->
<!--
      <div>
        <h3>Ventilation</h3>
        <h4>Ventilation</h4><p>Box ventilation or Ridge Ventilation, Soffit ventilation.</p>
      </div>
-->
      <asphalt-ventilation  ventilationPrice="{{ventMoney}}"></asphalt-ventilation>
<!--
      <div>
        <h3>Flashing</h3>
        <h4>Skylights</h4><p>Flashing</p>
        <h4>Chimney</h4><p>Flashing</p>
        <h4>Flashing</h4><p>Head Flashing. Back Flashing. Step Flashing. Gable Flashing. Valley Flashing.</p>
      </div>
-->
      <asphalt-flashing     flashingPrice="{{flashingMoney}}"></asphalt-flashing>
    </div>
  
  </section>
  `;
    }
}
PurchaseOrder.styles = css `
    :host { display:none; }
    :host([active]) { display:grid; }
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
    .boxed              { border: solid grey 1px;   border-radius: 3px;   padding: 12px;    background-color: #e8e8e8; }

  `;
export { PurchaseOrder };
customElements.define("purchase-order", PurchaseOrder);
//# sourceMappingURL=purchase-order.js.map