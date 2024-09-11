import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState([[10, 5], [3, 2], [8, 6], [23], [7, 1]]);

  const addPersonToLine = (e: any, value: number) => {
    e.preventDefault();

    let leastProductValue = 1e6;
    let lineWithLeast: number[];

    for (let line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);
      if (totalInLine < leastProductValue) {
        leastProductValue = totalInLine;
        lineWithLeast = line;
      }
    }

    if (items > 0) {
      setLines(prevLines =>
        prevLines.map(line =>
          line === lineWithLeast ? [...line, items] : line
        )
      );
    }
    setItems(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prevLines => {
        const updatedLines = prevLines.map(line =>
          [line[0] - 1, ...line.slice(1)].filter(number => number > 0)
        );

        const allCleared =
          updatedLines.flat().reduce((sum, value) => sum + value, 0) === 0;

        if (allCleared) {
          clearInterval(interval);
        }

        return updatedLines;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>CHECKOUT APP</h1>
      <form>
        <input
          type="number"
          required
          value={items}
          onChange={e => setItems(e.target.valueAsNumber)}
        />
        <button onClick={e => addPersonToLine(e, items)}>checkout</button>
      </form>

      <div className="queue">
        {lines.map((element, idx) => (
          <div className="single-line">
            <p>CHECKOUT</p>
            <div key={idx}>
              {element.map(singlePerson => (
                <p className="person-in-queue">{singlePerson}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
