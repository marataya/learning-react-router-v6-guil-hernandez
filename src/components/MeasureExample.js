import { useCallback, useState } from "react";

export default function MeasureExample() {
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <div ref={measuredRef} className='pb-5'>Hello, world</div>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
}