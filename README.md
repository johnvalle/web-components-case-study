# Web component study

A study on how web components work

## General workflow

1. `HTMLElement` is extended for the custom element and defined for usage.

```js
class CustomElementName extends HTMLElement {
  ...
}
...
// first argument is the tag name, second argument is the class.
customElement.define("custom-element-name", CustomElementName)
```

2. A template tag is created and placed inside the constructor.

```js
class CustomElementName extends HTMLElement {
  constructor() {
    const template = document.createElement("template");
  }
}
```

3. Content is added to the template tag for the component.

```js
template.innerHTML = `<h1>Hello world</h1>`;
```

4. A shadow root is then created and opened for the content.

```js
constructor() {
  const template = document.createElement("template");
  template.innerHTML = `<h1>Hello world</h1>`;
  const shadowRoot = this.attachShadow({ mode: "open" });
}
```

5. The content is then attached to the shadow dom.

```js
constructor() {
  const template = document.createElement("template");
  const shadowRoot = this.attachShadow({ mode: "open" });
  shadowRoot.appendChild(template.content.cloneNode(true));
}
```

# Sample Components Created

## Counter component

![Alt text](<CleanShot 2023-12-01 at 20.59.12.gif>)

## Random Number Generator

![Alt text](<CleanShot 2023-12-01 at 21.00.19.gif>)
