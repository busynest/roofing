
import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"

export class EmploymentContract extends PolymerElement {

  static get is() { return 'employment-contract'; }

  static get properties() {
    return {
     
    };
  }

  //static get observers() {
  //    return [ 'thingCountChanged' ];
  //}

  constructor() {
    super();
    //console.log('Employment Constructor!');
  }

  connectedCallback() {
    super.connectedCallback();
    //console.log('Employment Connected!');
  }

  ready() {
    super.ready();
    //this.addEventListener('keypress', e => this.handlePress(e));
    //var sq = new OneSquare();
    console.log('Employment Ready!');
  }

  static get template() {
    return `

    <style>
    
    </style>


          <paper-card>
            <h3>Employment Contract</h3>
          </paper-card>

          <paper-card>
            <h3>Roofing Employment Contract</h3>
            <ul>
              <li>Permanent Full Time</li>
              <li>Permanent Part Time</li>
              <li>Fixed Period</li>
              <li>Other</li>
            </ul>
            <ul>
              <li>Job Title and Description</li>
              <li>Compensation</li>
              <li>Place of Work</li>
              <li>Time of Work</li>
              <li>Employee Benefits</li>
              <li>Vacation</li>
              <li>Conflict of Interest</li>
              <li>Termination of Employment</li>
              <li>Severability</li>
              <li>Notices</li>
              <li>Remedies</li>
              <li>Modification of Agreement</li>
              <li>Governing Law</li>
              <li>General Provisions</li>
              <li>Employer</li>
              <li>Employee</li>
            </ul>
          </paper-card>

  `
  }

}

customElements.define('employment-contract', EmploymentContract);