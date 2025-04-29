import { Component, OnInit } from '@angular/core';
import { ApiService } from './crud.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ data?.message }}</h1>`,
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
