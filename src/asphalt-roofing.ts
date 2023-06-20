import { CSSResultArray, LitElement, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import './result-item';
import { roofingStyles } from './styles';
import { ResultItem } from './result-item';
// import { asphaltRoof } from './a3-functions';

export class AsphaltRoofing extends LitElement {

  @property({type:Number}) results : number           = 0;
  @property({type:Number}) labour : number            = 90;
  @property({type:Number}) labourCap : number         = 1;

  /* AREA */
  @state() private squarefeet : number                = 0;
  @property({type:Number}) square : number            = 0;

  /* CONVERSION */ // z = squarefeet, x = price, y = result
  @state() private conversion: Boolean                = false;
  @state() private plywoodResult: number | any        = (z:number) =>            { return Math.ceil(z / 32); };
  @state() private plywoodTotal: number | any         = (x:number, y:number) =>  { return Math.round(x * y); };
  @state() private sheathingNailResult: number | any  = (z:number) =>            { return Math.ceil(z / 400); };
  @state() private sheathingNailTotal: number | any   = (x:number, y:number) =>  { return Math.round(x * y); };

  /* SHINGLES */
  @state() private bundles: Boolean                   = false;
  @state() private shingles3Result: number | any      = (z:number) =>            { return Math.ceil(z / 32); };
  @state() private shingles3Total: number | any       = (x:number, y:number) =>  { return Math.round(x * y); };
  @state() private shingles4Result: number | any      = (z:number) =>            { return Math.ceil(z / 25); };
  @state() private shingles4Total: number | any       = (x:number, y:number) =>  { return Math.round(x * y); };
  @state() private roofNailResult: number | any       = (z:number) =>            { return Math.ceil(z / 400); };
  @state() private roofNailTotal: number | any        = (x:number, y:number,) => { return Math.round(x * y); };

  @state() private starters: number                   = 0;
  @state() private startersResult: number | any       = (w:number) =>            { return Math.ceil(w / 105); };
  @state() private startersTotal: number | any        = (x:number, y:number) =>  { return Math.round(x * y); };

  /* CAPPING */
  @property({type:Number}) cap: number                = 0;
  @state() private cappingResult: number | any        = (w:number) =>            { return Math.ceil(w / 20); };
  @state() private cappingTotal: number | any         = (x:number, y:number) =>  { return Math.round(x * y); };

  /* FELT */
  @state() private felt15Result: number | any         = (z:number) =>            { return Math.ceil(z / 400); };
  @state() private felt15Total: number | any          = (x:number, y:number) =>  { return Math.round(x * y); };

  @state() private felt30Result: number | any         = (z:number) =>            { return Math.ceil(z / 200); };
  @state() private felt30Total: number | any          = (x:number, y:number) =>  { return Math.round(x * y); };

  @state() private waste :Boolean | any = false;

  @state() private answers: Object | any  = {};

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
/*
  private actions() {
    this._asphaltRoof();
  }
*/
  protected updated(changedProps:any) {
    if (changedProps.has('price')) {
      console.log('price changed');
      this._asphaltRoof();
     }

     if (changedProps.has('results')) {
      // console.log(this.results);
     }
  }

  protected firstUpdated(): void {
    this._asphaltRoof();
  }

  private changeConversion(e: Event) {
    const value = e.target as HTMLInputElement;
    this.conversion = value.checked;
    this._asphaltRoof();
  }

  private changeWaste(e: Event) {
    const value = e.target as HTMLInputElement;
    this.waste = value.checked;
    this._asphaltRoof();
  }

  private changeBundles(e: Event) {
    const value = e.target as HTMLInputElement;
    this.bundles = value.checked;
    this._asphaltRoof();
  }

  private changeSquare(e: Event) {
    const value = e.target as HTMLInputElement;
    this.square = parseInt(value.value);
    this.squarefeet = this.square * 100;
    console.log('input square:',this.square);
    this._asphaltRoof();
  }

  private changeStarters(e: Event) {
    const value = e.target as HTMLInputElement;
    this.starters = parseInt(value.value);
    this._asphaltRoof();
  }

  private changeCapping(e: Event) {
    const value = e.target as HTMLInputElement;
    this.cap = parseInt(value.value);
    this._asphaltRoof();
  }

  private _asphaltRoof() {
    console.log('calc square:',this.square);

    // 1 STARTERS - 1 Bundle PER 105 LINEAR FEET - Starter Strip Plus Shingles
    let start:number =  this.startersResult(this.squarefeet); 
    let starters:number =  this.startersTotal(this.price.starters, start );

    // 2 CAPPING - 1 BUNDLE PER 20 LINEAR FEET - Hip and Ridge Shingles
    let cap:number = this.cappingResult(this.cap);
    let capping:number = this.cappingTotal(this.price.capping, cap);

    // 3 SHINGLE NAILS - 1 BOX PER 4 SQUARES
    let rNails = this.roofNailResult(this.squarefeet);
    let roofNail:number = this.roofNailTotal(this.price.roofingNail, rNails);

    // 4 FELT 15 - 1 ROLL PER 4 SQUARES
    let feltA = this.felt15Result(this.squarefeet);
    let felt15:number = this.felt15Total(this.price.felt15, feltA);

    // 5 FELT 30 - 1 ROLL PER 2 SQUARES
    let feltB = this.felt30Result(this.squarefeet);
    let felt30:number = this.felt30Total(this.price.felt30, feltB);

    let shingle3 = 0;
    let shingle4 = 0;
    let ply = 0;
    let sheathNails = 0;
    let plywood = 0;
    let sheathingNail = 0;
    let shingles3 = 0;
    let shingles4 = 0;

    // Plywood Conversion
    if ( this.conversion === true  )  { 
      // 3 Plywood per Square
      ply = this.plywoodResult(this.squarefeet);
      plywood = this.plywoodTotal(this.price.plywood, ply);
      // Sheathing Nails per Square
      sheathNails = this.sheathingNailResult(this.squarefeet);
      sheathingNail = this.sheathingNailTotal(this.price.sheathingNail, sheathNails);
    };

    // 3 Pack Shingles per Square
    if ( this.bundles === false )     {
      shingle3 = this.shingles3Result(this.squarefeet);
      shingles3 = this.shingles3Total(this.price.shingles3, shingle3);
    };

    // 4 Pack Shingles per Square
    if ( this.bundles === true )      {
      shingle4 = this.shingles4Result(this.squarefeet);
      shingles4 = this.shingles4Total(this.price.shingles4, shingle4);
    };

    this.answers = { start, cap, rNails, feltA, feltB, shingle3, shingle4, ply, sheathNails} 

    this.results = 0
    //let all:Number =  0;
    this.results = this.totals(starters, capping, roofNail, felt15, felt30, shingles3, shingles4, plywood, sheathingNail, this.bundles, this.conversion);
    // return Number(all);
    console.log('results:',this.results);
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

    console.log("results:",results);
    return results;
}

  static get styles() : CSSResultArray { return [ roofingStyles, css`

    :host{
      display: grid;
      grid-gap: 12px;
    }

    .ridge { display:none; }
    .ridge[data-active] {display: grid;}

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
      .wrapper { display: none!important; }
      h3, h4 { display: none!important; }
    }
  </style>

  <h3 class="title">Roofing <span class="money">\$${this.results}</span></h3>

  <div class="wrapper">

    <!-- Square Feet  @change="\${this._asphaltRoof}" -->
    <label style="display:grid; grid-template-columns: auto auto 1fr; grid-gap: 12px; margin: 12px;">
      <div style="margin: auto;">Roof Area:</div>
      <input
        type="number"
        .value="${this.square}"
        max="60"
        @input="${this.changeSquare}"
        style="
        width: 80px;
        padding: 10px;
        line-height: 20px;
        "
       ><i class="y">Square</i>
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
      <input type="checkbox" ?checked="${this.waste}" @input="${this.changeWaste}">
      add 5% for Waste?
      <i class="y">${this.waste ? 'Yes' : 'No'}</i>
    </label>

    <!-- Waste -->
    <label class="checkUnder">
      <input type="checkbox" ?checked="${this.waste}" @input="${this.changeWaste}">
      include Waste Disposal Bin?
      <i class="y">${this.waste ? 'Yes' : 'No'}</i>
    </label>

    <!-- Conversion -->
    <label class="checkUnder">
      <input type="checkbox" ?checked="${this.conversion}" @input="${this.changeConversion}">
      Plywood Conversion?
      <i class="y">${this.conversion ? 'Yes' : 'No'}</i>
    </label>
    <p style="font-size:x-small; padding: 0 8px;">* conversion adds 3/8 Plywood, and Sheathing Nails</p>
  
    <!-- Labour Rate -->
    <label style="display: grid; grid-template-columns: auto 1fr; grid-gap: 12px; margin: 12px; line-height: 42px;">
      <input
        class="rate"
        type="number"
        .value="${this.labour}"
        min=0
        @input="${(e:any)=>{this.labour = e.target.value; this._asphaltRoof(); this.handleClick(e.target.value);}}"
      />
      Installation Rate per Square
    </label>

  </div>

    <!-- Starters -->
    <label class="x wrapper">
      <div>Eaves / Starter Rows: ${this.starters} <i class="y">ft</i> \$${this.answers.feltB + this.answers.start}</div>
      <input
        type="range"
        .value="${this.starters}"
        max="800"
        @input="${(e:any)=>{this.starters = e.target.value; this._asphaltRoof();}}">
      <p style="font-size:x-small; padding: 0 8px;">* adding Flet-30, and Starter Shingles</p>
    </label>

    <!-- Capping -->
    <div class="wrapper">

      <label class="x ">
        <div>Hip & Ridge Capping: ${this.cap}<i class="y">ft</i> \$${this.answers.cap}</div>
        <input
          type="range"
          .value="${this.cap}"
          max="800"
          @input="${(e:any)=>{this.cap = e.target.value; this._asphaltRoof();}}">
      </label>

      <label>
        <input
          type="number"
          class="rate"
          min=0
          .value="${this.labourCap}"
          @input="${(e:any)=>{this.labourCap = e.target.value; this._asphaltRoof(); this.handleClick2(e.target.value);}}"
          />
        Capping Rate per Linear Foot:
      </label>

    </div>
<!--
    <p style="font-size:x-small; padding: 0 8px;">* 20 Leanear Feet per </p>
-->
    <h4>Roofing Material List</h4>

    <!-- Result List -->
    <div style="display: grid; grid-template-columns: 1fr;">
      <result-item ?active="${this.conversion === true}"            product="Plywood:"          homework="${this.answers.ply}"          unit="sheets"       .price="${this.price.plywood}"         @input="${this.pricePly}"></result-item>
      <result-item ?active="${this.conversion === true}"            product="Sheathing Nails:"  homework="${this.answers.sheathNails}"    unit="boxes"        .price="${this.price.sheathingNail}"   @input="${this.priceSeath}"></result-item>
      <result-item ?active="${this.bundles === false}"              product="Shingles 3 per SQ:"    homework="${this.answers.shingle3}"        unit="bundles"      .price="${this.price.shingles3}"       @input="${this.price3s}"></result-item>
      <result-item ?active="${this.bundles === true}"               product="Shingles 4 per SQ:"    homework="${this.answers.shingle4}"        unit="bundles"      .price="${this.price.shingles4}"       @input="${this.price4s}"></result-item>
      <result-item active                                           product="Roofing Nails:"    homework="${this.answers.rNails}"         unit="boxes"        .price="${this.price.roofingNail}"     @input="${this.priceNail}"></result-item>
      <result-item active                                           product="Starters:"         homework="${this.answers.start}"         unit="bundles"      .price="${this.price.starters}"        @input="${this.priceStarter}"></result-item>
      <result-item active                                           product="Capping:"          homework="${this.answers.cap}"          unit="bundles"      .price="${this.price.capping}"         @input="${this.priceCap}"></result-item>
      <result-item active                                           product="15 Pound Felt:"    homework="${this.answers.feltA}"           unit="rolls"        .price="${this.price.felt15}"          @input="${this.pricefelt15}"></result-item>
      <result-item active                                           product="30 Pound Felt:"    homework="${this.answers.feltB}"           unit="rolls"        .price="${this.price.felt30}"          @input="${this.pricefelt30}"></result-item>
    </div>

  `

    }

    handleClick(num: number) {
      const event = new CustomEvent('my-labour', {
        detail: { message: Number(this.labour) },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }

    handleClick2(num: number) {
      const event = new CustomEvent('my-labourCap', {
        detail: { message: Number(this.labourCap) },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
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


@state() private conversion: Boolean                = false;
  @state() private plywoodResult: number | any        = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 32); };
  @state() private plywoodTotal: number | any         = (plywoodPrice:number, plywoodResult:number) =>              { return Math.round(plywoodPrice * plywoodResult); };
  @state() private sheathingNailResult: number | any  = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 400); };
  @state() private sheathingNailTotal: number | any   = (sheathingNailPrice:number, sheathingNailResult:number) =>  { return Math.round(sheathingNailPrice * sheathingNailResult); };

  /* SHINGLES 
  @state() private bundles: Boolean                   = false;
  @state() private shingles3Result: number | any      = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 32); };
  @state() private shingles3Total: number | any       = (shingles3Price:number, shingles3Result:number) =>          { return Math.round(shingles3Price * shingles3Result); };
  @state() private shingles4Result: number | any      = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 25); };
  @state() private shingles4Total: number | any       = (shingles4Price:number, shingles4Result:number) =>          { return Math.round(shingles4Price * shingles4Result); };
  @state() private roofNailResult: number | any       = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 400); };
  @state() private roofNailTotal: number | any        = (roofingNailPrice:number, roofingNailResult:number,) =>     { return Math.round(roofingNailPrice * roofingNailResult); };

  @state() private starters: number                   = 0;
  @state() private startersResult: number | any       = (starters:number) =>                                        { return Math.ceil(starters / 105); };
  @state() private startersTotal: number | any        = (cappingPrice:number, cappingResult:number) =>              { return Math.round(cappingPrice * cappingResult); };

  /* CAPPING 
  @property({type:Number}) cap: number                = 0;
  @state() private cappingResult: number | any        = (cap:number) =>                                             { return Math.ceil(cap / 20); };
  @state() private cappingTotal: number | any         = (starterPrice:number, starterResult:number) =>              { return Math.round(starterPrice * starterResult); };

  /* FELT 
  @state() private felt15Result: number | any         = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 400); };
  @state() private felt15Total: number | any          = (felt15Price:number, felt15Result:number) =>                { return Math.round(felt15Price * felt15Result); };

  @state() private felt30Result: number | any         = (squareFeet:number) =>                                      { return Math.ceil(squareFeet / 200); };
  @state() private felt30Total: number | any          = (felt30Price:number, felt30Result:number) =>                { return Math.round(felt30Price * felt30Result); };


    */
