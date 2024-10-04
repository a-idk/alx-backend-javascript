import ClassRoom from './0-classroom';

/* implement a fxn that returns an array of 3 ClassRoom Objects */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
