import {Dimensions} from 'react-native';

const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;
const FIGMA_SCALE = Math.sqrt(FIGMA_WINDOW_WIDTH * FIGMA_WINDOW_HEIGHT);
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const fonts = {};

export const width = WIDTH / FIGMA_WINDOW_WIDTH;
export const height = HEIGHT / FIGMA_WINDOW_HEIGHT;
export const scale = Math.sqrt(WIDTH * HEIGHT) / FIGMA_SCALE;
