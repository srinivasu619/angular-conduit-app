import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorFavPostsComponent } from './author-fav-posts.component';

describe('AuthorFavPostsComponent', () => {
  let component: AuthorFavPostsComponent;
  let fixture: ComponentFixture<AuthorFavPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorFavPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorFavPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
