const path = require('path');
const pjson = require('./package.json');

// Fix GitHub Pages
let basePath = '';
if (process.env.NODE_ENV === 'production') {
  basePath = 'https://digipolisantwerp.github.io/antwerp-ui_react';
}

module.exports = {
  components: 'packages/*/src{/component,}/!(index)*.{js,jsx}',
  getExampleFilename(componentPath) {
    const basePath = componentPath.split('src/')[0];
    return basePath + 'Readme.md';
  },
  compilerConfig: {
    transforms: {
      asyncAwait: false,
      moduleImport: false,
    }
  },
  ignore: [
    path.resolve(__dirname, 'packages/**/models/*.js'),
    path.resolve(__dirname, 'packages/**/types.js'),
    path.resolve(__dirname, 'packages/calendar/src/utils/aria.js'),
    path.resolve(__dirname, 'packages/form/src/TelephoneNumber/TelephoneNumber.const.js'),
    path.resolve(__dirname, 'packages/user-menu/src/UserNavigation/UserNavigationUrls.js'),
    '**/*.spec.js'
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine: (componentPath) => {
    const name = path.basename(componentPath).replace(/.jsx?$/g, '');
    return `import { ${name} } from '@acpaas-ui/react-components';`;
  },
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    // WARNING: inspect Styleguidist Webpack config before modifying it, otherwise you may break Styleguidist
    console.log('Environment: ', process.env.NODE_ENV);
    return webpackConfig;
  },
  styleguideDir: 'docs',
  title: 'Antwerp UI React components',
  usageMode: 'collapse',
  webpackConfig: require('./webpack.config.js'),
  version: `v${pjson.version}`,
  template: {
    context: '',
    favicon: 'https://cdn.antwerpen.be/core_branding_favicons/citizens/favicon.ico',
    lang: 'en',
    head: {
      raw: '<base href="' + basePath + '/">',
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.antwerpen.be/core_branding_scss/5.0.0/main.min.css'
        }
      ],
      scripts: [
        {
          src: "https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js",
          type: "text/javascript"
        }
      ]
    }
  },
  // styleguideComponents: {
    // Logo: path.join(__dirname, 'styleguide/components/Logo'),
    // SectionsRenderer: path.join(__dirname, 'styleguide/components/SectionsRenderer'),
    // StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
  // },
  styles: {
    Code: {
      code: {
        '& .hljs-string': {
          color: 'rgb(43, 132, 13)'
        }
      }
    },
    ComponentsList: {
      item: {
        lineHeight: '1.3'
      }
    },
    Link: {
      link: {
        '&, &:link, &:visited': {
          textDecoration: 'underline'
        },
        '&:hover, &:active': {
          textDecoration: 'none'
        },
        '&:focus': {
          boxShadow: '0 0 0 3px rgb(192, 223, 254)',
          textDecoration: 'none'
        }
      }
    }
  },
  theme: {
    color: {
      base: 'rgb(8, 31, 44)',
      light: 'rgb(111, 111, 111)',
      lightest: 'rgb(216, 216, 216)',
      link: 'rgb(0, 100, 180)',
      linkHover: 'rgb(44, 86, 151)',
      focus: 'rgb(0, 64, 136)',
      border: 'rgb(243, 243, 243)',
      name: 'rgb(43, 132, 13)',
      type: 'rgb(132, 11, 85)',
      error: 'rgb(218, 41, 28)',
      baseBackground: 'rgb(255, 255, 255)',
      codeBackground: 'rgb(254, 254, 254)',
      sidebarBackground: 'rgb(243, 243, 243)',
      ribbonBackground: 'rgb(0, 100, 180)',
      ribbonText: 'rgb(255, 255, 255)',
      codeBase: 'rgb(8, 31, 44)',
      codeComment: 'rgb(111, 111, 111)',
      codePunctuation: 'rgb(118, 118, 118)',
      codeProperty: 'rgb(132, 11, 85)',
      codeDeleted: 'rgb(132, 11, 85)',
      codeString: 'rgb(43, 132, 13)',
      codeInserted: 'rgb(43, 132, 13)',
      codeOperator: 'rgb(85, 71, 65)',
      codeKeyword: 'rgb(105, 31, 130)',
      codeFunction: 'rgb(223, 70, 97)',
      codeVariable: 'rgb(148, 69, 11)'
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 48,
      h2: 40,
      h3: 33,
      h4: 28,
      h5: 23,
      h6: 19
    },
    mq: {
      small: '@media (max-width: 719px)'
    },
    borderRadius: 0,
    spaceFactor: 12
  }
};
