import Image from 'next/image'

import GetCountries from '../libs/GetCountries'

export default async function Home() {

  const data = await GetCountries()

  const europe = data.filter(country => country.region === 'Europe')

  const countries = europe.map(country => (

    <article className='border-4 rounded-lg py-6 flex flex-col items-center justify-center border-slate-700 hover:shadow-2xl '>
      <Image src ={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
      <h2>
      {country.name.common}
      </h2>
    </article>
  ))

  return (
    <div>
     <h1 className='flex flex-col items-center h-[50px] justify-center m-4 bg-slate-500 text-white'>European Countries</h1>
     <div className='grid grid-cols-3 gap-2 uppercase'>
     {countries}
     </div>
  
    <footer className='flex flex-col items-center h-[50px] justify-center m-4 bg-slate-500 text-white'>
    <p>{`We have ${countries.length} countries in Europe`}</p>
    </footer>
    </div>
  )
  }

