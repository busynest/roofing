import { CSSResultArray, LitElement, PropertyValueMap, TemplateResult, css, html } from 'lit';
import './result-item';
import { property, state } from 'lit/decorators.js';
import { roofingStyles } from './styles';

export class AsphaltFlashing extends LitElement {

  @property() results:Number | any = 0;

  @state() private flashingLength   :Number | any = 10;
  @state() private flashingPrice    :Number | any = 0;

  @state() private gable            :Number | any = 0;
  @state() private gableResult      :Number | any = 0;

  @state() private head             :Number | any = 0;
  @state() private headResult       :Number | any = 0;

  @state() private back             :Number | any = 0;
  @state() private backResult       :Number | any = 0;

  @state() private step             :Number | any = 0;
  @state() private stepResult       :Number | any = 0;

  @state() private valley           :Number | any = 0;
  @state() private valleyResult     :Number | any = 0;

  @state() private chimney          :Number | any = 0;
  @state() private skylights        :Number | any = 0;
  @state() private buying           :Boolean | any = false;

  @state() private price           :Object | any = {
    gable:   10.00,
    head:    10.00,
    back:    15.00,
    step:    .50,
    valley:  50.00
  };

  constructor() {
    super();
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.calculate();
  }

  protected updated(changedProps:any) {
    if (changedProps.has('price')) {
      console.log('price changed');
      this.calculate();
     }
  }

  private changeSkylightNew(e: Event) {
    const value = e.target as HTMLInputElement;
    this.buying = value.checked;
    this.calculate();
  }

  private changeSkylight(e: Event) {
    const value = e.target as HTMLInputElement;
    this.skylights = value.value;
    this.calculate();
  }

  private changeChimney(e: Event) {
    const value = e.target as HTMLInputElement;
    this.chimney = value.value;
    this.calculate();
  }

  private changeValley(e: Event) {
    const value = e.target as HTMLInputElement;
    this.valley = value.value;
    this.valleyResult = Number((this.valleyResult * this.price.valley).toFixed(0));
    this.calculate();
  }

  private changeGable(e: Event) {
    const value = e.target as HTMLInputElement;
    this.gable = value.value;
    this.calculate();
  }

  private changeHead(e: Event) {
    const value = e.target as HTMLInputElement;
    this.head = value.value;
    this.calculate();
  }

  private changeBack(e: Event) {
    const value = e.target as HTMLInputElement;
    this.back = value.value;
    this.calculate();
  }

  private changeStep(e: Event) {
    const value = e.target as HTMLInputElement;
    this.step = value.value;
    this.calculate();
  }

  // _areaChange() {
   // this.materialCalulator(this.chimney, this.skylights,  this.valley, this.head, this.back, this.step, this.gable, this.flashingLength);
  // }

