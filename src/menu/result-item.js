/**
<link rel="import" href="../../bower_components/polymer/polymer-element.html">
**/

import {Element as PolymerElement} from "../../node_modules/@polymer/polymer/polymer-element.js"

export class ResultItem extends PolymerElement {

  static get is() { return 'result-item'; }

  static get properties() {
    return {

      name: {
      string: ''
      },

      product: {
      string: ''
      },

      identity: {
      string: ''
      },

      unit: {
      string: ''
      }

    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Menu-Item Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Menu-Item Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Result-Item Ready!');
  }

  static get template() {
    return `
  
      <style>

      </style>

      <div
        id="{{name}}"
        style="display: flex;">

        <div>{{product}}</div>
        <div><strong id="{{identity}}"></strong></div>
        <div>{{unit}}<slot></slot></div>
        <iron-icon hidden icon="icons:highlight-off" onclick="remove(this.parentNode)"></iron-icon>

      </div>
    `
      }

    }

  customElements.define('result-item', ResultItem);