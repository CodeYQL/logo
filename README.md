# Logo

Generates images from an html file using Google Chrome's headless browser [Puppeteer](https://github.com/GoogleChrome/puppeteer).

These can be used for various social media presences or other correspondence for CodeYQL.

## Install

Clone the repository:

```
$ git clone git@github.com:CodeYQL/logo.git
```

Install dependencies:

```
$ npm install
```

## Usage

The logo is generated from the [logo.html](logo.html) file.
Just modify that then run:

```
$ npm run generate
```

This will generate images inside the [logos](logos) directory.

## Contributing

Check out [logo.html](logo.html) file for the basic structure, and [style.css](style.css) for styling.

New sizes and on-the-fly modifications of HTML or CSS can added inside [generate.js](generate.js).