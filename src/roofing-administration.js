import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class RoofingAdministration extends PolymerElement {

  static get is() { return 'roofing-administration'; }

  static get properties() {
    return {

    };
      
  }

  constructor() {
    super();
  }

  connectedCallback() {
      
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log('Administration is Ready!');
  }

  static get template() {
    return `
    
        <style>

            paper-input {
                --paper-input-container-focus-color: #1abc9c;
            }

            form, table {
                width: 100%;
            }

            #logoBox {
                border: lightblue 3px dotted;
                border-radius: 10px;
            }

        </style>

        <form>
            <table>
                <tr class="information">
                  <td><h3 id="contractName">Contractor:</h3></td>
                  <td  id="logoBox" class="tableLeft">
                      <input hidden type="file" id="logoFile" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><paper-input id="bizName" type="text" label="Business Name:"></paper-input></td>
                </tr>
                <tr>
                    <td colspan="2"><paper-input type="text" label="Business Address:"></paper-input></td>
                </tr>
                <tr>
                    <td><paper-input type="text" label="Salesperson:"></paper-input></td>
                    <td><paper-input type="text" label="Contract ID:"></paper-input></td>
                </tr>
                <tr>
                    <td><paper-input type="number" label="Phone Number:"></paper-input></td>
                </tr>
                <tr>
                    <td colspan="2"><h3>Customer:</h3></td>
                </tr>
                <tr>
                    <td><paper-input type="text" label="Customer:"></paper-input></td>
                    <td><paper-input type="number" label="Phone Number:"></paper-input></td>
                </tr>
                <tr>
                    <td colspan="2"><paper-input type="text" label="Customer Address:"></paper-input></td>
                </tr>

            </table>
        </form>

<!--
<app-toolbar></app-toolbar>

 <firebase-auth
    id="auth"
    app-name="calculator-app"
    provider="google"
    signed-in="{{signedIn}}"
    user="{{user}}">
</firebase-auth>

<na-toolbar
    signed-in="[[signedIn]]"
    on-sign-out="signOut">
</na-toolbar>

<na-login
    on-sign-in="signIn"
    signed-in="[[signedIn]]"
    disabled="[[!online]]">
</na-login>
-->
  `
  }
}

customElements.define('roofing-administration', RoofingAdministration);