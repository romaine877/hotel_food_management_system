import { TrashIcon } from "@heroicons/react/20/solid";

type WasteWeight = {
    amount: string;
  };
  
  function WasteWeightComponent({ amount}: WasteWeight) {
  
    return (
      <div className={`p-4 m-4 flex flex-row bg-green-400`}>
        <div className="w-1/3">
        <TrashIcon className="h-full w-full  text-white" />
        </div>
        <div className="w-2/3 flex flex-col justify-center">
        <h1 className="font-bold text-white text-4xl text-left ">{amount}</h1>
        <h3 className="text-lg text-white text-left ">Kilograms</h3>
        </div>
      </div>
    );
  }
  
  export default WasteWeightComponent;