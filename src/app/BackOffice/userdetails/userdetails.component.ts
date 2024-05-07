import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText: string = '';

  constructor(private userService: UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
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
        this.loadUsers();
        window.location.reload(); // Triggers a full page reload
        // reload the user list to reflect changes
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
  filterUsers(): void {
    if (!this.searchText.trim()) {
      this.filteredUsers = this.users;
      return;
    }
    this.filteredUsers = this.users.filter(user =>
      user.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())||
      user.phoneNumber!.toLowerCase().includes(this.searchText.toLowerCase())

    );
  }
  
}
