[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DeviceClasses

# Enumeration: DeviceClasses

[<internal>](../modules/internal_.md).DeviceClasses

This represents a Root Node for devices.

**`See`**

MatterDeviceLibrarySpecificationV1_0 § 1.1.5

## Table of contents

### Enumeration Members

- [App](internal_.DeviceClasses.md#app)
- [BridgedPowerSourceInfo](internal_.DeviceClasses.md#bridgedpowersourceinfo)
- [Client](internal_.DeviceClasses.md#client)
- [Composed](internal_.DeviceClasses.md#composed)
- [Dynamic](internal_.DeviceClasses.md#dynamic)
- [EZInitiator](internal_.DeviceClasses.md#ezinitiator)
- [EZTarget](internal_.DeviceClasses.md#eztarget)
- [Multiple](internal_.DeviceClasses.md#multiple)
- [Node](internal_.DeviceClasses.md#node)
- [Server](internal_.DeviceClasses.md#server)
- [Simple](internal_.DeviceClasses.md#simple)

## Enumeration Members

### App

• **App** = ``"App"``

Application device type.
Application devices types are typically the most datatype endpoints on a node and in the network.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:19

___

### BridgedPowerSourceInfo

• **BridgedPowerSourceInfo** = ``"BridgedPowerSourceInfo"``

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:48

___

### Client

• **Client** = ``"Client"``

There exists a client application cluster on the endpoint.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:33

___

### Composed

• **Composed** = ``"Composed"``

The device type is composed of 2 or more device types.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:37

___

### Dynamic

• **Dynamic** = ``"Dynamic"``

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:31

___

### EZInitiator

• **EZInitiator** = ``"EZ-Initiator"``

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:41

___

### EZTarget

• **EZTarget** = ``"EZ-Target"``

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:43

___

### Multiple

• **Multiple** = ``"Multiple"``

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:39

___

### Node

• **Node** = ``"Node"``

Node device type.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:14

___

### Server

• **Server** = ``"Server"``

There exists a server application cluster on the endpoint.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:35

___

### Simple

• **Simple** = ``"Simple"``

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Defined in

matter.js/dist/cjs/device/DeviceTypes.d.ts:24
