#  core-button

core-button is a Web Component providing an accessible and customizable button, part of the ThanOS components.

Attribute | Description
--------- | -----------
[color](#core-button-color-attribute) | control the color of the button
[animated](#core-button-animated-attribute) | add an animation to the button
[size](core-button#core-button-size-attribute) | control the size of the button
[shadow](#core-button-shadow-attribute) | create a shadow effect
[rounded](#core-button-rounded-attribute) | makes the button appear with rounded corners
[circle](#core-button-circle-attribute) | creates a circular button

## core-button color attribute

The core-button web component can include an attribute tag to control the color of the button.
The color can be specified in the core-button tag as follows: color="primary". The possible color attribute values are primary, secondary, and dark. If no color attribute is specified a default color will be applied.

```html
<core-button>Default</core-button>
<core-button color="primary">Primary</core-button>
<core-button color="tertiary">Secondary</core-button>
<core-button color="dark">Dark</core-button>
```

![](https://media.giphy.com/media/1BGfuBiHcidJuNqKEm/giphy.gif)

## core-button animated attribute

The core-button web component can include an attribute tag to add an animation to the button. To add an animated add the animated attribute inside the core-button tag.

```html
<core-button animated>Default</core-button>
<core-button color="primary" animated>Primary</core-button>
<core-button color="secondary" animated>Secondary</core-button>
<core-button color="dark" animated>Dark</core-button>
```

![](https://media.giphy.com/media/2yvQC4WFKXhziNnYJG/giphy.gif)

## core-button size attribute

The core-button web component can include an attribute tag to control the size of the button. The size can be specified in the core-button tag as follows: size="small". The possible size attributes are small, medium, and large. If no size attribute is specified a default size will be applied.

```html
<core-button size="small">Small</core-button>
<core-button color="primary">Default</core-button>
<core-button color="secondary" size="medium">Medium</core-button>
<core-button color="dark" size="large">Large</core-button>
```

![](https://media.giphy.com/media/5z5Shs1phB1hU3hzai/giphy.gif)

## core-button shadow attribute

The core-button web component can include an attribute tag to add a shadow below the button. To add a button shadow add the shadow attribute inside the core-button tag.

```html
<core-button size="small" shadow>Small</core-button>
<core-button color="primary" shadow>Default</core-button>
<core-button color="secondary" size="medium" shadow>Medium</core-button>
<core-button color="dark" size="large" shadow>Large</core-button>
```

![](https://media.giphy.com/media/8BkMenwYFshncAKkh0/giphy.gif)

## core-button rounded attribute

The core-button web component can include an attribute tag to add rounded corners to a button. To add rounded corners add the rounded attribute inside the core-button tag.

```html
<core-button size="small" rounded>Small</core-button>
<core-button color="primary" rounded>Default</core-button>
<core-button color="secondary" size="medium" rounded>Medium</core-button>
<core-button color="dark" size="large" rounded>Large</core-button>
```

![](https://media.giphy.com/media/pOOnt4GLuq7NIV1d3m/giphy.gif)

## core-button circle attribute

The core-button web component can include an attribute tag to make circular buttons. To create circular buttons add the circle attribute inside the core-button tag.

```html
<core-button size="small" circle>Small</core-button>
<core-button color="primary" circle>Default</core-button>
<core-button color="secondary" size="medium" circle>Medium</core-button>
<core-button color="dark" size="large" circle>Large</core-button>
```

![](https://media.giphy.com/media/KVGmuhmrMptuDdq9QO/giphy.gif)

## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)



