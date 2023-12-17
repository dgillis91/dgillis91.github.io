import "./sources.js";

class JobHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.getAttribute('job-dates')) {

    }
    this.innerHTML = `
      <resume-sources></resume-sources>
      <div class="pure-g">
        <div class="pure-u-1-4 job-title">
          ${this.getAttribute('job-title')}
        </div>
        <div class="pure-u-1-4 job-title job-title-year">
          ${this.getAttribute('job-dates') ? this.getAttribute('job-dates') : ''}
        </div>
        <div class="pure-u-1-2"></div>
      </div>
    `;
  }
}

customElements.define('job-header', JobHeader);
