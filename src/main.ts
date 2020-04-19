import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
  console.log = (): void => {};
  console.info = (): void => {};
  console.warn = (): void => {};
  console.error = (): void => {};
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: any): void => console.error(err));
