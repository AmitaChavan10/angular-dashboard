import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleSideBar() {
    debugger
    this.toggleSideBarForMe.emit();
  }

  logout() {
    
  }

}
