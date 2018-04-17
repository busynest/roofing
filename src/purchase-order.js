
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { updateMetadata }       from './metadata.js';
import '@polymer/neon-animation/neon-animations.js';
import '@polymer/neon-animation/animations/fade-in-animation.js';
//import '@polymer/polymer/lib/utils/gestures.js';


export class ResultItem extends PolymerElement {

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
      },

      price:{
        string:''
      },

      total:{
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
    console.log(this.tagName);
  }

  static get template() {
    return html`

    <style>
      .home {
        text-align: right;
        margin: 7px;
        border-bottom: 1px dotted grey;
      }
      .product {
        text-align: center;
        font-size: .9em;
      }
      .price {
        text-align: center;
        font-size: .7em;
      }
      .work {
        text-align: center;
        font-size: .7em;
        font-weight: bold;
      }
      .unit {
        font-size: .6em;
        color: grey;
        text-align: left;
      }
      .money {
        font-size: .6em;
        color: #248746;
        text-align: left;
      }
    </style>
    
      <div class="home" id="{{name}}" style="display: grid; grid-gap: 5px; grid-template-columns: 122px 3em 2em 2.5em 1fr">
        <div class="product">{{product}}</div>
        <div class="price"><i>{{price}} <strong>x</strong></i></div>
        <div class="work">{{homework}}</div>
        <div class="unit"><i>{{unit}}</i></div>
        <div class="money">\$ <i>{{total}}</i></div>
      </div>
    `
      }
    }
customElements.define('result-item', ResultItem);



export class PurchaseOrder extends PolymerElement {

  static get is() { return 'purchase-order'; }

  static get properties() {
    return {
      tSquare:        { type: String, notify: true },   
      roofMoney:      { type: String, notify: true },
      ventMoney:      { type: String, notify: true },
      flashingMoney:  { type: String, notify: true }
    };
  }

  constructor() {
    super();
    //let vertical = this.$.; 
    //if (setTimeout() document.height == ListeningStateChangedEvent)
    this.addEventListener('click', e => {
        return console.log('Success')
    });
     //this.tSquare = this.$.square;
  }

  connectedCallback() {
    super.connectedCallback();
    updateMetadata({
      title: 'Purchase Order',
      description: 'A Purchase Order for Residential Roofing Contractors to help with supplies management.',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
    console.log(this.tagName);
  }

  static get template() {
    return html`

    <style>
    :host {
      --secondary-text-color: blue;
      --paper-slider-knob-color: #50e0d1; /* #1abc9c */
      --paper-slider-active-color: #50e0d1; /* #1abc9c */
      --paper-slider-secondary-color: #1abc9c;
      --paper-input-container-color: black;
      --paper-input-container-focus-color: #1abc9c;
    }


    @media print { paper-card { display: none; } .result { display: block; } }

    @media only screen and (min-width: 840px) { .roofing { display: grid; grid-template-columns: 1fr 1fr; } .appTitle { font-size: .9em; } }

    a, a:link, a:hover, a:visited, a:active { text-decoration: none; color: black; }
    h1            { font-size: 22px; }
    h3            { color: #e06f50; }
    paper-input   { font-style: italic; }
    paper-card    { background-color: #e8e8e8; padding: 12px; margin: 3px auto ; width: 100%; }
    .max          { max-width: 450px; }
    paper-button  { background-color: #50e0d2; color: black; margin: 10px 0px 10px 0px; text-shadow: none; width: 100%; color: #303030; font-weight: bold; }
    .grid { border-radius: 5px; padding: 5px; max-width: 300px; margin: auto; }
    paper-slider.input { background-color: black; }
    fieldset { border-radius: 3px; }

    asphalt-roofing     { margin: auto; }
    asphalt-ventilation { margin: auto; }
    asphalt-flashing    { margin: auto; }

  </style>
  
  <paper-card class="service">
  
    <!-- PURCHASE FORM -->
    <form>
      <h3>Roofing Purchase Order</h3>
      <fieldset>
        <div style="display: grid; grid-gap: 15px; grid-template-columns: 1fr 1fr;">
          <paper-input type="text"    label="Contractor"></paper-input>
          <paper-input type="text"    label="Project"></paper-input>
          <paper-input type="text"    label="Estimator"></paper-input>
          <paper-input type="number"  label="Phone Number"></paper-input>
          <paper-input type="date"    label="Departure Date"></paper-input>
          <paper-input type="text"    label="Shipping Address"></paper-input>
        </div>
        <paper-button raised onclick="print()">Print</paper-button>
      </fieldset>
    </form>

    <div style="display: grid; grid-template-columns: 1fr 1fr ;">
      <div>
        <h3>Estimated</h3><p>Cost per Square </p>{{tSquare}}<span id="cost" value="{{cost}}"></span>
      </div>
      <div>
        <h3>Color Scheme</h3>
      </div>
    </div>
  
  </paper-card>

  <div style="display: grid; grid-template-columns: 1fr ;">
    <asphalt-roofing      mResult="{{roofMoney}}"   square="{{tSquare}}">      </asphalt-roofing>
    <asphalt-ventilation  mResult="{{ventMoney}}">                      </asphalt-ventilation>
    <asphalt-flashing     mResult="{{flashingMoney}}">                         </asphalt-flashing>
  </div>
  `
  }

}

customElements.define('purchase-order', PurchaseOrder);
