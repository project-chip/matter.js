[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / DeviceClasses

# Enumeration: DeviceClasses

This represents a Root Node for devices.

## See

MatterSpecification.v10.Device § 1.1.5

## Enumeration Members

### App

> **App**: `"App"`

Application device type.
Application devices types are typically the most datatype endpoints on a node and in the network.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L29)

***

### BridgedPowerSourceInfo

> **BridgedPowerSourceInfo**: `"BridgedPowerSourceInfo"`

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L67)

***

### Client

> **Client**: `"Client"`

There exists a client application cluster on the endpoint.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L46)

***

### Composed

> **Composed**: `"Composed"`

The device type is composed of 2 or more device types.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L52)

***

### Dynamic

> **Dynamic**: `"Dynamic"`

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L43)

***

### EZInitiator

> **EZInitiator**: `"EZ-Initiator"`

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L58)

***

### EZTarget

> **EZTarget**: `"EZ-Target"`

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L61)

***

### Multiple

> **Multiple**: `"Multiple"`

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L55)

***

### Node

> **Node**: `"Node"`

Node device type.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L17)

***

### Server

> **Server**: `"Server"`

There exists a server application cluster on the endpoint.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L49)

***

### Simple

> **Simple**: `"Simple"`

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L35)

***

### Utility

> **Utility**: `"Utility"`

Utility device type.
A Utility device type supports configuration and settings.

#### Source

[packages/matter.js/src/device/DeviceTypes.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DeviceTypes.ts#L23)
