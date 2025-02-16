import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import UploadBox from "./UploadBox";

const TranslationPanel = () => {
  const [selectedOriginLanguage, setSelectedOriginLanguage] = useState("Origin Language");
  const [availableTargetLanguages, setAvailableTargetLanguages] = useState(["English", "Japanese", "Chinese", "Vietnamese"]);
  const [selectedTargetLanguages, setSelectedTargetLanguages] = useState([]);

  const handleOriginLanguageSelect = (language) => {
    setSelectedOriginLanguage(language);
    setAvailableTargetLanguages(["English", "Japanese", "Chinese", "Vietnamese"].filter(lang => lang !== language));
    setSelectedTargetLanguages([]);
  };

  const handleTargetLanguageSelect = (language) => {
    setSelectedTargetLanguages(prev =>
      prev.includes(language) ? prev.filter(lang => lang !== language) : [...prev, language]
    );
  };

  return (
    <div className="w-full max-w-3xl bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
      <LanguageSelector
        selectedOriginLanguage={selectedOriginLanguage}
        availableTargetLanguages={availableTargetLanguages}
        selectedTargetLanguages={selectedTargetLanguages}
        onOriginSelect={handleOriginLanguageSelect}
        onTargetSelect={handleTargetLanguageSelect}
      />
      <UploadBox />
    </div>
  );
};

export default TranslationPanel;
