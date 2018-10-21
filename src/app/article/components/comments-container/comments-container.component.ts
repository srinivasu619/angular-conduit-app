import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {

  @Input() slug;
  comments = [];
  constructor(private commentsService: CommentsService, private authService: AuthService) {
    this.commentsService.deleteEvent.subscribe(
      (commentId) => {
        console.log(commentId);
        this.deleteComment(commentId);
      }
    );
  }

  ngOnInit() {
    this.getArticleComments();
  }

  getArticleComments() {
    this.commentsService.getArticleComments(this.slug).subscribe(
      (data: any) => {
        this.comments = data.comments;
        console.log(this.comments);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('COMPLETED');
      }
    );
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  findComment(commentId) {
    return this.comments.map(comment => comment.id).indexOf(commentId);
  }
  addComment(commentValue) {
    commentValue = commentValue.trim();
    if (commentValue.length !== 0) {
      const comment = {
        body: commentValue
      };
      this.commentsService.postArticleComment(this.slug, {comment: comment}).subscribe(
        (data: any) => {
          this.comments.unshift(data.comment);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('new comment Added');
        }
      );
    }
  }

  deleteComment(commentId) {
    this.commentsService.deleteArticleComment(this.slug, commentId).subscribe(
      (data) => {
        this.comments.splice(this.findComment(commentId), 1);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('DELETED SUCCESSFULLY');
      }
    );
  }
}
