import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesetBuilderComponent } from './ruleset-builder.component';

describe('RulesetBuilderComponent', () => {
  let component: RulesetBuilderComponent;
  let fixture: ComponentFixture<RulesetBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesetBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesetBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
