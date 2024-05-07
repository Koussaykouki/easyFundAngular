import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectServiceService } from '../../services/project/project-service.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  project: any; // Assuming project is of type object, adjust as per your project structure
  projectId!: string;

  constructor(private route: ActivatedRoute, private projectService: ProjectServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.getProjectDetails  ();
    });
  }

  getProjectDetails(): void {
    if (this.projectId) {
      this.projectService.getProjectDetails(this.projectId)
        .subscribe(project => this.project = project);
    }
  }

  fetchProjectDetails(): void {
    this.projectService.getProjectDetails(this.projectId).subscribe(
      (data: any) => {
        this.project = data;
      },
      error => {
        console.log('Error fetching project details:', error);
      }
    );
  }

  addInvestmentToProject(investmentAmount: number): void {
    // Implement logic to add investment to this project
  }

  onSubmit(comment: string): void {
    // Implement logic to submit a comment for this project
  }

  generatePDF(projectDetails: any): void {
    const doc = new jsPDF();
    doc.text('Project Details', 10, 10);
    doc.text('Project Name: ' + projectDetails.name, 10, 20);
    doc.text('Project Description: ' + projectDetails.description, 10, 30);
    // Add more project details as needed

    // Save the PDF
    doc.save('project_details.pdf');
}
}