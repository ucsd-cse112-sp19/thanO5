#  core-image

core-image is a Web Component providing an accessible and customizable way to display images.


Attribute | Description
--------- | -----------
[src](#core-image-src) | used to specifiy which image to load
[fit](#core-image-fit-attribute) | used for changing how to load the image
[loading with placeholder](#core-image-loading-with-placeholders) | used to dislay loading before the image shows
[error](#core-image-error) | used to display errors with loading the page. 
[lazy](#core-image-lazy) | used to load images as the user approaches them


## core-image requirements

To use core-image, the src attribute is required to be included for it to function properly. By default, it should be trying to fit the entire image. If the image is invalid, it should handle normally like the vanilla img tag.

```html
    <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
    </core-image>
```

![](https://i.ibb.co/yp26PTM/Screen-Shot-2019-06-13-at-5-29-16-PM.png)

## core-image src

The core-image requires the src attribute where the argument should be a valid link to an image of choice. 

```html
    <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
    </core-image>
```

![](https://i.ibb.co/yp26PTM/Screen-Shot-2019-06-13-at-5-29-16-PM.png)


## core-image fit

The core-image can use the fit attribute where it changes how the image will load. You have the choice between "fill", "contain", "cover", "none", and "scale-down". 

```html
        <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="fill">
        </core-image>
         <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="contain">
        </core-image>
         <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="cover">
        </core-image>
         <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="none">
        </core-image>
         <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="scale-down">
        </core-image>
```

![](https://i.ibb.co/5jSfBhn/Screen-Shot-2019-06-13-at-5-35-58-PM.png)

## core-image loading with placeholder

The core-image can display loading content before the image is loaded. This depends on a div tag inside the core-image tag, where it should include the slot attribute with the argument "placeholder". Within this div tag, you can put any content you want for your placeholders. 

```html
        <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="fill">        
          <div slot="placeholder" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            Loading<span class="dot">...</span>
          </div>
        </core-image>
                <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="contain">
          <div slot="placeholder" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            Loading<span class="dot">...</span>
          </div>
        </core-image>
        <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="cover">
          <div slot="placeholder" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            Loading<span class="dot">...</span>
          </div>
        </core-image>
        <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="none">
          <div slot="placeholder" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            Loading<span class="dot">...</span>
          </div>
        </core-image>
         <core-image
          src="https://images.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="scale-down">
          <div slot="placeholder" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            Loading<span class="dot">...</span>
          </div>
        </core-image>
```

![](https://i.ibb.co/TtKP8YG/loading.gif)

## core-image error

The core-image can error handle if the image is not valid. This depends on a div tag inside the core-image tag, where it should include the slot attribute with the argument "error". Within this div tag, you can put any content you want for your placeholders. 

```html
       <core-image
          src="https://imag.unsplash.com/photo-1558945657-484aa38065ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2466&q=80"
          fit="scale-down">
          <div slot="error" style="display: flex; text-align: center; align-items: center; justify-content: center; width: 100%; height: 100%;">
            <i class="el-icon-picture-outline"></i>
          </div>
        </core-image>
```

![](https://i.ibb.co/DfDQv1q/Screen-Shot-2019-06-13-at-6-06-48-PM.png)

## core-image lazy

The core-image has a lazy attribute where it can load the image as the user approaches them. For this you simple include the lazy attribute in core-image. 

```html
      <core-image fit="cover" style="display: block; min-height: 200px; margin-bottom: 10px;" lazy src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"></core-image>
          <core-image fit="cover" style="display: block; min-height: 200px; margin-bottom: 10px;" lazy src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"></core-image>
          <core-image fit="cover" style="display: block; min-height: 200px; margin-bottom: 10px;" lazy src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"></core-image>
          <core-image fit="cover" style="display: block; min-height: 200px; margin-bottom: 10px;" lazy src="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"></core-image>
          <core-image fit="cover" style="display: block; min-height: 200px; margin-bottom: 10px;" lazy src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"></core-image>
```

![](https://i.ibb.co/44bsq2c/lazy.gif)

## For more information on ThanO5 web components getting started, testing, and development click ![here](https://github.com/ucsd-cse112/thanOS#thanos)