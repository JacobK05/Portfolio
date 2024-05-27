//import projects from "../projects";
import './pages.css'
import PasswordGen from '/assets/PasswordGen.png'
export default function PortfolioPage() {
  return (
    <div className="container" >
      <h3 className="contactH3">Projects ... Click on the image</h3>
      <div className="row">
        
          <div className="card col-md-6 col-lg-4 col-xl-3">
            <p>
              <a href='https://jacobk05.github.io/java-challenge/'>
                <img
                  className="images"
                  src={PasswordGen}
                  alt="Image goes here"
                />
              </a>
            </p>
            <div className="text-block">
              <a className="project-title" href='https://github.com/JacobK05/java-challenge'> 
              <h4 className="project-h4" style={{cursor: 'pointer'}}> Password Generator </h4>
              </a>
            </div>
          </div>
    
      </div>
    </div>
  );
}