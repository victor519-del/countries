import Link from "next/link"

export default function Navbar() {
  return (
    
        <nav>
            <ul className='flex justify-between text-xl capitalize font-bold h-[80px] bg-slate-500 text-white items-center sticky'>
                <Link href='/'>
                <li>All</li>
                </Link>
                
                <Link href='/Africa'>
                <li>Africa</li>
                </Link>
                
                <Link href='/Europe'>
                <li>Europe</li>
                </Link>
                
                <Link href='/Oceania'>
                <li>Oceania</li>
                </Link>
                
                <Link href='/Asia'>
                <li>Asia</li>
                </Link>
                
                
                <Link href='/America'>
                <li>South America</li>
                </Link>
            </ul>
        </nav>

  )
}
