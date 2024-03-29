[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/BridgedNodeEndpoint](endpoint_definitions_system_BridgedNodeEndpoint.md) / BridgedNodeRequirements

# Namespace: BridgedNodeRequirements

[endpoint/definitions/system/BridgedNodeEndpoint](endpoint_definitions_system_BridgedNodeEndpoint.md).BridgedNodeRequirements

## Table of contents

### Variables

- [BridgedDeviceBasicInformationServer](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md#bridgeddevicebasicinformationserver)
- [PowerSourceConfigurationServer](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md#powersourceconfigurationserver)
- [PowerSourceServer](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md#powersourceserver)
- [server](endpoint_definitions_system_BridgedNodeEndpoint.BridgedNodeRequirements.md#server)

## Variables

### BridgedDeviceBasicInformationServer

• `Const` **BridgedDeviceBasicInformationServer**: typeof [`BridgedDeviceBasicInformationServer`](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md) = `BaseBridgedDeviceBasicInformationServer`

The BridgedDeviceBasicInformation cluster is required by the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:40](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L40)

___

### PowerSourceConfigurationServer

• `Const` **PowerSourceConfigurationServer**: typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) = `BasePowerSourceConfigurationServer`

The PowerSourceConfiguration cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L47)

___

### PowerSourceServer

• `Const` **PowerSourceServer**: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) = `BasePowerSourceServer`

The PowerSource cluster is optional per the Matter specification

We provide this alias for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L54)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `BridgedDeviceBasicInformation`: typeof [`BridgedDeviceBasicInformationServer`](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md) = BridgedDeviceBasicInformationServer; `Index`: typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) = IndexBehavior; `Parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) = PartsBehavior } |
| `mandatory.BridgedDeviceBasicInformation` | typeof [`BridgedDeviceBasicInformationServer`](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer.md) |
| `mandatory.Index` | typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) |
| `mandatory.Parts` | typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) |
| `optional` | \{ `PowerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) = PowerSourceServer; `PowerSourceConfiguration`: typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) = PowerSourceConfigurationServer } |
| `optional.PowerSource` | typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) |
| `optional.PowerSourceConfiguration` | typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts:59](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/endpoint/definitions/system/BridgedNodeEndpoint.ts#L59)
