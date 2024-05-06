import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.users = data,
      error: (e) => console.error(e)
    });
  }

  updateUser(user: User): void {
    // logic to open user update form or navigate to the user update page
  }

  banUser(userId: number | undefined): void {
    if (userId === undefined) {
      console.error('User ID is undefined');
      return;
    }
    this.userService.banUser(userId).subscribe({
      next: () => {
        alert('User has been banned');
        this.loadUsers(); // reload the user list to reflect changes
      },
      error: (e) => console.error(e)
    });
  }
}
