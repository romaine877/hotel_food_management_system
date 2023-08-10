
import './App.css'
import DataElement from './components/DataElement'
import Forecast from './components/Forecast';
import GuestCount from './components/GuestCount';
import Portion from './components/Portion';
import HotelCalendar from './components/HotelCalendar';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import WasteTrend from './components/WasteTrend';



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
  recommendation: string;
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
    amountNumber: 0,
    engagedGuest: 0,
    freeGuest: 0,
  }])


  useEffect(() => {
    const docRef = firestore.collection('data');
    const unsubscribe = docRef.onSnapshot((doc) => {
     doc.docs.map((doc) =>{
      const data = doc.data();
      const forecasts = data.forecast;
      const mapList = forecasts.map((element: Forecast) => {
        console.log(element);
        return {
          title: element.title,
          recommendations: element.recommendation,
          amount: element.amount,
          amountNumber : parseInt(element.amount.replace(",", "")),
          engagedGuest: element.engagedGuest,
          freeGuest: element.freeGuest,
        };
        
      
      });
      setForecast(mapList);
  
      
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
        <GuestCount forecasts={forecast.map((forcastItem)=>{
          return {
            title: forcastItem.title,
            recommendation: forcastItem.recommendations,
            amount: forcastItem.amount,
            amountNumber: forcastItem.amountNumber,
            engagedGuest: forcastItem.engagedGuest,
            freeGuest: forcastItem.freeGuest,
          };
        })} />
      </div>
      <div className="col-span-2">
      <Forecast titles={forecast.map((element)=>{
        return element.title;
      })} recommendations={forecast.map((element)=>{
        return element.recommendations;
      })} amounts={forecast.map((element)=>{
        return element.amount;
      })} />
      </div>
      <HotelCalendar/>
      </>
      }
      {showFoodWaste &&
      <div className='col-span-2'>
     <WasteTrend currentWeekWaste={'$100'} currentMonthWaste={'$200'}/>
        </div>
      }
     

    </div>
  );
}

export default App
