
type DataElementProps = {
  title: string;
  body: number;
  color: string;
  onTap?: () => void;
};

function DataElement({ title, body, color, onTap }: DataElementProps) {

  return (
    <div onClick={onTap} className={`p-4 ${color} m-4`}>
      <h3 className="text-white text-lg text-left">{title}</h3>
      <h1 className="text-white font-bold text-4xl text-left">{body}</h1>
    </div>
  );
}

export default DataElement;