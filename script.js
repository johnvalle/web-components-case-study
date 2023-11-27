class CustomCounter extends HTMLElement {
  value = 0;

  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <button id="increment" onclick="this.getRootNode().host.increment()">Increment</button>
      <span id="counter-value">${this.value}</span>
      <button id="decrement" onclick="this.getRootNode().host.decrement()">Decrement</button>
    `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  increment() {
    if (this.value === 100) return;
    this.value += 1;
    const val = this.shadowRoot.getElementById("counter-value");
    val.innerHTML = this.value;
  }

  decrement() {
    if (this.value === 0) return;
    this.value -= 1;
    const val = this.shadowRoot.getElementById("counter-value");
    val.innerHTML = this.value;
  }
}

class RandomGenerator extends HTMLElement {
  number = 0;

  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <div>
        <h4>Random number generator</h4>
        <button id="rand-btn" onclick="this.getRootNode().host.generate()">Random number: ${this.number}</button>
      </div>
    `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  generate() {
    const elem = this.shadowRoot.getElementById("rand-btn");
    const rand = Math.floor(Math.random() * 100);
    let idx = 0;
    const timer = setInterval(() => {
      if (idx === 20) {
        clearInterval(timer);
        elem.innerText = `Random number: ${rand}`;
      }
      // mock generation
      elem.innerText = `Random number: ${Math.floor(Math.random() * 100)}`;
      idx++;
    }, 100);
  }
}

customElements.define("custom-counter", CustomCounter);
customElements.define("random-generator", RandomGenerator);
