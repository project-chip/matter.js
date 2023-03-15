/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { MatterDeviceLibrarySpecificationV1_0 } from "@project-chip/matter.js";

export const DEVICE = {
    // Utility Device Types
    /**
     * This represents a Root Node for devices.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.1
     */
    ROOT: { name: "MA-rootdevice", code: 0x0016 },

    /**
     * This represents a Power Source Node for devices.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.2
     */
    POWER_SOURCE: { name: "MA-powersource", code: 0x011 },

    /**
     * An OTA Requestor is a device that is capable of receiving an OTA software
     * update.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.3
     */
    OTA_REQUESTOR: { name: "MA-otarequestor", code: 0x012 },

    /**
     * An OTA Provider is a node that is capable of providing an OTA software
     * update to other nodes on the same fabric.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.4
     */
    OTA_PROVIDER: { name: "MA-otaprovider", code: 0x0014 },

    /**
     * This represents a Aggregator Node.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.5
     */
    AGGREGATOR: { name: "MA-aggregator", code: 0x000e },

    /**
     * This represents a Bridged Node to identify a bridged device.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 2.6
     */
    BRIDGED_DEVICE: { name: "MA-bridgeddevice", code: 0x0013 },

    /* Application Device Types */
    /* ------------------------- Lighting ------------------------------- */
    /**
     * The On/Off Light is a lighting device that is capable of being switched
     * on or off by means of a bound controller device such as anOn/Off Light
     * Switch or a Dimmer Switch. In addition, an on/off light is also capable
     * of being switched by means of a bound occupancy sensor.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 4.1
     */
    ON_OFF_LIGHT: { name: "MA-onofflight", code: 0x0100 },

    /**
     * A Dimmable Light is a lighting device that is capable of being switched
     * on or off and the intensity of its light adjusted by means of a bound
     * controller device such as a Dimmer Switch or a Color Dimmer Switch.
     * In addition, a Dimmable Light device is also capable of being switched
     * by means of a bound occupancy sensor or other device(s).
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 4.2
     */
    DIMMABLE_LIGHT: { name: "MA-dimmablelight", code: 0x0101 },

    /**
     * A Color Temperature Light is a lighting device that is capable of being
     * switched on or off, the intensity of its light adjusted, and its
     * color temperature adjusted by means of a bound controller device such
     * as a Color Dimmer Switch.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 4.3
     */
    COLOR_TEMPERATURE_LIGHT: { name: "MA-colortemperaturelight", code: 0x010c },

    /**
     * An Extended Color Light is a lighting device that is capable of being
     * switched on or off, the intensity of its light adjusted, and its color
     * adjusted by means of a bound controller device such as a Color Dimmer
     * Switch or Control Bridge. The device supports adjustment of color by
     * means of hue/saturation, enhanced hue, color looping, XY coordinates,
     * and color temperature. In addition, the extended color light is also
     * capable of being switched by means of a bound occupancy sensor.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 4.4
     */
    EXTENDED_COLOR_LIGHT: { name: "MA-extendedcolorlight", code: 0x010d },

    /* ------------ Smart Plugs/outlets and other actuators ----------------- */
    /**
     * An On/Off Plug-in Unit is a device that is capable of being switched on
     * or off by means of a bound controller device such as an On/Off Light
     * Switch or a Dimmer Switch. The On/Off Plug-in Unit is typically used
     * to control a conventional non-communicating light by switching its mains
     * connection. Other appliances can be controlled this way as well.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 5.1
     */
    ON_OFF_PLUGIN_UNIT: { name: "MA-onoffpluginunit", code: 0x010a },

    /**
     * A Dimmable Plug-In Unit is a device that is capable of being switched on
     * or off and have its level adjusted by means of a bound controller device
     * such as a Dimmer Switch or a Color Dimmer Switch. The Dimmable Plug-in
     * Unit is typically used to control a conventional non-communicating light
     * through its mains connection using phase cutting.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 5.2
     */
    DIMMABLE_PLUGIN_UNIT: { name: "MA-dimmablepluginunit", code: 0x010b },

    /**
     * A Pump device is a pump that may have variable speed. It may have
     * optional built-in sensors and a regulation mechanism. It is typically
     * used for pumping fluids like water.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 5.3
     */
    PUMP: { name: "MA-pump", code: 0x0303 },

    /* ---------------- Switches and Controls ----------------------- */
    /**
     * An On/Off Light Switch is a controller device that, when bound to a
     * lighting device such as an On/Off Light, is capable of being used to
     * switch the device on or off.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.1
     */
    ON_OFF_LIGHT_SWITCH: { name: "MA-onofflightswitch", code: 0x0103 },

    /**
     * A Dimmer Switch is a controller device that, when bound to a lighting
     * device such as a Dimmable Light, is capable of being used to switch the
     * device on or off and adjust the intensity of the light being emitted.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.2
     */
    DIMMER_SWITCH: { name: "MA-dimmerswitch", code: 0x0104 },

    /**
     * A Color Dimmer Switch is a controller device that, when bound to a
     * lighting device such as an Extended Color Light, is capable of being
     * used to adjust the color of the light being emitted.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.3
     */
    COLOR_DIMMER_SWITCH: { name: "MA-colordimmerswitch", code: 0x0105 },

    /**
     * A Control Bridge is a controller device that, when bound to a lighting
     * device such as an Extended Color Light, is capable of being used to
     * switch the device on or off, adjust the intensity of the light being
     * emitted and adjust the color of the light being emitted. In addition, a
     * Control Bridge device is capable of being used for setting scenes.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.4
     */
    CONTROL_BRIDGE: { name: "MA-controlbridge", code: 0x0840 },

    /**
     * A Pump Controller device is capable of configuring and controlling a
     * Pump device.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.5
     */
    PUMP_CONTROLLER: { name: "MA-pumpcontroller", code: 0x0304 },

    /**
     * This defines conformance for the Generic Switch device type.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 6.6
     */
    GENERIC_SWITCH: { name: "MA-genericswitch", code: 0x000f },

    /* ---------------------------- Sensors --------------------------- */
    /**
     * This defines conformance to the Contact Sensor device type.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.1
     */
    CONTACT_SENSOR: { name: "MA-contactsensor", code: 0x0015 },

    /**
     * A Light Sensor device is a measurement and sensing device that is capable
     * of measuring and reporting the intensity of light (illuminance) to which
     * the sensor is being subjected.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.2
     */
    LIGHT_SENSOR: { name: "MA-lightsensor", code: 0x0106 },

    /**
     * An Occupancy Sensor is a measurement and sensing device that is capable
     * of measuring and reporting the occupancy state in a designated area.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.3
     */
    OCCUPANCY_SENSOR: { name: "MA-occupancysensor", code: 0x0107 },

    /**
     * A Temperature Sensor device reports measurements of temperature.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.4
     */
    TEMPERATURE_SENSOR: { name: "MA-tempsensor", code: 0x0302 },

    /**
     * A Pressure Sensor device measures and reports the pressure of a fluid.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.5
     */
    PRESSURE_SENSOR: { name: "MA-pressuresensor", code: 0x0305 },

    /**
     * A Flow Sensor device measures and reports the flow rate of a fluid.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.6
     */
    FLOW_SENSOR: { name: "MA-flowsensor", code: 0x0306 },

    /**
     * A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.7
     */
    HUMIDITY_SENSOR: { name: "MA-humiditysensor", code: 0x0307 },

    /**
     * An On/Off Sensor is a measurement and sensing device that, when bound to
     * a lighting device such as a Dimmable Light, is capable of being used to
     * switch the device on or off.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 7.8
     */
    ON_OFF_SENSOR: { name: "MA-onoffsensor", code: 0x0850 },

    /* ---------------------------- Closures --------------------------- */
    /**
     * A Door Lock is a device used to secure a door. It is possible to actuate
     * a door lock either by means of a manual or a remote method.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 8.1
     */
    DOOR_LOCK: { name: "MA-doorlock", code: 0x000a },

    /**
     * A Door Lock Controller is a device capable of controlling a door lock.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 8.2
     */
    DOOR_LOCK_CONTROLLER: { name: "MA-doorlockcontroller", code: 0x000b },

    /**
     * This defines conformance to the Window Covering device type.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 8.3
     */
    WINDOW_COVERING: { name: "MA-windowcovering", code: 0x0202 },

    /**
     * A Window Covering Controller is a device that controls an automatic
     * window covering.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 8.4
     */
    WINDOW_COVERING_CONTROLLER: { name: "MA-windowcoveringcontroller", code: 0x0203 },

    /* ---------------------------- HVAC --------------------------- */
    /**
     * A Heating/Cooling Unit is a device capable of heating or cooling a space
     * in a house. It is not mandatory to provide both functionalities (for
     * example, the device may just heat but not cool). It may be an indoor air
     * handler.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 9.1
     */
    HEATING_COOLING_UNIT: { name: "MA-heatcool", code: 0x0300 },

    /**
     * A Thermostat device is capable of having either built-in or separate
     * sensors for temperature, humidity or occupancy. It allows the desired
     * temperature to be set either remotely or locally. The thermostat is
     * capable of sending heating and/or cooling requirement notifications to a
     * heating/cooling unit (for example, an indoor air handler) or is
     * capable of including a mechanism to control a heating or cooling unit
     * directly.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 9.2
     */
    THERMOSTAT: { name: "MA-thermostat", code: 0x0301 },

    /**
     * This defines conformance to the Fan device type.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 9.3
     */
    FAN: { name: "MA-fan", code: 0x002b },

    /* ---------------------------- Media --------------------------- */
    /**
     * A Video Player (either Basic or Casting) represents a device that is able
     * to play media to a physical output or to a display screen which is part
     * of the device.
     * A Basic Video Player has playback controls (play, pause, etc.) and keypad
     * remote controls (up, down, number input), but is not able to launch
     * content and is not a content app platform (the Casting Video Player
     * device type is used for these functions).
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.2
     */
    BASIC_VIDEO_PLAYER: { name: "MA-basic-videoplayer", code: 0x0028 },

    /**
     * A Casting Video Player has basic controls for playback (play, pause,
     * etc.) and keypad input (up, down, number input), and is able to launch
     * content.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.3
     */
    CASTING_VIDEO_PLAYER: { name: "MA-casting-videoplayer", code: 0x0023 },

    /**
     * This feature controls the speaker volume of the device.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.4
     */
    SPEAKER: { name: "MA-speaker", code: 0x0022 },

    /**
     * A Content App is usually an application built by a Content Provider. A
     * Casting Video Player with a Content App Platform is able to launch
     * Content Apps and represent these apps as separate endpoints.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.5
     */
    CONTENT_APP: { name: "MA-contentapp", code: 0x0024 },

    /**
     * A Casting Video Client is a client that can launch content on a Casting
     * Video Player, for example, a Smart Speaker or a Content Provider phone
     * app.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.6
     */
    CASTING_VIDEO_CLIENT: { name: "MA-casting-videoclient", code: 0x0029 },

    /**
     * A Video Remote Control is a client that can control a Video Player, for
     * example, a traditional universal remote control.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 10.7
     */
    VIDEO_REMOTE_CONTROL: { name: "MA-video-remotecontrol", code: 0x002a },

    /* ---------------------------- Generic --------------------------- */
    /**
     * This defines conformance to the Mode device type.
     * @see {@link MatterDeviceLibrarySpecificationV1_0} § 11.1
     */
    MODE_SELECT: { name: "MA-modeselect", code: 0x0027 },
}
