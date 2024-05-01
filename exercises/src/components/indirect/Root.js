import Child from './Child';

export default function Root() {
  const x = 13;
  const y = 100;

  return (
    <>
      <Child x={x} y={y}/>
    </>
  )
}
