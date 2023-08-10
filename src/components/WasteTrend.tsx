

type WasteTrendProps = {
    currentWeekWaste: string;
    currentMonthWaste: string;
};

function WasteTrend({ currentWeekWaste, currentMonthWaste,  }: WasteTrendProps) {
    return (
        <div className="p-2 m-4 bg-gray-200">
            <div className="border-green-700 border-2 p-6 flex flex-row">
                <div className="w-1/3 flex flex-col text-left">
                <h2 className="text-2xl font-bold">Waste</h2>
                    <p className="text-xs">Current week waste: </p>
                    <div className="flex-grow"></div>
                    <div>
                        <p className="text-3xl font-bold text-green-400">{currentWeekWaste}</p>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col justify-end">
               

                    <p className="text-xs text-left ">Current month waste: </p>
              
                        <p className="text-3xl font-bold text-left text-green-400">{currentMonthWaste}</p>
                       
                </div>

                <div className="w-1/3">
                    <button className="bg-green-500 text-white px-6 py-4 h-full w-full">
                        Download
                    </button>
                </div>
            </div>

        </div>
    );
}

export default WasteTrend;