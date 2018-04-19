define(["exports","./application-shell.js","./metadata.js"],function(a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.WarrantyContract=a.$warrantyContract=void 0;class c extends b.PolymerElement{static get is(){return"warranty-contract"}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}ready(){super.ready(),console.log(this.tagName)}static get template(){return`

    <style>
    
    </style>


          <paper-card>
            <h3>Roofing Warranty</h3>
          </paper-card>

  `}}a.WarrantyContract=c,customElements.define("warranty-contract",c);a.$warrantyContract={WarrantyContract:c}});