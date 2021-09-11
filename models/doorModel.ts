export default class DoorModel {
  #number: number;
  #haveGift: boolean;
  #isSelected: boolean;
  #isOpen: boolean;

  constructor(number: number, haveGift = false, isSelected = false, isOpen = false) {
    this.#number = number;
    this.#haveGift = haveGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get isClosed() {
    return !this.isOpen;
  }

  unselect() {
    const isSelected = false;
    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpen);
  }

  alterSelection() {
    const isSelected = !this.isSelected;
    return new DoorModel(this.number, this.haveGift, isSelected, this.isOpen);
  }

  openDoor() {
    const isOpen = true;
    return new DoorModel(this.number, this.haveGift, this.isSelected, isOpen);
  }
}
