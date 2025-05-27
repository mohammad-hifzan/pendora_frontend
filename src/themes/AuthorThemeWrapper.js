// A simple wrapper to apply theme-specific layout or class
const AuthorThemeWrapper = ({ children }) => {
  return <div className="authorTheme-wrapper">{children}</div>;
};

export default AuthorThemeWrapper;
