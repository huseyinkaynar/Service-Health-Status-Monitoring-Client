import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Services } from 'app/services';
import { CheckServicesService } from 'app/check-services.service';
import { FilterPipe } from '../filter.pipe';
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
  @Input() pageS: number;


  services: Services[];
  pageServices: Servicepage = new Servicepage();
  selectedPage: number = 0;
  previousPage: any;




  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }

  getServices(): void {
    this.checkServicesService.getServices()
      .subscribe(services => this.services = services);
  }

  getPageServices(page: number, size: number): void {
    this.pageS = page;
    this.checkServicesService.getPageServices(page, size)
      .subscribe(page => {
        this.pageServices = page
      })

  }



  constructor(private checkServicesService: CheckServicesService) { }

  onSelect(page: number): void {
    this.pageS = page;
    this.getPageServices(page, this.pageSize);
    console.log(this.pageS);
    console.log(this.pageSize);


  }
  onSelectSize(size: number): void {
    this.pageSize = size;
    this.getPageServices(this.pageS, this.pageSize);
    console.log(this.pageSize);
    console.log(this.pageS);


  }

  ngOnInit() {
    this.getPageServices(0, this.pageSize);
  }






}
