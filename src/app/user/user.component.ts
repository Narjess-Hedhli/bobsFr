import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  user: any = {};
  photoFile: File | null = null;

  constructor(private userService:UserService) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('idUser', this.user.idUser);
    formData.append('userName', this.user.userName);
    formData.append('emailUser', this.user.emailUser);
    formData.append('password', this.user.password);
    if (this.photoFile) {
      formData.append('photoUser', this.photoFile, this.photoFile.name);
    }

    this.userService.addUser(formData).subscribe(
      data => {
        console.log(data);
        // Redirect to success page upon successful form submission
        window.location.href = '/success';
      },
      error => {
        // Handle any error that may occur during form submission
        console.error(error);
        // You may want to show an error message to the user on the form page
       //  this.errorMessage = 'An error occurred while submitting the form.';
      }
    );
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.photoFile = fileList[0];
    }
  }
  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const id = 'example-id'; // Replace with the actual ID or use a dynamic value
  //     this.userService.uploadBlob(id, file);
  //   }
  // }
}
