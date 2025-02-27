import { Component } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nz-demo-message-loading',
  imports: [NzButtonModule],
  template: `<button nz-button nzType="default" (click)="createBasicMessage()">Display a loading indicator</button>`
})
export class NzDemoMessageLoadingComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    const id = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 2500);
  }
}
