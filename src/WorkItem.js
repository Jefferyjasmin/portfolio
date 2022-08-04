

const WorkItem = () => {
    // data-aos , h4= title, img=[]
  return (
    <div data-aos="flip-down" className="project">
      <div className={`left ${bgd}`}>
        <h4>Developer Connect</h4>
        <img
          src={project1}
          alt=""
          style={{ height: "244px", width: "356px", objectFit: "cover" }}
        />
        <div className="middle">
          <h2>Tech stack</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Express</li>
            <li>node.js</li>
            <li>ES6</li>
            <li>Mongodb</li>
            <li>mobile-responsive</li>
          </ul>
        </div>
      </div>

      <div className={`right ${bgd}`}>
        <h2>
          <a
            className={`work_tag ${light}`}
            href="https://murmuring-thicket-98899.herokuapp.com/"
            target="_blank"
          >
            Live Link to project
          </a>
        </h2>
        <h2>
          <a
            className={`work_tag ${light}`}
            href="https://github.com/Jefferyjasmin/mentorship"
            target="_blank"
          >
            GitHub Link
          </a>
        </h2>
        <p>
          In this project user can create profiles , login and out , create
          comments like another users comments and more. this project is
          designed to connect Developer and exchange ideas and trips.
        </p>
      </div>
    </div>
  );
}

export default WorkItem