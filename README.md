Vps-react-ts-template1

- [Current status](#current-status)
- [Comments (continuous)](#comments-continuous)
      - [sep 2022](#sep-2022)
- [Vscode settings](#vscode-settings)
- [Installed dependencies + configurations](#installed-dependencies--configurations)
  - [**Vite-plugin-ssr**](#vite-plugin-ssr)
    - [Compileroptions configurations](#compileroptions-configurations)
      - [Path alias set in tsconfig + vite.config ( baseUrl + paths )](#path-alias-set-in-tsconfig--viteconfig--baseurl--paths-)
  - [**Typescript**](#typescript)
    - [Vscode recommended settings](#vscode-recommended-settings)
  - [**SASS**](#sass)
    - [**Sass**](#sass-1)

# Current status

Working

# Comments (continuous)

#### sep 2022

Web files moved to `src` folder.

# Vscode settings

# Installed dependencies + configurations

## **Vite-plugin-ssr**

Command used:
`npm init vite-plugin-ssr@latest`

Version: 0.4.38

CLI install options:

- react-ts

### Compileroptions configurations

To not have to import React in every component:

`"jsx": "react-jsx"`

#### Path alias set in tsconfig + vite.config ( baseUrl + paths )

alias "@" enabled by defining baseUrl + paths in tsconfig and resolve.alias in vite.config

## **Typescript**

The chosen CLI option `react-ts` installs:

- @types/compression
- @types/express
- @types/node
- @types/react
- @types/react-dom
  
### Vscode recommended settings

## **SASS**

### **Sass**

Sass
