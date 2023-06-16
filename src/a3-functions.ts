
export const asphaltRoof = (price:any, squarefeet:any, starters:any, cap:any, conversion:Boolean, bundles:Boolean) => {
  // 1 STARTERS - 1 Bundle PER 105 LINEAR FEET - Starter Strip Plus Shingles 
  let startersResult   = Math.ceil(starters / 105);
  let startersTotal    = Math.round(price.starters * startersResult);

  // 2 CAPPING - 1 BUNDLE PER 20 LINEAR FEET - Hip and Ridge Shingles
  let cappingResult    = Math.ceil(cap / 20); //.625;// +  1;
  let cappingTotal     = Math.round(price.capping * cappingResult);

  // 3 SHINGLE NAILS - 1 BOX PER 4 SQUARES
  let roofNailResult   = Math.ceil(squarefeet / 400);//  * 320) / 8800;// 100 + 1;// 7200
  let roofNailTotal    = Math.round(price.roofingNail * roofNailResult);

  // 4 FELT 15 - 1 ROLL PER 4 SQUARES
  let felt15Result     = Math.ceil(squarefeet / 400);
  let felt15Total      = Math.round(price.felt15 * felt15Result);

  // 5 FELT 30 - 1 ROLL PER 2 SQUARES
  let felt30Result     = Math.abs(starters / 200);
  let felt30Ceil       = Math.ceil(felt30Result);
  let felt30Total      = Math.round(price.felt30 * felt30Ceil);

  let shingles3Total = 0;
  // 3 Pack Shingles per Square
  if ( bundles === false )     {
    let shingles3Result   = Math.ceil(squarefeet / 32);
    shingles3Total    = Math.round(price.shingles3 * shingles3Result);
  };

  let shingles4Total = 0;
  // 4 Pack Shingles per Square
  if ( bundles === true )      {
    let shingles4Result   = Math.ceil(squarefeet / 25);
    shingles4Total    = Math.round(price.shingles4 * shingles4Result);
  };

  let plywoodTotal           = 0;
  let sheathingNailTotal     = 0;
  // Plywood Conversion
  if ( conversion === true  )  { 
    // 3 Plywood per Square
    let plywoodResult         = Math.ceil(squarefeet / 32);
    plywoodTotal              = Math.round(price.plywood * plywoodResult);
    // Sheathing Nails per Square
    let sheathingNailResult   = Math.ceil(squarefeet / 400); // * 320) / 7200; //+ 1;
    sheathingNailTotal        = Math.round(price.sheathingNail * sheathingNailResult);
  };

  // this.roofCosts();
  const estimate:Number =
   asphaltTotals(startersTotal, cappingTotal, roofNailTotal, felt15Total, felt30Total, shingles3Total, shingles4Total, plywoodTotal, sheathingNailTotal, bundles, conversion);
console.log(estimate);
  //return estimate;
}

const asphaltTotals = (startersTotal:any, cappingTotal:any, roofNailTotal:any,felt15Total:any, felt30Total:any, shingles3Total:any, shingles4Total:any, plywoodTotal:any, sheathingNailTotal:any, bundles:Boolean, conversion:Boolean) => {

  let results:Number = 0;

  results = 
    roofNailTotal +
    startersTotal +
    cappingTotal +
    felt15Total +
    felt30Total;
  
  if (bundles === false) {
    results = results + shingles3Total;
  }

  if (bundles === true) {
    results = results + shingles4Total;
  }

  if (conversion === true) {
    results = results + plywoodTotal + sheathingNailTotal;
  }

  return results;

}
