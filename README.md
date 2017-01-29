# Getting started

See https://facebook.github.io/react-native/docs/getting-started.html#content

> Due to hardware limitations, I (Vadorequest) will only be able to test the app against Android applications.
But, due to react-native, it is supposed to work out-of-the-box in IOS apps, for programmers who would like try.

> Due to environment limitations, the Android version is currently only tested against a physical, **OnePlus One** device. 
(virtual devices refuse to startup on my Ubuntu VM, for now)

## Physical device (easier)

1.  Reverse proxy for physical device (-d will automatically target physical device)
`adb -d reverse tcp:8081 tcp:8081`

1. Start ADB server
`adb start-server`

1. Run react-native server for hot reloading
`react-native start`

1. Start Android app on the physical device
`react-native run-android` (~30sec)

1. Shake the device and enable `Hot reloading` (useful the first time)


## Troubleshooting

### AsgardiaApp has not been registered

This error usually happens when running `react-native run-android` after changing device or project.

The easiest way to get rid of it is to restart ADB server:

- `adb kill-server`
- `adb start-server`
- Restart the project itself
    - `react-native start`
    - `react-native run-android`
    
    
### Attempted to update component that has already been unmounted

This error happens when a previous attempt as failed and is somehow *cached*.

It can be fixed by reloading the app, 
either double hit "r" key using a virtual device, 
or shake the physical device and select "restart".

### Others

- List all attached devices (virtual + physical)
`adb devices`


- Start AVD, launch virtual device
`android avd`
