
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class SlateRoofing extends PolymerElement {

  static get is() { return 'slate-roofing'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Slate Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Slate Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Slate Ready!');
  }

  static get template() {
    return `

    <style>
    </style>


    <paper-card class="information">
      <h3>Slate Roofing</h3>

      <p>
        <strong>Slate:</strong> Slate has a beautiful, distinctive appearance. Although very heavy, a slate roof is non-leaching and will last for hundreds of years. It is easy to repair and recycle. Because slate is often a dark color it isn't recommended
        for high-heat locations. Green Factor: Excellent sustainable roofing choice. Quarrying and splitting slate tile has little environmental impact compared to the production of other roofing products.
      </p>
    </paper-card>

    <paper-card>
      <!-- PURCHASE ORDER FORM -->
      <purchase-order></purchase-order>
    </paper-card>

  `
  }

}

customElements.define('slate-roofing', SlateRoofing);