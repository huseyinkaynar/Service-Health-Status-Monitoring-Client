import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Services } from 'app/services-class/services';
import { CheckServicesService } from 'app/checkstatus-service/check-services.service';
import { Servicepage } from 'app/servicepage-class/servicepage';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  @Input() pageSize: number = 5;
  @Input() pageNumber: number = 0;
  @Input() pageSearch: String = "";
  value = '';

  services: Services[];
  pageServices: Servicepage = new Servicepage();


  getServices(): void {
    this.checkServicesService.getServices()
      .subscribe(services => this.pageServices = services);
  }

  getPageServices(page: number, size: number): void {
    this.checkServicesService.getPageServices(page, size)
      .subscribe(page => {
        this.pageServices = page
      })

  }
  getSearchPage(search: String, page: number, size: number): void {
    this.pageSearch = search;
    this.checkServicesService.getSearchPage(search, page, size)
      .subscribe(page => {
        this.pageServices = page
      })

  }

  onEnter(value: string) {

    this.pageSearch = value;
    this.getSearchPage(value, this.pageNumber, this.pageSize);

  }

  constructor(private checkServicesService: CheckServicesService) { }

  onSelect(page: number): void {

    if (this.value = "") {
      this.pageNumber = page;
      this.getPageServices(page, this.pageSize);
    }
    else {
      this.pageNumber = page;
      this.getSearchPage(this.pageSearch, page, this.pageSize);

    }


  }
  onSelectSize(size: number): void {
    if (this.value = "") {
      this.pageSize = size;
      this.getPageServices(this.pageNumber, size);
    }
    else {
      this.pageSize = size;
      this.getSearchPage(this.pageSearch, this.pageNumber, size);
    }



  }

  ngOnInit() {
    this.getServices();
  }

}
