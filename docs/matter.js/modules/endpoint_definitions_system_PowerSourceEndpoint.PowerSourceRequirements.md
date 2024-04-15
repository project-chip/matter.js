[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/PowerSourceEndpoint](endpoint_definitions_system_PowerSourceEndpoint.md) / PowerSourceRequirements

# Namespace: PowerSourceRequirements

[endpoint/definitions/system/PowerSourceEndpoint](endpoint_definitions_system_PowerSourceEndpoint.md).PowerSourceRequirements

## Table of contents

### Variables

- [PowerSourceServer](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md#powersourceserver)
- [server](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md#server)

## Variables

### PowerSourceServer

• `Const` **PowerSourceServer**: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) = `BasePowerSourceServer`

The PowerSource cluster is required by the Matter specification

We provide this alias to the default implementation [PowerSourceServer](endpoint_definitions_system_PowerSourceEndpoint.PowerSourceRequirements.md#powersourceserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts#L28)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `PowerSource`: typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) = PowerSourceServer } |
| `mandatory.PowerSource` | typeof [`PowerSourceServer`](../classes/behavior_definitions_power_source_export.PowerSourceServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/PowerSourceEndpoint.ts#L33)
