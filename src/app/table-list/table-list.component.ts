import { Component, OnInit } from '@angular/core';
import { Services } from 'app/services';
import { CheckServicesService } from 'app/check-services.service';
import { FilterPipe } from '../filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  services: Services[];
  itemsPerPage: number;
  totalItems: any;
  private page: number = 1;
  private pages: Array<any>;
  previousPage: any;




  constructor(private checkServicesService: CheckServicesService) { }

  ngOnInit() {
    this.loadServices();



  }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadServices();
    }
  }

  loadServices() {
    this.checkServicesService.getServices(this.page).subscribe(
      data => {
        this.services = data;
        this.pages = new Array(data['totalPages']);
      },
      (error) => {
        console.log(error.error.mesage);

      }

    );
  }



}
