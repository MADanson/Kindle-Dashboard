# Kindle-Dashboard
## A convoluted method of displaying a home dashboard on a Kindle 4th gen browser

### Why this is required
- Kindle Browser doesnt support DOM manipulation
- Certain elements are not supported
- Custom fonts besides san serif are not supported.
- Many CSS things are not supported

### Overview
Kindle-Dashboard displays any website on the kindle's "basic" browser. Accepting any web framework, the backend opens your modern webpage in a headless browser and takes a screenshot of the result. The kindle is then served basic html, displaying the website through many images. This also acts as a method to serve updated data and modern webpages to a device which can only handle very basic Javascript and HTML.

Through further development we will attempt to add dynamic functionality based on multiple pages and changing buttons to react to what data is shown in the images.

### Creating a basic dashboard

To create a page to serve to the Kindle, a route set up in express
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
Add in basic HTML elements
```js
app.get("/page", async function (req, res) {

    const html = build.boilerplate("This is my site", ["h1('This is a heading')", `button('location.href="nextpage";', 'Click Me!')`])

    res.send(html);
});

```
Each element in the array is evaluated and added to the final html string.

![Served Page](./example.png)


For more complex pages, such as getting and displaying weather api data in a pleasing fashion, a different approach is needed. As the kindle can't display custom icons or fonts (or even complex css for that matter), a workaround is used by having the server open the page in a headless browser, screenshotting the result, serving a temporary image of the fancy page, and returning the image location in a `<img>` tag to the main html string. This method ensures that modern graphics and javascript can be displayed on the kindle.
