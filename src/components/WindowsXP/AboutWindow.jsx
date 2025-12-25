const AboutWindow = () => {
  return (
    <div className="p-6 bg-white h-full overflow-auto">
      {/* Header Section with Photo on Left, Content on Right */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Left Side - Photo */}
        <div className="flex-shrink-0">
          <div className="border-4 border-blue-200 rounded-lg overflow-hidden shadow-lg w-64">
            <img
              src="/profile-pic.png"
              alt="Chalana Gayan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Header & About */}
        <div className="flex-1">
          {/* Name & Titles */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Chalana Dhanawardhana</h2>
            <div className="space-y-1">
              <p className="text-base text-blue-600 font-semibold">🎓 CSE Undergraduate @ University of Moratuwa</p>
              <p className="text-base text-green-600 font-semibold">💼 Associate Software Engineer @ Surecore</p>
              <p className="text-base text-purple-600 font-semibold">🏢 Ex-Intern @ WSO2</p>
              <p className="text-base text-orange-600 font-semibold">🤝 Deputy Pillar Head - Membership @ Sasnaka Sansada</p>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mt-3"></div>
          </div>

          {/* About Me Paragraph */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">👨‍💻</span>
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
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">💼</span>
          Work Experience
        </h3>

        <ExperienceCard
          title="Associate Software Engineer"
          company="Surecore (Pvt) Ltd"
          period="Jul 2025 - Current"
          description="Developed enterprise insurance solutions (payments, finance, underwriting) using Angular, Spring Boot, microservices, PostgreSQL/Oracle, and Kubernetes across the full development lifecycle."
          achievements={[
            "Contributed to R&D initiatives, including multi-tenant system design",
            "Early-stage AI/multi-agent automation experiments for future product capabilities"
          ]}
        />

        <ExperienceCard
          title="Software Engineering Intern"
          company="WSO2 LLC"
          period="Jan 2025 - Jul 2025"
          description="Worked on the WSO2 Certification Portal using React TS, Ballerina, REST, GraphQL, MySQL, and Salesforce across UI, backend, and integration layers."
          achievements={[
            "Supported product download tracking with Salesforce",
            "Collaborated as a team member on multiple internal projects",
            "Gained hands-on experience with WSO2 products (Ballerina, Asgardeo, Choreo)"
          ]}
        />
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎓</span>
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
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          General Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="Teamwork" />
          <SkillBadge skill="Leadership" />
          <SkillBadge skill="Self Confidence" />
          <SkillBadge skill="Communication Skills" />
          <SkillBadge skill="Self Motivation" />
          <SkillBadge skill="Problem Solving" />
          <SkillBadge skill="Collaboration" />
        </div>
      </div>

      {/* Leadership Roles */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">👑</span>
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


const ExperienceCard = ({ title, company, period, description, achievements }) => {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{period}</span>
      </div>
      <p className="text-sm font-semibold text-blue-600 mb-2">{company}</p>
      <p className="text-sm text-gray-700 leading-relaxed mb-2">{description}</p>
      {achievements && (
        <ul className="list-disc list-inside space-y-1">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-sm text-gray-600">{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EducationCard = ({ degree, institution, period, details, subjects }) => {
  return (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-0">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-base font-bold text-gray-800">{degree}</h4>
        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{period}</span>
      </div>
      <p className="text-sm font-semibold text-blue-600 mb-1">{institution}</p>
      {details && <p className="text-sm text-gray-700">{details}</p>}
      {subjects && <p className="text-sm text-gray-600">{subjects}</p>}
    </div>
  );
};

const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-300">
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

export default AboutWindow;
