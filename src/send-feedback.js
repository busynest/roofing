
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class SendFeedback extends PolymerElement {

  static get is() { return 'send-feedback'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Feedback Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Feedback Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Feedback Ready!');
  }

  static get template() {
    return `

    <style>
    </style>

    <paper-card class="information">
      <h3>Send Feedback</h3>

      <p>

      </p>
    </paper-card>


  `
  }

}

customElements.define('send-feedback', SendFeedback);