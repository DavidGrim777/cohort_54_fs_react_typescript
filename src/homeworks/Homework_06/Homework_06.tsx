import { type ReactNode } from "react";
import "./styles.css";

import { v4 } from "uuid";
import{type Car} from "./types";

function Homework_06() {
  // interface Car {
  //   brand: string;
  //   price: number;
  //   isDiesel: boolean;
  // }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
  const carCards: ReactNode = cars.map((car: Car) => {
    return (
      <div key={v4()} className="car">
        <h2 className="car_brand">Brand: {car.brand}</h2>
        <p className="car_info">Price: ${car.price}</p>
        <p className="car_info">Diesel: {car.isDiesel ? "Yes" : "No"}</p>
      </div>
    );
  });

  return (
    <div className="homework_06_page_wrapper">
      <h1 className="title">Car Catalog</h1>
      <div className="cars_wrapper">{carCards}</div>
    </div>
  );
}

export default Homework_06;
