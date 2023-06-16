import { CSSResultArray, LitElement, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import './result-item';
import { roofingStyles } from './styles';
import { ResultItem } from './result-item';
// import { asphaltRoof } from './a3-functions';

export class AsphaltRoofing extends LitElement {

  @property({type:Number})results: Number = 0;

  /* AREA */
  @state() private squarefeet: Number | any  = 0;
  @property({type:Number}) private square: Number | any  = 0;

  /* CONVERSION */
  @state() private conversion: Boolean= false;
  @state() private plywoodResult: Number | any  = 0;
  @state() private plywoodTotal: Number | any  = 0;
  @state() private sheathingNailResult: Number | any  = 0;
  @state() private sheathingNailTotal: Number | any  = 0;

  /* SHINGLES */
  @state() private bundles: Boolean= false;
  @state() private shingles3Result: Number | any  = 0;
  @state() private shingles3Total: Number | any  = 0;
  @state() private shingles4Result: Number | any  = 0;
  @state() private shingles4Total: Number | any  = 0;
  @state() private roofNailResult: Number | any  = 0;
  @state() private roofNailTotal: Number | any  = 0;

  @state() private starters: Number | any  = 0;
  @state() private startersResult: Number | any  = 0;
  @state() private startersTotal: Number | any  = 0;

  /* CAPPING */
  @state() private cap: Number | any  = 0;
  @state() private cappingResult: Number | any  = 0;
  @state() private cappingTotal: Number | any  = 0;

  /* FELT */
  @state() private felt15Result: Number | any  = 0;
  @state() private felt15Total: Number | any  = 0;

  @state() private felt30Result: Number | any  = 0;
  @state() private felt30Total: Number | any  = 0;

  @state() private convert :Boolean | any = false;

  @state() private price: Object | any  = {
    plywood:          34,
    sheathingNail:    110,
    roofingNail:      60,
    shingles3:        42,
    shingles4:        42,
    starters:         50,
    capping:          35,
    felt15:           60,
    felt30:           60
  };

  constructor() {
    super();
  }

  private actions() {
    this._asphaltRoof();
  }

  protected updated(changedProps:any) {
    if (changedProps.has('price')) {
      console.log('price changed');
      this.actions();
     }
  }

  protected firstUpdated(): void {
    this.actions();
  }

  private changeConversion(e: Event) {
    const value = e.target as HTMLInputElement;
    this.conversion = value.checked;
    this.actions();
  }

  private changeBundles(e: Event) {
    const value = e.target as HTMLInputElement;
    this.bundles = value.checked;
    this.actions();
  }

  private changeSquare(e: Event) {
    const value = e.target as HTMLInputElement;
    this.square = value.value;
    this.squarefeet = this.square * 100;
    this.actions();
  }

  private changeStarters(e: Event) {
    const value = e.target as HTMLInputElement;
    this.starters = value.value;
    this.actions();
  }

  private changeCapping(e: Event) {
    console.log('change cap: ',this.cap);
    const value = e.target as HTMLInputElement;
    this.cap = value.value;
    console.log('change cap: ',this.cap);
    this.actions();
  }

  private _asphaltRoof() {

    // 1 STARTERS - 1 Bundle PER 105 LINEAR FEET - Starter Strip Plus Shingles 
    this.startersResult   = Math.ceil(this.starters / 105);
    this.startersTotal    = Math.round(this.price.starters * this.startersResult);

    // 2 CAPPING - 1 BUNDLE PER 20 LINEAR FEET - Hip and Ridge Shingles
    this.cappingResult    = Math.ceil(this.cap / 20); //.625;// +  1;
    this.cappingTotal     = Math.round(this.price.capping * this.cappingResult);

    // 3 SHINGLE NAILS - 1 BOX PER 4 SQUARES
    this.roofNailResult   = Math.ceil(this.squarefeet / 400);//  * 320) / 8800;// 100 + 1;// 7200
    this.roofNailTotal    = Math.round(this.price.roofingNail * this.roofNailResult);

    // 4 FELT 15 - 1 ROLL PER 4 SQUARES
    this.felt15Result     = Math.ceil(this.squarefeet / 400);
    this.felt15Total      = Math.round(this.price.felt15 * this.felt15Result);

    // 5 FELT 30 - 1 ROLL PER 2 SQUARES
    this.felt30Result     = Math.ceil(this.starters / 200);
    this.felt30Total      = Math.round(this.price.felt30 * this.felt30Result);

    // Plywood Conversion
    if ( this.conversion === true  )  { 
      // 3 Plywood per Square
      this.plywoodResult          = Math.ceil(this.squarefeet / 32);
      this.plywoodTotal           = Math.round(this.price.plywood * this.plywoodResult);
      // Sheathing Nails per Square
      this.sheathingNailResult    = Math.ceil(this.squarefeet / 400); // * 320) / 7200; //+ 1;
      this.sheathingNailTotal     = Math.round(this.price.sheathingNail * this.sheathingNailResult);
    };

    // 3 Pack Shingles per Square
    if ( this.bundles === false )     {
      this.shingles3Result   = Math.ceil(this.squarefeet / 32);
      this.shingles3Total    = Math.round(this.price.shingles3 * this.shingles3Result);
    };

    // 4 Pack Shingles per Square
    if ( this.bundles === true )      {
      this.shingles4Result   = Math.ceil(this.squarefeet / 25);
      this.shingles4Total    = Math.round(this.price.shingles4 * this.shingles4Result);
    };

    this.results = 0
    this.results = this.totals(this.startersTotal, this.cappingTotal, this.roofNailTotal, this.felt15Total, this.felt30Total, this.shingles3Total, this.shingles4Total, this.plywoodTotal, this.sheathingNailTotal, this.bundles, this.conversion);
    // this.dispatchEvent(new CustomEvent('asphalt-roof', { detail: this.results }));
  }

private totals(startersTotal:any, cappingTotal:any, roofNailTotal:any,felt15Total:any, felt30Total:any, shingles3Total:any, shingles4Total:any, plywoodTotal:any, sheathingNailTotal:any, bundles:any, conversion:any) {

    let results = 0;

    results = 
      roofNailTotal +
      startersTotal +
      cappingTotal +
      felt15Total +
      felt30Total;
    
    if (this.bundles === false) {
      results = results + shingles3Total;
    }

    if (this.bundles === true) {
      results = results + shingles4Total;
    }

    if (this.conversion === true) {
      results = results + plywoodTotal + sheathingNailTotal;
    }

    return results;
}

  static get styles() : CSSResultArray { return [ roofingStyles, css`

    :host{
      display: grid;
      grid-gap: 12px;
    }

    .ridge { display:none; }
    .ridge[data-active] {display: grid;}

    h3{
      margin-bottom: 0;
    }

`
  ]};

protected render(): TemplateResult {
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
  </style>

  <h3>Roofing <span class="money">\$${this.results}</span></h3>

  <div class="wrapper">

    <label>Labour Rate per Square:
      <input type="number"  placeholder="Labour Rate"  />
    </label>
    

    <!-- Square Feet -->
    <label style="display:grid;">
      <div>Roof Area: ${this.square} <i class="y">Square</i></div>
      <input
        type="range"
        value="${this.squarefeet}"
        max="60"
        @input="${this.changeSquare}">
    </label>

    <p style="font-size:x-small; padding: 0 8px;">* adding Flet-15, and Roofing Shingles, Roofing Nails</p>

    <!-- Bundles -->
    <label class="checkUnder">
      <input type="checkbox" ?checked="${this.bundles}" @input="${this.changeBundles}">
      Bundles per Square (3/4)
      <i class="y">${this.bundles ? '4' : '3'}</i>
    </label>
  
    <!-- Waste -->
    <label class="checkUnder">
      <input type="checkbox">
      add 10% for Waste?
      <i class="y">${this.conversion ? 'Yes' : 'No'}</i>
    </label>

    <!-- Conversion -->
    <label class="checkUnder">
      <input type="checkbox" ?checked="${this.conversion}" @input="${this.changeConversion}">
      Plywood Conversion?
      <i class="y">${this.conversion ? 'Yes' : 'No'}</i>
    </label>
    <p style="font-size:x-small; padding: 0 8px;">* Plwood conversion adds 3/8 Plywood, and Sheathing Nails</p>
  
  </div>

    <!-- Starters -->
    <label class="x wrapper">
      <div>Eaves / Starter Rows: ${this.starters} <i class="y">ft</i></div>
      <input
        type="range"
        .value="${this.starters}"
        max="800"
        @input="${(e:any)=>{this.starters = e.target.value; this._asphaltRoof();}}">
      <p style="font-size:x-small; padding: 0 8px;">* adding Flet-30, and Starter Shingles</p>
    </label>

    <!-- Capping -->
    <label class="x wrapper">

    <label>Capping Rate per Linear Foot:
      <input type="number" placeholder="Capping Rate" />
    </label>

      <div>Hip & Ridge Capping: ${this.cap} <i class="y">ft</i></div>
      <input
        type="range"
        .value="${this.cap}"
        max="800"
        @input="${(e:any)=>{this.cap = e.target.value; this._asphaltRoof();}}">
    </label>
<!--
    <p style="font-size:x-small; padding: 0 8px;">* 20 Leanear Feet per </p>
-->
    <h4>Roofing Material List</h4>

    <!-- Result List -->
    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item ?active="${this.conversion === true}"            product="Plywood:"          homework="${this.plywoodResult}"          unit="sheets"       .price="${this.price.plywood}"         @input="${this.pricePly}"></result-item>
      <result-item ?active="${this.conversion === true}"            product="Sheathing Nails:"  homework="${this.sheathingNailResult}"    unit="boxes"        .price="${this.price.sheathingNail}"   @input="${this.priceSeath}"></result-item>
      <result-item ?active="${this.bundles === false}"              product="Shingles 3 per SQ:"    homework="${this.shingles3Result}"        unit="bundles"      .price="${this.price.shingles3}"       @input="${this.price3s}"></result-item>
      <result-item ?active="${this.bundles === true}"               product="Shingles 4 per SQ:"    homework="${this.shingles4Result}"        unit="bundles"      .price="${this.price.shingles4}"       @input="${this.price4s}"></result-item>
      <result-item active                                           product="Roofing Nails:"    homework="${this.roofNailResult}"         unit="boxes"        .price="${this.price.roofingNail}"     @input="${this.priceNail}"></result-item>
      <result-item active                                           product="Starters:"         homework="${this.startersResult}"         unit="bundles"      .price="${this.price.starters}"        @input="${this.priceStarter}"></result-item>
      <result-item active                                           product="Capping:"          homework="${this.cappingResult}"          unit="bundles"      .price="${this.price.capping}"         @input="${this.priceCap}"></result-item>
      <result-item active                                           product="15 Pound Felt:"    homework="${this.felt15Result}"           unit="rolls"        .price="${this.price.felt15}"          @input="${this.pricefelt15}"></result-item>
      <result-item active                                           product="30 Pound Felt:"    homework="${this.felt30Result}"           unit="rolls"        .price="${this.price.felt30}"          @input="${this.pricefelt30}"></result-item>
    </div>

  `

    }

    private updateObject(e:Event) {
     /* this.price = {
        ...this.price,
        
      };
    */
      this.requestUpdate('price', null);

    }

    pricePly(e: any){
      this.price.plywood = e.target.price;
      this.requestUpdate('price', null);}

    priceSeath(e: any){
      this.price.sheathingNail = e.target.price;
      this.requestUpdate('price', null);}

    price3s(e:any){
      let customElement = e.target as ResultItem;
      let myNumberValue : Number = customElement.price;
      this.price.shingles3 = Number(myNumberValue);
      this.requestUpdate('price', null);
    }
    price4s(e: any){
      this.price.shingles4 = e.target.price;
      this.requestUpdate('price', null);
    }
    priceNail(e: any){
      this.price.roofingNail = e.target.price;
      this.requestUpdate('price', null);}

    priceStarter(e: any){
      this.price.starters = e.target.price;
      this.requestUpdate('price', null);}

    priceCap(e: any){
      this.price.capping = e.target.price;
      this.requestUpdate('price', null);}

    pricefelt15(e: any){
      this.price.felt15 = e.target.price;
      this.requestUpdate('price', null);}

    pricefelt30(e: any){
      this.price.felt30 = e.target.price;
      this.requestUpdate('price', null);}
  }

customElements.define("asphalt-roofing", AsphaltRoofing);

declare global {
  interface HTMLElementTagNameMap {
    "asphalt-roofing": AsphaltRoofing;
  }
}


/*


<!--
</section>
-->
<!--
  <div class="result" style="display: grid; grid-template-columns: 1fr;">
    <result-print class="result" id="ply"   product="Plywood:"          homework="{{plywoodResult}}"          unit="sheets"></result-print>
    <result-print class="result" id="pny"   product="Sheathing Nails:"  homework="{{sheathingNailResult}}"    unit="boxes"></result-print>
    <result-print class="result" id="s3"    product="Shingles 3\'s:"    homework="{{shingles3Result}}"        unit="bundles"></result-print>
    <result-print class="result" id="s4"    product="Shingles 4\'s:"    homework="{{shingles4Result}}"        unit="bundles"></result-print>
    <result-print class="result"           product="Roofing Nails:"    homework="{{roofNailResult}}"          unit="boxes"></result-print>
    <result-print class="result"           product="Starters:"         homework="{{startersResult}}"          unit="bundles"></result-print>
    <result-print class="result" id="f15"   product="15 Pound Felt:"    homework="{{felt15Result}}"           unit="rolls"></result-print>
    <result-print class="result" id="f30"   product="30 Pound Felt:"    homework="{{felt30Result}}"           unit="rolls"></result-print>
  </div>
  -->

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
