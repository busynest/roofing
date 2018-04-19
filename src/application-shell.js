
/**
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { installRouter } from './router.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';

import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-button/paper-button.js';

import * as PurchaseOrder     from './purchase-order.js';
import { WarrantyContract }   from './warranty-contract.js';
import { PrimaryContract }    from './primary-contract.js';
import { SubContract }        from './sub-contract.js';
import { SendFeedback }       from './send-feedback.js';
import { Page404 }            from './page-404.js';
import { ResultItem }         from './result-item.js';
import { AsphaltVentilation } from './asphalt-ventilation.js'
import { AsphaltRoofing }     from './asphalt-roofing.js';
import { AsphaltFlashing }    from './asphalt-flashing.js'

export class ApplicationShell extends PolymerElement {

  static get is() { return 'application-shell'; }

  static get properties() {
    return {
      page:         { type: String, reflectToAttribute: true, observer: '_pageChanged' },
      rootPattern:  String,
      routeData:    Object,
      subroute:     String,
      opened:       { type: Boolean, reflectToAttribute: true }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  constructor() {
    super();
    this.rootPattern = (new URL(this.rootPath)).pathname;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log(this.tagName);
  }

  _routePageChanged(page) {
    this.page = page || 'purchase-order';
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    installRouter((location) => console.log(location));
    //var resolvedPageUrl = this.resolveUrl( page + '.js');
    //this.importHref(resolvedPageUrl,
    //null,
    //this._importFailedCallback,
    //true);
  }

  _toggleSearch() {
    this.$.collapse.toggle();
  }

  _getText(opened) {
    return opened ? 'Collapse' : 'Expand';
  }

  static get template() {
    return `

    <style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        --app-drawer-width: 190px;
        --paper-progress-container-color: #e06f50; /* #80001a */
        --app-drawer-content-container:{
          background-color: #303030 ; /* #3c8c30 */
        }
        display: block;
      }

      svg { animation: rotate 5s infinite ease-in-out alternate; }

      @keyframes rotate {
        0% {
          transform: rotateZ(5deg);
        }

        100% {
          transform: rotateZ(-5deg);
        }
      }

      @media print {
        :host {--app-drawer-width: 0px; }
        app-drawer { display: none; }
        app-toolbar { display: none; padding: 0px; }
        app-header { display: none; padding: 0px; }
      }

      @media only screen and (min-width: 600px) { .advert { margin-right: 200px; } }

      app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }

      //a               { text-decoration: none; }
      app-header      { background-color: #303030; color: white;" }
      app-toolbar     { margin: 5px; height: 48px; }
      app-drawer      { margin: 0px; color: black; overflow: auto; }
      paper-progress  { width: 100%;  }
      iron-pages      { width: 100%; height: 100%; }
      paper-item      { text-align: center; cursor: pointer; background-color: #e8e8e8; color: #303030; border: 1px solid grey; border-radius: 5px; margin: 5px; }
      h1              { font-size: 22px; text-align: center; }
      h2              { font-size: 15px; color: #303030; margin: auto; }
      main            { margin: 5px; }

    </style>

    <!-- ROUTE LOCATION -->
    <app-location
      route="{{route}}">
    </app-location>
    <app-route
      route="{{route}}"
      pattern="[[rootPattern]]:page"
      data="{{routeData}}"
      tail="{{subroute}}"></app-route>

    <!-- APP DRAWER LAYOUT -->
    <app-drawer-layout
      fullbleed>

    <!-- APP DRAWER -->
    <app-drawer
      class="colors"
      slot="drawer"
      id="drawer"
      align="end"
      fullbleed>

      <!-- ROOFING MENU -->
      <div style=" background: background-color: transparent; height: 60px;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 180 60" width="180" height="60"><defs><path d="M100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.54 33.5L100.54 33.5L100.54 33.5L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.52 33.41L100.51 33.41L100.5 33.41L100.49 33.4L100.48 33.39L100.46 33.39L100.46 33.39L100.4 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.31 33.23L100.31 33.23L100.3 33.22L100.29 33.21L100.29 33.19L100.28 33.18L100.28 33.17L100.21 33.15L100.21 33.15L100.21 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.14L100.19 33.14L100.19 33.14L100.19 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.98L100.18 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.97L100.2 32.97L100.2 32.97L100.21 32.97L100.21 32.97L100.21 32.97L100.28 32.95L100.28 32.95L100.29 32.93L100.29 32.92L100.3 32.91L100.31 32.89L100.31 32.89L100.27 32.83L100.27 32.83L100.27 32.83L100.27 32.83L100.27 32.82L100.27 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.79L100.26 32.79L100.26 32.79L100.26 32.79L100.36 32.7L100.36 32.7L100.36 32.7L100.36 32.7L100.36 32.69L100.36 32.69L100.36 32.69L100.36 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.4 32.7L100.46 32.74L100.46 32.74L100.48 32.73L100.49 32.73L100.5 32.72L100.51 32.72L100.52 32.71L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.55 32.63L100.55 32.63L100.55 32.63L100.55 32.63L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.71 32.61L100.71 32.61L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.74 32.71L100.75 32.72L100.76 32.72L100.77 32.73L100.79 32.73L100.8 32.74L100.8 32.74L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.88 32.7L100.88 32.7L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.7L100.9 32.7L100.9 32.7L100.9 32.7L101 32.79L101 32.79L101 32.79L101 32.79L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L100.99 32.83L100.99 32.83L100.99 32.83L100.99 32.83L100.96 32.89L100.96 32.89L100.96 32.91L100.97 32.92L100.97 32.93L100.98 32.95L100.98 32.95L101.05 32.97L101.05 32.97L101.06 32.97L101.06 32.97L101.06 32.97L101.06 32.97L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.08 32.98L101.08 32.98L101.08 32.98L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 33L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.07 33.14L101.07 33.14L101.07 33.14L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.05 33.15L101.05 33.15L100.98 33.17L100.98 33.18L100.97 33.19L100.97 33.21L100.96 33.22L100.96 33.23L100.96 33.23L100.99 33.3L100.99 33.3L100.99 33.3L100.99 33.3L101 33.3L101 33.3L101 33.3L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.8 33.39L100.8 33.39L100.79 33.39L100.77 33.4L100.76 33.41L100.75 33.41L100.74 33.41L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.71 33.5L100.71 33.5L100.71 33.5L100.71 33.5L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.56 33.51L100.56 33.51L100.56 33.51ZM100.65 33.26L100.65 33.26L100.66 33.26L100.67 33.26L100.68 33.25L100.69 33.25L100.69 33.25L100.7 33.25L100.71 33.24L100.71 33.24L100.72 33.24L100.73 33.23L100.73 33.23L100.74 33.23L100.75 33.22L100.75 33.22L100.76 33.21L100.76 33.21L100.77 33.2L100.78 33.2L100.78 33.19L100.79 33.19L100.79 33.18L100.79 33.17L100.8 33.17L100.8 33.16L100.81 33.15L100.81 33.15L100.81 33.14L100.82 33.13L100.82 33.13L100.82 33.12L100.82 33.11L100.82 33.1L100.83 33.1L100.83 33.09L100.83 33.08L100.83 33.07L100.83 33.06L100.83 33.05L100.83 33.05L100.83 33.04L100.83 33.03L100.82 33.02L100.82 33.02L100.82 33.01L100.82 33L100.82 32.99L100.81 32.99L100.81 32.98L100.81 32.97L100.8 32.97L100.8 32.96L100.79 32.95L100.79 32.95L100.79 32.94L100.78 32.93L100.78 32.93L100.77 32.92L100.76 32.92L100.76 32.91L100.75 32.91L100.75 32.9L100.74 32.9L100.73 32.9L100.73 32.89L100.72 32.89L100.71 32.88L100.71 32.88L100.7 32.88L100.69 32.88L100.69 32.87L100.68 32.87L100.67 32.87L100.66 32.87L100.65 32.87L100.65 32.87L100.64 32.87L100.63 32.87L100.62 32.87L100.61 32.87L100.61 32.87L100.6 32.87L100.59 32.87L100.58 32.87L100.58 32.87L100.57 32.88L100.56 32.88L100.55 32.88L100.55 32.88L100.54 32.89L100.53 32.89L100.53 32.9L100.52 32.9L100.51 32.9L100.51 32.91L100.5 32.91L100.5 32.92L100.49 32.92L100.49 32.93L100.48 32.93L100.48 32.94L100.47 32.95L100.47 32.95L100.46 32.96L100.46 32.97L100.46 32.97L100.45 32.98L100.45 32.99L100.45 32.99L100.44 33L100.44 33.01L100.44 33.02L100.44 33.02L100.44 33.03L100.44 33.04L100.43 33.05L100.43 33.05L100.43 33.06L100.43 33.07L100.43 33.08L100.44 33.09L100.44 33.1L100.44 33.1L100.44 33.11L100.44 33.12L100.44 33.13L100.45 33.13L100.45 33.14L100.45 33.15L100.46 33.15L100.46 33.16L100.46 33.17L100.47 33.17L100.47 33.18L100.48 33.19L100.48 33.19L100.49 33.2L100.49 33.2L100.5 33.21L100.5 33.21L100.51 33.22L100.51 33.22L100.52 33.23L100.53 33.23L100.53 33.23L100.54 33.24L100.55 33.24L100.55 33.24L100.56 33.25L100.57 33.25L100.58 33.25L100.58 33.25L100.59 33.26L100.6 33.26L100.61 33.26L100.61 33.26L100.62 33.26L100.63 33.26L100.64 33.26L100.65 33.26Z" id="bOP4x02SQ"></path><path d="M114.66 52.61L86.63 30" id="aJyGXCglx"></path><path d="M92.05 7.39L64.92 7.39L27.85 52.61L64.92 52.61L104.71 7.39L155.93 52.61" id="baGmqcAt7"></path></defs><g><g><use xlink:href="#bOP4x02SQ" opacity="1" fill="#040e2a" fill-opacity="1"></use></g><g><g><use xlink:href="#aJyGXCglx" opacity="1" fill-opacity="0" stroke="#777777" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#baGmqcAt7" opacity="1" fill-opacity="0" stroke="white" stroke-width="2" stroke-opacity="1"></use></g></g></g></svg>
      </div>

      <a name="send-feedback"       href="[[rootPath]]send-feedback">     <paper-item><h2>About</h2></paper-item></a>      
      <a name="primary-contract"    href="[[rootPath]]primary-contract">  <paper-item><h2>Primary Contract</h2></paper-item></a>
      <a name="sub-contract"        href="[[rootPath]]sub-contract">      <paper-item><h2>Subcontract</h2></paper-item></a>
      <a name="purchase-order"      href="[[rootPath]]purchase-order">    <paper-item><h2>Purchase Order</h2></paper-item></a>
      <a name="warranty-contract"   href="[[rootPath]]warranty-contract"> <paper-item><h2>Warranty</h2></paper-item></a>
      <a name="log-in"              href="[[rootPath]]log-in">            <paper-item><h2>Log In</h2></paper-item></a>

    </app-drawer>

    <!-- APP HEADER LAYOUT -->
    <app-header-layout
      fullbleed>

      <!-- APP HEADER -->
      <app-header
        slot="header"
        fixed>

        <!-- APP-TOOLBAR #1 -->
        <app-toolbar>

          <!-- PAPER-PROGRESS -->
          <paper-progress 
            bottom-item></paper-progress> 

          <!-- BUSINESS LOGO -->
          <div>
            <h1
              class="appTitle"
              main-title>Roofing Contract</h1>
          </div>

          <!-- SPAN DIVIDER -->
          <span class="flex" style="flex:1;"></span>

          <!-- SEARCH -->
          <paper-icon-button 
            id="trigger"
            role="button"
            icon="search"
            on-click="_toggleSearch"
            aria-expanded$="[[opened]]"
            aria-controls="collapse">[[_getText(opened)]]
          </paper-icon-button>

          <!-- PRINT -->
          <paper-icon-button 
            class="colored"
            role="button"
            onclick="window.print()"
            icon="print"></paper-icon-button>

          <!-- DRAWER TOGGLE -->
          <paper-icon-button
            drawer-toggle
            class="colored"
            role="button"
            id="printButton"
            icon="icons:menu"></paper-icon-button>

        </app-toolbar>
      </app-header>

      <!-- BODY -->
      <main>

        <!-- SEARCH CARD -->
        <iron-collapse
          id="collapse"
          opened="{{opened}}"
          horizontal="[[horizontal]]"
          no-animation="[[noAnimation]]"
          tabindex="0">

            <paper-card>
              <!-- GOOGLE CUSTOM SEARCH -->
              <slot name="search"></slot>
            </paper-card>
        
        </iron-collapse>
            
            <paper-card>
              <!-- GOOGLE ADVERTIZMENT -->
              <slot name="advert"></slot>
            </paper-card>

        <!-- IRON PAGES -->
        <iron-pages
          class="magicPagesOne"
          role="main"
          selected="[[page]]"
          attr-for-selected="name"
          fallback-selection="page-404">

          <!-- BUSINESS INTRODUCTION -->
          <send-feedback
            name="send-feedback"></send-feedback>

          <!-- ROOFING CONTRACT -->
          <primary-contract
            name="primary-contract"></primary-contract>
          
          <!-- ROOFING SUBCONTRACT -->
          <sub-contract
            name="sub-contract"></sub-contract>

          <!-- RESIDENTIAL ROOFING ESTIMATE -->
          <purchase-order
            name="purchase-order"></purchase-order>

          <!-- WARRANTY CONTACT -->
          <warranty-contract
            name="warranty-contract"></warranty-contract>

          <!-- PAGE 404 -->
          <page-404
            name="page-404"></page-404>            

        </iron-pages>
      </main>
    </app-drawer-layout>
  </app-header-layout>
  `
  }

}

customElements.define('application-shell', ApplicationShell);

/**

<iron-selector class="magicTabsOne" role="navigation" selected="[[page]]" attr-for-selected="name"></iron-selector>

      <iron-list items="[[boxes]]" as="item">
        <template>
            <menu-topic page="[[item.y]]" icon="">[[item.x]]</menu-topic>
        </template>
      </iron-list>


      boxes: {
        type: Array,
        value: [
          {x:"About", y:"send-feedback"},
          {x:"Primary Contract", y:"primary-contract"},
          {x:"Subcontract", y:"sub-contract"},
          {x:"Purchase Order", y:"purchase-order"},
          {x:"Warranty", y:"warranty-contract"}
        ]
      }


*/



  //_showPage404() {
  //  this.page = 'page-404';
  //}
/** 
  _toggleA(){
    if(this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./primary-contract.js').then((LazyElement) => {
        console.log("LazyElement loaded");
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
      this.loadComplete = true;
    }
  }
*/

/** 
 *    horizontal:   { type: Boolean },
 *    noAnimation:  { type: Boolean }
      A:              { type: Boolean, value: false, observer: '_toggleA' },
      loadComplete:   { type: Boolean, value: false }
*/

    //import(`./${page}/${PurchaseOrder}.component`).catch(this._showPage404.bind(this));