import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from '../../models/project.model ';
import { commentsList } from '../../models/commentsList.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  readonly ADD_Projet ="http://localhost:8084/Project/add-Project"
  readonly URL_Projet="http://localhost:8084/Project"
  readonly DELETE_Project ="http://localhost:8084/Project/deleteProject/"
  constructor(private http: HttpClient ) { }


  addProject( projectData: any): Observable<any> {
    const url = `${this.ADD_Projet}`;
    return this.http.post(url, projectData );
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.URL_Projet}/get_all_Projects`);
  }

  updateProject(id: number, projectData: any): Observable<any> {
    const url = `${this.URL_Projet}/updateProject/${id}`;
    return this.http.put<any>(url, projectData)
      .pipe(
        catchError(this.handleError)
      );
}
deleteProject(projectId: number){
  return this.http.delete(this.DELETE_Project + projectId);
}

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  addComment(userId: number, projectId: number, commentText: string): Observable<any> {
    return this.http.post<Comment>(`${this.apiUrl}/Comment/add-Comment/${userId}/${projectId}/${commentText}`, null);
  }

  private apiUrl = 'http://localhost:8084';

  addInvestment(projectId: number, investmentAmount: number): Observable<any> {
    const url = `${this.apiUrl}/InvestementRequest/addinvest?projectId=${projectId}&investmentAmount=${investmentAmount}`;
    return this.http.post<any>(url, {});
  }
 

  getProjectDetails(id: string): Observable<Project> {
    return this.http.get(`http://localhost:8084/Project/details/${id}`);
  }
  private apiUrl1 = 'http://localhost:8084/Comment/get_all_Comments';
  
  
  getAllComments(): Observable<commentsList[]> {
    return this.http.get<commentsList[]>(this.apiUrl1);
  }
  private apiUrl2 = 'http://localhost:8084/Comment/last_two_for_all_projects';

  getLastTwoCommentsForAllProjects(): Observable<commentsList[]> {
    return this.http.get<commentsList[]>(this.apiUrl2);
  }
}
