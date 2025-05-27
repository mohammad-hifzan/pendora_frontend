import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthorThemeWrapper from './themes/AuthorThemeWrapper';
import UserThemeWrapper from './themes/UserThemeWrapper';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('themeAuthor');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    // Cleanup old assets
    document.querySelectorAll('[data-theme-asset]').forEach(el => el.remove());
    debugger
    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `/themes/${theme}/style.css`;
    css.setAttribute('data-theme-asset', 'true');
    document.head.appendChild(css);

    // Load JS
    const js = document.createElement('script');
    js.src = `/themes/${theme}/index.js`;
    js.async = true;
    js.setAttribute('data-theme-asset', 'true');
    js.onload = () => setLoaded(true);
    document.body.appendChild(js);
  }, [theme]);

  const Wrapper = theme === 'themeAuthor' ? AuthorThemeWrapper : UserThemeWrapper;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Wrapper>{loaded ? children : <div>Loading theme...</div>}</Wrapper>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
