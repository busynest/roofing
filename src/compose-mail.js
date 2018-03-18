
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class ComposeMail extends PolymerElement {

  static get is() { return 'compose-mail'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Mail Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Mail Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Mail Ready!');
  }

  static get template() {
    return `

    <style>
    </style>

    <paper-card class="information">
      <h3>Compose Mail</h3>

      <p>

      </p>
    </paper-card>

  `
  }

}

customElements.define('compose-mail', ComposeMail);