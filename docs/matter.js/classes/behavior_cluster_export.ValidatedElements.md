[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / ValidatedElements

# Class: ValidatedElements

[behavior/cluster/export](../modules/behavior_cluster_export.md).ValidatedElements

Analyzes a ClusterBehavior implementation to ensure it conforms to the
Matter specification.

As this API is accessible via vanilla JavaScript, validation includes tests
for errors that TypeScript otherwise prevents.

Records elements supported and a list of errors if validation fails.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export.ValidatedElements.md#constructor)

### Properties

- [#cluster](behavior_cluster_export.ValidatedElements.md##cluster)
- [#name](behavior_cluster_export.ValidatedElements.md##name)
- [#type](behavior_cluster_export.ValidatedElements.md##type)
- [attributes](behavior_cluster_export.ValidatedElements.md#attributes)
- [commands](behavior_cluster_export.ValidatedElements.md#commands)
- [errors](behavior_cluster_export.ValidatedElements.md#errors)
- [events](behavior_cluster_export.ValidatedElements.md#events)

### Methods

- [#validateAttributes](behavior_cluster_export.ValidatedElements.md##validateattributes)
- [#validateCommands](behavior_cluster_export.ValidatedElements.md##validatecommands)
- [#validateEvents](behavior_cluster_export.ValidatedElements.md##validateevents)
- [error](behavior_cluster_export.ValidatedElements.md#error)
- [report](behavior_cluster_export.ValidatedElements.md#report)

## Constructors

### constructor

• **new ValidatedElements**(`type`): [`ValidatedElements`](behavior_cluster_export.ValidatedElements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |

#### Returns

[`ValidatedElements`](behavior_cluster_export.ValidatedElements.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L53)

## Properties

### #cluster

• `Private` **#cluster**: [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L51)

___

### #name

• `Private` **#name**: `string`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L49)

___

### #type

• `Private` **#type**: [`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L50)

___

### attributes

• **attributes**: `Set`\<`string`\>

Supported attributes.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L32)

___

### commands

• **commands**: `Set`\<`string`\>

Supported commands.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L37)

___

### errors

• `Optional` **errors**: \{ `element`: `string` ; `fatal`: `boolean` ; `message`: `string`  }[]

A list of implementation errors, if any.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L47)

___

### events

• **events**: `Set`\<`string`\>

Supported events.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L42)

## Methods

### #validateAttributes

▸ **#validateAttributes**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L105)

___

### #validateCommands

▸ **#validateCommands**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L153)

___

### #validateEvents

▸ **#validateEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L205)

___

### error

▸ **error**(`element`, `message`, `fatal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `undefined` \| `string` |
| `message` | `string` |
| `fatal` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L244)

___

### report

▸ **report**(): `void`

If there are errors, log and throw an exception.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L78)
