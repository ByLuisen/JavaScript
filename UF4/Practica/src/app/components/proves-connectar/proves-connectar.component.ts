import { Component, OnInit } from '@angular/core';
import { ConnectarService } from 'src/app/services/connectar.service';

@Component({
  selector: 'app-proves-connectar',
  templateUrl: './proves-connectar.component.html',
  styleUrls: ['./proves-connectar.component.css'],
})
export class ProvesConnectarComponent implements OnInit {
  posts!: any[];
  users!: any[];

  constructor(private connectarService: ConnectarService) {}
  ngOnInit(): void {
    this.connectarService.getPosts().subscribe((result) => {
      // console.log(result); // lo que viene directamente del servidor
      this.posts = result; // recojo para mostrarlo en el html
      console.log(this.posts);
    });
    this.connectarService.getUsers().subscribe((result) => {
      this.users = result['data'];
      console.log(this.users);
    });
  }
}
