
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class CedarRoofing extends PolymerElement {

  static get is() { return 'cedar-roofing'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Cedar Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Cedar Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Cedar Ready!');
  }

  static get template() {
    return `

    <style>
    </style>

    <paper-card class="information">
      <h3>Cedar Roofing</h3>

      <p>
        <strong>Wood shingles and shakes:</strong> Wood shingles and shakes can be purchased in cedar, redwood, southern pine and other woods, cedar being the most costly. Wood shingles are cut by machine, while wood shakes are handmade and have a rougher
        look. Since most wood shingles and shakes only have Class C fire ratings or no ratings at all, be sure to check your local building codes before deciding on this type of roofing. You can purchase Class A wood shingles with fire-resistant treatment
        for an additional cost. Green Factor: A natural product, but very high maintenance, poor fire rating and they tend to rot, split and mold. A great alternative to wood shingles and shakes are recycled synthetic shingles, which are made from plastic
        or rubber, mixed with recycled wood and are shaped to mimic wood shakes. They are lightweight, UV-resistant, fire-resistant, and long lasting. Some are comparable in lifespan to 50-year asphalt shingles. hough they generally cannot be recycled,
        due to their inseparable mixture of biological and plastic content, recycled synthetic shingles are still a greener material than real cedar shakes.
      </p>
    </paper-card>

    <paper-card>
      <!-- PURCHASE ORDER FORM -->
      <purchase-order></purchase-order>
    </paper-card>
  `
  }

}

customElements.define('cedar-roofing', CedarRoofing);