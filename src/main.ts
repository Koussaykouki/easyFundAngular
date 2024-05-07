/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
import { enableProdMode } from '@angular/core';


// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCeEx0WmFZfVpgcV9CZFZURWY/P1ZhSXxXdkBjWn5ZdXVWRmBYVEw=');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
