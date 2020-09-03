import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//npm install @syncfusion/ej2-angular-spreadsheet --save
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

//npm install @syncfusion/ej2-angular-grids --save
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ChartModule } from '@syncfusion/ej2-angular-charts';

//npm install @syncfusion/ej2-angular-charts --save
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SpreadsheetAllModule,
    GridModule,
    ChartModule, 
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,  CategoryService,
    LegendService, TooltipService,
    DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