  // Calculate the price for each flashing type
  private calculate() {

    // Chimney step flashing is 4 feet long
    let chimneyStep : Number = this.chimney * 4 ;
    let chimneyHead : Number = this.chimney * 5 ;
    let chimneyBack : Number = this.chimney * 5 ;

    //skylight step flashing is 12 feet long
    let skylightStep : Number = this.skylights * 12 ;
    let skylightHead : Number = this.skylights * 5 ;
    let skylightBack : Number = this.skylights * 5 ;

    // let headFlash     = this.head / this.flashingLength;
    // let backFlash     = this.back / this.flashingLength;
    // let stepFlash     = this.step / 2;

    this.headResult     = (this.head + chimneyHead + skylightHead) / this.flashingLength;
    this.headResult     = Math.ceil(this.headResult);
    let headPrice       = this.headResult * this.price.head;

    this.backResult     = (this.back + chimneyBack + skylightBack) / this.flashingLength;
    this.backResult     = Math.ceil(this.backResult);
    let backPrice       = this.backResult * this.price.back;

    // add 2 step flashing for each linear foot.
    this.stepResult     = Number(this.step); + Number(chimneyStep) + Number(skylightStep);
    this.stepResult     = Math.ceil(this.stepResult * 2);
    let stepPrice       = this.stepResult * this.price.step;

    this.valleyResult   = Math.ceil(this.valley / this.flashingLength);
    let valleyPrice     = this.valleyResult * this.price.valley;

    this.gableResult    = Math.ceil(this.gable / this.flashingLength);
    let gablePrice      = this.gableResult * this.price.gable;
    
    this.results = 0;
    this.results = headPrice + backPrice + stepPrice + valleyPrice + gablePrice;
  }
/*
  private costs(headPrice:any, backPrice:any, stepPrice:any, valleyPrice:any, gablePrice:any) {
    let results = valleyPrice + gablePrice + headPrice + backPrice + stepPrice;
    return results;
  }
*/
  static get styles() : CSSResultArray { return [ roofingStyles, css`

    :host {
      display: grid;
      grid-gap: 12px;
    }

    `
  ]};

lengthChange(e:any) {
  this.flashingLength = e.target.value;
  this.calculate();
}

protected render():TemplateResult {
  return html`

  <style>
    @keyframes slidein {
      from  { transform: scale( .2, .2 ); }
      to    { transform: scale( 1, 1 ); }
    }

    @keyframes slideout {
      from  { transform: scale(  1,   1 ); }
      to    { transform: scale( .2,  .2 ); }
    }

    @media print  { 

    }

    input[type='range']::-webkit-slider-thumb {
      background-color: purple;
    }
  </style>

  <h3>Flashing <span class="money">\$${this.results}</span></h3>
    <!--
    <fieldset class="length">
      <legend>Select Flashing Length</legend>

    </fieldset>
    -->

    <!-- SKYLIGHT -->
    <div class="wrapper">
      <label class="x">
        <div>Skylights: ${this.skylights} <i class="y">ea</i></div>
        <input type="range" id="skylight" max="10" .value="${this.skylights}" @input="${this.changeSkylight}">
      </label>

      <p style="font-size:x-small; padding: 0 8px;">* adding flashing for skylights</p>

      <label class="checkUnder" style="font-size: small;">
        <input type="checkbox" id="skylightNew" @input="${this.changeSkylightNew}">
        Order New Skylights?
        <i class="y">${this.buying ? 'Yes' : 'No'}</i>
      </label>

    </div>

    <!-- CHIMNEY -->
    <div class="wrapper">
      <label class="x">
        <div>Chimney: ${this.chimney} <i class="y">ea</i></div>
        <input type="range" id="chimney"max="10" .value="${this.chimney}" @input="${this.changeChimney}">
      </label>
      <p style="font-size:x-small; padding: 0 8px;">* adding flashing for chimney</p>
    </div>

    <div class="wrapper">

    <label>Flashing Rate per Linear Foot:
      <input type="number" placeholder="Flashing Rate" />
    </label>

    <h4
      style="
        margin: 0;
        font-size: small;
        padding-left: 12px;
        font-weight: 400;
        font-style: italic;
      ">Flashing Length: ${this.flashingLength} feet</h4>

    <div class="length">
      <label style="text-align:center;">8'
        <input type="radio" name="FlashLength" value="8" @input="${this.lengthChange}" ?checked="${this.flashingLength === 8 }">
      </label>

      <label style="text-align:center;">10'
        <input type="radio" name="FlashLength" value="10" @input="${this.lengthChange}" ?checked="${this.flashingLength === 10 }">
      </label>

      <label style="text-align:center;">12'
        <input type="radio" name="FlashLength" value="12" @input="${this.lengthChange}" ?checked="${this.flashingLength === 12 }">
      </label>
    </div>
    
    <!-- VALLEY -->
    <label class="x">
      <div>Valley: ${this.valley} <i class="y">ft</i></div>
      <input type="range" id="valley" max="180" .value="${this.valley}" @input="${this.changeValley}">
    </label>

    <p style="font-size:x-small; padding: 0 8px;">* adding underlayment for valley</p>

    <!-- GABLE -->
    <label class="x">
      <div>Gable Flashing: ${this.gable} <i class="y">ft</i></div>
      <input type="range" id="gableFlash" max="180" .value="${this.gable}" @input="${this.changeGable}">
    </label>

    <p style="font-size:x-small; padding: 0 8px;">* adding starter shingles for gable</p>

    <!-- HEAD FLASHING -->
    <label class="x">
      <div>Head Flashing: ${this.head} <i class="y">ft</i></div>
      <input type="range" id="headFlash" max="180" .value="${this.head}" @input="${this.changeHead}">
    </label>

    <!-- BACK FLASHING -->
    <label class="x">
      <div>Back Flashing: ${this.back} <i class="y">ft</i></div>
      <input type="range" id="backFlash" max="180" .value="${this.back}" @input="${this.changeBack}">
    </label>

    <!-- STEP FLASHING -->
    <label class="x">
      <div>Step Flashing: ${this.step} <i class="y">ft</i></div>
      <input type="range" id="stepFlash" max="180" .value="${this.step}" @input="${this.changeStep}">
    </label>

    </div>
    
    <h4>Flashing Material List</h4>

    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item active id="gb"    product="Gable:"     price="${this.price.gable}"               homework="${this.gableResult}"            unit="units"         @input="${this.priceGable}"     ></result-item>
      <result-item active            product="Front:"     price="${this.price.head}"                homework="${this.headResult}"             unit="units"         @input="${this.priceHead}"     ></result-item>
      <result-item active            product="Back:"      price="${this.price.back}"                homework="${this.backResult}"             unit="units"         @input="${this.priceBack}"     ></result-item>
      <result-item active            product="Step:"      price="${this.price.step}"                homework="${this.stepResult}"             unit="bundles"       @input="${this.priceStep}"     ></result-item>
      <result-item active            product="Valley:"    price="${this.price.valley}"              homework="${this.valleyResult}"           unit="units"         @input="${this.priceValley}"     ></result-item>
    </div>

  `
    }

  private priceGable(e: any) {
    this.price.gable = e.target.price;
    console.log('Gable Price: ',this.price.gable);
    this.requestUpdate('price', null);
  }

  private priceHead(e: any) {
    this.price.head = e.target.price;
    this.requestUpdate('price', null);
  }

