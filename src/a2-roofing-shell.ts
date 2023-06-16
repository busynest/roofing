
import { CSSResult, TemplateResult, css, html } from 'lit';
import { connect }            from 'pwa-helpers/connect-mixin';
import { RootState, store }   from'../../store';
import { LazyLoader }         from '../lazy-loader';
import { property, state }              from 'lit/decorators.js';
import { loadPage }           from './a1-roofing-redux';

import './primary-contract';
import './sub-contract';
import './purchase-order';
import './warranty-contract';

import './myicons';

// import './result-item.js';

export class RoofingShell extends connect(store)(LazyLoader) {

  @state() page = '';
  @property({type:Number}) roofingTotal = 0;
  @state() rate = 120;
  @state() square = 0;

  constructor() {
    super();
  }

  stateChanged(state: RootState): void {
    this.page = state.roofing!.page;
  }

  static styles:CSSResult = css`

    :host {
      display: none;
      grid-area: displaying;
      position: relative;
    }

    :host([active]) {
      display: grid;
    }

    header {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 12px;
    }
  
    a { text-decoration: none; }
    nav {
      padding:            20px 0;
      display:            grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 12px;
    }

    .appTitle {
      margin:0;
      font-size: x-large;
    }

    nav > button {
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid transparent;
      appearance: none;
      color: black;
    }

    nav > button[data-active] {
      border-bottom: 1px solid black;
    }

    .colored {
      height: 36px;
      width: 84px;
      margin: auto;
    }

    .results {
      position: fixed;
      bottom: 0;
      right: 0;
      padding: 12px;
      background-color: white;
      border-radius: 4px 0 0 0;
      border: 1px solid black;
      display: grid;
      grid-template-columns: 1fr 0fr;
    }

  `;

  handle = (e:any) => {
    store.dispatch(loadPage(e.target.value));
  }

  protected render(): TemplateResult {
  
    return html`

      
    <div class="results" onclick="window.print()">
      <div>Material Estimate: </div><div>\$${this.roofingTotal}</div>
      <div>Labour Estimate: </div><div>\$${this.square * this.rate}</div>
      <div>Total Estimate: </div><div>\$${this.roofingTotal + (this.square * this.rate)}</div>
    </div>

    <!-- HEADER -->
    <header>

      <!-- BUSINESS LOGO -->
      <h1
        class="appTitle"
        main-title>Roofing Calculator</h1>

      <nav>
        <button value="primary-contract" ?data-active="${this.page === 'primary-contract' }" @click="${this.handle}"  >Contract</button>
      <!-- <button value="sub-contract"      @click=\${this.handle}  >Subcontract</button> -->
        <button value="purchase-order"   ?data-active="${this.page === 'purchase-order' }" @click="${this.handle}"  >Material</button>
        <button value="warranty-contract" ?data-active="${this.page === 'warranty-contract' }" @click="${this.handle}"  >Warranty</button>
      </nav>

      <!-- PRINT-->
      <button 
        class="colored"
        onclick="window.print()"
      >Print</button>
    

    </header>

    <!-- ROOFING CONTRACT -->
    <primary-contract ?active="${this.page === 'primary-contract' }"></primary-contract>
    
    <!-- ROOFING SUBCONTRACT
    <sub-contract ?active="\${this.page === 'sub-contract' }"></sub-contract>
    -->

    <!-- RESIDENTIAL ROOFING ESTIMATE -->
    <purchase-order
      ?active="${this.page === 'purchase-order' }"
      .roofingTotal="${this.roofingTotal}"
      .labourRate="${this.rate}"
      @input="${(e:any) => {this.roofingTotal = e.target.roofingTotal, this.square = e.target.square, console.log(e.target.roofingTotal)} }"
    ></purchase-order>

    <!-- WARRANTY CONTACT -->
    <warranty-contract ?active="${this.page === 'warranty-contract' }"></warranty-contract>

  `
  }

}

customElements.define("roofing-shell", RoofingShell);

declare global {
  interface HTMLElementTagNameMap {
    "roofing-shell": RoofingShell;
  }
}