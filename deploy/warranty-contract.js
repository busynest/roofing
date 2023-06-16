import { LitElement, css, html } from 'lit';
class WarrantyContract extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html `

    <section>
      <h3>Roofing Warranty</h3>
    </section>

  `;
    }
}
WarrantyContract.styles = css `
    :host { display:none; }
    :host([active]) { display:grid; }
  `;
export { WarrantyContract };
customElements.define("warranty-contract", WarrantyContract);
//# sourceMappingURL=warranty-contract.js.map