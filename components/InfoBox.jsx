import React from "react";

const InfoBox = ({ attrs }) => {
  return (
    <div className={`${attrs.bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">
        {attrs.type === "Renters" ? "For Renters" : "For Property Owner"}
      </h2>
      <p className="mt-2 mb-4">{attrs.text}</p>
      <a
        href={attrs.link}
        className={`inline-block ${attrs.btnBgColor} text-white rounded-lg px-4 py-2 hover:${attrs.btnHoverBgColor}`}
      >
        {attrs.btnText}
      </a>
    </div>
  );
};

export default InfoBox;
