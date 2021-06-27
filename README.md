# Kindle-Dashboard
## A stupid method of displaying a home dashboard on a Kindle browser

### Why this is a pain
- Kindle Browser doesnt support DOM manipulation
- Certain elements are not supported
- Custom fonts besides san serif are not supported.
- Many CSS things are not supported

### What this does
Through a tedious creation of "applets" writted in any web framework, the backend opens your "high level" (lots of dom manip) in a headless browser and screenshots the result. What the kindle is served is a string of html with many images with links back to the backend where the screenshots are served. This is a way to serve updated data to a device which can only handle very basic Javascript and HTML.

Through further development we will attempt to add dynamic functionality based on multiple pages and changing buttons to react to what data is shown in the images.


### Basics

To create a page to serve to the Kindle you need to setup your route in express
```js
app.get("/page", async function (req, res) {
  
});

```

Start your dynamically generated html file to be served by using:

```js
app.get("/page", async function (req, res) {

    const html = build.boilderplate("TITLE", ["//Array of children//"])
});

```
```js
app.get("/page", async function (req, res) {

    const html = build.boilerplate("This is my site", ["h1('This is a heading')", `button('location.href="nextpage";', 'Click Me!')`])

    res.send(html);
});

```
Each element in the array is eval'd and added to the final html string.

![Served Page](./example.png)


For more complex pages, such as getting and displaying weather api data in a pretty fashion a different approach is needed. As the kindle can't display fancy icons or fonts (or even complex css), we workaround this by having the server open the page in a headless browser... screenshotting the result... saving and serving a temporary image of the fancy page... and returning the image location in a `<img>` tag to the main html string.