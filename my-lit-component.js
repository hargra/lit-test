import { LitElement, html, css } from 'lit';

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
