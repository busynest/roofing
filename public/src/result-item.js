define(["exports","./application-shell.js"],function(a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ResultItem=a.$resultItem=void 0;class c extends b.PolymerElement{static get is(){return"result-item"}static get properties(){return{name:String,product:String,identity:String,unit:String,homework:String,price:String,total:String}}constructor(){super()}connectedCallback(){super.connectedCallback()}ready(){super.ready(),console.log(this.tagName)}static get template(){return`
  
      <style>

      @media only screen and (min-width: 600px) {
          .product { font-size: .9em; }
        }

      @media only screen and (max-width: 600px) {
          .product { font-size: .7em; }
        }

        .home {
          text-align: right;
          margin: 7px;
          border-bottom: 1px dotted grey;
        }
        .product {
          text-align: right;
        }
        .price {
          text-align: center;
          font-size: .7em;
          text-align: right;
        }
        .work {
          text-align: center;
          font-size: .7em;
          font-weight: bold;
          text-align: left;
        }
        .unit {
          font-size: .6em;
          color: grey;
          text-align: left;
        }
        .money {
          font-size: .6em;
          color: #248746;
          text-align: right;
        }
        strong { color: #e06f50; }
      </style>
      
        <div class="home" id="{{name}}" style="display: grid; grid-gap: 5px; grid-template-columns: 30% 1fr .5em 1.2em 1fr .5em 1fr">
          <div class="product">{{product}}</div>
          <div class="price"><i>{{price}}</i></div>
          <strong>x</strong>
          <div class="work">{{homework}}</div>
          <i class="unit">{{unit}}</i>
          <strong>\=</strong>
          <div class="money">\$ <i>{{total}}</i></div>
        </div>
      `}}a.ResultItem=c,customElements.define(c.is,c);a.$resultItem={ResultItem:c}});