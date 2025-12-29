export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  console.log(props);
  return (
    <>
      <p>number: {props.numberValue}</p>
      <p>stringValue: {props.stringValue}</p>
      <p>booleanValue: {props.booleanValue.toString()}</p>
      <p>arrayValue: {props.arrayValue}</p>
      <p>objectValue: {JSON.stringify(props.objectValue)}</p>
      <p>function: {props.handleClick.toString()}</p>
    </>
  );
}
