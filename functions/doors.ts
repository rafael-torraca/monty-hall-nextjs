import DoorModel from "../models/doorModel"

export function createDoors(qtt: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: qtt }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorWithGift;
    return new DoorModel(number, haveGift);
  });
}

export function refreshDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doors.map((currentDoor) => {
    const isIqualModified = currentDoor.number === modifiedDoor.number;

    if (isIqualModified) {
      return modifiedDoor;
    } else {
      return modifiedDoor.isOpen ? currentDoor : currentDoor.unselect();
    }
  });
}