  private priceBack(e: any) {
    this.price.back = e.target.price;
  }

  private priceStep(e: any) {
    this.price.step = e.target.price;
  }

  private priceValley(e: any) {
    this.price.valley = e.target.price;
  }

/*
  private priceValley(e: CustomEvent) {
    this.price.valley = e.detail.price;
  }
  */

  }
customElements.define("asphalt-flashing", AsphaltFlashing);

declare global {
  interface HTMLElementTagNameMap {
    "asphalt-flashing": AsphaltFlashing;
  }
}

/*
  :host {
      --secondary-text-color:                 blue;
      --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c *
      --paper-slider-disabled-knob-color:     #e06f50;
      --paper-slider-active-color:            #248746; /* #1abc9c *
      --paper-slider-secondary-color:         #1abc9c;
      --paper-input-container-color:          black;
      --paper-input-container-focus-color:    #1abc9c;
    }

<paper-toggle-button checked="{{flashing}}"></paper-toggle-button>
      flashing:             { type: Boolean,  notify: true, observer: '_flashing', value: false },
*/



/*



/*
private _flashing(
 /* flashingPrice,  price,
  flashingLength,
  valley,         valleyResult,
  gable,          gableFlashing,
  head,           headFlashing,
  back,           backFlashing,
  step,           stepFlashing,
  chimney,        skylights *
) {
    // window.onerror = function(message, file, line, col, error){ console.log(arguments); }

    this.valleyResult     = Number((this.valley                                                                / this.flashingLength).toFixed(0));
    const valleyTotal     = Number((this.valleyResult * this.price.valley).toFixed(0));

    this.gableFlashing    = Number((this.gable                                                                 / this.flashingLength).toFixed(0));
    const gableTotal      = Number((this.gableFlashing * this.price.gable).toFixed(0));

    this.headFlashing     = Number((( this.head        + ( this.chimney  * 5 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    const headTotal       = Number((this.headFlashing * this.price.head).toFixed(0));

    this.backFlashing     = Number((( this.back        + ( this.chimney  * 5 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    const backTotal       = Number((this.backFlashing * this.price.back).toFixed(0));

    this.stepFlashing     = Number((( this.step        + ( this.chimney  * 3 )       + ( this.skylights * 5 )) / this.flashingLength).toFixed(0));
    const stepTotal       = Number((this.stepFlashing * this.price.step).toFixed(0));

    this.flashingPrice    = valleyTotal + gableTotal + headTotal + backTotal + stepTotal;

  }




private valleyCalulator( flashingLength:any, valley:any ) {
  // window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let valleyResult     = Number((valley / flashingLength).toFixed(0));
  console.log("valley results: ", valleyResult);
  this.valleyResult      = Number((valleyResult * this.price.valley).toFixed(0));
  return valleyResult;
  
}
 
private gableCalulator( flashingLength:any, gable:any, ) {
  console.log("gable: ", gable);
  console.log("flashingLength: ", flashingLength);
  // window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let gableFlashing    = Number((gable / flashingLength).toFixed(0));
  console.log("gable results: ", gableFlashing);
  this.gableResult       = Number(( gableFlashing * this.price.gable).toFixed(0));
  return gableFlashing;
}
  
private headCalulator( flashingLength:any, head:any, chimney:any, skylights:any ) {
  // window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let headFlashing = 0;
  headFlashing     = Number((( head + ( chimney * 5 ) + ( skylights * 5 )) / flashingLength).toFixed(0));
  console.log("head results: ", headFlashing);
  this.headResult        = 0;
  this.headResult        = Number((headFlashing * this.price.head).toFixed(0));
  return headFlashing;
}
  
private backCalulator( flashingLength:any, back:any, chimney:any, skylights:any ) {
  // window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let backFlashing = 0;
  backFlashing     = Number((( back + ( chimney * 5 ) + ( skylights * 5 )) / flashingLength).toFixed(0));
  console.log("back results: ", backFlashing);
  this.backResult        = 0;
  this.backResult        = Number(( backFlashing * this.price.back).toFixed(0));
  return backFlashing; 
}
  
private stepCalulator( flashingLength:any, step:any, chimney:any, skylights:any ) {
  // window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let stepFlashing = 0;
  stepFlashing     = Number((( step + ( chimney * 3 ) + ( skylights * 5 )) / flashingLength).toFixed(0));
  console.log("step results: ", stepFlashing);
  this.stepResult       = 0;
  this.stepResult       = Number(( stepFlashing * this.price.step).toFixed(0));
  return stepFlashing;
}

    // window.onerror = function(message, file, line, col, error){ console.log(arguments); }

  // Get input values
  // let flashingLength  = this.shadowRoot?.querySelector('.length') as HTMLInputElement;
  // console.log('flashingLength: ', flashingLength.value);

  /*
    // Sterilize input values
    let valleyTotal     = 0;
    let gableTotal      = 0;
    let headTotal       = 0;
    let backTotal       = 0;
    let stepTotal       = 0;

    this.skylights      = 0;
    this.chimney        = 0;
  */


