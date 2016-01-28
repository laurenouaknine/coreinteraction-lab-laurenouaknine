## Week 1 Notes

### Technologies

We'll be primarily using three technologies this semester, HTML, CSS, and Javascript.


HTML | CSS | Javascript
---- | --- | ----------
HTML stands for HyperText Markup language. You'll use it to author the content of your sites. | CSS stands for Cascading Style Sheets. You'll use it to style the content of your sites. | Javascript is the name of a scripting language and does not stand for anything, although you'll sometimes see it abbreviated as JS. You'll use it to add interactivity to your sites.

### HTML
HTML documents are made up of tags. An html tag is a piece of text with angle brackets (<>) on each side. It looks something like this:
````html
<input>
````

Most of the time you'll use tags in pairs that consist of an opening tag and a closing tag. The closing tag of an element is always the same as the opening tag, but with a forward slash in front. Here's an example of the tag pair used to create a simple box element (called a div):
````html
<div></div>
````

Elements may also have attributes — additional pieces of attached information that can serve many purposes. One common attribute is `class`, which is used to help style the element in CSS. Here's what adding `class` to a div looks like:
````html
<div class="my-test-class"></div>
````

Elements can contain other elements or text. Here's an example of a `div` element with nested content:
````html
<div class="my-test-class">
  Hello, I am the outer text!

  <div class="my-other-class">
    Hi, I am the inner text.
  </div>
</div>
````

### CSS

The simplest way to add CSS to your page is to use the `style` element. Here's what that looks like:
```html
<style>
  div { color: red; }
</style>
```

Here's a chunk of CSS:
```css
/* Rule 1*/
div {
  background-color: red;
  color: green;
}

/* Rule 2 */
.my-test-class {
  background-color: orange;
}

/* Rule 3 */
div.my-test-class {
  color: purple;
}
```

CSS style is made up of rules. Each rule has two parts, a selector and a series of declarations. 

**Selectors**  
Selectors determine what elements a rule applies to. There are many types of selectors. Above, we're using element selectors (`div`) and a class selector (`.my-test-class`). The first rule will apply to any `div` element on a page. The second rule will apply to any element whose class attribute contains `my-test-class`. The third rule will apply only to `div` elements that have the class `my-test-class`.

**Declarations**  
A rule's declarations come after the selector, and are enclosed in curly brackets ({}). Each declaration has two parts: a property name and a value. Looking at the first declaration from the first rule:
```css
background-color: red;
```
The property name is `background-color` and the value is `red`. The property name is always followed by a colon (:), and the property value is always followed by a semicolon (;).

**Pseudo-classses**  
Selectors that only apply to elements in special states are called pseudo-classes. Two pseudo-classes you'll use commonly are `:hover` and `:active`. They can be combined with any other selector. Here's how that looks.
```css
.my-test-class:hover {
  background-color: fuchsia;
}
```
The `hover` pseudo-class selects elements currently under the user's cursor. The `active` pseudo-class selects elements currently being clicked on. Using these pseudo-classes is key in making a page feel dynamic.

**Basic properties**  
Here's a rule which uses a number of basic CSS properties:
```css
.my-test-class {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: gray;
  background-color: blue;
  margin: 10px;
  padding: 10px;
}
```

Here's what all those properties do:

name | function
----- | ---------
font-family | Determines what font the element uses. You can list multiple font family names, separated by commas. The first family in the list that's also installed on the user's computer will be used.
font-size | Size of the font. The unit `px` here stands for pixels.
color |  Color of the text. So far we've used named values for the color property. You can see a list of all named values [here](http://www.crockford.com/wrrrld/color.html). You can also specify color values in other ways, which we'll talk more about next week. There's some info [here](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) if you'd like to read ahead.
background-color | Color of the element background.
margin | Space between element and other elements.
padding | Space between element content and outer edge of element.

### Javascript

The simplest way to add Javascript to your page is to use the `script` element. Here's what that looks like:
````html
<script>
  // Your code goes here
</script>
```
In most cases, you should include page scripts _after_ all other content. Scripts are executed as soon as the browser parses them. If the elements your script operates on have not yet been parsed, your script will not work correctly.

#### jQuery

We'll be using a library called jQuery for much of the scripting we do this semester. jQuery makes manipulating elements on a page much easier than it is using plain javascript. You can use a `script` element to include jQuery on your page.
````html
<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
````
You must include jQuery _before_ any scripts that use it.

In order to manipulate an element with jQuery, you must first select it. Selecting an element looks like this:
````javascript
$('.sample-element')
````
You can use the exact same selectors you'd use in CSS to style an element to select it with jQuery.

#### .toggleClass

Once you've selected an element you can manipulate it. One common manipulation is adding or removing a class. jQuery has a shorthand function for this called `toggleClass` which adds a class to, or removes a class from, an element. You use it like this:
````javascript
$('.sample-element').toggleClass('red-background')
````
[Read the documentation for toggleClass](http://api.jquery.com/toggleclass/)

#### .click

You can also use jQuery to add interactivity to your page. For example if you want to perform an action when a user clicks an element, you can use jQuery's `click` function. That would look like this.
````javascript
$('.sample-element').click(function () {
   $(this).toggleClass('red-background');
});
````
[Read the documentation for click](http://api.jquery.com/click/)

Inside the function that you pass to .click, the variable `this` always refers to the element that was clicked. In this case, `this` refers to the particular `.sample-element` that was clicked.
