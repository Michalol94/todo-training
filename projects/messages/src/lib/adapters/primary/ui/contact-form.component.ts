import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';
import { Observable } from 'rxjs';
import { MessageDTO } from '../../../application/ports/secondary/message.dto';
import { GETS_ALL_MESSAGE_DTO, GetsAllMessageDtoPort } from '../../../application/ports/secondary/gets-all-message.dto-port';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
    readonly createMessage: FormGroup = new FormGroup({ text: new FormControl(), email: new FormControl() });
  messages$: Observable<MessageDTO[]> = this._getsAllMessageDto.getAll();

    constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort, @Inject(GETS_ALL_MESSAGE_DTO) private _getsAllMessageDto: GetsAllMessageDtoPort) {
    }

    onCreateMessageSubmited(createMessage: FormGroup): void {
        this._addsMessageDto.add({
            text: createMessage.get('text').value,
            email: createMessage.get('email').value
        });
        alert(
            `Message added! :)`
        );
        this.createMessage.reset();

    }

}

