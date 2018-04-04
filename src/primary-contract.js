
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { updateMetadata } from './app/metadata.js';

export class PrimaryContract extends PolymerElement {

  static get is() { return 'primary-contract'; }

  static get properties() {
    return {

      business:String,
      bizAddress:String,
      bizSales:String,
      bizPhone:Number,
      square:         { type:Number, value:999, observer: "_deal" },
      rate:           { type:Number, value:999, observer: "_deal" },
      servicePrice:   { type:Number, observer: "_deal" },
      serviceTaxes:   { type:Number, value:888 },
      serviceDeposit: { type:Number, value:777 },
      businessName:   { type:String, value:"John" },
      warrantyYears:  { type:Number, value:666 }

    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    updateMetadata({
      title: 'Primary Contract',
      description: 'Primary Roofing Contract for Residential Contractors and Customers.',
      url: document.location.href
    });
  }

  ready() {
    super.ready();
    console.log(this.tagName);
  }

  _deal(square, rate, servicePrice) {
     this.servicePrice = this.square * this.rate;
  }

  static get template() {
    return html`

    <style>
    paper-card { background-color: #e8e8e8; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
    .money { border: 3px solid gold; border-radius: 10px; width: 40px; }
    .heed { text-align: right; margin: auto 0px; }
    .tail { font-size: 8px; color: grey; text-align: right; margin: auto; font-style: italic; }
    paper-slider { width: 100%; }
    paper-input {
      --paper-input-container-focus-color: #1abc9c;
    }

    form, table {
      width: 100%;
    }

    #logoBox {
      border: lightblue 3px dotted;
      border-radius: 10px;
    }

    </style>
    <paper-card>
      <h3>Primary Roofing Contract</h3>
      <form>
        <table>
          <tr>
            <td><h3 id="contractName">Contractor:</h3></td>
            <td  id="logoBox" class="tableLeft"><input hidden type="file" id="logoFile" /></td>
          </tr>
          <tr>
            <td colspan="2"><paper-input id="bizName" type="text" label="Business Name:" placeholder="Super Roofing Company xyz." value="{{business}}"></paper-input></td>
          </tr>
          <tr>
            <td colspan="2"><paper-input type="text" label="Business Address:" placeholder="Vancouver, BC" value="{{bizAddress}}"></paper-input></td>
          </tr>
          <tr>
            <td><paper-input type="text" label="Salesperson:" placeholder="Ke\$ha" value="{{bizSales}}"></paper-input></td>
            <td><paper-input type="number" label="Phone Number:" placeholder="555 555 5555" value="{{bizPhone}}"></paper-input></td>
          </tr>
          <tr>
            <td colspan="2"><h3>Customer:</h3></td>
          </tr>
          <tr>
            <td><paper-input type="text" label="Customer:" placeholder="Best Customer" value=""></paper-input></td>
            <td><paper-input type="number" label="Phone Number:" placeholder="555 555 5555" value=""></paper-input></td>
          </tr>
          <tr>
            <td colspan="2"><paper-input type="text" label="Customer Address:" placeholder="Calgary, AB" ></paper-input></td>
          </tr>
        </table>

        <div class="calculator" style="display: grid; grid-template-columns: 120px 1fr 1em;">
          <div class="heed">Total Square:</div>        <paper-slider editable max="250" on-change="_deal" value="{{square}}"></paper-slider>   <div class="tail">dollars</div>
          <div class="heed">Contractor Rate:</div>     <paper-slider editable max="250" on-change="_deal" value="{{rate}}"></paper-slider>     <div class="tail">dollars</div>
        </div>

        <h1>\${{servicePrice}}</h1>

          </form>
            <p>
              The undersigned proposes to furnish all materials and labour necessary to complete all the described work.
              All of the above to be completed in a good manner and workmanlike manner for the sum of
              {{servicePrice}} plus applicable of taxes {{serviceTaxes}}
              Payment made as full.
              Deposit {{serviceDeposit}}
              Balance to be paid in full on completion.
              Any change in work and the price shall be made in writing.
              A {{warrantyYears}} year warranty on all labour by {{businessName}} will be issused after full payment has been received.
            </p>

            {{business}}
            {{bizAddress}}
            {{bizSales}}
            {{bizPhone}}

            <ul>
              <li>
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

              </li>

              <li>
                acceptance

                if the offeree knows of the offer, the offeree manifests an intention to accept, and the acceptance is expressed as an unequivocal and unconditional agreement to the terms of the offer.

                allowing the offeree to accept in a reasonable manner.

                unilateral contracts, offers may only be accepted by the performance or non-performance of a particular act.

                bilateral contracts, offers may only be accepted by a return promise of performance from the offeree.

                acceptance to come in the form of performance or a return promise

                offeree to accept either by promising to perform what the offer requests or by rendering performance, as the offeree chooses.

                acceptance is effective only upon actual receipt by the offeror

                protest, the consumer has effectively communicated a legally binding acceptance of the non-conforming good.

                Acceptance cannot generally be inferred from a party’s silence or inaction

              </li>
              <li>
                consideration

                exchange of values “consideration.”

                currency, promise to perform an act

                uncle’s promise and the nephew’s forbearance lawful consideration.

                performance of the offeree

                in performing the act requested by the offeror
              
              <li>

                mutuality of obligation

                both parties must be bound to perform their obligations

                one party may not be given the absolute and unlimited right to cancel the contract

                one-side arrangements null for lack of mutuality of obligation

                the parties must be careful to limit their discretion to cancel the contract or otherwise not perform

                the right to cancel were conditioned upon the amount, something outside the control

                right to terminate the service short of full performance simply by giving notice of his or her intention to cancel.

              </li>
              <li>

                competency and capacity

                A natural person who enters a contract possesses complete legal capacity to be held liable for the duties he or she agrees to undertake, unless the person is a minor, mentally incapacitated, or intoxicated.



              </li>
              <li>
              
                a written instrument

              </li>
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

  `
  }

}

customElements.define('primary-contract', PrimaryContract);