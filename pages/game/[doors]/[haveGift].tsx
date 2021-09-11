import styles from "../../../styles/Game.module.css";
import React, { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, refreshDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Game() {

  const router = useRouter();
  const [doors, setDoors] = useState([]);


  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift));
  }, [router?.query])

  function renderDoors() {
    return doors.map((door) => {
      return <Door key={door.number} value={door}
        onChange={(newDoor) => {
          console.log(newDoor);
          setDoors(refreshDoors(doors, newDoor));
        }}  />;
    });
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
        <button>Restart Game</button>
        </Link>
      </div>
    </div>
  );
}