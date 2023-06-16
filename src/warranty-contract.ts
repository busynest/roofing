import { LitElement, TemplateResult, css, html } from 'lit';

export class WarrantyContract extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host { display:none; }
    :host([active]) { display:grid; }
  `;

  protected render():TemplateResult {
    return html`

    <section>
      <h3>Roofing Warranty</h3>
    </section>

  `
  }

}

customElements.define("warranty-contract", WarrantyContract);

declare global {
  interface HTMLElementTagNameMap {
    "warranty-contract": WarrantyContract,
  }
}