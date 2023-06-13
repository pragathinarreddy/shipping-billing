import React, { useState } from 'react'


function Main() {
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [handle, setHandle] = useState(false)
  

  const handleAddress = (e) => {
    console.log(e,"eeee")
    setAddress(e.target.value)

  }
  const handlePincode = (e) => {
    console.log(e,"eeee")
    setPincode(e.target.value)

  }
  const handleCity = (e) => {
    console.log(e,"eeee")
    setCity(e.target.value)

  }
  const handleCountry = (e) => {
    console.log(e,"eeee")
    setCountry(e.target.value)

  }
  const handleClick = () => {
    setHandle(!handle)
    
   
     
  }


  return (
    <>
    <div className='container flex'>
    <div className='shipping flex50'>
            <div className='one'>
            <h2 className='ship'>Shipping Address</h2>
            <div>
            <label htmlFor='address'>Address</label>
            <input onChange={(e) => handleAddress(e)} value={address} name='address' className='address' type="text"  placeholder='eg : vempalli,kadapa,Andhrapradesh'/>

            </div>
            <div>
            <label htmlFor='pincode'>ZIP/Postal Code</label>
            <input onChange={(e) => handlePincode(e)} value={pincode} name='pincode' className='address' type="text" placeholder='eg : 176057' />

            </div>
            <div>
            <label  htmlFor='city'>city</label>
            <input onChange={(e) => handleCity(e)} value={city} name='city' className='address' type="text" placeholder='eg : Vempalli' />

            </div>
            <div>
            <label htmlFor='country'>country</label>
            <input onChange={(e) => handleCountry(e)} value={country} name='country' className='address' type="text" placeholder='eg : India' />

            </div>
           

            </div>


        </div>
        <div className='billing flex50'>
            <div className='one'>
            <h2 className='bill'>Billing Address</h2>
            <span className='flex'>
            <input onClick={() => handleClick()} className='check'  type="checkbox" />
            <p>Same as Shipping Address ? </p>

            </span>
            <div className='addressDiv'>
            <label  htmlFor='address'>Address</label>
            <input value= {handle === true ?  address : ""} name='address' className='address' type="text"  placeholder='eg:vempalli,kadapa,Andhrapradesh'/>

            </div>
            <div>
            <label htmlFor='pincode'>ZIP/Postal Code</label>
            <input value={handle === true ? pincode : ""} name='pincode' className='address' type="text" placeholder='eg : 176057' />

            </div>
            <div>
            <label htmlFor='city'>city</label>
            <input value={handle === true ? city : ""} name ="city" className='address' type="text" placeholder='eg : Vempalli' />

            </div>
            <div>
            <label htmlFor='country'>country</label>
            <input value={handle === true ? country : ""} name='country' className='address last' type="text" placeholder='eg : India' />

            </div>


            </div>


        </div>
        
       
    </div>
    
    </>
 
  )
  
}

export default Main