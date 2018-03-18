/**
<link rel="import" href="../../bower_components/polymer/polymer-element.html">
<link rel="import" href="../../bower_components/iron-icons/iron-icons.html">
<link rel="import" href="../../bower_components/paper-item/paper-item.html">
**/

import {Element as PolymerElement} from "../../node_modules/@polymer/polymer/polymer-element.js"

export class MenuTopic extends PolymerElement {

  static get is() { return 'menu-topic'; }

  static get properties() {
    return {
            page: {
              string: ''
            },

            icon: {
              string: ''
            },

            click: {
              string: ''
            }
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Menu-Topic Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Menu-Topic Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Menu-Topic Ready!');
  }

  static get template() {
    return `

    <style>
      :host {
        display: block;
      }

      paper-item {
        cursor: pointer;
        background-color: transparent;
      }

      h2 {
        font-size: 1em;
        color: grey;
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

        <!-- ICON 
        <iron-icon
          id="actionIcon"
          icon="icons:chevron-left"></iron-icon>
        -->

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

        <!-- ICON 
        <iron-icon
          id="ideaIcon"
          icon="icons:{{icon}}"
          onclick={{click}}"></iron-icon>
        -->
      </paper-item>
      
    </a>

    `
      }

    }

  customElements.define('menu-topic', MenuTopic);