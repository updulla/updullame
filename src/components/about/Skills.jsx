import React from "react";

const skillsContent = [
  { skillClass: "p78", skillPercent: "78", skillName: "HTML" },
  { skillClass: "p27", skillPercent: "27", skillName: "JAVASCRIPT" },
  { skillClass: "p82", skillPercent: "82", skillName: "CSS" },
  { skillClass: "p45", skillPercent: "45", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p12", skillPercent: "12", skillName: "VUE.js" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
