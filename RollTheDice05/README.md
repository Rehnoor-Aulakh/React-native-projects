To enable Haptic Feedback: in the android/gradle.properties, set newArchEnabled=false

App.tsx
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  }

  Usage:

  ReactNativeHapticFeedback.trigger('impactLight', options)

  Other Options:

    ReactNativeHapticFeedback.trigger("impactLight");
    ReactNativeHapticFeedback.trigger("impactMedium");
    ReactNativeHapticFeedback.trigger("impactHeavy");

    ReactNativeHapticFeedback.trigger("selection");

    ReactNativeHapticFeedback.trigger("notificationSuccess");
    ReactNativeHapticFeedback.trigger("notificationWarning");
    ReactNativeHapticFeedback.trigger("notificationError");