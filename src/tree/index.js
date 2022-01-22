import React from "react";
import "./index.css";
// * Utils
import dataJson from "./data.json";

export default function Tree() {
  const spaceRef = React.useRef();
  const [data, setData] = React.useState(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const spaces = event.target.elements[0].name;
    const value = event.target.elements[0].value;

    if (!value) return null;

    setData((prevValue) => {
      return [...prevValue, `${value}, ${spaces}`];
    });

    event.target.reset();
  };

  const deleteValue = (keyProp) => {
    setData((prevState) => {
      return prevState.filter((data, key) => key !== keyProp);
    });
  };

  React.useEffect(() => {
    setData(dataJson.values);
  }, []);

  if (!data) return <div>No data</div>;

  return (
    <div className="tree">
      <span ref={spaceRef}>&nbsp;</span>
      <p>root</p>
      {data.map((value, key) => {
        const formatData = value.split(",");
        return (
          <p key={value} style={{ marginLeft: `calc(${formatData[1]}px * 4)` }}>
            {formatData[0]}
            <br />
            <form onSubmit={handleOnSubmit}>
              <input name={formatData[1]}></input>
              <button onClick={() => deleteValue(key)} type="button">
                X
              </button>
            </form>
          </p>
        );
      })}
    </div>
  );
}
