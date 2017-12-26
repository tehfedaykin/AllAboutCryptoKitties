import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalContentComponent {

  private title: string = '';
  constructor(public bsModalRef: BsModalRef) {}
}
