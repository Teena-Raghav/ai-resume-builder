   import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useReactToPrint } from "react-to-print";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
function ResumeBuilder() {
const [resume, setResume] = useState(() => {
  const savedResume = localStorage.getItem("resume");

  return savedResume
    ? JSON.parse(savedResume)
    : {
        name: "",
        email: "",
        phone: "",
        location: "",
        objective: "",
        education: "",
        skills: "",
        projects: "",
        experience: "",
        github: "",
        linkedin: "",
        photo: "",
        template: "professional",
      };
});
useEffect(() => {
  localStorage.setItem("resume", JSON.stringify(resume));
}, [resume]);
const [darkMode, setDarkMode] = useState(false);
const [role, setRole] = useState("");
const [score, setScore] = useState(0);
const resumeRef = useRef(null);

const handlePrint = useReactToPrint({
  contentRef: resumeRef,
  documentTitle: "Resume",
});
const generateObjective = () => {
  if (role === "Web Developer") {
    setResume({
      ...resume,
      objective:
        "Motivated Web Developer with knowledge of React, HTML, CSS and JavaScript seeking an internship to build responsive web applications.",
    });
  } else if (role === "Software Engineer") {
    setResume({
      ...resume,
      objective:
        "Aspiring Software Engineer with strong problem-solving skills and a passion for developing scalable software solutions.",
    });
  } else {
    alert("Please select a role first.");
  }
};
const checkATS = () => {
  let total = 0;

  if (resume.name) total += 10;
  if (resume.email) total += 10;
  if (resume.phone) total += 10;
  if (resume.location) total += 10;
  if (resume.objective) total += 10;
  if (resume.education) total += 10;
  if (resume.skills) total += 10;
  if (resume.projects) total += 10;
  if (resume.experience) total += 10;
  if (resume.github || resume.linkedin) total += 10;

  setScore(total);
};
const resetResume = () => {
  localStorage.removeItem("resume");

  setResume({
    name: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
    github: "",
    linkedin: "",
    photo: "",
    template: "professional",
  });

  setScore(0);
};
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          Resume Builder
        </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Panel */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Resume Details
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg mb-4"
              value={resume.name}
              onChange={(e) =>
                setResume({ ...resume, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg mb-4"
              value={resume.email}
              onChange={(e) =>
                setResume({ ...resume, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg mb-4"
              value={resume.phone}
              onChange={(e) =>
                setResume({ ...resume, phone: e.target.value })
              }
            />
<input
  type="text"
  placeholder="Location"
  className="w-full border p-3 rounded-lg mb-4"
  value={resume.location}
  onChange={(e) =>
    setResume({ ...resume, location: e.target.value })
  }
/>
<select
  className="w-full border p-3 rounded-lg mb-4"
  value={role}
  onChange={(e) => setRole(e.target.value)}
>
  <option value="">Select Role</option>
  <option value="Web Developer">Web Developer</option>
  <option value="Software Engineer">Software Engineer</option>
</select>

<button
  onClick={generateObjective}
  className="w-full bg-green-600 text-white p-3 rounded-lg mb-4"
>
  Generate AI Objective
</button>

<button
  onClick={checkATS}
  className="w-full bg-purple-600 text-white p-3 rounded-lg mb-4"
>
  Check ATS Score
</button>
            <textarea
              placeholder="Career Objective"
              rows="5"
              className="w-full border p-3 rounded-lg mb-4"
              value={resume.objective}
              onChange={(e) =>
                setResume({ ...resume, objective: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Education"
              
              className="w-full border p-3 rounded-lg"
              value={resume.education}
              onChange={(e) =>
                setResume({ ...resume, education: e.target.value })
              }
            />
            <input
  type="text"
  placeholder="Skills (HTML, CSS, React)"
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.skills}
  onChange={(e) =>
    setResume({ ...resume, skills: e.target.value })
  }
/>
<textarea
  placeholder="Projects (Example: AI Resume Builder - React, Tailwind CSS)"
  rows="4"
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.projects}
  onChange={(e) =>
    setResume({ ...resume, projects: e.target.value })
  }
/>
<textarea
  placeholder="Experience (Internship / Freelancing / Training)"
  rows="4"
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.experience}
  onChange={(e) =>
    setResume({ ...resume, experience: e.target.value })
  }
/>
<input
  type="text"
  placeholder="GitHub Profile Link"
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.github}
  onChange={(e) =>
    setResume({ ...resume, github: e.target.value })
  }
/>

<input
  type="text"
  placeholder="LinkedIn Profile Link"
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.linkedin}
  onChange={(e) =>
    setResume({ ...resume, linkedin: e.target.value })
  }
/>
<input
  type="file"
  accept="image/*"
  className="w-full border p-3 rounded-lg mt-4"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      setResume({
        ...resume,
        photo: URL.createObjectURL(file),
      });
    }
  }}
/>
<select
  className="w-full border p-3 rounded-lg mt-4"
  value={resume.template}
  onChange={(e) =>
    setResume({ ...resume, template: e.target.value })
  }
>
  <option value="professional">Professional</option>
  <option value="modern">Modern</option>
  <option value="minimal">Minimal</option>
</select>
<button
  onClick={() => setDarkMode(!darkMode)}
  className="w-full mt-4 bg-gray-800 text-white p-3 rounded-lg"
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>
<button
  onClick={resetResume}
  className="w-full mt-4 bg-red-600 text-white p-3 rounded-lg"
>
  Reset Resume
</button> 
          </div>

          {/* Right Panel */}
          <div className="bg-gray-100 rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Resume Preview
            </h2>
<p className="mb-4 text-lg font-bold text-green-600">
  ATS Score: {score}/100
</p>
<div className="w-full bg-gray-300 rounded-full h-4 mb-6">
  <div
    className="bg-green-600 h-4 rounded-full transition-all duration-500"
    style={{ width: `${score}%` }}
  ></div>
</div>
           <div 

  ref={resumeRef}
  className={`min-h-[650px] rounded-lg shadow-inner ${
  darkMode
    ? "bg-gray-900 text-white"
    : resume.template === "professional"
    ? "bg-white"
    : resume.template === "modern"
    ? "bg-blue-50"
    : "bg-gray-50"
}`}
 
>
              <div className="bg-blue-700 text-white p-8 rounded-t-lg">
<div className="flex items-center gap-6 mb-6">
  {resume.photo ? (
    <img
      src={resume.photo}
      alt="Profile"
      className="w-28 h-28 rounded-full object-cover border-2 border-gray-400"
    />
  ) : (
    <div className="w-28 h-28 rounded-full border-2 border-gray-400 flex items-center justify-center">
      Photo
    </div>
  )}

  <div>
    <h1 className="text-2xl md:text-3xl font-bold">
      {resume.name || "Your Name"}
    </h1>

   
  </div>
</div>

              <p className="flex items-center gap-2 mt-2">
  <FaEnvelope />
  {resume.email || "Email"}
</p>

              <p className="flex items-center gap-2">
  <FaPhone />
  {resume.phone || "Phone"}
</p>
                <p className="flex items-center gap-2">
  <FaMapMarkerAlt />
  {resume.location || "Location"}
</p>
                </div>

                <div className="p-8">
                

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

  <div className="col-span-1">

    <h2 className="text-lg font-bold">Skills</h2>
   <div className="flex flex-wrap gap-2 mt-2">
  {(resume.skills || "")
    .split(",")
    .map((skill, index) => (
      <span
        key={index}
        className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
      >
        {skill.trim()}
      </span>
    ))}
</div>

    <hr className="my-4" />

    <h2 className="text-lg font-bold">Profiles</h2>

 {resume.github && (
  <p className="flex items-center gap-2">
    <FaGithub />
    <a
      href={resume.github}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600"
    >
      GitHub Profile
    </a>
  </p>
)}

  {resume.linkedin && (
  <p className="flex items-center gap-2 mt-2">
    <FaLinkedin />
    <a
      href={resume.linkedin}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600"
    >
      LinkedIn Profile
    </a>
  </p>
)}

  </div>

  <div className="col-span-2">

    <h2 className="text-lg font-bold">Career Objective</h2>
    <p>{resume.objective || "Write your objective here..."}</p>

    <hr className="my-4" />

    <h2 className="text-lg font-bold">Education</h2>
    <p>{resume.education || "Your Education"}</p>

    <hr className="my-4" />

    <h2 className="text-lg font-bold">Projects</h2>
    <p className="whitespace-pre-line">
      {resume.projects || "Your Projects"}
    </p>

    <hr className="my-4" />

    <h2 className="text-lg font-bold">Experience</h2>
    <p className="whitespace-pre-line">
      {resume.experience || "No Experience Added"}
    </p>

  </div>

</div>


<button
onClick={handlePrint}
className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
>
Download Resume
</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ResumeBuilder;