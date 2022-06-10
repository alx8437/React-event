import { TLocalStorageField } from "../types/TLocalStorageField";

export class LocalStorageService {
  static setValue(field: TLocalStorageField, value: any) {
    localStorage.setItem(field, JSON.stringify(value));
  }

  static getValue(field: TLocalStorageField) {
    const value = localStorage.getItem(field);
    if (value) {
      return JSON.parse(value);
    }
  }

  static removeValue(field: TLocalStorageField) {
    localStorage.removeItem(field);
  }
}
