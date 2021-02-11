# Kindle-Dashboard
## A stupid method of displaying a home dashboard on a Kindle browser

### Why this is a pain
- Kindle Browser doesnt support DOM manipulation
- Certain elements are not supported
- Custom fonts besides san serif are not supported.
- Many CSS things are not supported

### What this does
Through a tedious creation of "applets" writted in any web framework, the backend opens your "high level" (lots of dom manip) in a headless browser and screenshots the result. What the kindle is served is a string of html with many images with links back to the backend where the screenshots are displayed. This is a way so serve updated data to a device which can only handle images.

Through further development we will attempt to add dynamic functionality based on multiple pages and changing buttons to react to what data is shown in the images.
