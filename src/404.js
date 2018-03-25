import { PolymerElement } from "@polymer/polymer/polymer-element.js"

export class Page404 extends PolymerElement {

  static get is() { return 'page-404'; }

  static get properties() {
    return {

    };
      
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
    console.log('Page 404 is Ready!');
  }

  static get template() {
    return `
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `
  }
}

customElements.define('page-404', Page404);