
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class RoofingCommunity extends PolymerElement {

  static get is() { return 'roofing-community'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Community Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Community Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Community Ready!');
  }

  static get template() {
    return `
  
  <style>

  </style>

            <paper-card>
              <h3>Contractor</h3>
              <!-- NEW USER -->
              <paper-input id="txtUser" type="text" label="Username"></paper-input>
              <!-- NEW PASSWORD -->
              <paper-input id="txtPass" type="password" label="Create Passowrd"></paper-input>
              <!-- CONFIRM PASSWORD -->
              <paper-input id="txtPassConfirm" type="password" label="Confirm Passowrd"></paper-input>
              <!-- NEW EMAIL -->
              <paper-input id="txtEmail" type="text" label="E-mail"></paper-input>
              <!-- CONFIRM EMAIL -->
              <paper-input id="txtEmailConfirm" type="text" label="Confirm E-mail"></paper-input>
              <!-- SUBMIT -->
              <paper-button raised id="buttonSignUp">Sign up</paper-button>
              <!-- LOGIN -->
              <paper-button raised id="buttonLogIn">Login</paper-button>
              <!-- LOGOUT -->
              <paper-button raised id="buttonLogOut">Logout</paper-button>
              <!-- FACEBOOK LOGIN -->
              <paper-button raised id="buttonFacebook">Facebook</paper-button>
            </paper-card>

  `
  }

}

customElements.define('roofing-community', RoofingCommunity);