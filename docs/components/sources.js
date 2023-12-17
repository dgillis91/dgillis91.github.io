const PURE_LINK = `<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
crossorigin="anonymous"
/>`;

const RESUME_LINK = `<link rel="stylesheet" href="../css/resume.css" />`;

export default class Sources extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      ${PURE_LINK}
      ${RESUME_LINK}
    `;
  }
};

customElements.define('resume-sources', Sources);