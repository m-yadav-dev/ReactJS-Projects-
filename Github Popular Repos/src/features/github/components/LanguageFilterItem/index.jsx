import "./index.css";

const LanguageFilterItem = (props) => {
  const { programmingLanguage, tabMenuUpdater, isActive } = props;
  const { language, id } = programmingLanguage;

  const onClickUpdateTabItems = () => {
    tabMenuUpdater(id);
  };

  const activeTabButtonCLassName = isActive ? "active-language-btn active" : "";

  return (
    <li className="filter-item">
      {/* <p>{programmingLanguage}</p> */}
      <button
        className={`language-btn ${activeTabButtonCLassName}`}
        onClick={onClickUpdateTabItems}
      >
        {language}
      </button>
    </li>
  );
};

export default LanguageFilterItem;
