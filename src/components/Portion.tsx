

type PortionProps = {
    main: string[];
    sides: string[];
    onGetPortion: () => void;
};

function Portion({ main, sides, onGetPortion}: PortionProps) {
    return (
        <div className="bg-blue-400 p-8 m-4 text-left h-[300px]">
            <div className="flex flex-row place-content-between">
                <h1 className="text-white font-bold text-4xl">Menu</h1>
                <button onClick={onGetPortion} className="bg-green-500 w-1/2 text-white rounded-full py-2 px-4">
                    Waste Portion
                </button>
            </div>
            <h2 className="text-gray-700 font-bold">Main:</h2>
            <ul className="text-white">
                {main.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2 className="text-gray-700 font-bold">Sides:</h2>
            <ul className="text-white">
                {sides.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Portion;