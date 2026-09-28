import "./index.css";

const AppItem = ({ app }) => {
  const { appName, imageUrl} = app;
  return (
    <li className="app-item">
      <img src={imageUrl} className="app-image" alt={appName} />
      <h3 className="app-name">{appName}</h3>
    </li>
  );
};

export default AppItem;
