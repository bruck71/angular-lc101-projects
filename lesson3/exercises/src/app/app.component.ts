import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 235000;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  gutterCheck(width, height) {
    if (width >= 470000 || width <= 0 || height <=0 || height >= 340000) {
      this.color = 'orange';
    }
    else {
      this.color = 'blue';
    }
  }

  allowMove() {
    
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 235000;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

  handleLanding(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 235000;
    this.message = 'Shuttle has landed.';
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '230px';
    
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 235000;
      this.message = 'Mission Aborted';
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '230px';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width += 10000;
    }
    else if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width -= 10000;
    }
    else if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    else {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000;
    }
    this.gutterCheck(this.width, this.height);
  }

}
