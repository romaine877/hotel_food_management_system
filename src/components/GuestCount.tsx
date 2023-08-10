import { GuestChart } from "./GuestCountChart";


export type Forecast = {
    title: string;
    recommendation: string;
    amount: string;
    engagedGuest: number;
    freeGuest: number;
  };

type GuestChartProps = {
    
    forecasts: Forecast[];
  };


function GuestCount( {forecasts}: GuestChartProps) {
    const titles = forecasts.map((forecast)=>{
        return forecast.title;
    })
    const freeGuests = forecasts.map((forecast)=>{
        return forecast.freeGuest;
    })
    const engagedGuests = forecasts.map((forecast)=>{
        return forecast.engagedGuest;
    })
    return (
        <div className="bg-gray-300 p-8 m-4 flex flex-row">
            <div className="w-2/3 ">
                <GuestChart titles={titles} freeGuests={freeGuests} engagedGuests={engagedGuests}  />
            </div>
            <div className="w-1/3">
            <h2 className="text-gray-700 font-bold text-2xl text-right">Mealtime Guest Count</h2>
            <h2 className="text-gray-700 text-xs px-4 pt-5">The daily meantime guest count reflects the three squared 
            meals served per day. The daily guest count is broken down into two groups: Engaged Guests and Free 
            Guests for each mealtime</h2>
          
            </div>
        </div>
    );
    
}

export default GuestCount;