
import { LitElement, PropertyValueMap, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import './asphalt-ventilation.js';
import './asphalt-roofing.js';
import './asphalt-flashing.js';

export class PurchaseOrder extends LitElement {

  @property({ type: Number }) roofingTotal:Number = 0;
  @property({type:Number}) square:Number=0;
  @state() roofMoney:Number=0;
  @state() ventMoney:Number=0;
  @state() flashingMoney:Number=0;
  @property({type:Number}) labourRate:Number=0;
  @property({type:Number}) flashingRate:Number=0;
  @property({type:Number}) cappingRate:Number=0;

  constructor() {
    super();
    //let vertical = this.$.; 
    //if (setTimeout() document.height == ListeningStateChangedEvent)
    //this.addEventListener('click', e => {
    //    return console.log('Success')
    //});
     //this.tSquare = this.$.square;
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('roofMoney') || _changedProperties.has('ventMoney') || _changedProperties.has('flashingMoney')) {
      this.roofingTotal = Number(this.roofMoney) + Number(this.ventMoney) + Number(this.flashingMoney);
    }
  }

  rateChange() {
    this._totalPurchase();
  }

  labourChange(e:any) {
    this.labourRate = e.target.value;
  }

  flashingChange(e:any) {
    this.flashingRate = e.target.value;
  }

  cappingChange(e:any) {
    this.cappingRate = e.target.value;
  }

  _totalPurchase( /*tSquare, roofMoney, ventMoney, flashingMoney*/ ) {
    // this.tSquare = this.roofMoney + this.ventMoney + this.flashingMoney;
  }
  

  static styles = css`
    :host { display:none; }
    :host([active]) { display:grid; }
    label{
      font-size:small;
      display: grid;
      grid-gap: 12px;
      grid-template-columns: 200px 56px;
      padding: 8px 0;
      text-align: right;
      margin: auto;
    }
  `;

  protected render(): TemplateResult {
    return html`
    <!--
    <label>Labour Rate per Square:
      <input type="number" @input="\${this.labourChange}" placeholder="Labour Rate" .value="\${this.labourRate}" />
    </label>
    
    <label>Flashing Rate per Linear Foot:
      <input type="number" @input="\${this.flashingChange}" placeholder="Flashing Rate" .value="\${this.flashingRate}" />
    </label>

    <label>Capping Rate per Linear Foot:
      <input type="number" @input="\${this.cappingChange}" placeholder="Capping Rate" .value="\${this.cappingRate}" />
    </label>
  -->
    <asphalt-roofing .results="${this.roofMoney}" @input="${(e:any)=>{this.roofMoney = e.target.results, this.square = e.target.square}}" ></asphalt-roofing>
    <asphalt-flashing .results="${this.flashingMoney}" @input="${(e:any)=>{this.flashingMoney = e.target.results}}" ></asphalt-flashing>
    <asphalt-ventilation .results="${this.ventMoney}" @input="${(e:any)=>{this.ventMoney = e.target.results}}" ></asphalt-ventilation>
  
  `
  }

}

customElements.define("purchase-order", PurchaseOrder);

/*

<!--
      <div>
        <h3>Flashing</h3>
        <h4>Skylights</h4><p>Flashing</p>
        <h4>Chimney</h4><p>Flashing</p>
        <h4>Flashing</h4><p>Head Flashing. Back Flashing. Step Flashing. Gable Flashing. Valley Flashing.</p>
      </div>
-->

<!--
    <div class="head">
      <div style="display: grid; grid-template-columns: 1fr 1fr ;">
        <h4>Estimated</h4>s
        <h4 class="scheme" >Color Scheme</h4>
      </div>

      <div class="results"></div>

      <div class="boxed"  style="display: grid; grid-template-columns: 1fr 1fr ;">
        <div>
                        <h3>Roofing:</h3>\${this.roofMoney}
                        <h3>Ventilation:</h3>\${this.ventMoney}
                        <h3>Flashing:\${this.flashingMoney}</h3>

          <p>Cost per Square </p>$\{this.tSquare}<span id="cost" value="\${this.cost}"></span>
        </div>
        <div>
          Blue
        </div>
      </div>
    </div>
  -->

<!--
      <div>
        <h3>Ashpalt</h3>
        <h4>Shingles</h4><p>Three bundles per square / Four bundles per square</p>
        <h4>Conversion</h4><p>Retrofitting an existing roof from cedar shakes to asphalt shingles reqires an additional installation of 5/8 plywood.</p>
        <h4>Waste</h4><p>Bin size, Drop zone, and walking distance.</p>
        <h4>Underlay</h4><p>15 pound felt covers 400 square feet. 30 pound felt covers 200 square feet. Synthetic. Sticky waterproof.</p>
      </div>
-->
       <!--       -->
<!--
      <div>
        <h3>Ventilation</h3>
        <h4>Ventilation</h4><p>Box ventilation or Ridge Ventilation, Soffit ventilation.</p>
      </div>
-->
 
    <!-- PURCHASE FORM 

    <form>

      <div style="display: grid; grid-gap: 15px; grid-template-columns: 1fr;">
        <h3>Purchase Order</h3>
        <button raised onclick="print()">Print</button>
        <label>Customer Name</label>
        <input type="text"    label="Contractor">
        <label>Customer Telephone</label>
        <input type="number"  label="Phone Number">
        <label>Customer Address</label>
        <input type="text"    label="Shipping Address">
      </div>

    </form>
-->

*/