import { Injectable } from '@angular/core'
export class Contact {
    constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
    new Contact(22, 'Same spade'),
    new Contact(23, 'Nick Danger'),
    new Contact(24, 'Nancy Drew')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {
    getContacts() {
        return new Promise<Contact[]>(resolve => {
            setTimeout(function () {
                resolve(CONTACTS);
            }, FETCH_LATENCY);
        });
    }

    getContact(id: number | string) {
        return this.getContacts().then(contacts => contacts.find(c => c.id === +id));
    }
}