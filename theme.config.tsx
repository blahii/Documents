import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 800 }}>
        <span>Crypto World</span>
      </span>
    </>
  ),

  project: {
    link: 'https://github.com/yourusername/crypto-docs'
  },

  docsRepositoryBase: 'https://github.com/yourusername/crypto-docs',

  toc: {
    title: 'Навигация',
  },

  navigation: {
    prev: true,
    next: true,
  },

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://crypto-cash.world/" target="_blank" rel="noopener noreferrer">
          Crypto Cash
        </a>
      </span>
    ),
  },

  // Дополнительные настройки темы
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Crypto-Cash API'
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Crypto-Cash API Documentation" />
      <meta name="og:title" content="Crypto-Cash API" />
    </>
  ),

  // Настройки темной темы
  darkMode: true,
  primaryHue: {
    dark: 200,
    light: 200
  },
};

export default config;
