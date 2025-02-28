import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Bob"
  imageURL = "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
  currentDate: string = Date()

  isRed = false
  isBlue = false
  isColor = true

  updateName(value:string){
    this.name = value;
  }

  change2Red(){
    this.isBlue = false
    this.isRed = true
  }
  change2Blue(){
    this.isBlue = true
    this.isRed = false
  }

  changecolor(){
    this.isColor = !this.isColor
  }
}
