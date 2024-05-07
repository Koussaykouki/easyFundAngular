import { Component, OnInit } from '@angular/core';
import { commentsList } from '../../models/commentsList.model';
import { ProjectServiceService } from '../../services/project/project-service.service';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrl: './all-comment.component.css'
})

export class AllCommentComponent implements OnInit {

  comments!: commentsList[];

  constructor(private commentService: ProjectServiceService) { }

  ngOnInit(): void {
    this.getComments();
    this.getLastTwoCommentsForAllProjects();

  }

  getComments(): void {
    this.commentService.getAllComments().subscribe(comments => this.comments = comments);
  }



  getLastTwoCommentsForAllProjects(): void {
    this.commentService.getLastTwoCommentsForAllProjects().subscribe(comments => this.comments = comments);
  }

}
