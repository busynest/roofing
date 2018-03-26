
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { updateMetadata } from './metadata.js';

export class PrimaryContract extends PolymerElement {

  static get is() { return 'primary-contract'; }

  static get properties() {
    return {
     
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
    console.log('Primary Contract is Ready!');
  }

  static get template() {
    return html`

    <style>
    paper-card { background-color: white; padding: 20px; margin: 0px 0px 5px 0px; width: 100%; }
    .money { border: 3px solid gold; border-radius: 10px; width: 40px; }

    </style>
        <paper-card>
        <!--
            <script>
              var y = document.getElementById("servicePrice").innerHTML = "1,000.00";
              $("#serviceTaxes").innerHTML = "1,000.00";
              $("#serviceDeposit").innerHTML = "1,000.00";
              $("#businessName").innerHTML = "1,000.00";
              $("#warrantyYears").innerHTML = "10"
            </script>
          -->

            <h3>Primary Roofing Contract</h3>
            <roofing-administration></roofing-administration>
            <p>
              The undersigned proposes to furnish all materials and labour necessary to complete all the described work.
              All of the above to be completed in a good manner and workmanlike manner for the sum of
              $<span id="servicePrice" class="money">$1,000.00</span> plus applicable of taxes $<span id="serviceTaxes" class="money">$1,000.00</span>
              Payment made as full.
              Deposit $<span id="serviceDeposit" class="money">$1,000.00</span>
              Balance to be paid in full on completion.
              Any change in work and the price shall be made in writing.
              A <span id="warrantyYears"  class="money">10</span> year warranty on all labour by <span id="businessName" class="money">$1,000.00</span> will be issused after full payment has been received.

            </p>
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