import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"

export class ResultItem extends PolymerElement {

  static get is() { return 'result-item'; }

  static get properties() {
    return {

      name: {
        string: ''
      },

      product: {
        string: ''
      },

      identity: {
        string: ''
      },

      unit: {
        string: ''
      },

      homework:{
        string:''
      }

    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Menu-Item Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Menu-Item Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Result-Item Ready!');
  }

  static get template() {
    return html`

    <style>
      .home {
        text-align: right;
        font-size: 16px;
        margin: 4px;
      }
      .work {
        text-align: right;
        border-bottom: 1px solid grey;
      }
      .unit {
        font-size: 1em;
        text-align: left;
        border-bottom: 1px solid grey;
        margin: auto 0px;
      }
      .product {
        font-size: 1em;
        margin: auto 0px;
      }
    </style>
    
      <div class="home" id="{{name}}" style="display: grid; grid-gap: 5px; grid-template-columns: 1fr 2.5em 4em">
        <div class="product">{{product}}</div>
        <div class="work"><strong><slot>{{homework}}</slot></strong></div>
        <div class="unit"><i>{{unit}}</i></div>
      </div>
    `
      }

    }

  customElements.define('result-item', ResultItem);
  
  //<iron-icon hidden icon="icons:highlight-off" onclick="remove(this.parentNode)"></iron-icon>