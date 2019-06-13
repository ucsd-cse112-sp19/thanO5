#  core-hello

core-hello is a Web Component providing an accessible and customizable block of text that says hello to a specific person.


Attribute | Description
--------- | -----------
![lang](#core-hello-requirements) | time between image transitions
![raninbow](#core-hello-lang-attribute) | set size of images displayed to "small", "medium", or "large"


## core-hello requirements

To use core-hello, it only requires a span tag with the slot attribute to be "name" within the core-hello tag.

```html
 <core-hello>
          <span slot="name">James</span>
 </core-hello

```

![](https://i.ibb.co/V9DWWyS/Screen-Shot-2019-06-12-at-6-53-12-PM.png)

## core-hello lang attribute

The core-hello component supports different languages like English, Spanish, French, Mandarin, and etc. The way you would use this is by adding the lang attribute and assigning its shorthand language names like "hi" for hindi. Note that this only translates only the "Hello World" portion. 



```html
  <core-hello lang="hi">
          <span slot="name">जेम्स</span>
  </core-hello>
```

![](https://i.ibb.co/Dg8Gn2V/Screen-Shot-2019-06-12-at-7-02-01-PM.png)



## core-hello rainbow attribute

The core-hello web component can make the text have a rainbow effect. This is done by including "rainbow" as part of the attributes in the core-hello tag. 

```html

        <core-hello lang="en" rainbow>
          <span slot="name">James</span>
        </core-hello>
```

![](https://media.giphy.com/media/Uqkw846S6TJjdVJ5vN/giphy.gif)



## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)