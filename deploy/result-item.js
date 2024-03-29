import { LitElement, html } from "lit";
export class ResultItem extends LitElement {
    constructor() {
        super();
        this.name = '';
        this.product = '';
        this.identity = '';
        this.unit = '';
        this.homework = 0;
        this.price = 0;
        this.total = 0;
    }
    render() {
        return html `
  
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
        }
        .product {
          text-align: right;
          margin: auto;
          margin-right: 0px;
        }
        .price {
          text-align: center;
          font-size: .7em;
          text-align: right;
          margin: auto;
        }
        .work {
          text-align: center;
          font-size: .7em;
          font-weight: bold;
          text-align: left;
          margin: auto;
        }
        .unit {
          font-size: .6em;
          color: grey;
          text-align: left;
          margin: auto;
          margin-left: 0px;
        }
        .money {
          font-size: .6em;
          color: #248746;
          text-align: right;
          margin: auto;
        }
        strong { color: #e06f50; margin: auto; }

      </style>
      
        <div class="home" id="{{name}}" style="display: grid; grid-gap: 5px; grid-template-columns: 30% 1fr .5em 1.2em 2.2em .5em 1fr">
          <div class="product">{{product}}</div>
          <div class="price"><i>{{price}}</i></div>
          <strong>x</strong>
          <div class="work">{{homework}}</div>
          <i class="unit">{{unit}}</i>
          <strong class="equal">\=</strong>
          <div class="money">\$ <i>{{total}}</i></div>
        </div>
      `;
    }
}
customElements.define("result-item", ResultItem);
//# sourceMappingURL=result-item.js.map