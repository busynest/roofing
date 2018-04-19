import{PolymerElement,html,updateMetadata}from"./application-shell.js";class SendFeedback extends PolymerElement{static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback(),updateMetadata({title:"Roofing",description:"Roofing documentation to simply help roofing contractors to complete residential roofing contracts, roofing purchase orders and roofing warranties. Send roofing documents to suppliers and customers.",url:document.location.href})}ready(){super.ready()}static get template(){return html`

    <style>
      paper-card { background-color: white; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }

      b { margin-left: 1em; }
      p { margin-left: 2em; }
    </style>

    <paper-card>
<!--
      <p>
        A set of ducuments to help Roofing Contractors and Estimators with filling out Residential Contracts, Purchase Orders and Roofing Warranties.
        Share these documents between Customers & Suppliers.
      </p>
-->
      <h2>Roofing Contract</h2>

      <div>
        <b>Preliminary</b><p></p>
        <b>acceptance</b><p></p>
        <b>consideration</b><p></p>
        <b>mutuality</b><p></p>
        <b>competency and capacity</b><p></p>
        <b>a written instrument</b><p></p>
        <b>Contract Documents</b><p></p>
        <b>Description of work</b><p></p>
        <b>Delays</b><p></p>
        <b>Price and Terms of Payment</b><p></p>
        <b>Holdbacks</b><p></p>
        <b>Permits & Inspections</b><p></p>
        <b>Changes in Work</b><p></p>
        <b>Utilities</b><p></p>
        <b>Standards of Work</b><p></p>
        <b>Warranty</b><p></p>
        <b>Condition Of Work Site</b><p></p>
        <b>Insurance</b><p></p>
        <b>Compliance with Laws</b><p></p>
        <b>Subcontractors</b><p></p>
        <b>Default by Customer</b><p></p>
        <b>Default by Contractor</b><p></p>
        <b>Signs</b><p></p>
        <b>Dispute Resolution</b><p></p>
        <b>Time of Essence</b><p></p>
        <b>Governing Law</b><p></p>
        <b>Assignment</b><p></p>
        <b>Entire Agreement</b><p></p>
        <b>Ability to Perform Obligations</b><p></p>
      </div>

      <h3></h3>

      <p>
      

      </p>
      
      <h2>Roofing Subcontract</h2>

      <p>
      

      </p>
      
      <h2>Roofing Purchase Order</h2>

      <div>
        <b>Shingles</b><p>Three bundles per square / Four bundles per square</p>
        <b>Conversion</b><p>Retrofitting an existing roof from cedar shakes to asphalt shingles reqires an additional installation of 5/8 plywood.</p>
        <b>Waste</b><p>Bin size, Drop zone, and walking distance.</p>
        <b>Ventilation</b><p>Box ventilation or Ridge Ventilation, Soffit ventilation.</p>
        <b>Underlay</b><p>15 pound felt covers 400 square feet. 30 pound felt covers 200 square feet. Synthetic. Sticky waterproof.</p>
        <b>Flashing</b><p>Head Flashing. Back Flashing. Step Flashing. Gable Flashing. Valley Flashing.</p>
        <b>Skylights</b><p>Flashing</p>
        <b>Chimney</b><p>Flashing</p>
      </div>
      
      <h3>Roofing Warranty</h3>

      <p>
      

      </p>


    </paper-card>


  `}}customElements.define("send-feedback",SendFeedback);var sendFeedback={SendFeedback:SendFeedback};export{sendFeedback as $sendFeedback,SendFeedback};