import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  toc: {
    title: 'Навигация', // Замените на ваш заголовок
  },

  navigation: {
    prev: true,
    next: true,
  },

  logo: (
    <>
      <span style={{ fontWeight: 800 }}>
        <span>Crypto World</span>
      </span>
    </>
  ),

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://crypto-cash.world/" target="_blank" rel="noopener noreferrer">
          Crypto Cash
        </a>
        .
      </span>
    ),
  },
  
  color: {
    hue: 0,
    saturation: 0,
    lightness: {
      dark: 100,
      light: 50,
    },
  },

};

export default config;
