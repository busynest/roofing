define(["exports","./application-shell.js","./metadata.js"],function(a,b,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Page404=a.$page$404=void 0;class d extends b.PolymerElement{static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),(0,c.updateMetadata)({title:"Page 404",description:"Roofing Contractor Help",url:document.location.href})}ready(){super.ready(),console.log(this.tagName)}static get template(){return`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}a.Page404=d,customElements.define("page-404",d);a.$page$404={Page404:d}});