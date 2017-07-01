import { Component, EventEmitter, Output } from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    @Output() menuEvent = new EventEmitter<string>();

    menuClicked(menuValue){
        if(menuValue == 'recipe'){
            this.menuEvent.emit('recipe')
        }else{
            this.menuEvent.emit('shopping');
        }
    }
}