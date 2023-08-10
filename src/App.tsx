
import './App.css'
import DataElement from './components/DataElement'
import Forecast from './components/Forecast';
import GuestCount from './components/GuestCount';
import Portion from './components/Portion';
import HotelCalendar from './components/HotelCalendar';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2LymSvwAu_LeQCCKnFDDd0RErMzurhws",
  authDomain: "hotel-food-management-system.firebaseapp.com",
  projectId: "hotel-food-management-system",
  storageBucket: "hotel-food-management-system.appspot.com",
  messagingSenderId: "732217836465",
  appId: "1:732217836465:web:5231f44542a8720b6cb390"
});


const firestore = firebaseApp.firestore();

export type Forecast = {
  title: string;
  recommendations: string;
  amount: string;
  engagedGuest: number;
  freeGuest: number;
};



function App() {

  
  const [showFoodWaste, setShowFoodWaste] = useState(false);
  const [guests, setGuests] = useState({
    guestToday: 0,
    engagedGuests: 0,
    freeGuest: 0,
  });
  const [forecast , setForecast] = useState([{
    title: '',
    recommendations: '',
    amount: '',
    engagedGuest: 0,
    freeGuest: 0,
  }])


  useEffect(() => {
    const docRef = firestore.collection('data');
    const unsubscribe = docRef.onSnapshot((doc) => {
     doc.docs.map((doc) =>{
      const data = doc.data();
      const forecasts = data.forecast;
      forecasts.forEach((element: Forecast) => {
     

        setForecast((prevForecast) => [
          ...prevForecast,
          {
            title: element.title,
            recommendations: data.recommendations,
            amount: data.amount,
            engagedGuest: data.engagedGuest,
            freeGuest: data.freeGuest,
          },
        ]);
        
      
      });
      //console.log(doc.data());
      
      setGuests({
        guestToday: doc.data().guestToday,
        engagedGuests: doc.data().engagedGuests,
        freeGuest: doc.data().freeGuest,
      });
       doc.data()
      });
     
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      <DataElement title={'Guests Today'} body={guests.guestToday} color='bg-blue-400' />
      <DataElement title={'Engaged Guests'} body={guests.engagedGuests} color='bg-teal-400' />
      <DataElement title={'Free Guests'} body={guests.freeGuest} color='bg-green-400' />
      {!showFoodWaste && 
      <>
      
      <Portion onGetPortion={()=> setShowFoodWaste(!showFoodWaste)}  main={forecast.map((element)=>{
        return element.title;
      })} sides={['Bammy', 'Fries']} />
      <div className="col-span-2">
        <GuestCount />
      </div>
      <div className="col-span-2">
        <Forecast titles={['Breakfast', 'Lunch' ,'Dinner']} recommendations={['Open Additional Buffet', 'None', 'None']} amounts={['1900', '1800', '1950']} />
      </div>
      <HotelCalendar/>
      </>
      }
      {showFoodWaste &&
      <>
      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-center">Food Waste</h1>
        </div>
        <div className="col-span-3">
        <Forecast titles={['Breakfast', 'Lunch' ,'Dinner']} recommendations={['Open Additional Buffet', 'None', 'None']} amounts={['1900', '1800', '1950']} />
        </div>
        </>
      }
     

    </div>
  );
}

export default App
