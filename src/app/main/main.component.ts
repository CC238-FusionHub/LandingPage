import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  youtube(){
    window.location.href = 'https://youtu.be/Pa81Ly9B3H8'
  }
}
