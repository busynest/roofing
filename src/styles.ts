import { css } from "lit";

export const roofingStyles = css`
/*
  section{
      background-color: #303030;
      color: #303030;
      margin: 3px auto;
      padding: 12px;
      width: 100%;
    }
*/

    input[type='range']::-webkit-slider-thumb {
      background-color: blue;
    }

    .rate {
      width: 80px;
      text-align: right;
      padding: 10px;
      line-height: 20px;
    }
    .check {
      display: grid;
      grid-template-columns: 1fr 1.5em 1.5em;
      grid-gap: 6px;
      margin: 0;
      text-align: left;
    }


    .wrapper {
      display: grid;
      border: 1px solid black;
      border-radius: 4px;
      padding: 8px;
      background-color: white;
    }

    .x {
      display:grid;
      font-style: italic;
      margin: 0;
    }

    .checkUnder {
      display: grid;
      grid-template-columns: 24px 1fr 48px;
      grid-gap: 6px;
      margin: 0;
      text-align: left;
      margin: 12px 0;
      cursor: pointer;
    }

    .checkUnder > .y {
      font-size: small;
    }
    
    .checkUnder > input[type=checkbox] {
      margin-left: auto;
      height: 16px;
      width: 16px;
    }

    h3{
      margin-bottom: 4px;
    }


    h4 {
      margin: 4px 0
    }

    .check > .y {
      font-size: small;
    }







    h3 { color: #e06f50; }

    a {
      text-decoration: none;
      color: black;
    }

    p {
      display: grid;
      grid-template-columns: 1fr 1.5em;
    }



    .y {
      text-align: left;
      margin: auto 0px;
    }

    .grid         {
      border-radius: 5px;
      padding: 5px;
      max-width: 300px;
      margin: auto;
    }

    .result {
      display: none;
    }
    
    .money {
      font-size: .9em;
      color: #248746;
      text-align: left;
    }

    .length {
      display: grid;
      grid-template-columns: 0fr 1fr 0fr;
      margin: 0;
      padding: 12px;
      grid-gap: 6px;
    }

    fieldset > label {
      display:      grid;
      text-align:   right;
      font-size:    .9em;
      margin:       auto 0;
      padding:      6px;
    }
  
    label {
      font-size: small;
    }

    input[type=range] { padding: 8px 0; height: 44px; }

`;