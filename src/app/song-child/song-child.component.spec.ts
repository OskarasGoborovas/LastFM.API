import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongChildComponent } from './song-child.component';

describe('SongChildComponent', () => {
  let component: SongChildComponent;
  let fixture: ComponentFixture<SongChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
