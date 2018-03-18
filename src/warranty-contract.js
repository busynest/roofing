
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class WarrantyContract extends PolymerElement {

  static get is() { return 'warranty-contract'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Warranty Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Warranty Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Warranty Ready!');
  }

  static get template() {
    return `

    <style>
    
    </style>


          <paper-card>
            <h3>Roofing Warranty</h3>
          </paper-card>

  `
  }

}

customElements.define('warranty-contract', WarrantyContract);