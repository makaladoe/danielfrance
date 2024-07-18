document.addEventListener('DOMContentLoaded', () => {
    const speakButton = document.getElementById('speakButton');
    const greetingElement = document.getElementById('greeting');
    const skillsContainer = document.querySelector('.skills');
    const skillList = document.getElementById('skillList');

    function getTimeBasedGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting = '';

        if (hours < 12) {
            greeting = 'Good morning';
        } else if (hours < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }

        return greeting;
    }

    function speakMessage(message, rate = 1, pitch = 1) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = rate;
        utterance.pitch = pitch;
        window.speechSynthesis.speak(utterance);
    }

    const timeGreeting = getTimeBasedGreeting();
    const fullGreeting = `${timeGreeting}, I am X bot. I am specially designed by my creator Daniel France to help you navigate through my creator's skill set. He is a great AI engineer indeed. He has made tools like me and many others to interact and help users. Click on the skill sets below you want me to help you with.`;

    greetingElement.textContent = fullGreeting;

    speakButton.addEventListener('click', () => {
        speakMessage("Hello, user! " + fullGreeting, 1.1, 1.2);
        setTimeout(() => {
            speakMessage("Is there anything specific you'd like to explore?", 1.1, 1);
        }, 10000); // Additional speech after 10 seconds

        // Show skills container and populate skill buttons
        skillsContainer.style.display = 'block';
        const skills = [
            {
                title: 'Programming Skills',
                content: `Proficient with: 
                    - Programming Languages: HTML, CSS, JavaScript
                    - Backend Technologies: Python
                    - Development Platforms: Django, React Native`
            },
            {
                title: 'AI Skills',
                content: `Top Skills: 
                    - Machine Learning
                    - AI Model Development and Deployment
                    - Computer Vision
                    - Data Analysis
                    - Prompt Engineering`
            },
            {
                title: 'Development Skills',
                content: `Specializing in: 
                    - Mobile App Development: React Native
                    - Web Development: Django
                    - API Development: RESTful APIs, GraphQL
                    - Integration and Testing`
            },
            {
                title: 'Networking and Cybersecurity Skills',
                content: `Certified in: 
                    - Datacom Network Engineering
                    Top Skills: 
                    - Cybersecurity Practices
                    - Network Security Management
                    - Incident Response and Handling`
            },
            {
                title: 'Soft Skills',
                content: `Key Skills: 
                    - Communication
                    - Teamwork
                    - Problem-Solving
                    - Time Management
                    - Leadership`
            },
            {
                title: 'Technical Skills',
                content: `Advanced Skills: 
                    - Driving
                    - Technical Documentation
                    - Equipment Maintenance`
            }
        ];

        skills.forEach(skill => {
            const button = document.createElement('button');
            button.textContent = skill.title;
            button.classList.add('skill-button');
            button.addEventListener('click', () => {
                speakMessage(skill.content);
            });
            skillList.appendChild(button);
        });
    });
});
