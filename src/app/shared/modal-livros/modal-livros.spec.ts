import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLivros } from './modal-livros';

describe('ModalLivros', () => {
  let component: ModalLivros;
  let fixture: ComponentFixture<ModalLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLivros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLivros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
