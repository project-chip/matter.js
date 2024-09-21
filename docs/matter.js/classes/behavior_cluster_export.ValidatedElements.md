[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / ValidatedElements

# Class: ValidatedElements

[behavior/cluster/export](../modules/behavior_cluster_export.md).ValidatedElements

Analyzes a ClusterBehavior implementation to ensure it conforms to the Matter specification.

As this API is accessible via vanilla JavaScript, validation includes tests for errors that TypeScript otherwise
prevents.

Records elements supported and a list of errors if validation fails.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export.ValidatedElements.md#constructor)

### Properties

- [#cluster](behavior_cluster_export.ValidatedElements.md##cluster)
- [#instance](behavior_cluster_export.ValidatedElements.md##instance)
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

• **new ValidatedElements**(`type`, `instance?`): [`ValidatedElements`](behavior_cluster_export.ValidatedElements.md)

Obtain validation information.

Validation may run against the type alone or with a specific instance of the behavior.  The latter option allows
for per-instance specialization.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> | the behavior type to analyze |
| `instance?` | [`Behavior`](behavior_export.Behavior-1.md) | optional concrete instance of the behavior |

#### Returns

[`ValidatedElements`](behavior_cluster_export.ValidatedElements.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:62](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L62)

## Properties

### #cluster

• `Private` **#cluster**: [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:51](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L51)

___

### #instance

• `Private` `Optional` **#instance**: [`Behavior`](behavior_export.Behavior-1.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:50](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L50)

___

### #name

• `Private` **#name**: `string`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:48](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L48)

___

### #type

• `Private` **#type**: [`Type`](../interfaces/behavior_export.Behavior.Type.md)

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:49](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L49)

___

### attributes

• **attributes**: `Set`\<`string`\>

Supported attributes.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:31](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L31)

___

### commands

• **commands**: `Set`\<`string`\>

Supported commands.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:36](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L36)

___

### errors

• `Optional` **errors**: \{ `element`: `string` ; `fatal`: `boolean` ; `message`: `string`  }[]

A list of implementation errors, if any.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:46](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L46)

___

### events

• **events**: `Set`\<`string`\>

Supported events.

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:41](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L41)

## Methods

### #validateAttributes

▸ **#validateAttributes**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:118](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L118)

___

### #validateCommands

▸ **#validateCommands**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:170](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L170)

___

### #validateEvents

▸ **#validateEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:229](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L229)

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

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:273](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L273)

___

### report

▸ **report**(): `void`

If there are errors, log and throw an exception.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/cluster/ValidatedElements.ts:91](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ValidatedElements.ts#L91)
