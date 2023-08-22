[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / DeviceClasses

# Enumeration: DeviceClasses

[device/export](../modules/device_export.md).DeviceClasses

This represents a Root Node for devices.

**`See`**

[MatterDeviceLibrarySpecificationV1_0](../interfaces/spec_export.MatterDeviceLibrarySpecificationV1_0.md) § 1.1.5

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

## Enumeration Members

### App

• **App** = ``"App"``

Application device type.
Application devices types are typically the most datatype endpoints on a node and in the network.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L24)

___

### BridgedPowerSourceInfo

• **BridgedPowerSourceInfo** = ``"BridgedPowerSourceInfo"``

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L62)

___

### Client

• **Client** = ``"Client"``

There exists a client application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L41)

___

### Composed

• **Composed** = ``"Composed"``

The device type is composed of 2 or more device types.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L47)

___

### Dynamic

• **Dynamic** = ``"Dynamic"``

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L38)

___

### EZInitiator

• **EZInitiator** = ``"EZ-Initiator"``

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L53)

___

### EZTarget

• **EZTarget** = ``"EZ-Target"``

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L56)

___

### Multiple

• **Multiple** = ``"Multiple"``

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L50)

___

### Node

• **Node** = ``"Node"``

Node device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L18)

___

### Server

• **Server** = ``"Server"``

There exists a server application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L44)

___

### Simple

• **Simple** = ``"Simple"``

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DeviceTypes.ts#L30)
