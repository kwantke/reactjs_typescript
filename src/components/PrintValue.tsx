export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: true | false;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  const{    
    numberValue,
    stringValue,
    booleanValue,
    arrayValue,
    objectValue,
    handleClick,
  } = props;
  return (
    <>
      <p>number: {numberValue}</p>
      <p>stringValue: {stringValue}</p>
      <p>booleanValue: {booleanValue.toString()}</p>
      <p>arrayValue: {arrayValue}</p>
      <p>objectValue:{JSON.stringify(objectValue)}</p>
      <p>function: {handleClick.toString()}</p>
    </>
  );
}
