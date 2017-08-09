import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongParentComponent } from './song-parent.component';

describe('SongParentComponent', () => {
  let component: SongParentComponent;
  let fixture: ComponentFixture<SongParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
