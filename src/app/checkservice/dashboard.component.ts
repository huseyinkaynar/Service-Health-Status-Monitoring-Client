import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chartist from 'chartist';
import { PostservicesFormService } from 'app/poststatus-service/postservices-form.service';
import { PostService } from 'app/postservice-class/post-service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postService: PostService;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postservicesServiceService: PostservicesFormService) { this.postService = new PostService(); }

  onSubmit() {
    this.postservicesServiceService.savepost(this.postService).subscribe(result => this.goToPostServiceList());
  }
  goToPostServiceList() {
    this.router.navigate(["/checkservices"]);
  }





  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = "info";

    $.notify({
      icon: "notifications",
      message: "Servis kontrolü gerçekleştiriliyor..."

    }, {
      type: type[color],
      timer: 4000,
      placement: {
        from: from,
        align: align
      }
    });
  }



  ngOnInit() {

  }

}
