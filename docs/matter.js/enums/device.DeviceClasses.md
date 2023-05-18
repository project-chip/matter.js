[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device](../modules/device.md) / DeviceClasses

# Enumeration: DeviceClasses

[device](../modules/device.md).DeviceClasses

This represents a Root Node for devices.

**`See`**

[MatterDeviceLibrarySpecificationV1_0](../interfaces/spec.MatterDeviceLibrarySpecificationV1_0.md) § 1.1.5

## Table of contents

### Enumeration Members

- [App](device.DeviceClasses.md#app)
- [BridgedPowerSourceInfo](device.DeviceClasses.md#bridgedpowersourceinfo)
- [Client](device.DeviceClasses.md#client)
- [Composed](device.DeviceClasses.md#composed)
- [Dynamic](device.DeviceClasses.md#dynamic)
- [EZInitiator](device.DeviceClasses.md#ezinitiator)
- [EZTarget](device.DeviceClasses.md#eztarget)
- [Multiple](device.DeviceClasses.md#multiple)
- [Node](device.DeviceClasses.md#node)
- [Server](device.DeviceClasses.md#server)
- [Simple](device.DeviceClasses.md#simple)

## Enumeration Members

### App

• **App** = ``"App"``

Application device type.
Application devices types are typically the most datatype endpoints on a node and in the network.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L22)

___

### BridgedPowerSourceInfo

• **BridgedPowerSourceInfo** = ``"BridgedPowerSourceInfo"``

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L60)

___

### Client

• **Client** = ``"Client"``

There exists a client application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L39)

___

### Composed

• **Composed** = ``"Composed"``

The device type is composed of 2 or more device types.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L45)

___

### Dynamic

• **Dynamic** = ``"Dynamic"``

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L36)

___

### EZInitiator

• **EZInitiator** = ``"EZ-Initiator"``

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L51)

___

### EZTarget

• **EZTarget** = ``"EZ-Target"``

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L54)

___

### Multiple

• **Multiple** = ``"Multiple"``

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L48)

___

### Node

• **Node** = ``"Node"``

Node device type.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L16)

___

### Server

• **Server** = ``"Server"``

There exists a server application cluster on the endpoint.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L42)

___

### Simple

• **Simple** = ``"Simple"``

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Defined in

[packages/matter.js/src/device/DeviceTypes.ts:28](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/DeviceTypes.ts#L28)
