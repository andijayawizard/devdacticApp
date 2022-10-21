import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.page.html',
  styleUrls: ['./people-detail.page.scss'],
})
export class PeopleDetailPage implements OnInit {
  apiUrl: string = environment.apiUrl;
  details: any;
  image: string;
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.index();
  }
  index() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.peopleService
      .getDetail(id)
      .pipe()
      .subscribe(
        (res) => {
          this.details = res;
          this.image = `${this.apiUrl}/assets/uploads/images/people/${this.details.acak}-1.jpg`;
          console.log('http response: ', res);
        },
        (err) => {
          console.log('http error: ', err);
        },
        () => {
          console.log('http request completed');
        }
      );
  }
}
