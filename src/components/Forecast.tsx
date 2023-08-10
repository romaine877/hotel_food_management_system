

type ForecastProps = {
  titles: string[];
  recommendations: string[];
  amounts: string[];
};

function Forecast({ titles, amounts, recommendations}: ForecastProps) {
  return (
    <div className="flex flex-row p-8 m-4  bg-green-400">


    <div className="w-1/2">
      <h2 className="text-2xl font-bold text-white">Guest Forecast</h2>
      <ul>
        {titles.map((title, index) => (
            <li className="p-4 flex flex-row" key={index}>
                <div className="bg-white font-bold text-gray-600 p-3 mx-5 w-1/2 ">
                {title}
                </div>
                <div className="flex items-center text-xl font-bold text-white">

                {amounts[index]}
                </div>
          </li>
        ))}
      </ul>
    </div>
        <div className="w-1/2">
        <h2 className="text-2xl font-bold text-gray-500">Guest Forecast</h2>
        <ul className="text-left border-l border-black">
        {recommendations.map((recommendation, index) => (
            <li className="p-4 text-sm" key={index}>
                <div className=" text-white p-3 mx-5">
                {recommendation}
                </div>
           

               
               
          </li>
        ))}
      </ul>
        </div>
        </div>
  );
}

export default Forecast;