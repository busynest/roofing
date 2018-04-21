define(["exports","./application-shell.js","./metadata.js"],function(a,b,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.WrongPage=a.$wrongPage=void 0;class d extends b.PolymerElement{static get is(){return"wrong-page"}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),(0,c.updateMetadata)({title:"Wrong Page",description:"Roofing Contractor Help",url:document.location.href})}ready(){super.ready(),console.log(this.tagName)}static get template(){return`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}a.WrongPage=d,customElements.define(d.is,d);a.$wrongPage={WrongPage:d}});