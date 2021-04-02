import { Subject } from 'rxjs';

const msgSubject = new Subject();

export const messagesService = {
    sendMessage: message => {
        return msgSubject.next({ text: message })
    },
    clearMessages: () => msgSubject.next(),
    getMessage: () => msgSubject.asObservable()
};
