var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { state } from 'lit/decorators.js';
import { store } from './store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { loadPage } from './redux-general';
import './primary-contract.js';
import './sub-contract.js';
import './purchase-order.js';
import './warranty-contract.js';
import './myicons.js';
class RoofingShell extends connect(store)(LitElement) {
    constructor() {
        super();
        this.page = '';
        this.handle = (e) => {
            store.dispatch(loadPage(e.target.value));
        };
    }
    stateChanged(state) {
        this.page = state.app.page;
    }
    render() {
        return html `

    <!-- HEADER -->
    <header>

      <!-- BUSINESS LOGO -->
      <h1
        class="appTitle"
        main-title>Roofing Contract</h1>

      <button value="primary-contract"  @click=${this.handle}  >Primary Contract</button>
      <button value="sub-contract"      @click=${this.handle}  >Subcontract</button>
      <button value="purchase-order"    @click=${this.handle}  >Purchase Order</button>
      <button value="warranty-contract" @click=${this.handle}  >Warranty</button>

      <!-- PRINT -->
      <button 
        class="colored"
        onclick="window.print()"
      >Print</button>

    </header>

    <!-- BODY -->
    <main>

      <!-- ROOFING CONTRACT -->
      <primary-contract ?active="${this.page === 'primary-contract'}"></primary-contract>
      
      <!-- ROOFING SUBCONTRACT -->
      <sub-contract ?active="${this.page === 'sub-contract'}"></sub-contract>

      <!-- RESIDENTIAL ROOFING ESTIMATE -->
      <purchase-order ?active="${this.page === 'purchase-order'}"></purchase-order>

      <!-- WARRANTY CONTACT -->
      <warranty-contract ?active="${this.page === 'warranty-contract'}"></warranty-contract>

    </main>

  `;
    }
}
RoofingShell.styles = css `

    :host {
      display: grid;
      background-color: #e8e8e8;
    }
  
    a               { text-decoration: none; }
    header          { background-color: #303030; color: white; }
    main            { margin: 5px; }
    svg             { animation: rotate 5s infinite ease-in-out alternate; }

    @keyframes rotate {
      0%    { transform: rotateZ(5deg); }
      100%  { transform: rotateZ(-5deg); }
    }

  `;
__decorate([
    state()
], RoofingShell.prototype, "page", void 0);
export { RoofingShell };
customElements.define("roofing-shell", RoofingShell);
//# sourceMappingURL=application-shell.js.map