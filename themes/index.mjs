import { writeFile } from 'fs';
import { promisify } from 'util';

import getTheme from './get_theme.mjs';
import colors from './colors.mjs';

const promisifiedWriteFile = promisify(writeFile);

const EXPORT_PATH = './bin/shadow_color_theme.json';

const buildTheme = async path => {
  const themeWithColors = getTheme(colors);

  try {
    await promisifiedWriteFile(path, JSON.stringify(themeWithColors, null, 2));
    console.log('✨  Theme Shadow on your way. 🎉');
  } catch (error) {
    console.log(error);
  }
}

buildTheme(EXPORT_PATH);
