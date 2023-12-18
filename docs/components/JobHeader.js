const jobHeaderTemplate = document.createElement('template');
jobHeaderTemplate.innerHTML = `
  <div class="pure-g">
    <div id="id-job-title" class="pure-u-1-4 job-title">
    </div>
    <div id="id-job-dates" class="pure-u-1-4 job-title job-title-year">
    </div>
    <div class="pure-u-1-2"></div>
  </div>
`;


let jobHeaderId = 0;


class JobHeader extends HTMLElement {
  constructor() {
    super();
    this.instanceId = jobHeaderId++;
  }

  fetchResumeCSS() {
    const resumeCSS = document.querySelector('link[href*="resume.css"]')
    if (!resumeCSS) {
      throw new Error('resume.css not found');
    }
    return resumeCSS;
  }

  fetchPureCSS() {
    const pureCSS = document.querySelector('link[href*="pure-min.css"]')
    if (!pureCSS) {
      throw new Error('pure-min.css not found');
    }
    return pureCSS;
  }

  _templateWithUniqueId(template) {
    const templateClone = template.content.cloneNode(true);
    templateClone
      .getElementById('id-job-title')
      .id = this._getIdJobTitle();
    templateClone
      .getElementById('id-job-dates')
      .id = this._getIdJobDates();
    return templateClone;
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const jobHeaderTemplateClone = this._templateWithUniqueId(jobHeaderTemplate);
    jobHeaderTemplateClone
      .getElementById(this._getIdJobTitle())
      .innerHTML = this.getAttribute('job-title');
    jobHeaderTemplateClone
      .getElementById(this._getIdJobDates())
      .innerHTML = this.getAttribute('job-dates') ?
        this.getAttribute('job-dates') : '';
    shadowRoot.appendChild(this.fetchPureCSS().cloneNode(true));
    shadowRoot.appendChild(this.fetchResumeCSS().cloneNode(true));
    shadowRoot.appendChild(jobHeaderTemplateClone);
  }

  _getIdJobTitle() {
    return `id-job-title-${this.instanceId}`;
  }

  _getIdJobDates() {
    return `id-job-dates-${this.instanceId}`;
  }
}

customElements.define('job-header', JobHeader);
