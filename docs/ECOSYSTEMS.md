# Overview of the Matter Ecosystems

## Device types tested on various Ecosystems

This list is a compilation of published information and own community tests. Many updates in the ecosystems happen without big announcements, so the information here can be a bit outdated and more device types are supported. If you find errors or added device types please open a PR or issue to report them. *Please note: The content of this table is collected from various public sources, our own experiments, and community feedback which mean it might be outdated or not accurate.*

Table Legend:

- "X" means supported
- "-" means not supported from current knowledge
- "?" means unknown
- "MDL Section" column identifies the relevant section in the Matter Device Library Specification Version 1.2 (Oct. 18, 2023).
- "ID" refers to the device type ID as set out in each device type's "Classification" section in the the MDL.

| **MDL  Section** | **Matter Device type and Class**                    | **Apple  <br>iOS 17.1**  |  **Google**   | **Amazon** | **SmartThings** | **LG ThinQ** | **Tuya** | **Home Assisitant <br>2024.5.2** | **flic**  |
|------------------|-----------------------------------------------------|:------------------------:|:-------------:|:----------:|:---------------:|:------------:|:--------:|:--------------------------------:|:---------:|
|                  | **Bridge Support**                                  |            X             |       X       |     X      |        X        |      -       |    -     |                X                 |   X       |
|                  | **Composed Devices Support**                        |            X             |       X       |    X(1)    |        -        |      -       |    -     |                X                 |   ?       |
| 4                | **Lighting Device Types**                           |                          |               |            |                 |              |          |                                  |           |
| 4.1              | On/Off Light  <br>(ID: 0x0100)                      |            X             |       X       |     X      |        X        |      X       |    X     |                X                 |   X       |
| 4.2              | Dimmable Light <br>(ID: 0x0101)                     |            X             |       X       |     X      |        X        |      -       |    X     |                X                 |   ?       |
| 4.3              | Color Temperature Light  <br>(ID: 0x010C)           |            X             |       X       |     X      |        X        |      -       |    X     |                X                 |   ?       |
| 4.4              | Extended Color Light <br>(ID: 0x010D)               |            X             |       X       |     X      |        ?        |      -       |    ?     |                X                 |   ?       |
| 5                | **Smart Plugs/Outlets/Actuators**                   |                          |               |            |                 |              |          |                                  |           |
| 5.1              | On/Off Plug-in Unit <br>(ID: 0x010A)                |            X             |       X       |     X      |        X        |      X       |    X     |                X                 |   ?       |
| 5.2              | Dimmable Plug-in Unit <br>(ID: 0x010B)              |            ?             |       ?       |     ?      |        ?        |      -       |    ?     |                ?                 |   ?       |
| 5.3              | Pump <br>(ID: 0x0303)                               |            -             |       -       |     -      |        -        |      -       |    -     |                -                 |   ?       |
| 6                | **Switches and Control Device Types**               |                          |               |            |                 |              |          |                                  |           |
| 6.1              | On/Off Light Switch <br>(ID: 0x0103)                |            x             |       x       |     ?      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 6.2              | Dimmer Switch <br>(ID: 0x0104)                      |            X             |       x       |     ?      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 6.3              | Color Dimmer Switch <br>(ID: 0x0105)                |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 6.4              | Control Bridge <br>(ID: 0x0840)                     |            ?             |       ?       |     X      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 6.5              | Pump Controller <br>(ID: 0x0304)                    |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 6.6              | Generic Switch <br>(ID: 0x000F)                     | X (Latching Switch only) |       -       |     ?      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 7                | **Sensor Device Types**                             |                          |               |            |                 |              |          |                                  |           |
| 7.1              | Contact Sensor <br>(ID: 0x0015)                     |            X             |       X       |     X      |        X        |      ?       |    ?     |                X                 |   ?       |
| 7.2              | Light Sensor  <br>(ID: 0x0106)                      |            X             |       X       |     -      |        X        |      ?       |    ?     |                X                 |   ?       |
| 7.3              | Occupancy Sensor <br>(ID: 0x0107)                   |            X             |       X       |     X      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 7.4              | Temperature Sensor <br>(ID: 0x0302)                 |            X             |       X       |     X      |        X        |      ?       |    ?     |                X                 |   ?       |
| 7.5              | Pressure Sensor <br>(ID: 0x0305)                    |            -             |       X       |     ?      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 7.6              | Flow Sensor  <br>(ID: 0x0306)                       |            -             |       X       |     -      |        X        |      ?       |    ?     |                X                 |   ?       |
| 7.7              | Humidity Sensor <br>(ID: 0x0307)                    |            X             |       X       |     X      |        X        |      ?       |    ?     |                X                 |   ?       |
| 7.8              | On/Off Sensor <br>(ID: 0x0850)                      |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 7.9              | Smoke CO Alarm <br>(ID: 0x0076)                     |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 8                | **Closure Device Types**                            |                          |               |            |                 |              |          |                                  |           |
| 8.1              | Door Lock <br>(ID: 0x000A)                          |            X             |       X       |     X      |        X        |      ?       |    ?     |                X                 |   ?       |
| 8.2              | Door Lock Controller <br>(ID: 0x000B)               |                          |               |            |                 |              |          |                ?                 |   ?       |
| 8.3              | Window Covering <br>(ID: 0x0202)                    |            X             | X (Lift only) |     -      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 8.4              | Window Covering Controller <br>(ID: 0x0203)         |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 9                | **HVAC Device Types**                               |                          |               |            |                 |              |          |                                  |           |
| 9.1              | Heating/Cooling-Unit <br>(ID: 0x0300)               |            -             |       -       |     -      |        -        |      ?       |    ?     |                ?                 |   ?       |
| 9.2              | Thermostat <br>(ID: 0x0301)                         |            X             |       X       |     X      |        ?        |      ?       |    ?     |                X                 |   ?       |
| 9.3              | Fan <br>(ID: 0x002B)                                |            -             |       -       |     -      |        -        |      ?       |    ?     |                ?                 |   ?       |
| 9.4              | Air Purifier <br>(ID: 0x002D)                       |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 9.5              | Air Quality Sensor <br>(ID: 0x002C)                 |            ?             |       ?       |     -      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 10               | **Media Devices**                                   |                          |               |            |                 |              |          |                                  |           |
| 10.1             | Video Player Architecture                           |            -             |       -       |     -      |        -        |      ?       |    -     |                ?                 |   ?       |
| 10.2             | Basic Video Player <br>(ID: 0x0028)                 |            -             |       -       |     -      |        -        |      ?       |    -     |                ?                 |   ?       |
| 10.3             | Casting Video Player <br>(ID: 0x0023)               |            -             |       -       |     -      |        -        |      ?       |    -     |                ?                 |   ?       |
| 10.4             | Speaker <br>(ID: 0x0022)                            |                          |       X       |     -      |        -        |      ?       |    -     |                ?                 |   ?       |
| 10.5             | Content App <br>(ID: 0x0024)                        |            -             |       -       |     -      |        -        |      ?       |    -     |                ?                 |   ?       |
| 10.6             | Casting Video Client <br>(ID: 0x0029)               |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 10.7             | Video Remote Control <br>(ID: 0x002A)               |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 11               | **Generic Devices**                                 |                          |               |            |                 |              |          |                                  |           |
| 11.1             | Mode Select <br>(ID: 0x0027)                        |            -             |       -       |     X      |        -        |      ?       |    -     |                ?                 |   ?       |
| 12               | **Robotic Device Types**                            |                          |               |            |                 |              |          |                                  |           |
| 12.1             | Robotic Vacuum Cleaner Device Type <br>(ID: 0x0074) |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 13               | **Appliance Device Types**                          |                          |               |            |                 |              |          |                                  |           |
| 13.1             | Laundry Washer <br>(ID: 0x0073)                     |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 13.2             | Refrigerator <br>(ID: 0x0070)                       |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 13.3             | Room Air Conditioner <br>(ID: 0x0072)               |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 13.4             | Temperature Controlled Cabinet <br>(ID: 0x0071)     |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |
| 13.5             | Dishwasher <br>(ID: 0x0075)                         |            ?             |       ?       |     ?      |        ?        |      ?       |    ?     |                ?                 |   ?       |

