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

## core-slider requirements

To use core-slider, it requires you to have images in the actual component itself. Without them, the browser will return errors and load nothing.

```html
<core-slider>
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>

```

<div style="text-align:center"><img src="https://media.giphy.com/media/chtKLniZycf16pQj4o/giphy.gif" /></div>

## core-slider time attribute

The core-slider web component can include an attribute tag to control the time between images in the carousel.
This time period can be specified in the core-slier tag as follows: time="4s". The possible time attribute values are primary, secondary, and dark. If no time attribute is specified a default time of "2s" will be applied.

```html
  <core-slider time="3s">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```

<div style="text-align:center"><img src="https://media.giphy.com/media/W5Iy7fPcHLLgXtSzGR/giphy.gif" /></div>



## core-slider size attribute

The core-slider web component can include an attribute tag to control the size of the images. To change the size, add the size attribute inside the core-slider tag.

#### small ####

```html

  <core-slider time="3s" size="small">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```

<div style="text-align:center"><img src="https://media.giphy.com/media/U2MacRbbv5W0gCwEP1/giphy.gif" /></div>


#### medium ####

```html

  <core-slider time="3s" size="medium">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```


<div style="text-align:center"><img src="https://media.giphy.com/media/ZF9J7kyhof0tjuw0gH/giphy.gif" /></div>

#### large ####

```html

  <core-slider time="3s" size="large">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```

<div style="text-align:center"><img src="https://media.giphy.com/media/QArhtdL7MWVg2cbu25/giphy.gif" /></div>

## core-slider theme attribute

The core-slider web component can include an theme tag to control the shape of the images in the carousel. The theme can be specified in the core-slider tag as follows: theme="rounded". The possible theme attributes are rounded and circle. By default, core-slider's theme is a square. 

#### rounded ####

```html

  <core-slider time="3s" size="large" theme="circle">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```

<div style="text-align:center"><img src="https://media.giphy.com/media/SUtvTok25tcYaYB4sT/giphy.gif" /></div>

#### circle ####

```html

  <core-slider time="3s" size="large" theme="rounded">
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```

<div style="text-align:center"><img src="https://media.giphy.com/media/RfXhD4MhhkBvWLaBn8/giphy.gif" /></div>


## core-slider shadow attribute

The core-slider web component can include an attribute tag to add a shadow below the image. To add a image shadow add the shadow attribute inside the core-slider tag.

```html
  <core-slider time="3s" size="medium" theme="circle" shadow>
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    
  </core-slider>
```


<div style="text-align:center"><img src="https://media.giphy.com/media/YT39QUATyKffDWUd5H/giphy.gif" /></div>


## core-slider text attribute

The core-slider web component can include an attribute tag to add a title and description to the image displayed. The core-button element must contain the text attribute for it to appear. By default, the title will be "Title" and description will be "Description of these images.". To override the title, you need insert a span tag within the core-slider tag with whatever title you want. 

```html
 <span slot="title">ThanO5</span>
```
Similarily, to override the description you need to insert the p tag within the core-slider tag. This is acompanied by core-button and core-modal to display your text.

```html
 <p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Nice to meet you. Nice to meet you. Nice to meet you. Nice to meet you.
    </p>
```
#### All together ####
```html
 <core-slider time="4s" size="medium" theme="circle" shadow text control>
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
    <span slot="title">ThanO5</span>
    <p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Nice to meet you. Nice to meet you. Nice to meet you. Nice to meet you.
    </p>
  </core-slider>
```
<div style="text-align:center"><img src="https://media.giphy.com/media/1NUPWJj5bC9YfoC9wE/giphy.gif" /></div>


## core-slider control attribute

The core-slider web component can include an attribute tag to manually control image transitions.

```html
<core-slider time="3s" size="medium" theme="circle" shadow text control>
    <img src="https://images.unsplash.com/photo-1557798136-429866f61726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1557762371-3291582b3e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80" />
    <img src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" />
    <img src="https://images.unsplash.com/photo-1554996560-41f5023d85d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80" />
     <span slot="title">ThanO5</span>
    <p slot="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Nice to meet you. Nice to meet you. Nice to meet you. Nice to meet you.
    </p>
  </core-slider>
```


<div style="text-align:center"><img src="https://media.giphy.com/media/BWCR4vD8lmAsOHBuFA/giphy.gif" /></div>



## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)