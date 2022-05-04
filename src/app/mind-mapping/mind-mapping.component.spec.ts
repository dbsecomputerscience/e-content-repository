import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindMappingComponent } from './mind-mapping.component';

describe('MindMappingComponent', () => {
  let component: MindMappingComponent;
  let fixture: ComponentFixture<MindMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
