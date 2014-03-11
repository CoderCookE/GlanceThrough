# GlanceThrough

GlanceThrough is speed reading application, that allows users to import articles from news sites.

### Required API
This app requires the alchemy api for the autofill to work.  A key can be gotten from the [Alchemy Website](http://www.alchemyapi.com).  This key should be placed in the app/controllers/articles.js.

###Features
* Create articles to be read by manually filling in form fields
* Create articles to be read by providing the url for the article.
* Create a summarized version of the article when providing a url.
* Bookmarklet to allow users to create articles and provide and overly to GlanceThrough the article on another page.

###Known Bugs
* Firefox doesn't work with bookmarklet
* Bookmarklet Occasionally doesn't load current Article, but previously created article instead.
* Auto-summarize will cut off sentence that contain abbreviations.

### Optional
* Grunt - Download and Install [Grunt](http://gruntjs.com).

## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Passport - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* UI Bootstrap - Defined as bower module in the [bower.json](bower.json) file.

## Quick Install
  The quickest way to get started with GlanceThrough is to clone the project and utilize it like this:

  Install dependencies:

    $ npm install

  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt

  When not using grunt you can use:

    $ node server

  Then open a browser and go to:

    http://localhost:3000

## More Information
  * Contact Eric Cook on any issue via [E-Mail](mailto:ejcook111@gmail.com), [LinkedIn](www.linkedin.com/pub/eric-cook/1a/709/b38/)

## GitHub
https://github.com/CoderCookE/GlanceThrough

## License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction for non-commericial purposes without limitation.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
