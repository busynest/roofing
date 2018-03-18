
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class PieceWork extends PolymerElement {

  static get is() { return 'piece-work'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('PieceWork Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('PieceWork Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('PieceWork Ready!');
  }

  static get template() {
    return `
    <style>
    
    </style>


          <paper-card>
            <h3>Piece Work</h3>
          </paper-card>

  `
  }

}

customElements.define('piece-work', PieceWork);