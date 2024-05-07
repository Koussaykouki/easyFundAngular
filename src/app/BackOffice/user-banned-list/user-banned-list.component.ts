import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-user-banned-list',
  templateUrl: './user-banned-list.component.html',
  styleUrls: ['./user-banned-list.component.css']
})
export class UserBannedListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText: string = '';

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getBannedUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (e) => console.error(e)
    });
  }

  updateUser(user: User): void {
    // Logic to open user update form or navigate to the user update page
  }

  banUser(userId: number | undefined): void {
    if (userId === undefined) {
      console.error('User ID is undefined');
      return;
    }
    this.userService.banUser(userId).subscribe({
      next: () => {
        alert('User has been banned');
        this.loadUsers(); // Reload the user list to reflect changes
      },
      error: (e) => console.error(e)
    });
  }

  openPopup(user: any) {
    const dialogRef = this.dialog.open(UserDetailDialogComponent, {
      width: '1200px',  // Corrected typo from '1200ox' to '1200px'
      data: user  // Make sure 'user' contains the properties like userId, firstname, etc.
    });
  }

  unbanUser(userId: number): void {
    this.userService.unbanUser(userId).subscribe({
      next: () => {
        alert('User has been unbanned');
        window.location.reload(); // Triggers a full page reload
      },
      error: (error) => {
        console.error('Failed to unban user', error);
      }
    });
  }

  filterUsers(): void {
    if (!this.searchText.trim()) {
      this.filteredUsers = this.users;
      return;
    }
    this.filteredUsers = this.users.filter(user =>
      user.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
