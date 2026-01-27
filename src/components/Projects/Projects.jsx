import React from 'react';
import projects from '../ProjectData/ProjectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css';
import { Navigation } from 'swiper/modules';

export default function Projects() {
  return (
    <>
      <h1 className="project-name-title">Projects</h1>

      <div className="projects-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          centeredSlides
          loop
          className="project-swiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-card">
                <div className="project-hover-wrapper">

                  {/* IMAGE + TITLE */}
                  <div className="project-front">
                    <div className="image-container">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                    </div>

                    <h3 className="project-title">{project.name}</h3>
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="project-overlay">
                    <p>{project.description}</p>
                    <p className="tech">
                      <strong>Tech:</strong> {project.tech.join(', ')}
                    </p>
                  </div>

                  {/* LINKS (always visible) */}
                  <div className="project-links">
                    <a
                      href={project.githubfront}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>

                    {project.githubback && (
                      <a
                        href={project.githubback}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Backend
                      </a>
                    )}

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
