document.addEventListener('DOMContentLoaded', function() {
    // Initialize skills data
    const skillsData = [
        { name: "C#", level: "85%", icon: "/assets/images/csharp.png" },
        { name: "JavaScript", level: "90%", icon: "/assets/images/js.png" },
        { name: "Java", level: "80%", icon: "/assets/images/java.png" },
        { name: "MySQL", level: "85%", icon: "/assets/images/mysql.png" },
        { name: "Python", level: "75%", icon: "/assets/images/python.png" },
        { name: "Flask", level: "80%", icon: "/assets/images/flask.png" },
        { name: "PHPMyAdmin", level: "85%", icon: "/assets/images/phpmyadmin.png" },
        { name: "HTML", level: "90%", icon: "/assets/images/html.png" },
        { name: "CSS", level: "85%", icon: "/assets/images/css.png" }
    ];

    // Initialize projects data
    const projectsData = [
        {
            name: "STUDENT_MANAGEMENT_SYSTEM",
            description: "Web application for managing student records",
            technologies: ["C#", "SQL", "HTML/CSS"],
            image: "https://via.placeholder.com/300x200?text=Student+System"
        },
        {
            name: "E-COMMERCE_PLATFORM",
            description: "Online store with payment integration",
            technologies: ["JavaScript", "Python", "Flask"],
            image: "https://via.placeholder.com/300x200?text=E-commerce"
        }
    ];

    // DOM Elements
    const skillsGrid = document.querySelector('.skills-grid');
    const projectsContainer = document.getElementById('projects-container');
    const addProjectBtn = document.querySelector('.add-project');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    const projectForm = document.getElementById('project-form');
    const sidebar = document.querySelector('.cyber-sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    // Render Skills
    function renderSkills() {
        skillsGrid.innerHTML = '';
        skillsData.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = `
                <img src="${skill.icon}" alt="${skill.name}" loading="lazy">
                <p>${skill.name}</p>
                <div class="skill-bar"><span style="--skill-level: ${skill.level}"></span></div>
            `;
            skillsGrid.appendChild(skillItem);
        });
    }

    // Render Projects
    function renderProjects() {
        projectsContainer.innerHTML = '';
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3>${project.name}</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                <p>> ${project.description}</p>
                <img src="${project.image}" alt="${project.name}" loading="lazy" class="project-image">
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Add Project Functionality
    addProjectBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newProject = {
            name: document.getElementById('project-name').value,
            description: document.getElementById('project-desc').value,
            technologies: document.getElementById('project-tech').value.split(',').map(t => t.trim()),
            image: document.getElementById('project-image').value || 'https://via.placeholder.com/300x200?text=New+Project'
        };
        
        projectsData.push(newProject);
        renderProjects();
        projectForm.reset();
        modal.style.display = 'none';
    });

    // Sidebar Toggle
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !e.target.classList.contains('sidebar-toggle')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Active Nav Link
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize
    renderSkills();
    renderProjects();
});