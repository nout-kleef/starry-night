# starry-night
Take a look at the night sky, right here in your browser.
This module adds some pretty looking stars to your html document's background, complete with
* parallax scrolling
* random flickering (Perlin noise)
* dynamic rendering based on display size
All without serious effects on your website's performance.

# demo
You can find a demo of this module by navigating your browser to `./dist/index.html`
![demo gif showing starry-night module](demo-assets/starry-night.gif)<br>
<i>the quality is quite poor due to this being a GIF image</i>

# dependency usage
1) add `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>` to your html page's `<head>`<br>
    <i>to prevent the possibility of including p5.js twice, you must include it as a separate script (if you're not using it already)</i>
## load starry-night using JsDelivr CDN
2) add `<script src="https://cdn.jsdelivr.net/npm/@nout-kleef/starry-night@2/dist/starry-night.min.js"></script>` to your html page's `<head>`
## load starry-night using local file
2) add `node_modules/@nout-kleef/starry-night/dist/starry-night.min.js` as a script to your html page's `<head>`<br>
    <i>note: you should probably move this script from `node_modules` to your `public_html` folder first, using Gulp, Grunt etc.</i>

# development usage
1) `npm install` or `sudo npm install`
2) `gulp`
3) use either the demo page (`./dist/index.html`) or your own project to make some improvements to this module!
