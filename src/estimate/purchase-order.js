/**
<link rel="import" href="../../bower_components/polymer/polymer-element.html">
**/

import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export class PurchaseOrder extends PolymerElement {

  static get is() { return 'purchase-order'; }

  static get properties() {
    return {

    };
      
  }

  constructor() {
    super();
    this.rootPattern = (new URL(this.rootPath)).pathname;
    //console.log('P.O. Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('P.O. Connected!');
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log('P.O. Ready!');
  }

  static get template() {
    return `

    <style>
      form, table {
        width: 100%;
      }
    </style>


    <!-- TITLE -->
      <h3>Purchase Order</h3>
      <!-- PURCHASE FORM -->
      <form>
        <table>
          <tr>
            <td colspan="2"><paper-input type="text" label="Business Name"></paper-input></td>
          </tr>
          <tr>
            <!-- PROJECT NAME -->
            <td><paper-input type="text" label="Project"></paper-input></td>
            <!-- PROJECT START DTAE -->
            <td><paper-input type="date" label="Departure Date"></paper-input></td>
          </tr>
          <tr>
            <!-- PROJECT ESTIMATOR -->
            <td><paper-input type="text" label="Estimator"></paper-input></td>
            <!-- SUPERVISOR'S PHONE NUMBER -->
            <td><paper-input type="number" label="Phone Number"></paper-input></td>
          </tr>
          <tr>
          <!-- SHIPPING ADDRESS -->
            <td colspan="2"><paper-input type="text" label="Shipping Address"></paper-input></td>
          </tr>
          <tr>
          <!-- EMAIL -->
            <td colspan="2"><paper-input type="text" label="E-mail:"></paper-input></td>
          </tr>
        </table>
      </form>
  `
  }

}

customElements.define('purchase-order', PurchaseOrder);