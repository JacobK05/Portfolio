import projects from "../projects";
import './pages.css'
export default function PortfolioPage() {
  return (
    <div className="container" >
      <h3 className="contactH3">Projects ... Click on the image</h3>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="card col-md-6 col-lg-4 col-xl-3">
            <p>
              <a href={project.deployed}>
                <img
                  className="images"
                  src={project.image}
                  alt="Image goes here"
                />
              </a>
            </p>
            <div className="text-block">
              <h4>{project.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}