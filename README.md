# @atxm/open-package-settings

[![npm](https://flat.badgen.net/npm/license/@atxm/open-package-settings)](https://www.npmjs.org/package/@atxm/open-package-settings)
[![npm](https://flat.badgen.net/npm/v/@atxm/open-package-settings)](https://www.npmjs.org/package/@atxm/open-package-settings)
[![CircleCI](https://flat.badgen.net/circleci/github/a-t-x-m/open-package-settings)](https://circleci.com/gh/a-t-x-m/open-package-settings)
[![David](https://flat.badgen.net/david/dep/a-t-x-m/open-package-settings)](https://david-dm.org/a-t-x-m/open-package-settings)

Opens package settings for the Atom package that consumes this module

## Installation

`npm install @atxm/open-package-settings -S`

## Usage

**Example:**

```js
import { openPackageSettings } from '@atxm/open-package-settings';

(async () => {
    await openPackageSettings();
})();
```

### Options

You can pass all options from [`atom.workspace.open()`](https://flight-manual.atom.io/api/v1.51.0/Workspace/#instance-open), excluding `initialLine` and `initialColumn`.

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)
