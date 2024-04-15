import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  file: File ;
  data: any[] = [];
  columns: string[] = [];

  constructor(private homeService: HomeService) {
    this.file = new File([], '');
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    this.homeService.uploadFile(this.file).subscribe(
      (response) => {
        alert('File uploaded successfully');
      },
      (error) => {
        alert('Error uploading file');
      }
    );
  }

  fetchData() {
    this.homeService.fetchData().subscribe(
      (response) => {
        this.data = response.data;
        this.columns = Object.keys(this.data[0]);
      },
      (error) => {
        alert('Error fetching data');
      }
    );
  }
}