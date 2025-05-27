// A simple wrapper to apply theme-specific layout or class
const UserThemeWrapper = ({ children }) => {
  return <div className="userTheme-wrapper">{children}</div>;
};

export default UserThemeWrapper;
