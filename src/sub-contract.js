
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class SubContract extends PolymerElement {

  static get is() { return 'sub-contract'; }

  static get properties() {
    return {

    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('SubContract Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('SubContract Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('SubContract Ready!');
  }

  static get template() {
    return `

    <style>
    
    </style>

          <paper-card>
            <h3>Roofing Subcontract</h3>
          </paper-card>

    `
      }

    }

  customElements.define('sub-contract', SubContract);