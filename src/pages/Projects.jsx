import React from 'react';
import { IconButton, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Travel Blog Website',
    description: 'Explore the world through our eyes - a curated collection of travel stories, insider tips, and stunning visuals to inspire your next adventure, from hidden gems to well-trodden path',
    github: 'https://github.com/user/project1',
    demo: 'https://travel-blog-11.netlify.app',
    imageUrl: 'https://i.postimg.cc/NfTNZ2Tx/Screenshot-2024-10-29-230342.png', // Replace with your actual image URL
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'Developed a dynamic E-commerce website from the ground up using HTML and CSS, featuring an intuitive shopping experience for users. The website showcases a modern, responsive design that adapts flawlessly across all devices, ensuring seamless accessibility for mobile and desktop users alike',
    github: 'https://github.com/user/project2',
    demo: 'https://resonant-dango-3b7a7c.netlify.app',
    imageUrl: 'https://i.postimg.cc/cHCkMHL3/Screenshot-2024-10-30-001454.png', // Replace with your actual image URL
    imageWidth: 700,
    imageHeight: 400,
  },
  // Add more projects here
  {
    id: 3,
    title: 'Food delivery website',
    description: 'Crafted an appetizing food delivery website using HTML and CSS that brings the restaurant experience online. The website features a mouth-watering design with a visually stunning food gallery, intuitive menu navigation, and seamless ordering systeme',
    github: 'https://github.com/user/project2',
    demo: 'https://food-delivery-11.netlify.app',
    imageUrl: 'https://i.postimg.cc/P5wCNssQ/Screenshot-2024-10-30-002222.png', // Replace with your actual image URL
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    id: 4,
    title: 'Books website',
    description: 'Designed and developed an immersive online books gallery using HTML and CSS, creating a digital haven for book enthusiasts. The website showcases an elegant collection of books with a visually appealing grid layout that makes browsing through different genres and titles a delightful experience',
    github: 'https://github.com/user/project2',
    demo: 'https://book-store-11.netlify.app',
    imageUrl: 'https://i.postimg.cc/yxcdf013/Screenshot-2024-10-30-003609.png', // Replace with your actual image URL
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    id: 5,
    title: 'Project Two',
    description: 'This is the second project.',
    github: 'https://github.com/user/project2',
    demo: 'https://project2.netlify.app',
    imageUrl: 'https://via.placeholder.com/300', // Replace with your actual image URL
    imageWidth: 700,
    imageHeight: 400,
  },
];


const Projects = () => {
  return (
    <div className="projects-container">
      <h2 style={{ fontSize: '2.5rem', fontFamily: 'Raleway, sans-serif' }}>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-icons">
              <IconButton color="primary" href={project.github} target="_blank">
                <GitHub />
              </IconButton>
              <Button variant="contained" color="primary" href={project.demo} target="_blank">
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
