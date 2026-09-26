import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledToggle = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 42px;
  height: 42px;
  padding: 0;
  margin-left: auto;
  margin-right: 15px;
  background: transparent;
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  color: var(--green);
  font-size: 18px;
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--green-tint);
  }
`;

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    window.localStorage.setItem('theme', next);
    setIsDark(!isDark);
  };

  return (
    <StyledToggle onClick={toggleTheme} aria-label="Toggle color theme" aria-pressed={isDark}>
      {isDark ? '☀️' : '🌙'}
    </StyledToggle>
  );
};

export default ThemeToggle;
