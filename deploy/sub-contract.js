import { LitElement, css, html } from 'lit';
class SubContract extends LitElement {
    constructor() {
        super();
        this.business = "";
        this.bizAddress = "Vancouver, BC";
        this.bizSales = "Ke\$ha";
        this.bizPhone = 5555555555;
        this.square = 999;
        this.rate = 999;
        this.servicePrice = 999;
        this.serviceTaxes = 999;
        this.businessName = "Super Roofing Company xyz.";
        this.warrantyYears = 999;
    }
    _deal(square, rate) {
        this.servicePrice = square * rate;
    }
    render() {
        return html `

    <section>
      <h3>Roofing Subontract</h3>
      <form>
        <h3>Contractor:</h3>
        <label for="bizName">Business Name:</label>
        <input id="bizName" type="text" label="Business Name:" placeholder="Business Name">
        <label for="bizAddress">Business Address:</label>
        <input type="text" label="Business Address:" placeholder="Address">
        <label for="bizSales">Salesperson:</label>
        <input type="text" label="Salesperson:" placeholder="Salesperson">
        <label for="bizPhone">Phone Number:</label>
        <input type="number" label="Phone Number:" placeholder="Telephone">
        <h3>Subcontractor:</h3>
        <label for="customer">Customer Name:</label>
        <input type="text" label="Customer:" placeholder="Customer Name">
        <label for="customerAddress">Customer Address:</label>
        <input type="number" label="Phone Number:" placeholder="Telephone">
        <label for="customerAddress">Customer Address:</label>
        <input type="text" label="Customer Address:" placeholder="Address" >
      </form>

      <div class="calculator" style="display: grid; grid-template-columns: 120px 1fr 1em;">
        <div class="heed">Total Square:</div>        <input type="range" editable max="250" @change="${this._deal}" value="${this.square}"></paper-slider>   <div class="tail">dollars</div>
        <div class="heed">Contractor Rate:</div>     <input type="range" editable max="250" @change="${this._deal}" value="${this.rate}"></paper-slider>     <div class="tail">dollars</div>
      </div>

      <h1>\$${this.servicePrice}</h1>
      
            <p>

              The undersigned proposes to provide all labour necessary to complete all the described work.

              All of the above to be completed in a good manner and workmanlike manner for the sum of
              ${this.servicePrice} plus applicable of taxes ${this.serviceTaxes}

              Payment to be paid in full on completion.

              Any change in work and the price shall be made in writing.

              A {{warrantyYears}} year warranty on all labour by ${this.businessName} will be issused after full payment has been received.
              
            </p>
<!--
            \${this.business}
            \${this.bizAddress}
            \${this.bizSales}
            \${this.bizPhone}
  -->

            <p>
                Preliminary Negotiation: Ads before service, keep promise on advertising
                Legal Offer: Promise to, in Exchange, for Promise

                Clear and defined to create power of acceptance

                rejection
                withdrawn
                refusal
                counteroffer

                revoke

                Offers continue untill expiration of the time period specified by the offer

                purchase an “option” to keep the offer open for a designated time

                </p>

      
                <h2>Acceptance</h2>
                <p>
                OFFER: 

                unilateral contracts, offers may only be accepted by the performance or non-performance of a particular act.

                bilateral contracts, offers may only be accepted by a return promise of performance from the offeree.

                acceptance to come in the form of performance or a return promise
                </p>



                <h2>Consideration</h2>
                <p>
                exchange of values “consideration.”

                currency, promise to perform an act

                uncle’s promise and the nephew’s forbearance lawful consideration.

                performance of the offeree

                in performing the act requested by the offeror
                </p>


                <h2>Mutuality of Obligation</h2>
                <p>

                both parties must be bound to perform their obligations

                one party may not be given the absolute and unlimited right to cancel the contract

                one-side arrangements null for lack of mutuality of obligation

                the parties must be careful to limit their discretion to cancel the contract or otherwise not perform

                the right to cancel were conditioned upon the amount, something outside the control

                right to terminate the service short of full performance simply by giving notice of his or her intention to cancel.

                </p>


                <h2>competency and capacity</h2>
                <p>
                A natural person who enters a contract possesses complete legal capacity to be held liable for the duties he or she agrees to undertake, unless the person is a minor, mentally incapacitated, or intoxicated.




              
                a written instrument
                </p>

              <li>Contract Documents</li>
              <li>Description of work</li>
              <li>Delays</li>
              <li>Price and Terms of Payment</li>
              <li>Holdbacks</li>
              <li>Permits & Inspections</li>
              <li>Changes in Work</li>
              <li>Utilities</li>
              <li>Standards of Work</li>
              <li>Warranty</li>
              <li>Condition Of Work Site</li>
              <li>Insurance</li>
              <li>Compliance with Laws</li>
              <li>Subcontractos</li>
              <li>Default by Customer</li>
              <li>Default by Contractor</li>
              <li>Signs</li>
              <li>Dispute Resolution</li>
              <li>Time of Essence</li>
              <li>Governing Law</li>
              <li>Assignment</li>
              <li>Entire Agreement</li>
              <li>Ability to Perform Obligations</li>
            </ul>
            <paper-button raised class="information" onclick="printButton()"><iron-icon icon="icons:print"></iron-icon>Print</paper-button>
          </paper-card>

  `;
    }
}
SubContract.styles = css `
    :host {
      display:    none;
      box-sizing: border-box;
    }
    :host([active]) { display:grid; }
    section { background-color: #e8e8e8; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
    .money { border: 3px solid gold; border-radius: 10px; width: 40px; }
    .heed { text-align: right; margin: auto 0px; }
    .tail { font-size: 8px; color: grey; text-align: right; margin: auto; font-style: italic; }

    form, table {
      width: 100%;
    }

    #logoBox {
      border: lightblue 3px dotted;
      border-radius: 10px;
    }

    form {
      display: grid;
    }

  `;
export { SubContract };
customElements.define("sub-contract", SubContract);
//# sourceMappingURL=sub-contract.js.map