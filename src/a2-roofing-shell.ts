
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
  @state() rate = 90;
  @state() labourCap = 1;
  @state() flashRate = 0;
  @state() flashLength = 0;
  @state() capping = 0;
  @state() square = 0;

  constructor() {
    super();
  }

  stateChanged(state: RootState): void {
    this.page = state.roofing!.page;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('my-labour', this.handleEvent);
    this.addEventListener('my-labourCap', this.handleEvent2);
    this.addEventListener('my-flashing', this.handleEvent3);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('my-labour', this.handleEvent);
    this.removeEventListener('my-labourCap', this.handleEvent2);
    this.removeEventListener('my-flashing', this.handleEvent3);
  }

  handleEvent(event: CustomEvent) {
    this.rate = Number(event.detail.message);
    console.log('labourRate: ',this.rate);
  }

  handleEvent2(event: CustomEvent) {
    this.labourCap = Number(event.detail.message);
    console.log('labourCap: ',this.labourCap);
  }

  handleEvent3(event: CustomEvent) {
    this.flashRate = Number(event.detail.message);
    console.log('flashRate: ',this.flashRate);
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
    }
  
    a { text-decoration: none; }
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #0a2840;
      height: 40px;
      border-radius: 4px 4px 0 0;
    }

    .appTitle {
      font-size: x-large;
      margin-top: 4px;
    }

    nav > button {
      background-color: transparent;
      border: 0;
      appearance: none;
      cursor: pointer;
      text-transform: uppercase;
      color: grey;
      margin: auto 0;
      line-height: 38px;
      text-decoration: none;
      font-weight: 600;
      font-size: small;
      width: 100%;
      text-align: center;
    }

    nav > button[data-active] {
      color: white;
    }

    .colored {
      grid-row: 1/5;
      height: 60px;
      width: 60px;
      background-color: rgba(0,0,0,0.1);
      border: 1px solid grey;
      border-radius: 4px;
      appearance: none;
      color: black;
      cursor: pointer;
      text-transform: uppercase;
      margin: auto 0;
      line-height: 38px;
      text-decoration: none;
      font-weight: 600;
      font-size: small;
      text-align: center;
    }

    .results {/*
      position: fixed;
      bottom: 0;
      right: 0;*/
      padding: 12px;
      background-color: white;
      border-radius: 0 0 4px 4px;
      border: 1px solid black;
      display: grid;
      grid-template-columns: 1fr 2fr 0fr;
    }

    .results > .a { text-align: right; font-size: smaller; } 

  `;

  handle = (e:any) => {
    store.dispatch(loadPage(e.target.value));
  }

  protected render(): TemplateResult {
  
    return html`

    <style>
      @media print  {
        .results, header { display: none!important; }
      }
    </style>
      
    <!-- HEADER -->
    <header>

      <!-- BUSINESS LOGO -->
      <h1
        class="appTitle"
        main-title>Roofing Calculator</h1>

      <nav>
        <button value="primary-contract" ?data-active="${this.page === 'primary-contract' }" @click="${this.handle}"  >Contract</button>
        <!-- <button value="sub-contract"      @click=\${this.handle}  >Subcontract</button> -->
        <button value="purchase-order"   ?data-active="${this.page === 'purchase-order' }" @click="${this.handle}"  >Estimate</button>
        <button value="warranty-contract" ?data-active="${this.page === 'warranty-contract' }" @click="${this.handle}"  >Warranty</button>
        <p style="font-size:x-small; padding: 0 8px;">* sign-in to save Material Price adjustments</p>
      </nav>

      <div class="results">
        <!-- PRINT onclick="window.print()" -->
        <button 
          class="colored"
          onclick="window.print()"
        >Print</button>
        <div class="a">Roofing Material: </div><div>\$${this.roofingTotal}</div>
        <div class="a">Installation: </div><div>\$${console.log('square level 3:', this.square),(this.square * this.rate) + (this.capping * this.labourCap)}</div>
        <div class="a">Flash: </div><div>\$${(this.flashLength * this.flashRate)}</div>
        <div class="a">Total: </div><div>\$${this.roofingTotal + (this.square * this.rate)}</div>
      </div>

    </header>

    <!-- ROOFING CONTRACT -->
    <primary-contract ?active="${this.page === 'primary-contract' }"></primary-contract>
    
    <!-- ROOFING SUBCONTRACT
    <sub-contract ?active="\${this.page === 'sub-contract' }"></sub-contract>
          .roofingTotal="\${this.roofingTotal}"
      .labourRate="\${this.rate}"

      .roofingTotal="\${this.roofingTotal}"
      .square="\${this.square}"
      .capping="\${this.capping}"
      .flashingRate="\${this.flashRate}"
      .flashingLength="\${this.flashLength}"
      .cappingRate="\${this.labourCap}"

    -->

    <!-- RESIDENTIAL ROOFING ESTIMATE -->
    <purchase-order
      ?active="${this.page === 'purchase-order' }"      
      @input="${(e:any) => {
        this.roofingTotal = e.target.roofingTotal,
        this.square = e.target.square,
        this.capping = e.target.capping,
        this.flashRate = e.target.flashingRate,
        this.flashLength = e.target.flashingLength,
        // this.rate = e.target.labourRate,
        // this.labourCap = e.target.cappingRate
        console.log('roofing total: ',this.roofingTotal)
      }}"
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