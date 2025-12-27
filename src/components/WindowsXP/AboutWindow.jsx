const AboutWindow = () => {
  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header Section with Photo and Name */}
      <div className="mb-6 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        {/* Photo and Name Section */}
        <div className="flex flex-col items-center mb-6">
          {/* Photo */}
          <div className="flex-shrink-0 mb-4">
            <div className=" overflow-hidden w-48">
              <img
                src="/profile-pic.png"
                alt="Chalana Gayan"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Name & Main Title */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Chalana Dhanawardhana</h2>
            <p className="text-lg text-gray-600">Final Year Undergraduate | Full Stack Software Engineer | AI & ML | Volunteer Leader</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-4"></div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Logo 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 flex items-center justify-center">
              <img src="/companies/university-of-moratuwa.png" alt="University of Moratuwa" className="w-16 h-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <p className="text-xs text-gray-700 font-medium text-center leading-tight">CSE Final Year Undergraduate</p>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 flex items-center justify-center">
              <img src="/companies/surecore.png" alt="Surecore" className="w-12 h-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <p className="text-xs text-gray-700 font-medium text-center leading-tight">Associate Software Engineer</p>
          </div>

          {/* Logo 3 */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 flex items-center justify-center">
              <img src="/companies/wso2.png" alt="WSO2" className="w-24 h-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <p className="text-xs text-gray-700 font-medium text-center leading-tight">Ex-Software Engineering Intern</p>
          </div>

          {/* Logo 4 */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 flex items-center justify-center">
              <img src="/companies/sasnaka-sansada.png" alt="Sasnaka Sansada" className="w-28 h-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <p className="text-xs text-gray-700 font-medium text-center leading-tight">Deputy Pillar Head</p>
          </div>
        </div>
      </div>

      {/* About Me Paragraph */}
      <div className="mb-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-black mb-3">
          About Me
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          A motivated and adaptable software engineer with strong problem-solving, leadership, and collaboration skills, passionate about software engineering, AI, and machine learning, and actively engaged in volunteering and leadership initiatives.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Hands-on experience as an Associate Software Engineer and Intern in agile environments, contributing to end-to-end solutions across multiple technical domains. Skilled at quickly adapting to new fields and delivering reliable, high-impact solutions.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Seeking a software engineering role to apply expertise and drive value across projects.
        </p>
      </div>

      {/* What Makes Me Special Section */}
      <div className="mb-8 bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border-2 border-gray-400 shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">What Makes Me Special</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SpecialCard
            icon="🎯"
            title="Balance & Time Management"
            description="Successfully balancing academic excellence (CGPA 3.56), professional work as Associate Software Engineer, final year research project, and national-level volunteering as Deputy Pillar Head at Sasnaka Sansada."
          />
          <SpecialCard
            icon="🚀"
            title="Highly Adaptable"
            description="Strong foundation across multiple tech domains - Full Stack Development, AI/ML, DevOps, and Cloud. Quickly adapt to new technologies and deliver high-impact solutions proactively."
          />
          <SpecialCard
            icon="👥"
            title="Team Player & Leader"
            description="Proven leadership in multiple roles - Deputy Pillar Head (Sasnaka Sansada), Department Representative, Team Leader (AIESEC). Strong collaboration skills in agile environments and volunteer initiatives."
          />
        </div>
        <p className="text-white text-sm mt-4 text-center italic">
          "A product of Sri Lanka's free education system, committed to giving back to society through volunteering and leadership while excelling academically and professionally."
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Work Experience
        </h3>

        <ExperienceCard
          title="Associate Software Engineer"
          company="Surecore (Pvt) Ltd"
          period="Jul 2025 - Current"
          description="Working on enterprise insurance solutions across multiple domains including payments, finance, underwriting, and policy management. Contributing to the full software development lifecycle from requirements analysis to deployment and maintenance."
          achievements={[
            "Developed and maintained microservices-based insurance modules using Spring Boot and Angular",
            "Implemented complex business logic for payment processing and financial calculations",
            "Worked with both PostgreSQL and Oracle databases for data persistence and optimization",
            "Deployed and managed applications on Kubernetes clusters for high availability",
            "Contributed to R&D initiatives including multi-tenant system architecture design",
            "Participated in early-stage AI/multi-agent automation experiments for future product capabilities",
            "Collaborated in agile teams with daily standups, sprint planning, and code reviews"
          ]}
          technologies={["Angular", "Spring Boot", "Microservices", "PostgreSQL", "Oracle DB", "Kubernetes", "REST API", "Docker", "Git"]}
        />

        <ExperienceCard
          title="Software Engineering Intern"
          company="WSO2 LLC"
          period="Jan 2025 - Jul 2025"
          description="Worked on the WSO2 Certification Portal, a platform for managing technical certifications and tracking product downloads. Contributed across frontend, backend, and integration layers using modern technologies and WSO2 products."
          achievements={[
            "Developed UI components and features using React TypeScript with modern design patterns",
            "Implemented backend services using Ballerina language for REST and GraphQL APIs",
            "Integrated Salesforce CRM for product download tracking and user analytics",
            "Worked with MySQL database for certification data management and queries",
            "Implemented authentication and authorization using Asgardeo identity platform",
            "Deployed services on Choreo cloud platform following DevOps best practices",
            "Collaborated as a team member on multiple internal projects and initiatives",
            "Gained hands-on experience with WSO2 ecosystem (Ballerina, Asgardeo, Choreo)"
          ]}
          technologies={["React", "TypeScript", "Ballerina", "REST API", "GraphQL", "MySQL", "Salesforce", "Asgardeo", "Choreo", "Git"]}
        />
      </div>

      {/* Education */}
      <div className="mb-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Education
        </h3>

        <EducationCard
          degree="BSc Eng (Hons) - Computer Science and Engineering"
          institution="University of Moratuwa"
          period="2022 - Present"
          details="CGPA: 3.56 (Up to 6 Semesters)"
        />

        <EducationCard
          degree="GCE Advanced Level - Physical Science Stream"
          institution="R/ Sivali Central College"
          period="2020"
          details="Z-score: 2.4768 | Island Rank: 183 | District Rank: 5"
          subjects="Combined Maths: A | Physics: A | Chemistry: A"
        />

        <EducationCard
          degree="Pearson Assured Diploma in Information Technology"
          institution="Esoft Metro Campus"
          period="2015"
        />
      </div>

      {/* General Skills */}
      <div className="mb-6 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          General Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="Teamwork" />
          <SkillBadge skill="Time Management" />
          <SkillBadge skill="Leadership" />
          <SkillBadge skill="Self Confidence" />
          <SkillBadge skill="Communication Skills" />
          <SkillBadge skill="Self Motivation" />
          <SkillBadge skill="Problem Solving" />
          <SkillBadge skill="Collaboration" />
        </div>
      </div>

      {/* Leadership Roles */}
      <div className="mb-6 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Leadership Roles
        </h3>
        <div className="space-y-2">
          <LeadershipRole role="Deputy Pillar Head - Membership Development Pillar" org="Sasnaka Sansada" period="2025 - 2027" />
          <LeadershipRole role="Team Leader - IGV" org="Aiesec Colombo South" />
          <LeadershipRole role="Department Representative" org="Department of Computer Science and Engineering" period="2023-2024" />
          <LeadershipRole role="Senior Prefect" org="R/Sivali Central College" period="2017 - 2020" />
        </div>
      </div>
    </div>
  );
};


