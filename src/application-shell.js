
import { Element as PolymerElement } from "../node_modules/@polymer/polymer/polymer-element.js";

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
    //console.log('Shell Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Shell Connected!');
  }

  ready() {
    //this.addEventListener('keypress', e => this.handlePress(e));
    super.ready();
    console.log('Shell Ready!');
  }

  _routePageChanged(page) {
    // Polymer 2.0 will call with `undefined` on initialization.
    // Ignore until we are properly called with a string.
    if (page === undefined) {
      return;
    }
    // If no page was found in the route data, page will be an empty string.
    this.page = page || 'residential-roofing';
    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    var resolvedPageUrl = this.resolveUrl(page + '.html');
    Polymer.importHref(
        resolvedPageUrl,
        null,
        this._showPage404.bind(this),
        true);
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
    return `

    <style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        --app-drawer-width: 200px;
        display: block;
      }

      h1 {
        -webkit-flex: 1; /* Safari 6.1+ */
        -ms-flex: 1; /* IE 10 */ 
        flex:1;
        text-align: center;
      }

      app-drawer {
        color: black;
        overflow: auto;
        .contentContainer :{
          background-color: #e8e8e8;
        }
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
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
        style="background-color:#393939; color:white;"
        slot="header"
        fixed>

        <!-- APP-TOOLBAR #1 -->
        <app-toolbar
          style="/* #1ABC9C */ margin: 5px; height: 48px;">

          <!-- PAPER-PROGRESS -->
          <paper-progress 
            style="--paper-progress-container-color:#80001a; /* #1ABC9C */ width: 100%;"
            bottom-item></paper-progress> 

          <!-- BUSINESS LOGO -->
          <div>
            <h1
              class="appTitle information"
              style="font-size: 22px"
              main-title>Roofing Contract</h1>
          </div>

          <!-- SPAN DIVIDER -->
          <span class="flex" style="flex:1;"></span>

          <!-- BOOKMARK -->
          <paper-icon-button 
            icon="star"
            onclick="bookmarker()">Bookmark</paper-icon-button >

          <!-- PRINT -->
          <paper-icon-button 
            class="colored"
            role="button"
            onclick="window.print()"
            icon="print"></paper-icon-button>

          <!-- SEARCH -->
          <paper-icon-button 
            id="trigger"
            role="button"
            icon="search"
            on-click="_toggleSearch"
            aria-expanded$="[[opened]]"
            aria-controls="collapse">[[_getText(opened)]]
          </paper-icon-button>

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
      <main
        style="margin: 5px;">

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
          fallback-selection="page-404"
          style="width: 100%; height: 100%;">

          <!-- BUSINESS INTRODUCTION -->
          <send-feedback
            name="send-feedback"></send-feedback>

          <!-- RESIDENTIAL ROOFING ESTIMATE -->
          <residential-roofing
            name="residential-roofing"></residential-roofing>

          <!-- ROOFING CONTRACT -->
          <primary-contract
            name="primary-contract"></primary-contract>

          <!-- SIGN UP -->
          <sign-up
            name="sign-up"></sign-up>

          <!-- LOG IN -->
          <log-in
            name="log-in"></log-in>

        </iron-pages>
      </main>
    </app-drawer-layout>
  </app-header-layout>
  `
  }

}

customElements.define('application-shell', ApplicationShell);



            /**
            {x:"Subcontract", y:"sub-contract"},
            {x:"Employment", y:"employment-contract"},
            {x:"Warranty", y:"warranty-contract"},
            {x:"Piece Work", y:"piece-work"},
            {x:"Proposal", y:"proposal-contract"},
            {x:"Change Order", y:"change-order"},
            {x:"Safety Plan", y:"safety-plan"},
            {x:"Asphalt", y:"asphalt-roofing"},
            {x:"Cedar", y:"cedar-roofing"},
            {x:"Metal", y:"metal-roofing"},
            {x:"Clay", y:"clay-roofing"},
            {x:"Slate", y:"slate-roofing"}
            **/



/**

<iron-selector class="magicTabsOne" role="navigation" selected="[[page]]" attr-for-selected="name"></iron-selector>

<!--
    <a href="https://stackexchange.com/users/9755651/jack-markiewicz"><img src="https://stackexchange.com/users/flair/9755651.png" width="208" height="58" alt="profile for Jack Markiewicz on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Jack Markiewicz on Stack Exchange, a network of free, community-driven Q&amp;A sites"/></a>
-->

        <!-- TOPICS & FEATURES -->
        <paper-item><h1>Members</h1></paper-item>
        <!-- LOG-IN -->
        <menu-topic page="roofing-community" icon="face">Log-in</menu-topic>
        <!-- SIGN-UP -->
        <menu-topic page="roofing-community" icon="face">Sign-up</menu-topic>
        <!-- MAIL 
        <menu-topic page="compose-mail" icon="mail">Compose Mail</menu-topic>-->
        <!-- FEEDBACK -->
        <menu-topic page="send-feedback" icon="info">About</menu-topic>
        
        <!-- TITLE: CONTRACT -->
        <paper-item disabled><h1>Contract</h1></paper-item>
        <!-- PRIMARY -->
        <menu-topic page="primary-contract" icon="assignment">Primary</menu-topic>
        <!-- SUBCONTRACT -->
        <menu-topic page="sub-contract" icon="assignment">Subcontract</menu-topic>
        <!-- EMPLOYMENT -->
        <menu-topic page="employment-contract" icon="assignment">Employment</menu-topic>
        <!-- WARRANTY -->
        <menu-topic page="warranty-contract" icon="assignment">Warranty</menu-topic>
        <!-- PIECE WORK -->
        <menu-topic page="piece-work" icon="assignment">Piece Work</menu-topic>
        <!-- PROPOSAL -->
        <menu-topic page="proposal-contract" icon="assignment">Proposal</menu-topic>
        <!-- Change Order -->
        <menu-topic page="" icon="">Change Order</menu-topic>
        <!-- Safety Plan -->
        <menu-topic page="" icon="">Safety Plan</menu-topic>

        <!-- TITLE: ESTIMATE -->
        <paper-item disabled><h1>Estimate</h1></paper-item>
        <!-- ASPHALT -->
        <menu-topic page="asphalt-roofing" icon="assignment">Asphalt</menu-topic>
        <!-- CEDAR -->
        <menu-topic page="cedar-roofing" icon="assignment">Cedar</menu-topic>
        <!-- METAL -->
        <menu-topic page="metal-roofing" icon="assignment">Metal</menu-topic>
        <!-- CLAY -->
        <menu-topic page="clay-roofing" icon="assignment">Clay</menu-topic>
        <!-- SLATE -->
        <menu-topic page="slate-roofing" icon="assignment">Slate</menu-topic>


                  <!-- PIECE WORK -->
          <piece-work
            name="piece-work"></piece-work>

          <!-- CEDAR -->
          <cedar-roofing
            name="cedar-roofing"></cedar-roofing>

          <!-- METAL -->
          <metal-roofing
            name="metal-roofing"></metal-roofing>

          <!-- CLAY -->
          <clay-roofing
            name="clay-roofing"></clay-roofing>

          <!-- SLATE -->
          <slate-roofing
            name="slate-roofing"></slate-roofing>

          <!-- COMMUNITY -->
          <roofing-community
            name="roofing-community"></roofing-community>

          <!-- PROPOSAL -->
          <proposal-contract
            name="proposal-contract"></proposal-contract>

          <!-- SUBCONTRACT -->
          <sub-contract
            name="sub-contract"></sub-contract>


**/