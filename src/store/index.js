import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#1db954',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './pelotawhite.png',
  fullDecal: './pelotawhite.png',
});

export default state;