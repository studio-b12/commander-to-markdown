[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/commander-to-markdown.svg?style=flat-square
)](https://coveralls.io/r/studio-b12/commander-to-markdown
) [![Travis – build status
](https://img.shields.io/travis/studio-b12/commander-to-markdown/master.svg?style=flat-square
)](https://travis-ci.org/studio-b12/commander-to-markdown
) [![David – status of dependencies
](https://img.shields.io/david/studio-b12/commander-to-markdown.svg?style=flat-square
)](https://david-dm.org/studio-b12/commander-to-markdown
) [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<a id="/"></a>&nbsp;

# commander-to-markdown

**Render the options of a [commander](https://github.com/tj/commander.js) app as markdown**




<a id="/installation"></a>&nbsp;

## Installation

```sh
$ npm install commander-to-markdown
```




<a id="/usage"></a>&nbsp;

## Usage

Say you have a [commander](https://github.com/tj/commander.js) app which looks like this:

<p align=right><b><sub>app.js</sub></b></p>

```js
const program = require('commander');

program
  .arguments('<address>', 'Address for delivery')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Pick the type of cheese', 'marble')
  .parse(process.argv);
```

`commanderToMarkdown` is pretty much like the `require` function – only instead of the app itself, you get the program’s options rendered as markdown:

<p align=right><b><sub>docs.js</sub></b></p>

```coffee
▸ const commanderToMarkdown = require('commander-to-markdown');

▸ commanderToMarkdown(`${__dirname}/app`);
◂ '''
#### `<address>`
Address for delivery.

#### `-p, --peppers`
Add peppers.

#### `-P, --pineapple`
Add pineapple.

#### `-b, --bbq-sauce`
Add bbq sauce.

#### `-c, --cheese [type]`
Pick the type of cheese. Default: `marble`.
'''
```




<a id="/demo"></a>&nbsp;

## Demo

Here’s how it looks rendered.

<hr>

#### `<address>`
Address for delivery.

#### `-p, --peppers`
Add peppers.

#### `-P, --pineapple`
Add pineapple.

#### `-b, --bbq-sauce`
Add bbq sauce.

#### `-c, --cheese [type]`
Pick the type of cheese. Default: `marble`.

<hr>

This looks especially good when rendered as a manpage with [marked-man](https://github.com/kapouer/marked-man).




<a id="/api"></a>&nbsp;

## Preventing the program from executing

To prevent executing the program, we stub out your `require('.')` and `require('..')` with an empty function which returns an object. If that’s not enough for you, you can pass us the option `programModules`:

```js
commanderToMarkdown(`${__dirname/app}`, { programModules: ['.', './logic'] });
```



<a id="/caveats"></a>&nbsp;

## Caveats

* At the moment we only accept an absolute path.




<a id="/license"></a>&nbsp;

## License

[MIT](./License.md) © [Studio B12](http://studio-b12.de)
