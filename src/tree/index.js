import React from "react";
import "./index.css";
// * Utils
import dataJson from "./data.json";

export default function Tree() {
  const spaceRef = React.useRef();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(dataJson);
  }, []);

  if (!data) return <div>No data</div>;

  return (
    <div className="tree">
      <span ref={spaceRef}>&nbsp;</span>
      <p>root</p>
      {data.values.reverse().map((value) => {
        const formatData = value.split(",");
        return (
          <p key={value} style={{ marginLeft: `calc(${formatData[1]}px * 4)` }}>
            {formatData[0]} - {formatData[1]}
          </p>
        );
      })}
    </div>
  );
}
