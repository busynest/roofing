import { CSSResultArray, PropertyValueMap, TemplateResult, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { LazyLoader } from "../lazy-loader";

declare global {
  interface WindowEventMap {
    'number-change': CustomEvent<number>;
  }
}

export class ResultItem extends LazyLoader {

    @property({type:String, reflect:true}) name:       string = '';
    @property({type:String, reflect:true}) product:    string = '';
    @property({type:String, reflect:true}) identity:   string = '';
    @property({type:String, reflect:true}) unit:       string = '';
    @property({type:Number, reflect:true}) homework:   number = 0;
    @property({type:Number, reflect:true}) price:      number = 0;
    @state() total:Number = 0;

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      super.updated(_changedProperties);
      this.count();
    }

    private count() {
      //const e = this.shadowRoot!.querySelector('.price') as HTMLInputElement;
      //this.price = e.value;
      this.total = this.homework * this.price;
    }
  
    private counter(e:any) {
      // const e = this.shadowRoot!.querySelector('.price') as HTMLInputElement;
      console.log(e.target.value)
      this.price = e.target.value;
      this.total = this.homework * this.price;
      this.dispatchEvent(new CustomEvent('number-change', { detail: {ident:'', more:''} }));
    }

    constructor() {
      super();
    }

    static get styles() : CSSResultArray { return [ css`
      :host {
        display:        none;
        margin:         auto;
        width:          100%;
        border-bottom:  1px dotted grey;
      }

      :host[active] {
        display:        grid;
        /*
        animation-duration: 2s;
        animation-name: slideout;
        */
      }
      .product { font-size: x-small; }

      .home {
        text-align: right;
        margin: 7px;
      }
      .product {
        text-align: left;
        line-height: 20px;
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
        font-size: small;
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
        font-size: small;
        color: #248746;
        text-align: right;
        margin: auto;
      }
      strong { color: #e06f50; margin: auto; }

      input[type=number] {
        width: 48px;
        background-color: transparent;
        border: 0;
      }

      .price > i {
        display: grid;
        grid-template-columns: 0fr 1fr;
      }
      
      `
    ]};
  
    protected render(): TemplateResult {
      return html`
  
      <style>
/*
      @media only screen and (min-width: 600px) {
          .product { font-size: .9em; }
        }

      @media only screen and (max-width: 600px) {
          .product { font-size: .7em; }
        }
*/
 
      </style>
      
        <div class="home" id="${this.name}" style="display: grid; grid-gap: 5px; grid-template-columns: 90px 1fr 0fr 1fr 1fr 0fr 48px"><!--  0fr 0fr .5em 1.2em 2.2em .5em 40px -->
          <div class="product">${this.product}</div>
          <div class="price"><i>$<input type="number" value="${this.price}" @input="${this.counter}"></i></div>
          <strong>x</strong>
          <div class="work">${this.homework}</div>
          <i class="unit">${this.unit}</i>
          <strong class="equal">\=</strong>
          <div class="money">\$ <i>${this.total}</i></div>
        </div>
      `;
        }
      }

customElements.define("result-item", ResultItem);

declare global {
    interface HTMLElementTagNameMap {
      "result-item": ResultItem;
    }   
}
  