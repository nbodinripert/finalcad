import "./Badge.css";

const Badge = ({ color, children }) => {
  //#region [render]
  return (
    <div style={{ color, borderColor: color }} className="badge">
      {children}
    </div>
  );
  //#endregion
};

export default Badge;
