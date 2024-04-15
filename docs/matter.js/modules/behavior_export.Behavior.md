[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](behavior_export.md) / Behavior

# Namespace: Behavior

[behavior/export](behavior_export.md).Behavior

## Table of contents

### Interfaces

- [Type](../interfaces/behavior_export.Behavior.Type.md)

### Type Aliases

- [EventsOf](behavior_export.Behavior.md#eventsof)
- [InitializationOptionsOf](behavior_export.Behavior.md#initializationoptionsof)
- [InputStateOf](behavior_export.Behavior.md#inputstateof)
- [Options](behavior_export.Behavior.md#options)
- [PatchStateOf](behavior_export.Behavior.md#patchstateof)
- [StateOf](behavior_export.Behavior.md#stateof)

### Functions

- [unimplemented](behavior_export.Behavior.md#unimplemented)

## Type Aliases

### EventsOf

Ƭ **EventsOf**\<`B`\>: `InstanceType`\<`B`[``"Events"``]\>

The events type of a behavior [Type](../interfaces/behavior_export.Behavior.Type.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:364](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L364)

___

### InitializationOptionsOf

Ƭ **InitializationOptionsOf**\<`B`\>: `Parameters`\<`InstanceType`\<`B`\>[``"initialize"``]\> extends [infer P] ? `P` : {}

Initialization options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:369](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L369)

___

### InputStateOf

Ƭ **InputStateOf**\<`B`\>: `Partial`\<[`RelaxTypes`](cluster_export.ClusterType.md#relaxtypes)\<[`StateOf`](behavior_export.Behavior.md#stateof)\<`B`\>\>\>

Input variant of StateOf.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:354](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L354)

___

### Options

Ƭ **Options**\<`T`\>: [`InputStateOf`](behavior_export.Behavior.md#inputstateof)\<`T`\> & [`InitializationOptionsOf`](behavior_export.Behavior.md#initializationoptionsof)\<`T`\>

Configuration options you may set when adding a [Behavior](../classes/behavior_export.Behavior-1.md) to an endpoint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) = [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:375](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L375)

___

### PatchStateOf

Ƭ **PatchStateOf**\<`B`\>: [`PatchType`](cluster_export.ClusterType.md#patchtype)\<[`StateOf`](behavior_export.Behavior.md#stateof)\<`B`\>\>

Patch variant of StateOf.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:359](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L359)

___

### StateOf

Ƭ **StateOf**\<`B`\>: `InstanceType`\<`B`[``"State"``]\>

The state type of a behavior [Type](../interfaces/behavior_export.Behavior.Type.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:349](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L349)

## Functions

### unimplemented

▸ **unimplemented**(`..._args`): `Promise`\<`any`\>

This function simply throws NotImplementedError.  More importantly, its presence in any command implementation
method informs the endpoint that the command is not implemented.

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L342)
