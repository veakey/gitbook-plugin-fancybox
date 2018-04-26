# gitbook-plugin-fancybox-md

A gitbook plugin to show md file by graceful jQuery fancy box

## Install

```shell
$npm install --save gitbook-plugin-fancybox-md
```

## Usage

### Installation

Add the plugin to your `book.json` like this:

```javascript
{
    "plugins": ["fancybox-md"]
}
```

### Example

Just use the same markdown with a suffix to detect the markdown file to be included
```markdown
[Link title](link_mardkwon_page!_fancybox-md)
```

That's it ! Don't hesitate to tell me if there is something wrong

## Options

```javascript
"pluginsConfig": {
    "fancybox": {
      //your fancybox config here
    }
}
```

defaultConfig:

```javascript
{
  helpers: {
    buttons: {}
  }
}
```

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credit

Inspired by [gitbook-plugin-fancybox](https://www.npmjs.com/package/gitbook-plugin-fancybox)
