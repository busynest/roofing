
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

export class RoofingStyles extends PolymerElement {

  static get is() { return 'roofing-styles'; }

  static get template() {
    return `

    <style>

    paper-slider {
      --paper-slider-knob-color: #1abc9c;
      --paper-slider-active-color: #1abc9c;
      --paper-slider-secondary-color: #1abc9c;
      --paper-input-container-color: black;
      --paper-input-container-focus-color: #1abc9c;
    }

    paper-input {
      --paper-input-container-color: black;
      --paper-input-container-focus-color: #1abc9c;
      --paper-input-container-underline: {
        color: black;
      };
    }

    paper-card {
      background-color: white;
      border-radius: 10px;
      padding: 10px;
      margin: 5px 0px 5px 0px;
      width: 100%;
    }

    paper-toggle-button {
      --paper-toggle-button-unchecked-bar-color: black;
      --paper-toggle-button-checked-button-color: #1abc9c;
      --paper-toggle-button-checked-bar-color: #1abc9c;
    }

    ul {
      list-style: none;
      text-align: left;
    }

    paper-button {
      margin: 0.5em 1em 0.5em 0;
      background: #e8e8e8;
      color: black;
      text-shadow:none ;
    }

      h1 {
        font-size: 22px;
      }
    </style>

  `
  }

}

customElements.define('roofing-styles', RoofingStyles);