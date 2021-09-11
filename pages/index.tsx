import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from 'next/link';
import InputNumber from "../components/InputNumber";
import { useState } from "react";

export default function Form() {

  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [doorWithGift, setdoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber
            text={"Number of doors:"}
            value={doorsQuantity}
            onChange={newQuantity => setDoorsQuantity(newQuantity)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber
            text={"Door with gift:"}
            value={doorWithGift}
            onChange={newDoorWithGift => setdoorWithGift(newDoorWithGift)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsQuantity}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Start Game</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
