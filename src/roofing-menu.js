
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class RoofingMenu extends PolymerElement {

  static get is() { return 'roofing-menu'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Menu Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Menu Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Menu Ready!');
  }

  static get template() {
    return `

    <style>

      .roofDrawer{
        height: 100%;
      }

      h1 {
        -webkit-flex: 1; /* Safari 6.1+ */
        -ms-flex: 1; /* IE 10 */ 
        flex:1;
        color: #0061ba; /* #1ABC9C */
        text-align: center;
      }

    </style>

<app-header fixed>
  <app-toolbar style="background: white; /* #1ABC9C */ border-radius: 10px; margin: 5px; color: #0061ba; height: 80px;">
    <img src="../../images/Roofing Contract.jpg" height="60" width="200">
  </app-toolbar>
</app-header>

<!-- DRAWER WRAPPER -->
<div class="roofDrawer">

  <!-- TOPICS & FEATURES -->
  <iron-selector class="magicTabsOne" role="navigation" selected="[[page]]" attr-for-selected="name">
    <paper-card>
    <!-- FEEDBACK -->
    <menu-topic page="send-feedback" icon="info">Roofing</menu-topic>
    <!-- COMMUNITY -->
    <menu-topic page="roofing-community" icon="face">Sign-in</menu-topic>
    <!-- MAIL -->
    <menu-topic page="compose-mail" icon="mail">Compose Mail</menu-topic>
    <!-- TITLE: CONTRACT -->
    <paper-item disabled>
    </paper-card>

    <paper-card>
      <h1>Contract</h1></paper-item>
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
    <paper-item disabled>
    </paper-card>

    <paper-card>
      <h1>Estimate</h1></paper-item>
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
    </paper-card>
    <a href="https://stackexchange.com/users/9755651/jack-markiewicz"><img src="https://stackexchange.com/users/flair/9755651.png" width="208" height="58" alt="profile for Jack Markiewicz on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Jack Markiewicz on Stack Exchange, a network of free, community-driven Q&amp;A sites"/></a>

  </iron-selector>
</div>

    `
      }

    }

  customElements.define('roofing-menu', RoofingMenu);
