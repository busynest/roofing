
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class MetalRoofing extends PolymerElement {

  static get is() { return 'metal-roofing'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Metal Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Metal Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Metal Ready!');
  }

  static get template() {
    return `

    <style>
    </style>


    <paper-card class="information">
      <h3>Metal Roofing</h3>
      <p>
        <strong>Metal</strong> (steel, aluminum, tile and copper): Metal roofs are some of the coolest roofs around, both in temperature and style for new homes. Metal roofs are available in copper, aluminum, and stainless steel, and often have a high
        percentage of recycled content. They offer high insulation solar reflectance, and durability, often lasting twice as long as wood or asphalt. Metal shingles typically simulate traditional roof coverings, such as wood shakes, shingles, slate and
        tile. Aside from its longevity, metal shingles are much lighter than most materials and very resistance to adverse weather. Green Factor: Very green because they are highly energy-efficient and environmentally friendly.
      </p>
    </paper-card>

    <paper-card>
      <!-- PURCHASE ORDER FORM -->
      <purchase-order></purchase-order>
    </paper-card>
  `
  }

}

customElements.define('metal-roofing', MetalRoofing);