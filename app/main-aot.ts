
//1. "node_modules/.bin/ngc" -p tsconfig-aot.json
//2. "node_modules/.bin/rollup" -c rollup-config.js
//3. npm run lite
//Aot
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
