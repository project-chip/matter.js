[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/AggregatorEndpoint](endpoint_definitions_system_AggregatorEndpoint.md) / AggregatorRequirements

# Namespace: AggregatorRequirements

[endpoint/definitions/system/AggregatorEndpoint](endpoint_definitions_system_AggregatorEndpoint.md).AggregatorRequirements

## Table of contents

### Variables

- [ActionsServer](endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md#actionsserver)
- [server](endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md#server)

## Variables

### ActionsServer

• `Const` **ActionsServer**: typeof [`ActionsServer`](../classes/behavior_definitions_actions_export.ActionsServer.md) = `BaseActionsServer`

The Actions cluster is optional per the Matter specification

We provide this alias to the default implementation [ActionsServer](endpoint_definitions_system_AggregatorEndpoint.AggregatorRequirements.md#actionsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts#L38)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `Index`: typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) = IndexBehavior; `Parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) = PartsBehavior } |
| `mandatory.Index` | typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) |
| `mandatory.Parts` | typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) |
| `optional` | \{ `Actions`: typeof [`ActionsServer`](../classes/behavior_definitions_actions_export.ActionsServer.md) = ActionsServer } |
| `optional.Actions` | typeof [`ActionsServer`](../classes/behavior_definitions_actions_export.ActionsServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/AggregatorEndpoint.ts#L43)
