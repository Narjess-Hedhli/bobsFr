import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9066/api/users'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<any>(`${'http://localhost:9066/api/users/'}`)}

  uploadBlob(id: string, blobData: Blob): void {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('file', blobData, 'blobData');

    this.http.post(this.apiUrl, formData).subscribe(
      () => {
        console.log('Blob uploaded successfully!');
      },
      (error) => {
        console.error('Error uploading blob:', error);
      }
}
