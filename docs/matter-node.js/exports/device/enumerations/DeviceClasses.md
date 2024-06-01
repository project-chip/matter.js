[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / DeviceClasses

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

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:24

***

### BridgedPowerSourceInfo

> **BridgedPowerSourceInfo**: `"BridgedPowerSourceInfo"`

The endpoint represents a Bridged Device, for which information about the state of
its power source is available to the Bridge

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:53

***

### Client

> **Client**: `"Client"`

There exists a client application cluster on the endpoint.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:38

***

### Composed

> **Composed**: `"Composed"`

The device type is composed of 2 or more device types.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:42

***

### Dynamic

> **Dynamic**: `"Dynamic"`

Dynamic device type.
A Dynamic device type supports intelligent and supervisory services, such as commissioning,
monitoring, trend analysis, scheduling and central management. A dynamic device type is an
application device type.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:36

***

### EZInitiator

> **EZInitiator**: `"EZ-Initiator"`

The endpoint is an Initiator for Zigbee EZ-Mode Finding & Binding.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:46

***

### EZTarget

> **EZTarget**: `"EZ-Target"`

The endpoint is a Target for Zigbee EZ-Mode Finding & Binding.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:48

***

### Multiple

> **Multiple**: `"Multiple"`

Composed device type that is composed of 2 or more endpoints with the same device type.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:44

***

### Node

> **Node**: `"Node"`

Node device type.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:14

***

### Server

> **Server**: `"Server"`

There exists a server application cluster on the endpoint.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:40

***

### Simple

> **Simple**: `"Simple"`

Simple device type.
A Simple device type supports local control that is persistent, independent, and unsupervised.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:29

***

### Utility

> **Utility**: `"Utility"`

Utility device type.
A Utility device type supports configuration and settings.

#### Source

packages/matter.js/dist/esm/device/DeviceTypes.d.ts:19
