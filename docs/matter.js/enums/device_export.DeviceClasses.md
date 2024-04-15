[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / DeviceClasses

# Enumeration: DeviceClasses

[device/export](../modules/device_export.md).DeviceClasses

This represents a Root Node for devices.

**`See`**

MatterSpecification.v10.Device § 1.1.5

## Table of contents

### Enumeration Members

- [App](device_export.DeviceClasses.md#app)
- [BridgedPowerSourceInfo](device_export.DeviceClasses.md#bridgedpowersourceinfo)
- [Client](device_export.DeviceClasses.md#client)
- [Composed](device_export.DeviceClasses.md#composed)
- [Dynamic](device_export.DeviceClasses.md#dynamic)
- [EZInitiator](device_export.DeviceClasses.md#ezinitiator)
- [EZTarget](device_export.DeviceClasses.md#eztarget)
- [Multiple](device_export.DeviceClasses.md#multiple)
- [Node](device_export.DeviceClasses.md#node)
- [Server](device_export.DeviceClasses.md#server)
- [Simple](device_export.DeviceClasses.md#simple)
- [Utility](device_export.DeviceClasses.md#utility)

## Enumeration Members

### App

• **App** = ``"App"``

Application device type.
Application devices types are typically the most datatype endpoints on a node and in the network.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L29)

___

### BridgedPowerSourceInfo

• **BridgedPowerSourceInfo** = ``"BridgedPowerSourceInfo"``

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L67)

___

### Client

• **Client** = ``"Client"``

There exists a client application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L46)

___

### Composed

• **Composed** = ``"Composed"``

The device type is composed of 2 or more device types.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L52)

___

### Dynamic

• **Dynamic** = ``"Dynamic"``

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L43)

___

### EZInitiator

• **EZInitiator** = ``"EZ-Initiator"``

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L58)

___

### EZTarget

• **EZTarget** = ``"EZ-Target"``

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L61)

___

### Multiple

• **Multiple** = ``"Multiple"``

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L55)

___

### Node

• **Node** = ``"Node"``

Node device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L17)

___

### Server

• **Server** = ``"Server"``

There exists a server application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L49)

___

### Simple

• **Simple** = ``"Simple"``

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L35)

___

### Utility

• **Utility** = ``"Utility"``

Utility device type.
A Utility device type supports configuration and settings.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DeviceTypes.ts#L23)
