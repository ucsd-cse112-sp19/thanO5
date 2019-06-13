#  core-badge

core-badge is a Web Component providing an accessible and customizable UI used to display notifications.


Attribute | Description
--------- | -----------
[value](#core-badge-value-attribute) | used to display number of notifications
[max](#core-badge-max-attribute) | used to set the max of the value shown in the dot
[type](#core-badge-type-attribute) | used to change the type of notification dot
[is-dot](#core-badge-is-dot-attribute) | used to hide the value, but still show the dot
[hidden](#core-badge-hidden-attribute) | used to hide the dot

## core-badge requirements

To use core-badge, it does not require any attributes for it to work properly. By default, it should show up as a dot enclosing a 10. Typically, it would be useful to to bind it with another element. You would include the binded element within the core-badge tag.  

```html
  <core-badge></core-badge>
  <core-badge>
        <core-button size="small" color="info">comments</core-button>
  </core-badge>
```

![](https://i.ibb.co/StxDxXy/Screen-Shot-2019-06-13-at-1-29-49-AM.png)

![](https://i.ibb.co/CVq14yz/Screen-Shot-2019-06-13-at-1-39-23-AM.png)

## core-badge value attribute

The core-badge value attribute is responsible for displaying the current value in the nofitication dot. It accepts numbers or strings. By default, the value is always 10. 



```html
    <core-badge value="10">
        <core-button size="small" color="info">comments</core-button>
    </core-badge>
    <core-badge value="20">
        <core-button size="small" color="info">comments</core-button>
    </core-badge>
    <core-badge value="Hot">
        <core-button size="small" color="info">comments</core-button>
    </core-badge>
    <core-badge value="New">
        <core-button size="small" color="info">comments</core-button>
    </core-badge>
```

![](https://i.ibb.co/swK5G1Q/Screen-Shot-2019-06-13-at-1-47-13-AM.png)



## core-badge max attribute

The core-badge features a max attrbiute that sets the maximum amount of notifications. This depends on the value attribute as if value's number is above max, it should show [max]+. If the value is not a number, max will not work. 

```html
 <core-badge value="10" max="15">
        <core-button size="small" color="info">comments</core-button>
 </core-badge>
    <core-badge value="20" max="15">
        <core-button size="small" color="info">comments</core-button>
 </core-badge>
 <core-badge value="Hot" max="15">
        <core-button size="small" color="info">comments</core-button>
 </core-badge>
```

![](https://i.ibb.co/q1gKwqj/Screen-Shot-2019-06-13-at-1-50-24-AM.png)

## core-badge type attribute

The core-badge features a type attribute, which changes the type of badge is displayed. You have the choice between "primary", "success", "warning", and "info".
```html
    <core-badge value="10" type="primary">
        <core-button size="small" color="info">primary</core-button>
    </core-badge>
   <core-badge value="10" type="success">
        <core-button size="small" color="info">success</core-button>
   </core-badge>
   <core-badge value="10" type="warning">
        <core-button size="small" color="info">warning</core-button>
   </core-badge>
   <core-badge value="10" type="info">
        <core-button size="small" color="info">info</core-button>
   </core-badge>
```

![](https://i.ibb.co/566nmLT/Screen-Shot-2019-06-13-at-3-13-54-AM.png)

## core-badge is-dot attribute

The core-badge features a is-dot attribute, which tells the core-badge to keep the dot visible, but the value invisible on the binded element. 

```html
      <core-badge value="10" type="primary" is-dot>
        <core-button size="small" color="info">primary</core-button>
      </core-badge>
      <core-badge value="10" type="success" is-dot>
        <core-button size="small" color="info">success</core-button>
      </core-badge>
      <core-badge value="10" type="warning" is-dot>
        <core-button size="small" color="info">warning</core-button>
      </core-badge>
      <core-badge value="10" type="info" is-dot>
        <core-button size="small" color="info">info</core-button>
      </core-badge>
```

![](https://i.ibb.co/dcFGFqy/Screen-Shot-2019-06-13-at-3-19-01-AM.png)

## core-badge hidden attribute

The core-badge features the attribute hidden, which hides the dot.

```html
    <core-badge value="10" type="primary" hidden>
        <core-button size="small" color="info">primary</core-button>
    </core-badge>
    <core-badge value="10" type="success" hidden>
        <core-button size="small" color="info">success</core-button>
    </core-badge>
    <core-badge value="10" type="warning" hidden>
        <core-button size="small" color="info">warning</core-button>
    </core-badge>
    <core-badge value="10" type="info" hidden>
        <core-button size="small" color="info">info</core-button>
    </core-badge>
```

![](https://i.ibb.co/F7hqT75/Screen-Shot-2019-06-13-at-3-28-55-AM.png)


## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)