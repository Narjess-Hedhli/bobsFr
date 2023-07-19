import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userService:UserService) { }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const id = 'example-id'; // Replace with the actual ID or use a dynamic value
      this.userService.uploadBlob(id, file);
    }
  }
}
