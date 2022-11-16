import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="nav_container">
         <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/netflix">Netflix</Link></li>
            <li><Link href="/series">Series</Link></li>
          
        </ul>
    </nav>
  )
}

export default Navbar