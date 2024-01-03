import React from 'react'
import { useSelector } from 'react-redux';

const CardUI = () => {
  const cardNumber = useSelector((store)=>store.card.cardnumber)
  const fullName = useSelector((store)=>store.card.fullname)
  const cvv = useSelector((store)=>store.card.cvv)
  const countryCode = useSelector((store)=>store.card.countrycode)
  const phoneNumber = useSelector((store)=>store.card.phonenumber)
  const expiryDate = useSelector((store)=>store.card.expirydate)

  const formatCardNumber = (number) => {
    return number.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (date) => {
    return date.replace(/(\d{2})(\d{2})/, '$1/$2');
  };

  return (
    <div className='flex justify-center m-5'>
    <div className="bg-black text-white w-1/3 h-80 p-4 rounded-3xl">
      <div className='flex justify-center mt-28 text-4xl'>
        <h1 >{formatCardNumber(cardNumber)}</h1>
      </div>
      
      <div className='flex flex-row justify-between mt-20 mx-5'>
        <h2 className=''>{fullName.toUpperCase()}</h2>
        <div>
          <h3> valid thru</h3>
          <h3> {formatExpiryDate(expiryDate)}</h3>
        </div>
      </div>
    </div>
    </div>

  )
}

export default CardUI;