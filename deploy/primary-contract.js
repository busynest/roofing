import { LitElement, css, html } from 'lit';
class PrimaryContract extends LitElement {
    constructor() {
        super();
        this.business = "John";
        this.bizAddress = "John";
        this.bizSales = "John";
        this.bizPhone = 0;
        this.square = 999;
        this.rate = 999;
        this.servicePrice = 999;
        this.serviceTaxes = 999;
        this.serviceDeposit = 999;
        this.businessName = "John";
        this.warrantyYears = 999;
    }
    _deal(square, rate) {
        const servicePrice = square * rate;
        console.log(servicePrice);
    }
    render() {
        return html `

    <section>
      <h3>Primary Roofing Contract</h3>
      <form>
        <h3>Contractor:</h3>
        <!-- <input type="file" id="logoFile" /> -->
        <label>Business Name:</label>
        <input id="bizName" type="text" placeholder="Business Name">
        <label>Business Address:</label>
        <input type="text" placeholder="Address">
        <label>Salesperson:</label>
        <input type="text" placeholder="Salesperson">
        <label>Phone Number:</label>
        <input type="tel" placeholder="Telephone">
        <h3>Customer:</h3>
        <label>Customer's Name:</label>
        <input type="text" placeholder="Customer's Name">
        <label>Customer's Address:</label>
        <input type="tel" placeholder="Telephone">
        <label>Customer's Phone Number:</label>
        <input type="text" placeholder="Address" >
      </form>
    </section>

      <section>
        <h2>Roofing Contract</h2>
        
        <p>
          The undersigned proposes to furnish all materials and labour necessary to complete all the described work.
          All of the above to be completed in a good manner and workmanlike manner for the sum of
          ${this.servicePrice} plus applicable of taxes ${this.serviceTaxes}
          Payment made as full.
          Deposit ${this.serviceDeposit}
          Balance to be paid in full on completion.
          Any change in work and the price shall be made in writing.
          A ${this.warrantyYears} year warranty on all labour by ${this.businessName} will be issused after full payment has been received.
        </p>

        <div style="display: grid; grid-template-columns: 1fr;"><h1 class="tPrice">\$${this.servicePrice}</h1></div>

        <div class="calculator" style="display: grid; grid-template-columns: 120px 1fr 1em;">
          <div class="head">Total Square:</div>        <input type="range" editable max="250" on-change="_deal" value="${this.square}">  <div class="tail">dollars</div>
          <div class="head">Contractor Rate:</div>     <input type="range" editable max="250" on-change="_deal" value="${this.rate}">    <div class="tail">dollars</div>
        </div>
  
      </section>

      <section>
        <h2>Preliminary Negotiation</h2>
        Ads before service, keep promise on advertising
                Legal Offer: Promise to, in Exchange, for Promise

                Clear and defined to create power of acceptance

                rejection
                withdrawn
                refusal
                counteroffer

                revoke

                Offers continue untill expiration of the time period specified by the offer

                purchase an “option” to keep the offer open for a designated time
                
          </section>

          <section>
                
                <h2>Acceptance</h2>

                if the offeree knows of the offer, the offeree manifests an intention to accept, and the acceptance is expressed as an unequivocal and unconditional agreement to the terms of the offer.

                allowing the offeree to accept in a reasonable manner.

                unilateral contracts, offers may only be accepted by the performance or non-performance of a particular act.

                bilateral contracts, offers may only be accepted by a return promise of performance from the offeree.

                acceptance to come in the form of performance or a return promise

                offeree to accept either by promising to perform what the offer requests or by rendering performance, as the offeree chooses.

                acceptance is effective only upon actual receipt by the offeror

                protest, the consumer has effectively communicated a legally binding acceptance of the non-conforming good.

                Acceptance cannot generally be inferred from a party’s silence or inaction

          </section>

          <section>

          <h2>consideration</h2>

                exchange of values “consideration.”

                currency, promise to perform an act

                uncle’s promise and the nephew’s forbearance lawful consideration.

                performance of the offeree

                in performing the act requested by the offeror
              
          </section>

          <section>

          <h2>mutuality of obligation</h2>

                both parties must be bound to perform their obligations

                one party may not be given the absolute and unlimited right to cancel the contract

                one-side arrangements null for lack of mutuality of obligation

                the parties must be careful to limit their discretion to cancel the contract or otherwise not perform

                the right to cancel were conditioned upon the amount, something outside the control

                right to terminate the service short of full performance simply by giving notice of his or her intention to cancel.

      </section>

      <section>

                <h2>competency and capacity</h2>

                A natural person who enters a contract possesses complete legal capacity to be held liable for the duties he or she agrees to undertake, unless the person is a minor, mentally incapacitated, or intoxicated.



                </section>

                <section>
              
                a written instrument

                </section>
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
              <li>Subcontractors</li>
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
            <button raised class="information" onclick="printButton()">Print</button>
          </section>

  `;
    }
}
PrimaryContract.styles = css `
    :host {
      display:    none;
      box-sizing: border-box;
    }
    :host([active]) { display:grid; }
    .money { border: 3px solid gold; border-radius: 10px; width: 40px; }
    .head { text-align: right; margin: auto 0px; }
    .tail { font-size: 8px; color: grey; text-align: right; margin: auto; font-style: italic; }
  
    form, table {
      width: 100%;
    }

    #logoBox {
      border: lightblue 3px dotted;
      border-radius: 10px;
    }

    .tPrice{
      margin-right: 1em ;
      text-align: right;
    }

    form {
      display: grid;
    }
  
  `;
export { PrimaryContract };
customElements.define("primary-contract", PrimaryContract);
//# sourceMappingURL=primary-contract.js.map