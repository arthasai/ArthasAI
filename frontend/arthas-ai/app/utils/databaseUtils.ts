import { v4 as uuidv4 } from "uuid";

export function getCurrentDate() {
  return new Date(Date.now() + 1000 * 60 * -new Date().getTimezoneOffset())
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")
    .toString();
}

export function getUUID() {
  return uuidv4();
}
