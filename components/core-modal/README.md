#  core-modal

core-modal is a Web Component providing an accessible and customizable way to display text when clicked on. 


Attribute | Description
--------- | -----------
[modal](#core-modal-modal-and-name-attribute) | used for binding specific elements
[name](#core-modal-modal-and-name-attribute) | used link the binded element


## core-modal requirements

To use core-modal, it needs to binded to another element because it cannot work on its own. Please reveiw the modal and name attribute to properly use this web component. 


## core-modal modal and name attribute

The core-modal relies on the modal attribute included in the binded element, while the name attribute should be in the modal tag. Note that the arguments for both of these attributes should be the same. Within the core-modal tag, you may include any html tags you want. If you want a header on the tab of the modal, use a h1 tag with a slot attribute that has an argument of "header".

```html
    <core-button modal="captain-america">
          Steve Rogers
    </core-button>
        <core-modal name="captain-america">
          <h1 slot="header">Captain America</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium a, deserunt, quos suscipit minus minima eveniet mollitia doloribus possimus nulla accusamus fuga vitae? Enim, iste. Eum quaerat dicta quas nesciunt molestiae odit error, fugit exercitationem aut eligendi, provident vel deleniti perspiciatis delectus alias eaque quam dolorem sit amet minima earum. Delectus laudantium, suscipit, officia tenetur eveniet, iste ab voluptatem incidunt necessitatibus enim rem. Suscipit incidunt ad impedit, nobis, deserunt aliquam cumque aperiam cupiditate sint hic assumenda, iste eos consequatur mollitia illum voluptas accusamus unde provident. Quo distinctio ipsum accusantium quod, sit unde nisi fuga qui voluptates. Error, dolores consequuntur.</p>
        </core-modal>
    <core-button modal="iron-man" color="primary">
          Tony Stark
        </core-button>
        <core-modal name="iron-man">
          <h1 slot="header">Iron Man</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium a, deserunt, quos suscipit minus minima eveniet mollitia doloribus possimus nulla accusamus fuga vitae? Enim, iste. Eum quaerat dicta quas nesciunt molestiae odit error, fugit exercitationem aut eligendi, provident vel deleniti perspiciatis delectus alias eaque quam dolorem sit amet minima earum. Delectus laudantium, suscipit, officia tenetur eveniet, iste ab voluptatem incidunt necessitatibus enim rem. Suscipit incidunt ad impedit, nobis, deserunt aliquam cumque aperiam cupiditate sint hic assumenda, iste eos consequatur mollitia illum voluptas accusamus unde provident. Quo distinctio ipsum accusantium quod, sit unde nisi fuga qui voluptates. Error, dolores consequuntur.</p>
        </core-modal>
    <core-button modal="hulk" color="secondary">
          Bruce Banner
        </core-button>
        <core-modal name="hulk">
          <h1 slot="header">Hulk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium a, deserunt, quos suscipit minus minima eveniet mollitia doloribus possimus nulla accusamus fuga vitae? Enim, iste. Eum quaerat dicta quas nesciunt molestiae odit error, fugit exercitationem aut eligendi, provident vel deleniti perspiciatis delectus alias eaque quam dolorem sit amet minima earum. Delectus laudantium, suscipit, officia tenetur eveniet, iste ab voluptatem incidunt necessitatibus enim rem. Suscipit incidunt ad impedit, nobis, deserunt aliquam cumque aperiam cupiditate sint hic assumenda, iste eos consequatur mollitia illum voluptas accusamus unde provident. Quo distinctio ipsum accusantium quod, sit unde nisi fuga qui voluptates. Error, dolores consequuntur.</p>
        </core-modal>
    <core-button modal="thanos" color="dark">
          Thanos
        </core-button>
        <core-modal name="thanos">
          <h1 slot="header">Thanos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laudantium a, deserunt, quos suscipit minus minima eveniet mollitia doloribus possimus nulla accusamus fuga vitae? Enim, iste. Eum quaerat dicta quas nesciunt molestiae odit error, fugit exercitationem aut eligendi, provident vel deleniti perspiciatis delectus alias eaque quam dolorem sit amet minima earum. Delectus laudantium, suscipit, officia tenetur eveniet, iste ab voluptatem incidunt necessitatibus enim rem. Suscipit incidunt ad impedit, nobis, deserunt aliquam cumque aperiam cupiditate sint hic assumenda, iste eos consequatur mollitia illum voluptas accusamus unde provident. Quo distinctio ipsum accusantium quod, sit unde nisi fuga qui voluptates. Error, dolores consequuntur.</p>
        </core-modal>
```

![](https://i.ibb.co/KVBysVj/ezgif-com-video-to-gif.gif)



## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)