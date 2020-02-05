import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Services } from 'app/services';
import { CheckServicesService } from 'app/check-services.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { error } from '@angular/compiler/src/util';
import { Servicepage } from 'app/servicepage';
import * as Rx from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  @Input() pageSize: number = 5;
  @Input() pageNumber: number = 0;


  services: Services[];
  pageServices: Servicepage = new Servicepage();
  selectedPage: number = 0;
  previousPage: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageN = 1;






  getServices(): void {
    this.checkServicesService.getServices()
      .subscribe(services => this.services = services);
  }

  getPageServices(page: number, size: number): void {
    this.checkServicesService.getPageServices(page, size)
      .subscribe(page => {
        this.pageServices = page
      })

  }
  getSearchPage(search: String): void {
    this.checkServicesService.getSearchPage(search)
      .subscribe(page => {
        this.pageServices = page
      })

  }

  value = '';
  onEnter(value: string) {

    this.value = value;
    this.getSearchPage(value);

    console.log(value);


  }




  constructor(private checkServicesService: CheckServicesService) { }

  onSelect(page: number): void {
    this.pageNumber = page;
    this.getPageServices(page, this.pageSize);
    console.log(this.pageNumber);
    console.log(this.pageSize);


  }
  onSelectSize(size: number): void {
    this.pageSize = size;
    this.getPageServices(this.pageNumber, this.pageSize);
    console.log(this.pageSize);
    console.log(this.pageNumber);


  }



  ngOnInit() {
    this.getPageServices(this.pageNumber, this.pageSize);
  }






}
