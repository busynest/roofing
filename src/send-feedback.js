
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { updateMetadata } from './metadata.js';

export class SendFeedback extends PolymerElement {

  static get is() { return 'send-feedback'; }

  static get properties() {
    return {
     
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    updateMetadata({
      title: 'Roofing',
      description: 'Roofing documentation to simply help roofing contractors to complete residential roofing contracts, roofing purchase orders and roofing warranties. Send roofing documents to suppliers and customers.',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
  }

  static get template() {
    return html`

    <style>
      paper-card { background-color: white; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
    </style>

    <paper-card>
      <h3>About Roofing Contract</h3>

      <p>
        A set of ducuments to help Roofing Contractors and Estimators with filling out Residential Contracts, Purchase Orders and Roofing Warranties.
        Share these documents between Customers & Suppliers.
      </p>
    </paper-card>


  `
  }

}

customElements.define('send-feedback', SendFeedback);