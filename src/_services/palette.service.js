import { Subject } from "rxjs";
// warn: "#ffe674",
//     alert: "#e24e42",
//     success: "#4bb966"

const infoColorSubject = new Subject("#f0f0f0");
const warnColorSubject = new Subject("#ffe674");

export const paletteService = {
  setInitialState: () => {
    infoColorSubject.next("#f0f0f0");
    warnColorSubject.next("#ffe674");
  },
  getColor: type => {
    switch (type) {
      case "info":
        return infoColorSubject.asObservable();
      case "warn":
        return warnColorSubject.asObservable();
    }
  },
  setColor(type, color) {
    switch (type) {
      case "info":
        return infoColorSubject.next(color);
      case "warn":
        return warnColorSubject.next(color);
    }
  }
};
