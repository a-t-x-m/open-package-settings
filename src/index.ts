'use strict';

import { getPackageName } from '@atxm/get-package-name';
import * as console from '@atxm/developer-console';

function openPackageSettings(userOptions: OpenPackageOptions = {}): void {
  const options: OpenPackageOptions = {
    pending: true,
    searchAllPanes: true,
    ...userOptions
  };

  const packageName = getPackageName();

  if (!packageName) {
    console.error('Package name not found');
  }

  atom.workspace.open(`atom://config/packages/${packageName}`, options);
}

export {
  openPackageSettings
};
