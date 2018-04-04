
import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"
import { updateMetadata }       from './app/metadata.js';

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
    console.log(this.tagName);
  }

  static get template() {
    return html`

    <style>
    
    </style>


          <paper-card>
            <h3>Roofing Warranty</h3>
          </paper-card>

  `
  }

}

customElements.define('warranty-contract', WarrantyContract);