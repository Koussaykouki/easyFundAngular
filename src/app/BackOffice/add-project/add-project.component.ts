import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../../services/project/project-service.service';
import { Project } from '../../models/project.model ';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit {
  selectedFile!: File;
  project: Project = new Project();
  projects: any[] = [];
  show: boolean = false;
  projectStatuses: string[] = ['InProgress', 'Completed', 'Canceledw'];
  projectForm!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  fileInputLabel: string = 'Upload Image';


  constructor(private projetService: ProjectServiceService){}

  ngOnInit(): void {
    this.loadProjects();
  }

  addProject() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('projet', JSON.stringify(this.project));
    this.projetService.addProject( formData).subscribe(response => {
      this.loadProjects();
      console.log(response);
    });
  }
  openPopup() {
    this.show = true;
    console.log('pop -up:');
  }
  closePopup(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.show = false;
  } 
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileInputLabel = 'Upload Image';
    } else {
      this.fileInputLabel = 'Choisir un fichier';
    }
  }
  loadProjects() {
    this.projetService.getProjects().subscribe(
      (data: any[]) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }


  updateProject(id: number, status: string) {
    // Appelez le service pour mettre à jour le projet
    this.projetService.updateProject(id, status).subscribe(
      (response) => {
        console.log('Project updated successfully:', response);
        // Rafraîchissez la liste des projets après la mise à jour
        this.loadProjects();
      },
      (error) => {
        console.error('Error updating project:', error);
      }
    );
  }
  public  deleteProject(projectId:any) {
    this.projetService.deleteProject(projectId).subscribe(
        (resp) => {
          console.log('Project deleted successfully.');
          this.loadProjects();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
    );
  }




  

}
