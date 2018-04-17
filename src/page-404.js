import { PolymerElement } from "@polymer/polymer/polymer-element.js"
import { updateMetadata }       from './metadata.js';

export class Page404 extends PolymerElement {

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
      title: 'Page 404',
      description: 'Roofing Contractor Help',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
    console.log(this.tagName);
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