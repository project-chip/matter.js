[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / [\<internal\>](behavior_cluster_export._internal_.md) / ValueSupervisor

# Namespace: ValueSupervisor

[behavior/cluster/export](behavior_cluster_export.md).[\<internal\>](behavior_cluster_export._internal_.md).ValueSupervisor

## Table of contents

### References

- [Session](behavior_cluster_export._internal_.ValueSupervisor.md#session)

### Type Aliases

- [Manage](behavior_cluster_export._internal_.ValueSupervisor.md#manage)
- [Patch](behavior_cluster_export._internal_.ValueSupervisor.md#patch)
- [Validate](behavior_cluster_export._internal_.ValueSupervisor.md#validate)

## References

### Session

Re-exports [Session](../interfaces/behavior_cluster_export._internal_.Session.md)

## Type Aliases

### Manage

Ƭ **Manage**: (`reference`: [`Reference`](../interfaces/behavior_cluster_export._internal_.Val.Reference.md), `session`: [`Session`](../interfaces/behavior_cluster_export._internal_.Session.md)) => [`Val`](behavior_cluster_export._internal_.md#val)

#### Type declaration

▸ (`reference`, `session`): [`Val`](behavior_cluster_export._internal_.md#val)

##### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`Reference`](../interfaces/behavior_cluster_export._internal_.Val.Reference.md) |
| `session` | [`Session`](../interfaces/behavior_cluster_export._internal_.Session.md) |

##### Returns

[`Val`](behavior_cluster_export._internal_.md#val)

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L91)

___

### Patch

Ƭ **Patch**: (`changes`: [`Collection`](behavior_cluster_export._internal_.Val.md#collection), `target`: [`Collection`](behavior_cluster_export._internal_.Val.md#collection), `path`: [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md)) => [`Val`](behavior_cluster_export._internal_.md#val)

#### Type declaration

▸ (`changes`, `target`, `path`): [`Val`](behavior_cluster_export._internal_.md#val)

##### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | [`Collection`](behavior_cluster_export._internal_.Val.md#collection) |
| `target` | [`Collection`](behavior_cluster_export._internal_.Val.md#collection) |
| `path` | [`DataModelPath`](../interfaces/behavior_cluster_export._internal_.DataModelPath.md) |

##### Returns

[`Val`](behavior_cluster_export._internal_.md#val)

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L93)

___

### Validate

Ƭ **Validate**: (`value`: [`Val`](behavior_cluster_export._internal_.md#val), `session`: [`Session`](../interfaces/behavior_cluster_export._internal_.Session.md), `location`: [`ValidationLocation`](../interfaces/behavior_cluster_export._internal_.ValidationLocation-1.md)) => `void`

#### Type declaration

▸ (`value`, `session`, `location`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Val`](behavior_cluster_export._internal_.md#val) |
| `session` | [`Session`](../interfaces/behavior_cluster_export._internal_.Session.md) |
| `location` | [`ValidationLocation`](../interfaces/behavior_cluster_export._internal_.ValidationLocation-1.md) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L89)
