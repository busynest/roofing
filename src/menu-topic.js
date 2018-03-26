
import { PolymerElement, html } from "@polymer/polymer/polymer-element.js"

export class MenuTopic extends PolymerElement {

  static get is() { return 'menu-topic'; }

  static get properties() {
    return {
      page: {
        string: ''
      }
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
    console.log('Menu-Topic Ready!');
  }

  static get template() {
    return html`

    <style>
      :host {
        display: block;
      }

      a {
        text-decoration: none;
      }

      paper-item {
        cursor: pointer;
        background-color: #e8e8e8;
        border: 1px solid grey;
        border-radius: 5px;
        margin: 5px;
      }

      h2 {
        font-size: 15px;
        color: #303030;
      }

      iron-icon {
        color: #0061ba;
      }

      #actionIcon {
        margin-right: 25px;
      }

      #ideaIcon {
        margin-right: 15px;
      }

          /* SOCIAL BUTTONS */

      .facebook {
        background-color: #4267b2;
      }
      .google {
        background-color: #DD4B39;
      }
      .twitter {
        background-color: #00aced;
      }
      .email {
        background-color: grey;
      }
      .facebook, .google, .twitter, .email {
        color: #fff;
        line-height: 26px;
        padding: 0 10px;
        border-color: #4267b2;
        box-sizing: content-box;
        -webkit-font-smoothing: antialiased;
        font-weight: bold;
        justify-content: center;
        text-align: center;
        text-shadow: none;
      }

    </style>

    <!-- LINKS -->
    <a
      name="{{page}}"
      href="{{page}}">
      <!-- ITEM -->
      <paper-item>


        <!-- DIVIDER -->
        <span
          class="flex"
          style="flex:1;"></span>

        <!-- TITLE -->
        <h2><slot></slot></h2>

        <!-- DIVIDER -->
        <span
          class="flex"
          style="flex:1;"></span>

      </paper-item>
      
    </a>

    `
      }

    }

  customElements.define('menu-topic', MenuTopic);