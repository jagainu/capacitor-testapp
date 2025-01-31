/// <reference types="@capacitor/local-notifications" />
/// <reference types="@capacitor/push-notifications" />
/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pro.makbook.mtcapacitortest',
  appName: 'MTCapacitorTest',
  webDir: 'dist',
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    CapacitorHttp: {
      enabled: true,
    },
    SplashScreen: {
      launchAutoHide: false,
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#CE0B7C',
    },
    PushNotifications: {
      presentationOptions: ["alert", "sound"]
    }
  },
  cordova: {
    preferences: {
      'com.braze.api_key': '93de8e84-8b9a-48ba-bc66-0f3545350723',
      'com.braze.ios_api_endpoint': 'sondheim.braze.com',
      'com.braze.android_api_endpoint': 'sondheim.braze.com',
      'com.braze.ios_log_level': '2',
      'com.braze.ios_disable_automatic_push_registration': 'YES',      
    },
    staticPlugins: [
      "cordova-plugin-braze"
    ]
  }
};

export default config;
