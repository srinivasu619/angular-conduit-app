import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment;
  constructor(private authService: AuthService, private commentsService: CommentsService) { }

  ngOnInit() {
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get currentUser() {
    return this.authService.getUserName();
  }

  deleteComment() {
    this.commentsService.deleteEvent.emit(this.comment.id);
  }
}
