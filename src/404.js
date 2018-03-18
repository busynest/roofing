import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

export class Page404 extends PolymerElement {

  static get is() { return 'page-404'; }

  static get properties() {
    return {

    };
      
  }

  constructor() {
    super();
    console.log('404 Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('404 Connected!');
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log('404 Ready!');
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
  </template>

  <script>
    class Page404 extends Polymer.Element {
      static get is() { return 'page-404'; }
    }

    window.customElements.define(Page404.is, Page404);
  </script>
<!--
  <script>
    class Page404 extends Polymer.Element {
      static get is() { return 'page-404'; }
      static get properties() {
        return {
          // This shouldn't be neccessary, but the Analyzer isn't picking up
          // Polymer.Element#rootPath
          rootPath: String,
        };
      }
    }

  `
  }
}

customElements.define('page-404', Page404);