import { LitElement, html } from 'lit-element';

class BasicComponent extends LitElement {
  render() {
    return html`
      <p>Hello all</p>
    `;
  }
}
customElements.define('basic-component', BasicComponent);
