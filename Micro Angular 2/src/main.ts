import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MicroNG2 } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MicroNG2)
  .catch(err => console.error(err));
