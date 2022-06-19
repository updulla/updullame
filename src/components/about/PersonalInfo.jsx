import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Abdellah" },
  { meta: "last name", metaInfo: "Boussount" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Moroccan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tiznit, Morocco" },
  { meta: "phone", metaInfo: "+212 643 80 28 04" },
  { meta: "Email", metaInfo: "contact@updulladev.me" },
  { meta: "Skype", metaInfo: " abdullah.boussount" },
  { meta: "langages", metaInfo: "Amazigh, Arabic, French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
