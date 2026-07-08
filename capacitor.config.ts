import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kristone.global',
  appName: 'Kristone Global',
  webDir: 'public',

  server: {
    url: 'https://kristone-global-llp.vercel.app',
    cleartext: false
  }
};

export default config;