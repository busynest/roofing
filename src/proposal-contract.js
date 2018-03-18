
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class ProposalContract extends PolymerElement {

  static get is() { return 'proposal-contract'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Proposal Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Proposal Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Proposal Ready!');
  }

  static get template() {
    return `
    <style>
    </style>


        <paper-card>
          <h3>Proposal Contract</h3>
        </paper-card>
  `
  }

}

customElements.define('proposal-contract', ProposalContract);