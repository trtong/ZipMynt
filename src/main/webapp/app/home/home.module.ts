import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';

@NgModule({
    imports: [ZipmyntSharedModule, NgxPlaidLinkModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipmyntHomeModule {}
