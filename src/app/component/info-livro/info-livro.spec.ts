import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLivro } from './info-livro';

describe('InfoLivro', () => {
  let component: InfoLivro;
  let fixture: ComponentFixture<InfoLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLivro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
