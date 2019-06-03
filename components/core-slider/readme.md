#  core-slider

core-slider is a Web Component providing an accessible and customizable slider, part of the ThanOS components.

## Demo

[Check out a live demo!](http://ucsd-cse112.github.io/thanOS/components/core-slider/slider.html)

Attribute | Description
--------- | -----------
![time](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-time-attribute) | time between image transitions
![size](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-size-attribute) | set size of images displayed to "small", "medium", or "large"
![theme](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-theme-attribute) | choose shape of images as either "circle" or rectangle
![shadow](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-shadow-attribute) | create images with shadows
![text](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-text-attribute) | add a description to the image
![control](https://github.com/ucsd-cse112/thanOS/tree/master/components/core-slider##core-slider-control-attribute) | manually control image transitions

## core-slider time attribute

The core-slider web component can include an attribute tag to control the time between images in the carousel.
This time period can be specified in the core-slier tag as follows: time="4s". The possible time attribute values are primary, secondary, and dark. If no time attribute is specified a default time of "2s" will be applied.

```html
<core-slider time="3s" size="medium" theme="rounded" >Time</core-slider>
```

## core-slider size attribute

The core-slider web component can include an attribute tag to control the size of the images. To change the size, add the size attribute inside the core-slider tag.

```html
<core-slider size="small">Small</core-slider>
<core-slider size="medium">Medium</core-slider>
<core-slider size="large">Large</core-slider>
```

## core-slider theme attribute

The core-slider web component can include an theme tag to control the shape of the images in the carousel. The theme can be specified in the core-slider tag as follows: theme="rounded". The possible theme attributes are rounded and circle. 

```html
<core-slider time="3s" size="medium" theme="rounded">Rounded</core-slider> 
<core-slider time="3s" size="medium" theme="circle">Circle</core-slider> 
```

## core-slider shadow attribute

The core-slider web component can include an attribute tag to add a shadow below the image. To add a image shadow add the shadow attribute inside the core-slider tag.

```html
<core-slider shadow>Shadow</core-slider> 
```

## core-slider text attribute

The core-slider web component can include an attribute tag to add a text description to the image displayed. 

```html
<core-slider text >Text</core-slider> 
<p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
```

## core-slider control attribute

The core-slider web component can include an attribute tag to manually control image transitions.

```html
<core-slider control>Control</core-slider> 
```


## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)