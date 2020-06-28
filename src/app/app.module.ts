import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// User defined imports
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LightComponent } from "./light/light.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RoomComponent } from "./room/room.component";

import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ConfigComponent } from "./config/config.component";
import { ConfigNodeEntryComponent } from "./config-node-entry/config-node-entry.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LightComponent,
    DashboardComponent,
    RoomComponent,
    ConfigComponent,
    ConfigNodeEntryComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