const ExperienceCard = ({ title, company, period, description, achievements, technologies }) => {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{period}</span>
      </div>
      <p className="text-sm font-semibold text-gray-700 mb-2">{company}</p>
      <p className="text-sm text-gray-600 leading-relaxed mb-2">{description}</p>
      {achievements && (
        <ul className="list-disc list-inside space-y-1 mb-3">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-sm text-gray-600">{achievement}</li>
          ))}
        </ul>
      )}
      {technologies && (
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const EducationCard = ({ degree, institution, period, details, subjects }) => {
  return (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-0">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-base font-bold text-gray-900">{degree}</h4>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{period}</span>
      </div>
      <p className="text-sm font-semibold text-gray-700 mb-1">{institution}</p>
      {details && <p className="text-sm text-gray-600">{details}</p>}
      {subjects && <p className="text-sm text-gray-600">{subjects}</p>}
    </div>
  );
};

const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300">
      {skill}
    </span>
  );
};

const LeadershipRole = ({ role, org, period }) => {
  return (
    <div className="flex justify-between items-start p-3 bg-gray-50 rounded border border-gray-200">
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">{role}</p>
        <p className="text-xs text-gray-600">{org}</p>
      </div>
      {period && <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{period}</span>}
    </div>
  );
};

const SpecialCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-lg transition-all">
      <div className="text-4xl text-center mb-3">{icon}</div>
      <h4 className="text-base font-bold text-gray-900 text-center mb-2">{title}</h4>
      <p className="text-xs text-gray-700 leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default AboutWindow;
