import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './style.css'

export default function nav () {
    return(
        <Navbar
        links={[
          <Link key={2} className="link" to="/about">About</Link>,
          <Link key={3} className="link" to="/contact">Contact</Link>,
          <Link key={4} className="link" to="/resume">Resume</Link>,
          <Link key={5} className="link" to="/project">Projects</Link>
        ]}
      />
    
    )
}