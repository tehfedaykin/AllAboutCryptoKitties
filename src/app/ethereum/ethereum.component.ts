import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalContentComponent } from './modal/modal.component'

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.less']
})
export class EthereumComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.bsModalRef = this.modalService.show(ModalContentComponent);
  }

}
