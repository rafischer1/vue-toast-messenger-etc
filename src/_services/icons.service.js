import { Subject } from "rxjs";

const toastsIconSubject = new Subject(false);
const messagesIconSubject = new Subject(false);
const contactIconSubject = new Subject(false);
const paletteIconSubject = new Subject(false);

export const iconsService = {
  toastsIcon$: () => toastsIconSubject.asObservable(),
  messagesIcon$: () => messagesIconSubject.asObservable(),
  contactIcon$: () => contactIconSubject.asObservable(),
  paletteIcon$: () => paletteIconSubject.asObservable(),
  toggleIcon: (show, icon) => {
    switch (icon) {
      case "messages":
        return messagesIconSubject.next(show);
      case "contact":
        return contactIconSubject.next(show);
      case "toasts":
        return toastsIconSubject.next(show);
      case "palette":
        return paletteIconSubject.next(show);
    }
  }
};
