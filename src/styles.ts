import { css } from "lit";

export const roofingStyles = css`
  section{
      background-color: #303030;
      color: #303030;
      margin: 3px auto;
      padding: 12px;
      width: 100%;
    }

    .check {
      display: grid;
      grid-template-columns: 1fr 1.5em 1.5em;
      grid-gap: 6px;
      margin: 0;
      text-align: left;
    }


    .wrapper {
      border: 1px solid black;
      border-radius: 4px;
      padding: 8px;
      background-color: cornsilk;
    }

    .x {
      display:grid;
      font-style: italic;
      margin: 0;
    }

    .checkUnder {
      display: grid;
      font-style: italic;
      grid-template-columns: 48px 1fr 48px;
      grid-gap: 6px;
      margin: 0;
      text-align: left;
    }

    .checkUnder > .y {
      font-size: small;
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
      font-size: .8em;
      text-align: center;
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