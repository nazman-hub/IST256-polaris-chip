import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://miro.medium.com/v2/resize:fit:1200/1*3fEz3HOci5JtFWRtixBwrw.png"
    this.description = "Description";
    this.link = "#";
    this.linkText = "Link";
    this.buttonLink = "#";
    this.buttonText = "Button";
    this.bgColor = "cyan";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;        

      }
      
      *{
        margin: 0px;
        padding: 0px;
      }

      .card{

        width: 300px;
        height: 440px;
        display: flex;
        flex-direction: column;
        padding: 32px;
        background-color: cyan;
        align-items: center;
        gap: 16px;
        margin:16px 16px;
        font-family: "comic sans ms";
        font-size: 16px;
        text-align: center;  
        justify-content: center;   
      }

      .card img{
        max-width: 300px;
        max-height: 220px;
        object-fit: contain;
      }

      a button{
        padding: 12px 24px;
        background: black;
        border: none;
        color: white;
        font: inherit;
      }


      button:hover{
        background: gray;
        cursor: pointer;
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
        <div class="card">
          <img src="${this.image}" class ="image item" width="300px">
          <h1 class="title item">${this.title}</h1>
          <!-- <p class="description item">${this.description} <slot></slot></p> -->
<!-- put this in your render method where you had details -->
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
          </div>
          </details>
          <a href="${this.link}" class="link item" target="_blank">${this.linkText}</a>
          <a href="${this.buttonLink}" class="item" target="_blank">
            <button class="details-button item">${this.buttonText}</button>
          </a>
  </div>
      `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      linkText: { type: String },
      buttonText: { type: String },
      buttonLink: { type: String },
      bgColor: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
