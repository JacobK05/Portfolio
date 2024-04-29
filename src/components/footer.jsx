import Logo from '/assets/image.png'
import Logo2 from '/assets/image2.png'
import './style.css'

export default function footer (){
    return (
        <div>
            <a className='github' href="https://github.com/JacobK05"><img src={Logo2} alt="GitHub Logo" /></a>
            <a className='linkedin' href="https://www.linkedin.com/in/jacob-kaufenberg-324a122a7"><img src={Logo} alt="GitHub Logo" /></a>
        </div>
    )
}