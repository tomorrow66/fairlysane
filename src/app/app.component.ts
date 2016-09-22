import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fairly Sane';
  bgImg = 'assets/images/fairly-sane-bg.jpg';
  bgVid = 'assets/media/Ferris_Wheel_Loop.mp4';
  logo = {
    'svg': 'assets/images/fs_logo1.svg',
    'png': null
  };
}
