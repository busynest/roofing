
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class ClayRoofing extends PolymerElement {

  static get is() { return 'clay-roofing'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Clay Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Clay Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Clay Ready!');
  }

  static get template() {
    return `

    <style>
    </style>


        <paper-card class="information">
      <h3>Clay Roofing</h3>
      <p>
        <strong>Fiber Cement:</strong> Fiber-cement composite tile is composed of concrete, clay, and wood fiber. This mixture is both durable and fireproof and often shaped to look like shakes. Fiber-cement tiles are not as heavy as regular concrete
        tiles so they don't need extra-heavy roof structures. Fiber cement is available in a variety of textures and colors and is very durable — as long as you don't step on them or live in very cold climates because they can crack. Green Factor: Can
        be recycled, are non-leaching and make a good base for water collection.
      </p>
    </paper-card>

    <paper-card>
      <!-- PURCHASE ORDER FORM -->
      <purchase-order></purchase-order>
    </paper-card>

     </template>
  `
  }

}

customElements.define('clay-roofing', ClayRoofing);