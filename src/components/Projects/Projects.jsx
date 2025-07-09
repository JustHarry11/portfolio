import React from 'react';
import projects from '../ProjectData/ProjectData';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <h1 className='project-name-title'>Projects</h1>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className='project-content'>
              <div className='project-text'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
                <a href={project.githubfront} target="_blank" rel="noopener noreferrer">GitHub Front-End</a> |{" "}
                {project.githubback && (
                  <>
                    <a href={project.githubback} target="_blank" rel="noopener noreferrer">
                      GitHub Back-End
                    </a>
                    {" | "}
                  </>
                )}
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Site</a>
              </div>
              <div className='project-image-wrapper'> 
                <img src={project.image} alt={project.name} className='project-image' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}