import { Subject } from "rxjs";

const toastsIconSubject = new Subject(false);
const messagesIconSubject = new Subject(false);
const contactIconSubject = new Subject(false);

export const iconsService = {
  toggleToastsIcon: state => toastsIconSubject.next(state),
  toastsIcon$: () => toastsIconSubject.asObservable(),
  toggleMessagesIcon: state => messagesIconSubject.next(state),
  messagesIcon$: () => messagesIconSubject.asObservable(),
  toggleContactIcon: state => contactIconSubject.next(state),
  contactIcon$: () => contactIconSubject.asObservable()
};