(1) See the section below on Composed devices and Alexa

## Pairing and Usage Information

It should work with any Matter-compatible home automation app when Matter will be released. We tested the Library with a few common ones and can provide additional information.

### Apple

Minimum OS Required for iOS and tvOS devices: iOS 16.2 or later, with latest iOS version recommended.

Apple has two guides that can help you get setup:

- [Set up your HomePod, HomePod mini, Apple TV, or iPad as a home hub](https://support.apple.com/en-us/HT207057)
- [Pair and manage your Matter accessories](https://support.apple.com/en-asia/102135)

When pairing with matter.js the operating system will ask you to allow to pair an "uncertified device" which you need to allow. After that the device
will be added to the Home app, and you can control it from there.

### Google Home Ecosystem

Minimum Version Required for the "Google Home" app：2.62.1.15 or later.

Also for Google you need to have a Hub device (Android or Google Nest smart speakers/display) out of the [list of supported devices](https://support.google.com/googlenest/answer/12391458?hl=en) to control your Matter devices.

When pairing with matter.js the operating system will ask you to allow to pair an "uncertified device" which you need to allow. If you want to avoid this message you optionally can register the relevant details for your uncertified devices in your Google Account. For this open the [Google
Developer Console to add an Integration](https://console.home.google.com/projects/) and [setup](https://developers.home.google.com/matter/get-started?hl=en&%3Bauthuser=0&authuser=0) the device there. Please use 0xFFF1 as Vendor ID and 0x8000 as product id
because matter.js uses this by the current example scripts by default.

If you have issues with pairing please refer to the [Troubleshootling pages](https://developers.home.google.com/matter/build/troubleshooting?hl=en#verify_your_google_play_services_gps_matter_modules) from Google.

Google supports several [Matter device types](https://developers.home.google.com/matter/supported-devices?authuser=0&hl=en) already.

### Amazon Alexa Ecosystem

Minimum Version Required for the "Amazon Alexa" app：2.2.491118.0 or later.

For Amazon Alexa Usage you also need one [Alexa device as Matter hub](https://www.amazon.com/b?ie=UTF8&node=37490568011) in your local network.

For Alexa no special setup is needed to pair with matter.js as development device.

The [list of supported device types](https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html#device-categories-and-clusters) is basic currently, but will get enhanced in the future.

Alexa currently has a few non-standard requirements:

- Matter devices need to use port 5540 only, else they will not be discovered by Alexa at all
- The device needs to have an Endpoint 1 beside the root endpoint. This needs to either be the main device endpoint or an aggregator endpoint.

Composed Devices: devices that are composed under a BridgedNodeEndpoint are recognised as separate devices by the Alexa ecosystem.  So a temperature and humidity sensor that is established under a BridgedNodeEndpoint is seen as three devices: (a) a "head" device and (b) the two sensors (not in the same UI).  However the ecosystem does not tolerate an end device with clusters that are not specified in the Matter specs as mandatory or optional. For example, a temperature sensor that has the cluster for RelativeHumidityMeasurementServer added will be recognised by Alexa only as a temperature device.  Idem for any power controller/source information added to an endpoint where that cluster is not specified as mandatory or optional.  If you want to add power source info then it needs to be at the BridgedNodeEndpoint level. Advice is to create these virtual devices as separate children of the aggregator endpoint or, if a composed device is necessary, use a BridgedNodeEndpoint as the parent of these endpoints.

### Tuya Smart (SmartLife) Ecosystem

Should work but no more detailed information here as of yet. The device types are limited and bridges are not supported based on the latest information.

### Samsung SmartThings Ecosystem

Samsung is building its SmartThings hub software into 2022 Samsung Smart TVs, Smart Monitors, and Family Hub refrigerators, allowing them to
control Matter smart home devices. Currently, Samsung SmartThings Station or Samsung SmartThings Hub v2 and later are needed as a hub for Matter.

- Samsung "Samsung SmartThings Station" does support Matter devices over LAN, Wi-Fi, and over Thread radio (Thread Border Router).
- "Aeotec Smart Home Hub" (rebranded Samsung SmartThings Hub v3) will be getting an update to supports Matter over Wi-Fi.
- "Samsung SmartThings Hub v3" (ETH-ETH-300 from 2018) has been updated to support Matter over Wi-Fi.
- "Samsung SmartThings Hub v2" (ETH-ETH-250 from 2016) has been updated to support Matter over Wi-Fi.
- "Samsung SmartThings Hub v2" (ETH-ETH-200 from 2015) has been updated to support Matter over Wi-Fi.
- "SmartThings Family Hub" smart fridge might or might not get updated to support Matter at a later date.
- "SmartThings Hub v1" (F-H-ETH-001 and STH-ETH-001) has been discontinued and will not get updated to support Matter.
- "Samsung SmartThings Link" (USB dongle) for Nvidia Shield has been discontinued and will not get updated to support Matter.

### Home Assistant - Matter integration

Home Assistant's official Matter integration is in Beta-stage however it is fully working and compatible with the Matter 1.2 standard. To connect Thread based devices you also need an Thread Border Router radio that is compatible with Home Assistant's official Thread integration, that includes their official Home Assistant Yellow hub and their Home Assistant SkyConnect Zigbee/Thread USB dongle.

- [https://www.home-assistant.io/integrations/matter/](https://www.home-assistant.io/integrations/matter/)
- [https://www.home-assistant.io/integrations/thread/](https://www.home-assistant.io/integrations/thread/)

### chip-tool

Compile chip-tool from [project-chip](https://github.com/project-chip/connectedhomeip/tree/c438b8945e26a84f68ba3608de202e4b939a9080/examples/chip-tool)

**Provisioning the device**:

``` bash
chip-tool pairing onnetwork 222 20202021
```

**Controlling the device**:

``` bash
chip-tool onoff toggle 222 1
```

**Clearing the data**:

``` bash
chip-tool pairing unpair 222
```

*and/or*

``` bash
chip-tool storage clear-all
```

### Android mobile app

You can also control it with Matter test app: https://github.com/project-chip/connectedhomeip/tree/master/src/android/CHIPTest
You can find a compiled apk in /matter-test-apk in this repository.

**Provisioning the device**: click "provision with WiFi" > "Input DeviceNode address" > type IP address of the machine running matter.js

**Controlling the device**: click "Light on/of" and you can control the light
