import { PolymerElement } from '@polymer/polymer/polymer-element.js';

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
    }
  
    connectedCallback() {
      super.connectedCallback();
      //console.log('Menu-Item Connected!');
    }
  
    ready() {
      super.ready();
      //this.addEventListener('keypress', e => this.handlePress(e));
      //var div = document.createElement('div');
      //var shadowRoot = div.attachShadow({mode: 'open'});
      //shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';
      //this.$.ass.setAttribute("style", "display:none;");
      console.log(this.tagName);
    }
  
    static get template() {
      return `
  
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
      
        <div class="home" id="{{name}}" style="display: grid; grid-gap: 5px; grid-template-columns: 122px 3em 3em 1fr">
          <div id="ass" class="product">{{product}}</div>
          <div class="price"><i>{{price}} <strong>x</strong></i></div>
          <div class="work">{{homework}} <i class="unit">{{unit}}</i></div>
          <div class="money">\$ <i>{{total}}</i></div>
        </div>
      `
        }
      }
  customElements.define('result-item', ResultItem);
  