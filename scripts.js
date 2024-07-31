document.getElementById('menu-btn').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const showDetail = (targetId) => {
        const detailContainer = document.getElementById('experience-detail');
        const details = {
            'visa': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Software Engineer Intern @ <a href="#" class="text-teal hover:underline">Visa Inc.</a></h3>
                        <p class="text-base text-gray-400 mb-4">May - August 2022</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Developed an internal tool to track and report key product metrics for one of Visa's enterprise web applications (VPA), improving the product team's ability to analyze and focus on crucial business areas</li>
                            <li class="mb-2"> Utilized TypeScript, Google Analytics API, and SQL to identify and analyze critical data.</li>
                            <li class="mb-2"> Improved VPA platform’s metric-tracking capabilities by 30%, enabling the product team to make data-driven decisions and optimize the platform's performance.</li>
                        </ul>
                    </div>
                </div>
            `,
            'paulweiss': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Software Engineer Intern @ <a href="#" class="text-teal hover:underline">Paul, Weiss, Rifkind, Wharton & Garrison LLP</a></h3>
                        <p class="text-base text-gray-400 mb-4">June - July 2021</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Automated the process of formatting vendor invoices for the data management team in a multinational law firm by developing a Python script, reducing manual workload by 50%.</li>
                            <li class="mb-2"> Ensured accurate invoice processing by detecting and fixing common formatting issues.</li>
                            <li class="mb-2"> Improved efficiency and accuracy, allowing the team to handle a higher volume of invoices with fewer errors.</li>
                        </ul>
                    </div>
                </div>
            `,
            'prove': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Software Engineer Intern @ <a href="#" class="text-teal hover:underline">Prove (formerly Payfone)</a></h3>
                        <p class="text-base text-gray-400 mb-4">July - August 2020</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Built a Python-based tool to perform API calls to Prove’s identity authentication APIs and verify returned values</li>
                            <li class="mb-2"> Improved accuracy and efficiency of API outputs, enhancing service reliability for over 1,000 corporate clients</li>
                        </ul>
                    </div>
                </div>
            `,
            'flocabulary': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Software Engineer Intern @ <a href="#" class="text-teal hover:underline">Flocabulary</a></h3>
                        <p class="text-base text-gray-400 mb-4">July - August 2019</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Designed and developed a front-end speech-to-text feature, following an Agile development cycle, for Flocabulary’s online learning platform, increasing accessibility for disabled students</li>
                            <li class="mb-2"> Addressed a critical sales barrier, leading to a 10% increase in sales to schools with high disabled populations</li>
                        </ul>
                    </div>
                </div>
            `,
        };

        // Close if the same target is clicked again
        if (detailContainer.getAttribute('data-current') === targetId) {
            detailContainer.innerHTML = '';
            detailContainer.classList.add('hidden');
            detailContainer.removeAttribute('data-current');
        } else {
            detailContainer.innerHTML = details[targetId];
            detailContainer.classList.remove('hidden');
            detailContainer.setAttribute('data-current', targetId);
        }
    };

    const showLeadershipDetail = (targetId) => {
        const detailContainer = document.getElementById('leadership-detail');
        const details = {
            'sbcs': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">President @ <a href="#" class="text-teal hover:underline">Stony Brook Computing Society</a></h3>
                        <p class="text-base text-gray-400 mb-4">August 2022 - August 2023</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Led a team of 14 student leaders and delegated tasks to plan technical/professional workshops for 100+ members</li>
                            <li class="mb-2"> Managed collaborations between 3 campus departments, 5+ CS professors, and 10 other student organizations</li>
                        </ul>
                    </div>
                </div>
            `,
            'vip': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Project Leader @ <a href="#" class="text-teal hover:underline">Stony Brook Vertically Integrated Projects Team</a></h3>
                        <p class="text-base text-gray-400 mb-4">August 2020 - May 2021</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Led group to build Stony Brook University’s official web platform for managing clubs/student organizations</li>
                            <li class="mb-2"> Built using MongoDB, Express.js, React.js, Node.js and is expected to have 26,000+ users after deployment</li>
                        </ul>
                    </div>
                </div>
            `,
            'codepath': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Co-founder and Instructor @ <a href="#" class="text-teal hover:underline">Stony Brook University’s CodePath iOS course</a></h3>
                        <p class="text-base text-gray-400 mb-4">October 2020 - May 2022</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Taught and managed 60+ undergrad students in building iOS mobile applications using XCode and Swift</li>
                        </ul>
                    </div>
                </div>
            `,
            'peermentor': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Peer Mentor @ <a href="#" class="text-teal hover:underline">America on Tech</a></h3>
                        <p class="text-base text-gray-400 mb-4">March 2020 - May 2022</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Taught groups of 30+ high school students the fundamentals of computer science and UX/UI through JavaScript/HTML/CSS and Figma, respectively, alongside professional software engineers and designers</li>
                        </ul>
                    </div>
                </div>
            `,
        };

        // Close if the same target is clicked again
        if (detailContainer.getAttribute('data-current') === targetId) {
            detailContainer.innerHTML = '';
            detailContainer.classList.add('hidden');
            detailContainer.removeAttribute('data-current');
        } else {
            detailContainer.innerHTML = details[targetId];
            detailContainer.classList.remove('hidden');
            detailContainer.setAttribute('data-current', targetId);
        }
    };

    const showFellowshipDetail = (targetId) => {
        const detailContainer = document.getElementById('fellowship-detail');
        const details = {
            'nbc': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Cloud Computing Fellow @ <a href="#" class="text-teal hover:underline">NBCUniversal</a></h3>
                        <p class="text-base text-gray-400 mb-4">March - May 2022</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Gained hands-on experience in networking, serverless applications, scalability, HTTP protocols, etc. from industry professionals to work on weekly projects using AWS, Postman, Node.js, and AWS DynamoDB</li>
                        </ul>
                    </div>
                </div>
            `,
            'pwc': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Data Science Fellow @ <a href="#" class="text-teal hover:underline">PwC</a></h3>
                        <p class="text-base text-gray-400 mb-4">September - October 2021</p>
                        <ul class="custom-list list-none text-base text-gray-400">
                            <li class="mb-2"> Gained hands-on experience in data science through mentorship and training from senior professionals</li>
                            <li class="mb-2"> Analyzed data from 2 data sets and modeled findings in a data visualization dashboard made with Power BI</li>
                        </ul>
                    </div>
                </div>
            `,
            'google': `
                <div class="bg-dark-blue-light p-6 rounded-lg shadow-lg flex items-start space-x-6">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-light-gray mb-2">Participant @ <a href="#" class="text-teal hover:underline">Google Software Product Sprint</a></h3>
                        <p class="text-base text-gray-400 mb-4">February - May 2021</p>
                        <ul class="custom-list 
                        list-none text-base text-gray-400">
                            <li class="mb-2"> Collaborated with a team of peers to build a web application for sharing open-source learning resources using HTML, CSS, JavaScript, Java, and Google Cloud Platform APIs (App Engine and Datastore)</li>
                            <li class="mb-2"> Explored the fundamentals of computer networking, servers, and servlets under the guidance of Google engineers</li>
                        </ul>
                    </div>
                </div>
            `,
        };

        // Close if the same target is clicked again
        if (detailContainer.getAttribute('data-current') === targetId) {
            detailContainer.innerHTML = '';
            detailContainer.classList.add('hidden');
            detailContainer.removeAttribute('data-current');
        } else {
            detailContainer.innerHTML = details[targetId];
            detailContainer.classList.remove('hidden');
            detailContainer.setAttribute('data-current', targetId);
        }
    };

    const showSkillDetail = (targetId) => {
        const detailContainer = document.getElementById('skill-detail');
        const details = {
            'programming': `
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-start">
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Python</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Java</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://avatars.githubusercontent.com/u/42816656?s=200&v=4" alt="Swift Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Swift</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">JavaScript</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="React.js Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">React.js</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">TypeScript</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Next.js</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Angular</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV48IxspU6qrrctJtz-cj8ndWAJ_DGv9WZaI-_ET12PSV4TEoo" alt="Express.js Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Express.js</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Node.js</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ09SmhnF9YG9W3wJNBb47AcONJiWS-zR4wTBEPj7H1IiCtSNPp" alt="SQL Logo" class="w-10 h-10 object-contain">
                        <p class="mt-2 text-gray-600">SQL</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://cdn.worldvectorlogo.com/logos/pandas.svg" alt="Pandas Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Pandas</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Tailwind</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://i.pinimg.com/564x/fe/57/10/fe571020f2e476bca20e1ae6441569ec.jpg" alt="HTML/CSS Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">HTML/CSS</p>
                    </div>
                </div>
            `,
            'tools': `
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-wrap justify-start">
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">AWS</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="Git/GitHub Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Git</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png" alt="MongoDB Logo" class="w-16 h-16 object-contain rounded-md">
                        <p class="mt-2 text-gray-600">MongoDB</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Postman</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png" alt="XCode Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">XCode</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Figma</p>
                    </div>
                    <div class="flex-none w-1/4 p-2 flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNTJGhtDLRekLRRNxa4gF-SW6SwImhoArIw&s" alt="Zeplin Logo" class="w-16 h-16 object-contain">
                        <p class="mt-2 text-gray-600">Zeplin</p>
                    </div>
                </div>
            `,
        };

        // Close if the same target is clicked again
        if (detailContainer.getAttribute('data-current') === targetId) {
            detailContainer.innerHTML = '';
            detailContainer.classList.add('hidden');
            detailContainer.removeAttribute('data-current');
        } else {
            detailContainer.innerHTML = details[targetId];
            detailContainer.classList.remove('hidden');
            detailContainer.setAttribute('data-current', targetId);
        }
    };
    
    
    document.querySelectorAll('[data-target]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('[data-target]').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    window.showDetail = showDetail;
    window.showLeadershipDetail = showLeadershipDetail;
    window.showFellowshipDetail = showFellowshipDetail;
    window.showSkillDetail = showSkillDetail;

});


