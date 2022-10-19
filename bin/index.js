#!/usr/bin/env node

"use strict";

// hi!
const fs = require('fs')
const path = require('path')

const currentPath = process.cwd()

// Strapi component
const modifiedStrapi = './Strapi.js'
const StrapiTextComponent = fs.readFileSync(path.resolve(currentPath, 'bin', modifiedStrapi))
fs.writeFileSync(path.resolve(currentPath, 'node_modules/@strapi/strapi/lib/Strapi.js'), StrapiTextComponent)

// list dirs
const modifiedGetDirs = './get-dirs.js'
const getDirsText = fs.readFileSync(path.resolve(currentPath, 'bin', modifiedGetDirs))
fs.writeFileSync(path.resolve(currentPath, 'node_modules/@strapi/strapi/lib/utils/get-dirs.js'), getDirsText)

// app config strapi
const FileConfigurationEdited = './app-configuration-strapi.js'
const getTextFileEdited = fs.readFileSync(path.resolve(currentPath, 'bin', FileConfigurationEdited))
fs.writeFileSync(path.resolve(currentPath, 'node_modules/@strapi/strapi/lib/core/app-configuration/index.js'), getTextFileEdited)

// command develop
const FileDevelopEdited = './develop.js'
const getTextFileDevelopEdited = fs.readFileSync(path.resolve(currentPath, 'bin', FileDevelopEdited))
fs.writeFileSync(path.resolve(currentPath, 'node_modules/@strapi/strapi/lib/commands/develop.js'), getTextFileDevelopEdited)

// command start
const FileStartEdited = './app-configuration-strapi.js'
const getTextFileStartEdited = fs.readFileSync(path.resolve(currentPath, 'bin', FileStartEdited))
fs.writeFileSync(path.resolve(currentPath, 'node_modules/@strapi/strapi/lib/commands/start.js'), getTextFileStartEdited)

