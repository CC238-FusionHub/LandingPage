import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{
  public isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobileView = window.innerWidth < 550;
  }
}
