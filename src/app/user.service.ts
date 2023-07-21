import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  addUser(formData: FormData) {
    return this.http.post('http://localhost:9066/users/add/post', formData);
  }

  getAll(){
    return this.http.get<any>(`${'http://localhost:9066/'}`)}

  // uploadBlob(id: string, blobData: Blob): void {
  //   const formData = new FormData();
  //   formData.append('id', id);
  //   formData.append('file', blobData, 'blobData');
  //
  //   this.http.post(this.apiUrl, formData).subscribe(
  //     () => {
  //       console.log('Blob uploaded successfully!');
  //     },
  //     (error) => {
  //       console.error('Error uploading blob:', error);
  //     });}
}
