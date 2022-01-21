import React from 'react'
import "./index.css";

export default function Tree() {
  const spaceRef = React.useRef()
  const [spaceValue, setSpaceValue] = React.useState(0)

  React.useLayoutEffect(() => {
    /**
     * We need to get the value 'cause is relative by the font-size root
     * The 5 is for the padding that the browser set by default, we could add a function
     * to get the current padding but is for now it's not necessary
     */
    setSpaceValue(spaceRef.current.offsetWidth - 5)
  }, [])

  return (
    <div className="tree">
      <span ref={spaceRef}>&nbsp;</span>
      <p>root</p>
      <p style={{marginLeft:`calc(${spaceValue}px * 4)`}}>ant</p>
      <p style={{marginLeft:`calc(${spaceValue}px * 4)`}}>bear</p>
      <p style={{marginLeft:`calc(${spaceValue}px * 8)`}}>cat</p>
      <p style={{marginLeft:`calc(${spaceValue}px * 8)`}}>dog</p>
      <p style={{marginLeft:`calc(${spaceValue}px * 12)`}}>
       elephant
      </p>
      <p style={{marginLeft:`calc(${spaceValue}px * 4)`}}>frog</p>
    </div>
  );
}
