import { BehaviorSubject } from "rxjs";

const infoColorSubject = new BehaviorSubject("#f0f0f0");
const warnColorSubject = new BehaviorSubject("#ffe674");
const alertColorSubject = new BehaviorSubject("#e24e42");
const successColorSubject = new BehaviorSubject("#4bb966");

export const paletteService = {
  setInitialState: () => {
    infoColorSubject.next("#f0f0f0");
    warnColorSubject.next("#ffe674");
    alertColorSubject.next("#e24e42");
    successColorSubject.next("#4bb966");
  },
  getColor: type => {
    switch (type) {
      case "info":
        return infoColorSubject.asObservable();
      case "warn":
        return warnColorSubject.asObservable();
      case "alert":
        return alertColorSubject.asObservable();
      case "success":
        return successColorSubject.asObservable();
    }
  },
  setColor(type, color) {
    switch (type) {
      case "info":
        return infoColorSubject.next(color);
      case "warn":
        return warnColorSubject.next(color);
      case "alert":
        return alertColorSubject.next(color);
      case "success":
        return successColorSubject.next(color);
    }
  },
  getColorValue(type) {
    switch (type) {
      case "info":
        return infoColorSubject?.getValue();
      case "warn":
        return warnColorSubject?.getValue();
      case "alert":
        return alertColorSubject?.getValue();
      case "success":
        return successColorSubject?.getValue();
    }
  }
};
