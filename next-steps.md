- ditch html builder
- rebuild as a page class with defined structure

such that...

```js

const page = new Page(height, width)


page.define_contents(
    [
        [new Image("url"), new Image("url")],
        [new Button("Text", "url"), new Button("Text", "url"), new Button("Text", "url"), new Button("Text", "url")],
        [new Image("url")],
        [new Button("Text", "url")]
    ]
)

foreach Image in page Image.generate

foreach Image in page Image.supply_path

Which Creates...

Where I = image
      B = button
_________________
|   I   |   I   |
|_______|_______|
|_B_|_B_|_B_|_B_|
|       I       |
|_______________|
|_______B_______|

```
each element class returns a string, containing it's element.

Page is then simply .join'd and wrapper html is inserted upon .render


or JSON

```js

const page = {
    page: [
        [ 
           {
                type: "Image",
                complex_url: "",
                url: ""
            },
            {
                type: "Image",
                complex_url: "",
                url: ""
            }
        ],
        [
            {
                type: "Button",
                action: "",
            },
            {
                type: "Button",
                action: "",
            },
            {
                type: "Button",
                action: "",
            },
            {
                type: "Button",
                action: "",
            }
        ],
        [
            {
                type: "Image",
                complex_url:"",
                url:""
            }
        ],
        [
            {
                type:"Button",
                action: ""
            }
        ]
    ]
}

```