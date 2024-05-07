import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model ';
import { ProjectServiceService } from '../../services/project/project-service.service';
import { commentsList } from '../../models/commentsList.model';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit {
  newCommentText: string = '';
  projectList: Project[] = [];
  projects?: Project[] = [];
  comment: Comment[] = [];
  searchQuery: string = '';
  filteredProjects: any[] = [];
  

  investmentAmount?: number; 
  constructor(private projectService: ProjectServiceService) { }

  ngOnInit(): void {
    this.loadProjects();
    console.log(this.projectList);
  }

  filterProjects(): void {
    console.log('Search query:', this.searchQuery);
    if (!this.searchQuery.trim()) {
        this.filteredProjects = this.projectList;
    } else {
        this.filteredProjects = this.projectList.filter(project =>
            (project.name?.toLowerCase().includes(this.searchQuery.toLowerCase()) || false) ||
            (project.description?.toLowerCase().includes(this.searchQuery.toLowerCase()) || false)
        );
    }
    console.log('Filtered projects:', this.filteredProjects);
}



  
  printProjectInfo(project: Project) {
   
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.projectList = data;
        
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }


  addInvestmentToProject(projectId: any, investmentAmount: any): void {
    this.sendEmail();
    this.projectService.addInvestment(projectId, investmentAmount)
      .subscribe(
        response => {
          this.loadProjects();
          console.log('Investment added successfully:', response);
          // Handle success, if needed
        },
        error => {
          this.loadProjects();
          console.error('Error adding investment:', error);
          // Handle error, if needed
        }
      );
  }
  onSubmit( projectId: any, comments:any): void {
    
    this.projectService.addComment(1, projectId,comments)
      .subscribe(
        (response) => {
          this.loadProjects();
          console.log('Comment added successfully:', response);
          // Handle success, if needed
        },
        (error) => {
          this.loadProjects();
          console.error('Error adding comment:', error);
          // Handle error, if needed
        }
      );
  }

  
  sendEmail(): void {
    const templateParams = {
      to_email: 'achref2024test@gmail.com', // Replace with recipient's email address
      message: 'Investment success!' // Replace with your message
    };
  
    const userID = 'aaRVbVvIeITFCLq-T';
    emailjs.send('service_ccr4kz9', 'template_r6uph1j', templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, show a success message to the user
      }, (error) => {
        console.error('Error sending email:', error);
        // Optionally, show an error message to the user
      });
  }

  
  }
  

