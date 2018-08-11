import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {TodoService} from "./todo.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [TodoComponent],
    exports: [TodoComponent],
    entryComponents: [TodoComponent],
})
export class TodoModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TodoModule,
            providers: [TodoService]
        };
    }
}
