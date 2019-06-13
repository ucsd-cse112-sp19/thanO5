#  core-progress

core-progress is a Web Component providing an accessible and customizable UI used to display progression using bars and circles.


Attribute | Description
--------- | -----------
![percentage](#core-hello-percentage-attribute) | used to change and display line or circle percentage
![status](#core-hello-lang-attribute) | used to display different types of progress bars
![color](#core-progress-color-attribute) | used to change color of the progress line or circle
![show-text](#core-progress-show-text-attribute) | used to display actual percentage number
![stroke-width](#core-progress-stroke-width-attribute) | used to change the width of the progress line or circle
![text-inside](#core-progress-text-inside-attribute) | used display actual percentage in the progress line or circle
![type](#core-progress-type-attribute) | used to change between line or circle

## core-progress requirements

To use core-progress, it does not require any attributes for it to work properly.

```html
  <core-progress></core-progress>

```

![](https://i.ibb.co/VNL8XQZ/Screen-Shot-2019-06-12-at-10-43-31-PM.png)

## core-hello percentage attribute

The core-progress percentage attribute is used for showing different percentages as its apparent on the actual element.



```html
    <core-progress percentage="0"></core-progress>
    <core-progress percentage="70"></core-progress>
    <core-progress percentage="80"></core-progress>
    <core-progress percentage="100"></core-progress>
    <core-progress percentage="50"></core-progress>
```

![](https://i.ibb.co/3s6Qmb3/Screen-Shot-2019-06-13-at-12-20-45-AM.png)



## core-progress status attribute

The core-progress features a status attribute where you can change the type of progress between "success", "warning", and "exception".

```html

    <core-progress percentage="75" status="success"></core-progress>
    <core-progress percentage="75" status="exception"></core-progress>
    <core-progress percentage="75" status="warning"></core-progress>
```

![](https://i.ibb.co/hd5Bddg/Screen-Shot-2019-06-13-at-12-24-11-AM.png)

## core-progress show-text attribute

The core-progress features a show-text where it actually makes the percentage visisible in numerical form outside the line or circle. 

```html

    <core-progress percentage="0" show-text></core-progress>
    <core-progress percentage="70" show-text></core-progress>
    <core-progress percentage="80" show-text></core-progress>
    <core-progress percentage="100" show-text></core-progress>
    <core-progress percentage="50" show-text></core-progress>
```

![](https://i.ibb.co/y52SJ9C/Screen-Shot-2019-06-13-at-12-29-28-AM.png)

## core-progress color attribute

The core-progress features a color attribute where you can change the color of the displayed line or circle. The colors follow the coloring naming style of vanilla HTML.

```html

      <core-progress percentage="75" color="teal"></core-progress>
      <core-progress percentage="75" color="yellowgreen"></core-progress>
      <core-progress percentage="75" color="orange"></core-progress>
      <core-progress percentage="75" color="#598e25"></core-progress>
      <core-progress percentage="75" color="#8e71c7"></core-progress>
```

![](https://i.ibb.co/9yNB2xV/Screen-Shot-2019-06-13-at-12-39-10-AM.png)

## core-progress stroke-width attribute

The core-progress features the attribute stroke-width, which allows you to change the width of the line or circle.

```html

    <core-progress percentage="0" stroke-width="16" show-text></core-progress>
    <core-progress percentage="70" stroke-width="16" show-text></core-progress>
    <core-progress percentage="80" stroke-width="16" show-text></core-progress>
    <core-progress percentage="100" stroke-width="16" show-text></core-progress>
    <core-progress percentage="50" stroke-width="16" show-text></core-progress>
```

![](https://i.ibb.co/4t7k2jG/Screen-Shot-2019-06-13-at-12-41-32-AM.png)

## core-progress text-inside attribute

The core-progress features the text-inside attribute, which depends on the show-text attribute. This makes the numerical percentage show inside the actual line or circle. 

```html

    <core-progress percentage="0" stroke-width="16" show-text text-inside></core-progress>
    <core-progress percentage="70" stroke-width="16" show-text text-inside></core-progress>
    <core-progress percentage="80" stroke-width="16" show-text text-inside></core-progress>
    <core-progress percentage="100" stroke-width="16" show-text text-inside></core-progress>
    <core-progress percentage="50" stroke-width="16" show-text text-inside></core-progress>
```

![](https://i.ibb.co/PWs2j3Z/Screen-Shot-2019-06-13-at-12-44-43-AM.png)

## core-progress type attribute

The core-progress features the type attribute where you can change the shape of the progression including "line" or "circle". By default, it will be a line when this attribute is not included.

### line

```html

      <core-progress percentage="15" status="success" stroke-width="16" show-text type="line"></core-progress>
      <core-progress percentage="30" status="exception" stroke-width="16" show-text type="line"></core-progress>
      <core-progress percentage="45" status="warning" stroke-width="16" show-text type="line"></core-progress>
      <core-progress percentage="60" color="teal" stroke-width="16" show-text type="line"></core-progress>
      <core-progress percentage="75" color="yellowgreen" stroke-width="16" show-text type="line"></core-progress>
      <core-progress percentage="90" color="orange" stroke-width="16" show-text type="line"></core-progress>
```

![](https://i.ibb.co/4S1HZYx/Screen-Shot-2019-06-13-at-12-47-55-AM.png)

### circle

```html

      <core-progress percentage="15" status="success" stroke-width="16" show-text type="circle"></core-progress>
      <core-progress percentage="30" status="exception" stroke-width="16" show-text type="circle"></core-progress>
      <core-progress percentage="45" status="warning" stroke-width="16" show-text type="circle"></core-progress>
      <core-progress percentage="60" color="teal" stroke-width="16" show-text type="circle"></core-progress>
      <core-progress percentage="75" color="yellowgreen" stroke-width="16" show-text type="circle"></core-progress>
      <core-progress percentage="90" color="orange" stroke-width="16" show-text type="circle"></core-progress>
```

![](https://i.ibb.co/37RkQLW/Screen-Shot-2019-06-13-at-12-49-04-AM.png)

## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)