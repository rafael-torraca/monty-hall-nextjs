import styles from "../styles/Door.module.css";
import DoorModel from "../models/doorModel";
import Gift from "./Gift";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.isSelected && !door.isOpen ? styles.selectedDoor : "";

  const alterSelection = (ev) => props.onChange(door.alterSelection());
  const openDoor = (ev) => {
    ev.stopPropagation();
    props.onChange(door.openDoor());
  };

  function doorRender() {
    return (
      <div className={styles.door}>
        <div className={styles.doorNumber}>{door.number}</div>
        <div className={styles.doorHandle} onClick={openDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alterSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.isClosed ? doorRender() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
