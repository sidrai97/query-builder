import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RulesetBuilderComponent } from './ruleset-builder/ruleset-builder.component';
import { RuleBuilderComponent } from './rule-builder/rule-builder.component';
import { RulesService } from "./services/rules.service";

@NgModule({
  declarations: [AppComponent, RulesetBuilderComponent, RuleBuilderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [RulesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
