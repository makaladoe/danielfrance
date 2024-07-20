document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const spinnerContainer = document.getElementById('spinnerContainer');
    const skillsContainer = document.querySelector('.skills');
    const skillList = document.getElementById('skillList');
    const skillDetails = document.getElementById('skillDetails');

    const skills = [
        {
            title: 'Programming Skills',
            content: `
                <h3>Front-End Programming:</h3>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Frameworks: React, Vue.js</li>
                    <li>UI/UX Design</li>
                </ul>
                <h3>Back-End Programming:</h3>
                <ul>
                    <li>Python, Java, Node.js</li>
                    <li>Frameworks: Django, Express.js</li>
                    <li>Database Management: SQL, MongoDB</li>
                </ul>
                <h3>Other Key Skills:</h3>
                <ul>
                    <li>Version Control: Git, GitHub</li>
                    <li>API Development: RESTful APIs, GraphQL</li>
                    <li>Testing: Unit Testing, Integration Testing</li>
                </ul>
            `
        },
        {
            title: 'AI Skills',
            content: `
                <h3>Machine Learning:</h3>
                <ul>
                    <li>Supervised and Unsupervised Learning</li>
                    <li>Deep Learning with TensorFlow and Keras</li>
                    <li>Model Evaluation and Optimization</li>
                </ul>
                <h3>AI Model Development and Deployment:</h3>
                <ul>
                    <li>Data Preprocessing and Feature Engineering</li>
                    <li>Model Deployment with Flask and FastAPI</li>
                    <li>Monitoring and Maintenance</li>
                </ul>
                <h3>Computer Vision:</h3>
                <ul>
                    <li>Image and Video Analysis</li>
                    <li>Object Detection and Recognition</li>
                    <li>OpenCV, YOLO, TensorFlow</li>
                </ul>
            `
        },
        {
            title: 'Development Skills',
            content: `
                <h3>Mobile App Development:</h3>
                <ul>
                    <li>React Native, Flutter</li>
                    <li>Performance Optimization</li>
                    <li>App Store Deployment</li>
                </ul>
                <h3>Web Development:</h3>
                <ul>
                    <li>Full-Stack Development</li>
                    <li>Responsive Design</li>
                    <li>SEO Optimization</li>
                </ul>
                <h3>API Development:</h3>
                <ul>
                    <li>RESTful APIs, GraphQL</li>
                    <li>API Security and Authentication</li>
                    <li>Documentation with Swagger</li>
                </ul>
            `
        },
        {
            title: 'Networking and Cybersecurity Skills',
            content: `
                <h3>Networking:</h3>
                <ul>
                    <li>Datacom Network Engineering</li>
                    <li>Network Configuration and Management</li>
                    <li>TCP/IP, Subnetting, Routing Protocols</li>
                </ul>
                <h3>Cybersecurity:</h3>
                <ul>
                    <li>Data Capturing and Analyzing with Wireshark</li>
                    <li>Incident Response and Handling</li>
                    <li>Network Security Management</li>
                    <li>Penetration Testing and Vulnerability Assessment</li>
                </ul>
            `
        },
        {
            title: 'Soft Skills',
            content: `
                <ul>
                    <li>Effective Communication</li>
                    <li>Team Collaboration</li>
                    <li>Problem-Solving</li>
                    <li>Time Management</li>
                    <li>Leadership and Mentoring</li>
                </ul>
            `
        },
        {
            title: 'Technical Skills',
            content: `
                <ul>
                    <li>Technical Documentation</li>
                    <li>Equipment Maintenance</li>
                    <li>Driving</li>
                    <li>Advanced Troubleshooting</li>
                </ul>
            `
        }
    ];

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        spinnerContainer.style.display = 'block';

        setTimeout(() => {
            spinnerContainer.style.display = 'none';
            skillsContainer.style.display = 'block';
            skillList.innerHTML = ''; // Clear previous buttons if any

            skills.forEach(skill => {
                const button = document.createElement('button');
                button.textContent = skill.title;
                button.classList.add('skill-button');
                button.addEventListener('click', () => {
                    skillDetails.innerHTML = skill.content;
                    skillDetails.style.display = 'block';
                });
                skillList.appendChild(button);
            });
        }, 2000); // Show skills after 2 seconds
    });
});
