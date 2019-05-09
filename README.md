# @codedungeon/utils

## Description

Codedungeon utilities used in most of the projects I work with. These may exist in other libraries, but I like to have it all in one single package so I dont have to worry about bringing in a slew of other smaller packages.
Dont get me wrong, I love the small concept, but these routines are my frequently used.

### Usage

#### Modules

You can access each of the modules as

```js
import * as utils from '@codedungeon/utils'
const utils = require('@codedungeon/utils')

console.log(colors.red('test message'))
let now = utils.now() // 2019-05-08 20:37:36 returns Laravel format
```

- colors (Chalk)
- fs (fs-extra)
  - Promisified `fs` Modules
- fsPath (fs-path)
- promisify
- strftime
- pretty (prettyjson)
- dot (dot-prop)
- dotProp (dot-prop)
- has (has-value)
- tildify (tildify)
- uuid (uuid/v1)

#### Modules

In addition to above modules, there are a number of utility methods

- now
  - Returns current date/time using Laravel format

  ```js
  let now = utils.now() // 2019-05-08 20:37:36 returns Laravel format
  ```

- userHome()
  - Returns user home path
- render(template, data)
  - Renders templates using `ejs` syntax
- renderMustache(template, data)
  - Renders templates using `mustache` syntax
- padZero(numPad)
  - pads number with `n` leading zeros (default 3)
- timestamp(useAMPM, showSeconds, showMillisecods)
- windowSize()
- wordWrap(str, maxChars, lineEnd = '\n')
- deepMerge(obj)
- classnames(args)
- randomName(tokenLength)
- random(min=10, max=100)

### License

Copyright &copy; 2019 Mike Erickson
Released under the MIT license

### Credits

Utils written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.io](http://codedungeon.io)
