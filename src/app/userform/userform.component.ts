import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  private users: User[];
  error: string = "";
  message: string = "";
  constructor(private us: UserService) { }

  ngOnInit() {
  }
  sumitform(fields) {
    let formdata = {
      "fields": {
        "title": {
          "stringValue": fields.title
        },
        "description": {
          "stringValue": fields.description
        }
      }

    }

    this.us.createUsers(formdata).subscribe((users) => {
      this.us.getUsers().subscribe((users) => {
        if (users) {
          this.users = users.documents;
          this.message = "Record Inserted ...";
        }
      }, error => {
        console.log(error);
        this.error = "error..."
      });
    });

  }

  close(){
    this.message="";
    this.message="";
  }
}
