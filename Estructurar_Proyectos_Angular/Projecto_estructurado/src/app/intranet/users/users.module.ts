import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/core/shared/shared.module";
import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./containers/user-list/user-list.component";
import { UserListTableComponent } from "./components/users-list-table/users-list-table.component";

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent,
        UsersListComponent,
        UserListTableComponent
    ],
    exports: [],
    providers: []
})

export class UsersModule {
    constructor() { }
}