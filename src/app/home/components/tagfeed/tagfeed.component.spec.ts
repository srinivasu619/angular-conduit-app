import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagfeedComponent } from './tagfeed.component';

describe('TagfeedComponent', () => {
  let component: TagfeedComponent;
  let fixture: ComponentFixture<TagfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
