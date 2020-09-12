'use strict';

import { getPackageName } from '@atxm/get-package-name';
import * as console from '@atxm/developer-console';

async function openPackageSettings(userOptions: OpenPackageOptions = {}): Promise<void> {
  const options: OpenPackageOptions = {
    pending: true,
    searchAllPanes: true,
    ...userOptions
  };

  const packageName = getPackageName();

  if (!packageName) {
    console.error('Package name not found');
  }

  await atom.workspace.open(`atom://config/packages/${packageName}`, options);
}

export {
  openPackageSettings
};
