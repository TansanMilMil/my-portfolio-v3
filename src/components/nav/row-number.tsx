import { useEffect, useState } from "react";
import Styles from "../../styles/index/index.module.scss";
import { useLocation } from "react-router-dom";

export default function RowNumber() {
  const [numArray, setNumArray] = useState([0]);
  const location = useLocation();

  const createNumArray = (number: number): number[] => {
    const numbers: number[] = [];
    for (let i = 0; i < number; i++) {
      numbers.push(i + 1);
    }
    return numbers;
  };

  const estimateRowNumber = () => {
    let rowNum = 1;
    const revision = 4;
    const innerComponent: HTMLElement | null =
      document.getElementById("inner-component");
    if (innerComponent !== null) {
      rowNum = Math.ceil(innerComponent.offsetHeight / 18) + revision;
    }
    const numbers: number[] = createNumArray(rowNum);
    setNumArray(numbers);
  };

  const handleComplete = (url: string) => {
    setTimeout(() => {
      estimateRowNumber();
    }, 10);
  };

  useEffect(() => {
    estimateRowNumber();
  }, []);

  useEffect(() => {
    handleComplete(location.pathname);
  }, [location]);

  return (
    <div className={Styles.rowNumber}>
      {numArray.map((rowNumber) => (
        <div key={rowNumber}>{rowNumber}</div>
      ))}
    </div>
  );
}
