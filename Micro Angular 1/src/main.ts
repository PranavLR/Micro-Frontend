import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroNG1 } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MicroNG1)
  .catch(err => console.error(err));
