import { Component } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restapi',
  imports: [FormsModule],
  templateUrl: './restapi.html',
  styleUrl: './restapi.css',
})
export class Restapi {
 users: User[] = [];
  newUser: User = { name: '', age: 0, salary: 0 };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
  }

  addUser() {
    this.userService.create(this.newUser).subscribe(() => {
      this.newUser = { name: '', age: 0, salary: 0 };
      this.loadUsers();
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.loadUsers();
    });
  }
}

