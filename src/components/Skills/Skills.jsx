import './Skills.css';
import skills from '../SkillData/SkillData'
export default function Skills() {
    return (
        <>
            <h1 className="skill-name-title">Skills</h1>
            <div className='skills-grid'>
                {skills.map((skill, idx) => (
                    <div key={idx} className="skill-card">
                        <h3>{skill.name}</h3>
                        <img src={skill.image} alt={skill.name} className='skill-img'/>
                    </div>
                ))}
            </div>
        </>

    )
}