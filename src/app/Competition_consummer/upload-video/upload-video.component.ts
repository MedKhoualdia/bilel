import { Component } from '@angular/core';
import { ServiceFrontService } from './../service-front.service';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Multimedia} from "../../_model/Multimedia";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {

  selectedFile: File | undefined;
  selectedFileUrl: string | undefined;
  private token = localStorage.getItem("token");
  private competitionId: string | null | undefined;
  uploading  : boolean | null | undefined ;
  progress : number | null | undefined ;
  uploadedVideoUrl: string | undefined;
  constructor(private service: ServiceFrontService,private http:HttpClient,private toastr: ToastrService) { }
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    } else {
      console.error('File input element not found');
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    this.selectedFileUrl = URL.createObjectURL(this.selectedFile);
    this.displaySelectedVideo(this.selectedFile);
  }
  addMultimedia(multimedia:Multimedia):void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.post('http://localhost:8088/CRUD/UploadMultimedia', multimedia,{headers}).subscribe()
  }
  uploadVideo(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('upload_preset', 'ckfhjpss');
      this.uploading = true;
      this.progress = 0;
      this.http.post('https://api.cloudinary.com/v1_1/dgjqmyhdn/upload', formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress && event.total !== undefined && event.loaded !== undefined) {
          this.progress = Math.round((event.loaded / event.total) * 100);
        }
        if (event.type === HttpEventType.Response) {
          const response: any = event.body;
          const videoUrl = response.secure_url;
          console.log('Video uploaded successfully:', response);
          this.competitionId = localStorage.getItem('competitionId')
          const multimedia: Multimedia = {
            fileType: 0,
            videoUrl: videoUrl,
            competition: {
              competitionId: this.competitionId,
            }
          };
          this.uploadedVideoUrl=videoUrl;
          this.addMultimedia(multimedia);
          this.toastr.success('Video uploaded successfully!');

          this.uploading = false;
          this.progress = 0;
        }
      }, error => {
        console.error('Error uploading video:', error);
        alert('Failed to upload video: ' + error.message);
        this.uploading = false;
        this.progress = 0;
      });
    } else {
      console.error('No file selected');
      alert('Please select a file to upload!');
    }
  }




  private displaySelectedVideo(file: File): void {
    const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement | null;
    if (videoPlayer) {
        videoPlayer.src = URL.createObjectURL(file);
        videoPlayer.load();
    } else {
        console.error('Video player element not found');
    }
  }
  copyToClipboard(url: string): void {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);


  }

}
