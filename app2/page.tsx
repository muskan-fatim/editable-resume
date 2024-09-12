'use client'
import { useState } from 'react';

type ResumeData = {
  name: string;
  email: string;
  education: string;
  experience: string;
  skills: string;
};

export default function ResumeBuilder() {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    education: false,
    experience: false,
    skills: false,
  });

  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [isResumeGenerated, setIsResumeGenerated] = useState(false);


  const handleInputChange = (field: keyof ResumeData, value: string) => {
    setResumeData((prev) => ({ ...prev, [field]: value }));
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResumeGenerated(true);
  };


  const handleEditClick = (field: keyof ResumeData) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="resume-builder-container">
      <h1>Resume Builder</h1>

      {!isResumeGenerated ? (
        <form onSubmit={handleFormSubmit} className="resume-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={resumeData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={resumeData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              type="text"
              id="education"
              value={resumeData.education}
              onChange={(e) => handleInputChange('education', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              value={resumeData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              value={resumeData.skills}
              onChange={(e) => handleInputChange('skills', e.target.value)}
              required
            />
          </div>

          <button type="submit" className="generate-btn">Generate Resume</button>
        </form>
      ) : (
        <>
  
          <div className="resume-container">
            <h2>Your Resume</h2>

            <div className="resume-section">
              <h3>Name:</h3>
              {isEditing.name ? (
                <input
                  type="text"
                  value={resumeData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleEditClick('name')}
                />
              ) : (
                <p onClick={() => handleEditClick('name')}>{resumeData.name}</p>
              )}
            </div>

            <div className="resume-section">
              <h3>Email:</h3>
              {isEditing.email ? (
                <input
                  type="email"
                  value={resumeData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleEditClick('email')}
                />
              ) : (
                <p onClick={() => handleEditClick('email')}>{resumeData.email}</p>
              )}
            </div>

            <div className="resume-section">
              <h3>Education:</h3>
              {isEditing.education ? (
                <input
                  type="text"
                  value={resumeData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  onBlur={() => handleEditClick('education')}
                />
              ) : (
                <p onClick={() => handleEditClick('education')}>{resumeData.education}</p>
              )}
            </div>

            <div className="resume-section">
              <h3>Experience:</h3>
              {isEditing.experience ? (
                <input
                  type="text"
                  value={resumeData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  onBlur={() => handleEditClick('experience')}
                />
              ) : (
                <p onClick={() => handleEditClick('experience')}>{resumeData.experience}</p>
              )}
            </div>

            <div className="resume-section">
              <h3>Skills:</h3>
              {isEditing.skills ? (
                <input
                  type="text"
                  value={resumeData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  onBlur={() => handleEditClick('skills')}
                />
              ) : (
                <p onClick={() => handleEditClick('skills')}>{resumeData.skills}</p>
              )}
            </div>
          </div>
        </>
      )}


        <style jsx>{`
  .resume-builder-container {
    max-width: 900px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fefefe;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
  }

  h1, h2 {
    text-align: center;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  .resume-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 8px;
    color: #555;
  }

  input {
    padding: 12px 15px;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: border-color 0.2s ease;
  }

  input:focus {
    border-color: #0070f3;
    outline: none;
  }

  .generate-btn {
    padding: 15px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    box-shadow: 0px 4px 12px rgba(0, 112, 243, 0.3);
  }

  .generate-btn:hover {
    background-color: #005bb5;
  }

  .resume-container {
    padding: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    background-color: rgb(29, 158, 29);;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  }

  .resume-section {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #444;
    font-weight: 600;
  }

  p {
    padding: 12px 15px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  p:hover {
    background-color: #f1f1f1;
  }

  input {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    width: 100%;
    font-size: 1rem;
    color: #333;
    background-color: #fff;
    transition: border 0.3s ease;
  }

  input:focus {
    border-color: #0070f3;
  }
`}</style>

    </div>
  );
}
