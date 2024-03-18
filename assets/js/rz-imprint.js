/**
 * @name rz-imprint
 * @abstract web component for german impressum or english legal notice
 * @description shows a german imprint or an englisch legal notice
 * @version 0.1.0
 * @author ZHENG Robert 2024
 */

const impressum = "./assets/impressum.htm";
const legal_notice = "./assets/legal_notice.htm";

class Imprint extends HTMLElement {
  constructor() {
    super();

    this._language = "en";
    this.shadowObj = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["language"];
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  async getTemplate() {
    const language = this.getAttribute("language") || `${this._language}`;
    this.shadowObj.innerHTML =
      '<style>@import url("./assets/css/rz-imprint.css");</style>';
    if (language === "en") {
      this.shadowObj.innerHTML += await (await fetch(legal_notice)).text();
    } else if (language === "de") {
      this.shadowObj.innerHTML += await (await fetch(impressum)).text();
    } else {
      this.shadowObj.innerHTML += "<mark>Error loading template</mark>";
    }
  }
}

customElements.define("rz-imprint", Imprint);
