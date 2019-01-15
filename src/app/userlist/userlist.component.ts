import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';
declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  private users: User[];
  error: string = "";
  message: string = "";
  student: {};
  constructor(private us: UserService) { }
  ngOnInit() {
    this.us.getUsers().subscribe((users) => {
      if (users) {
        this.users = users.documents;
        console.log(users);
      }
    }, error => {
      console.log("error");
    });
  }

  getuserid(name) {
    var strStartPos = name.lastIndexOf("/") + 1;
    var strLength = name.length;
    var id = name.slice(strStartPos, strLength);
    return id;
  }

  deleteuser(name) {
    var id = this.getuserid(name);
    this.us.deleteUser(id).subscribe((users) => {
      this.us.getUsers().subscribe((users) => {
        if (users) {
          this.users = users.documents;
          this.message = "Record Deleted ...";
        }
      }, error => {
        error("error...");
      });
    });
  }

  

  Edituserdata(updatedata) {
    this.student = updatedata.fields;
    if (this.student) {
      this.student['userid'] = this.getuserid(updatedata.name)
      $("#user").modal();
    }
  }


  onSubmit(fields) {
    let formdata = {
      "fields": {
        "title": {
          "stringValue": fields.title
        },
        "description": {
          "stringValue": fields.description
        }
      },
    }
    this.us.updateUsers(formdata, fields.id).subscribe((users) => {
      $("#user").modal('hide');
      this.us.getUsers().subscribe((users) => {
        if (users) {
          this.users = users.documents;
          this.message = "Record updated ...";
          $("#user").modal('hide');
        }
      }, error => {
        console.log(error);
        this.error = "error..."
        $("#user").modal('hide');
      });
    });
  }

  close(){
    this.message="";
    this.message="";
  }

}
