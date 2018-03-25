
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import '@polymer/font-roboto/roboto.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-collapse/iron-collapse.js';
import './menu-topic.js';
import './result-item.js';
import './roofing-administration.js';
import './residential-roofing.js';
import './primary-contract.js';
import './send-feedback.js';
import './404.js';

export class ApplicationShell extends PolymerElement {

  static get is() { return 'application-shell'; }

  static get properties() {

    return {

      horizontal: {
        type: Boolean
      },

      opened: {
        type: Boolean,
        reflectToAttribute: true
      },

      noAnimation: {
        type: Boolean
      },

      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },

      rootPattern: String,

      routeData: Object,

      subroute: String,

      boxes: {
        type: Array,
        value: [
          {x:"Roofing", y:"send-feedback"},
          {x:"Purchase Order", y:"residential-roofing"},
          {x:"Residential Contract", y:"primary-contract"}
        ]
      }

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
    console.log('Shell Ready!');
  }

  _routePageChanged(page) {
    this.page = page || 'residential-roofing';
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    //var resolvedPageUrl = this.resolveUrl(page + '.js');
    //Polymer.importHref(
    //    resolvedPageUrl,
    //    null,
    //    this._showPage404.bind(this),
    //    true);
  }

  _showPage404() {
    this.page = '404';
  }

  _toggleSearch() {
    this.$.collapse.toggle();
  }

  _getText(opened) {
    return opened ? 'Collapse' : 'Expand';
  }

  static get template() {
    return html`

    <style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        --app-drawer-width: 200px;
        --paper-progress-container-color: #80001a;
        --app-drawer-content-container:{
          background-color: #303030 ; /* #3c8c30 */
        }
        display: block;
      }

      h1 {
        //-webkit-flex: 1; /* Safari 6.1+ */
        // -ms-flex: 1; /* IE 10 */ 
        // flex:1;
        text-align: center;
      }

      app-toolbar {
        margin: 5px;
        height: 48px;
      }

      app-drawer {
        color: black;
        overflow: auto;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        background-color: #303030;
        color: white;"
      }

      paper-progress {
        width: 100%;
      }

      iron-pages {
        width: 100%; height: 100%;
      }

      h1 {
        font-size: 22px;
      }

      main {
        margin: 5px;
      }
    
    </style>

    <!-- ROUTE LOCATION -->
    <app-location route="{{route}}"></app-location>
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
      <div style=" background: white; /* #1ABC9C */ border-radius: 10px; margin: 5px; color: #0061ba; height: 80px;">
        <img src="../../images/Roofing Contract.jpg" height="60" width="200">
      </div>

      <iron-list items="[[boxes]]" as="item">
        <template>
            <menu-topic page="[[item.y]]" icon="">[[item.x]]</menu-topic>
        </template>
      </iron-list>

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
              <slot></slot>
            </paper-card></iron-collapse>

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

          <!-- RESIDENTIAL ROOFING ESTIMATE -->
          <residential-roofing
            name="residential-roofing"></residential-roofing>

          <!-- ROOFING CONTRACT -->
          <primary-contract
            name="primary-contract"></primary-contract>

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

*/