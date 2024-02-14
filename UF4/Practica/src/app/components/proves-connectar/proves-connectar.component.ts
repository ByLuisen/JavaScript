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
  password!: any;
  message!: string;

  constructor(private connectarService: ConnectarService) {}
  ngOnInit(): void {
    this.connectarService.getPosts().subscribe((result) => {
      // console.log(result); // lo que viene directamente del servidor
      this.posts = result; // recojo para mostrarlo en el html
      console.log(this.posts);
    });
    this.connectarService.getUsers().subscribe((result) => {
      this.users = result['resultats'];
      console.log(this.users);
    });

    this.connectarService.getPassword().subscribe((result) => {
      this.password = result['resultats'][0].userpass;
      console.log(this.password);
    });

    this.connectarService.insertUser().subscribe((result) => {
      console.log(result);
    });
  }
}
