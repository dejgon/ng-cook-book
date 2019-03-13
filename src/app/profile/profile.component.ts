import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() userId: string;
  data: string = "12.02.2018";
  favAmount: string = "25";

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUserId();
  }
  getUserId(): void {
    const userId = this.route.snapshot.paramMap.get('user_id');
    this.userId = userId;
  }
}
