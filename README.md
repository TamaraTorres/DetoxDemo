# DetoxDemo
This a hello world react native application with Detox 

Was generate using [react-native cli](https://github.com/react-native-community/cli) 

You can follow [HelloWorld example](https://github.com/amandeepmittal/rn-HelloWorld) to create your own example.

To setup Detox please look on the [Getting Started](https://github.com/wix/Detox/blob/DetoxNext/docs/Introduction.GettingStarted.md)

## Prerequisites
For running on ios
- Xcode 10.2+ with Xcode command line tools
- Mac with macOS (at least macOS High Sierra 10.13.6)
- [Node.js](https://nodejs.org/en/)
- [Homebrew](https://brew.sh/) up to date 
- [applesimutils](https://github.com/wix/AppleSimulatorUtils)
- Detox cli

For running on android :
- [Android Studio](https://developer.android.com/studio/?gclid=EAIaIQobChMI2_CLur6f6gIVlAqRCh1NUwKwEAAYASAAEgL3efD_BwE&gclsrc=aw.ds) and [AVD Manager](https://developer.android.com/studio/run/managing-avds) 
- Detox cli
- [Node.js](https://nodejs.org/en/)


## How to run 
After clonning the project you will need to run :

`npm install` 

If you want to run on ios, you will need to check the simulator you have running and update on [detox configuration](https://github.com/TamaraTorres/DetoxDemo/blob/master/.detoxrc.json#L10) ( default= "iPhone X")

`detox build -c ios.debug`

`detox test -c ios.debug`


If you want to run on android, you will need to check the emulator and start it before execute the test, update yours on  [detox configuration](https://github.com/TamaraTorres/DetoxDemo/blob/master/.detoxrc.json#L19) ( default = "Pixel_3_XL_API_29")

`detox build -c android.debug`

`detox test -c android.debug`


Please check to start metro too and do not close that terminal windows while you are running the tests 

`yarn start`

