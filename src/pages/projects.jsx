//import projects from "../projects";
import './pages.css'
import PasswordGen from '/assets/PasswordGen.png'
import Restaurant from '/assets/restraunt.png'
import Wedding from '/assets/image3.png'
import Sports from '/assets/sports.png'

export default function PortfolioPage() {
  return (
    <div className="container">
      <h3 className="contactH3">Projects ... Click on the image</h3>
      
      {/* First Row */}
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
              <h4 className="project-h4" style={{ cursor: 'pointer' }}> Password Generator </h4>
            </a>
          </div>
        </div>

        <div className="card col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href='https://jacobk05.github.io/project_1/'>
              <img
                className="images"
                src={Restaurant}
                alt="Image goes here"
              />
            </a>
          </p>
          <div className="text-block">
            <a className="project-title" href='https://github.com/JacobK05/project_1'>
              <h4 className="project-h4" style={{ cursor: 'pointer' }}> Restaurant and hotel explorer </h4>
            </a>
          </div>
        </div>
      
        <div className="card col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href='https://jtjm-floral.onrender.com/'>
              <img
                className="images"
                src={Wedding}
                alt="Image goes here"
              />
            </a>
          </p>
          <div className="text-block">
            <a className="project-title" href='https://github.com/JacobK05/JTJM-Floral'>
              <h4 className="project-h4" style={{ cursor: 'pointer' }}> Wedding Planner </h4>
            </a>
          </div>
        </div>

        <div className="card col-md-6 col-lg-4 col-xl-3">
          <p>
            <a href='https://sports-finder-8lkc.onrender.com/'>
              <img
                className="images"
                src={Sports}
                alt="Image goes here"
              />
            </a>
          </p>
          <div className="text-block">
            <a className="project-title" href='https://github.com/JacobK05/Sports-finder'>
              <h4 className="project-h4" style={{ cursor: 'pointer' }}> Sports Finder </h4>
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}
