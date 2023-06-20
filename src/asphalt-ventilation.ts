
import { CSSResultArray, LitElement, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { roofingStyles } from './styles';
import './result-item';

export class AsphaltVentilation extends LitElement {
        
  @property() results: Number | any =0;
  
  // @state() private ventilation: Boolean= false;
  // @state() private ventilationPrice: Number | any=0;

  @state() private ridge: Number | any=0;
  @state() private ridgeVentResult: Number | any=0;
  @state() private ridgeCost: Number | any=0;

  @state() private box: Number | any=0;
  // @state() private boxVentResult: Number | any=0;
  @state() private boxCost: Number | any=0;

  @state() private bVent: Number | any=0;
  // @state() private bVentResult: Number | any=0;
  @state() private bVentCost: Number | any=0;

  @state() private pStack: Number | any=0;
  // @state() private pStackResult: Number | any=0;
  @state() private pStackCost: Number | any=0;

  @state() private gooseneck: Number | any=0;
  // @state() private gooseneckResult: Number | any=0;
  @state() private gooseneckCost: Number | any=0;

  @state() private asphaltSealant: Number | any=0;
  // @state() private sealantResult: Number | any=0;
  @state() private sealantCost: Number | any=0;

  @state() private price: Object | any = {
    gooseneck:          80,
    sealant:            15,
    pStack:             18,
    bVent:              40,
    boxVent:            20,
    ridgeVent:          279
  };



//static get observers() {
//    return [ 'thingCountChanged' ];
//}

constructor() {
  super();
  //console.log('Menu-Item Constructor!');
}


protected updated(changedProps:any) {
  if (changedProps.has('price')) {
    console.log('price changed');
    this.calculate();
   }
}

_areaChange(event:Event) {
  // this._ventilation(event);
  console.log(event);
}
/*
changeVentilation() {
  const value = this.shadowRoot?.querySelector("#ventType") as HTMLInputElement;
  this.ventilation = value.checked;
  this.calculate();
}
*/
changeRidge(e: Event) {
  const value = e.target as HTMLInputElement;
  this.ridge = value.value;
  this.calculate();
}

changeBox(e: Event) {
  const value = e.target as HTMLInputElement;
  this.box = value.value;
  this.calculate();
}

changeBvent(e: Event) {
  const value = e.target as HTMLInputElement;
  this.bVent = value.value;
  this.calculate();
}

changePstack(e: Event) {
  const value = e.target as HTMLInputElement;
  this.pStack = value.value;
  this.calculate();
}

changeGooseneck(e: Event) {
  const value = e.target as HTMLInputElement;
  this.gooseneck = value.value;
  this.calculate();
}

changeSealant(e: Event) {
  const value = e.target as HTMLInputElement;
  this.asphaltSealant = value.value;
  this.calculate();
}

  calculate() {
    this.ridgeVentResult  = this.ridge / 40;
    this.costs();
  }

  private costs() {
    this.boxCost            = this.box                * this.price.boxVent;
    this.ridgeCost          = this.ridgeVentResult    * this.price.ridgeVent;
    this.bVentCost          = this.bVent              * this.price.bVent;
    this.pStackCost         = this.pStack             * this.price.pStack;
    this.gooseneckCost      = this.gooseneck          * this.price.gooseneck; 
    this.sealantCost        = this.asphaltSealant     * this.price.sealant;

    this.results   = 0;
    this.results   = this.bVentCost + this.pStackCost + this.gooseneckCost + this.ridgeCost + this.boxCost + this.sealantCost;
    this.results   = Number(this.results).toFixed(0);
  }

  static get styles() : CSSResultArray { return [ roofingStyles, css`

  :host {
    display:grid;
    grid-gap:12px;
  }

  `
  ]};

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
      .wrapper { display: none!important; }
      h3, h4 { display: none!important; }
    }

  </style>

  <h3 class="title">Ventilation <span class="money">\$${this.results}</h3>


  <!--
    <fieldset>
      <legend>Ridge Ventilation</legend>
      <label class="check"style="grid-column: 1/4;">
        Ventilation Type:
        <i class="y">\${this.ventilation ? 'Ridge' : 'Box'}</i>
        <input type="checkbox" id="ventType" ?checked="\${this.ventilation}" @input="\${this.changeVentilation}">
      </label>
    </fieldset>
  -->
  <div class="wrapper">
      <!-- RIDGE VENTILATION -->
      <label class="x">
        <div>Ridge Vent: ${this.ridge} <i class="y">ft</i></div>
        <input type="range" .value="${this.ridge}" max="100" @input="${this.changeRidge}" editable>
      </label>
  
      <!-- BOX VENTS -->
      <label class="x">
        <div>Box Ventilation: ${this.box} <i class="y">ea</i></div>
        <input type="range" .value="${this.box}" max="25" @input="${this.changeBox}" editable>
      </label>
  
      <!-- B VENT -->
      <label class="x">
        <div>B-Vent: ${this.bVent} <i class="y">ea</i></div>
        <input type="range" id="bv" .value="${this.bVent}" max="12" @input="${this.changeBvent}" editable>
      </label>
  
      <!-- STACK-->
      <label class="x">
        <div>Plumbing Stack: ${this.pStack} <i class="y">ea</i></div>
        <input type="range" id="ps" .value="${this.pStack}" max="24" @input="${this.changePstack}" editable>
      </label>
    
  
      <!-- GOOSENECK -->
      <label class="x">
        <div>Gooseneck: ${this.gooseneck} <i class="y">ea</i></div>
        <input type="range" id="gn" .value="${this.gooseneck}" max="12" @input="${this.changeGooseneck}" editable>
      </label>
  
      <!-- SEALANT -->
      <label class="x">
        <div>Sealant: ${this.asphaltSealant} <i class="y">ea</i></div>
        <input type="range" id="sl" .value="${this.asphaltSealant}" max="24" @input="${this.changeSealant}" editable>
      </label>

      </div>

      <h4>Ventilation Material List</h4>

      <div style="display: grid; grid-template-columns: 1fr;">
        <result-item active            product="Ridge Ventilation:"    homework="${this.ridgeVentResult}"      unit="boxes"    price="${this.price.ridgeVent}" @input="${this.priceRidge}" ></result-item>
        <result-item active            product="Box Ventilation:"      homework="${this.box}"                  unit="units"    price="${this.price.boxVent}"   @input="${this.priceBox}" ></result-item>
        <result-item active            product="Gas Vent type-B:"      homework="${this.bVent}"                unit="units"    price="${this.price.bVent}"     @input="${this.priceBvent}" ></result-item>
        <result-item active            product="Plumbing Vent:"        homework="${this.pStack}"               unit="units"    price="${this.price.pStack}"    @input="${this.pricePstack}" ></result-item>
        <result-item active            product="Gooseneck:"            homework="${this.gooseneck}"            unit="units"    price="${this.price.gooseneck}" @input="${this.priceGoose}" ></result-item>
        <result-item active            product="Caulking:"             homework="${this.asphaltSealant}"       unit="tubes"    price="${this.price.sealant}"   @input="${this.priceSealant}" ></result-item>
      </div>

<!--
  </section>
-->
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result  "id="rx"    product="Ridge Ventilation:"     homework="{{ridgeVentResult}}"    unit="boxes"></result-print>
    <result-print class="result  "id="bx"    product="Box Ventilation:"       homework="{{boxVentResult}}"      unit="units"></result-print>
    <result-print class="result"           product="Gas Vent type-B:"         homework="{{bVentResult}}"        unit="units"></result-print>
    <result-print class="result"           product="Plumbing Vent:"           homework="{{pStackResult}}"       unit="units"></result-print>
    <result-print class="result"           product="Gooseneck:"               homework="{{gooseneckResult}}"    unit="units"></result-print>
  </div>
-->
  `
    }

    private priceRidge(e:any) {
      this.price.ridgeVent = e.target.price;
      this.requestUpdate('price', null);
    }

    private priceBox(e:any) {
      this.price.boxVent = e.target.price;
      this.requestUpdate('price', null);
    }

    private priceBvent(e:any) {
      this.price.bVent = e.target.price;
      this.requestUpdate('price', null);
    }

    private pricePstack(e:any) {
      this.price.pStack = e.target.price;
      this.requestUpdate('price', null);
    }

    private priceGoose(e:any) {
      this.price.gooseneck = e.target.price;
      this.requestUpdate('price', null);
    }

    private priceSealant(e:any) {
      this.price.sealant = e.target.price;
      this.requestUpdate('price', null);
    }
    
  }

customElements.define("asphalt-ventilation", AsphaltVentilation);

declare global {
  interface HTMLElementTagNameMap {
    "asphalt-ventilation": AsphaltVentilation;
  }
}


/*
  :host {
    --secondary-text-color:                 blue;
    --paper-slider-knob-color:              #e06f50; /* #50e0d1;  #1abc9c *
    --paper-slider-active-color:            #248746; /* #1abc9c *
    --paper-slider-secondary-color:         #1abc9c;
    --paper-input-container-color:          black;
    --paper-input-container-focus-color:    #1abc9c;
  }
*/