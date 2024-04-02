import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.2/core/lit-core.min.js'

class MyLitComponent extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`<p>Hello, I'm a Lit web component!</p>`;
  }
}

customElements.define('my-lit-component', MyLitComponent);
