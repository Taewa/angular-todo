import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TodoModule} from "./modules/todo/todo.module";



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TodoModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
