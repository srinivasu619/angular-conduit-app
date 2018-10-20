import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ArticleService } from '../../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input() article?: any;
  editFlag = false;
  title: string;
  description: string;
  content: string;
  tags: string;
  articleEditorForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private articleService: ArticleService, private router: Router) {
   }

  ngOnInit() {
    if (this.article !== undefined) {
      this.editFlag = true;
      this.title = this.article.title;
      this.description = this.article.description;
      this.content = this.article.body;
      this.tags = this.article.tagList.join(',');
    }
    this.articleEditorForm = this.formbuilder.group({
      'title': [this.title, Validators.required],
      'description': [this.description, Validators.required],
      'content': [this.content, Validators.required],
      'tags': [this.tags]
    });
  }

  get form() { return this.articleEditorForm.controls; }

  handleForm(form) {
    const formValue = {
      title: form.title,
      description: form.description,
      body: form.content,
      tagList: form.tags.split(',')
    };
    if (this.editFlag) {
      this.editAnArticle(formValue, this.article.slug);
    } else {
      this.postAnArticle(formValue);
    }
  }

  postAnArticle(article) {
    this.articleService.postNewArticle({article: article}).subscribe(
      (data: any) => {
        this.router.navigate(['/article', data.article.slug]);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('POSTED COMPLETE');
      }
    );
  }

  editAnArticle(article, articleSlug) {
    this.articleService.editArticle(article, articleSlug).subscribe(
      (data: any) => {
        this.router.navigate(['/article', data.article.slug]);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('EDIT COMPLETED');
      }
    );
  }
}
