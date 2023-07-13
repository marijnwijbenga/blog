import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlushCommonUiModule } from "./components/common/common-ui.module";
import { PlushCoreUiModule } from "./components/core/core-ui.module";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [PlushCommonUiModule, PlushCoreUiModule],
})
export class PlushUiModule {}
