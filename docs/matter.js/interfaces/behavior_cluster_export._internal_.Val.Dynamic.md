[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / [Val](../modules/behavior_cluster_export._internal_.Val.md) / Dynamic

# Interface: Dynamic\<O, S\>

[\<internal\>](../modules/behavior_cluster_export._internal_.md).[Val](../modules/behavior_cluster_export._internal_.Val.md).Dynamic

Unmanaged raw state classes have no contextual information.  They may implement this interface to provide an
alternate context-aware object for property read, write and validation.

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | `any` |
| `S` | extends [`Session`](behavior_cluster_export._internal_.Session.md) = [`Session`](behavior_cluster_export._internal_.Session.md) |

## Hierarchy

- [`Struct`](../modules/behavior_cluster_export._internal_.md#struct)

  ↳ **`Dynamic`**

## Table of contents

### Methods

- [[properties]](behavior_cluster_export._internal_.Val.Dynamic.md#[properties])

## Methods

### [properties]

▸ **[properties]**\<`This`\>(`this`, `owner`, `session`): `Partial`\<`This`\>

Obtain a context-aware property source (and sink).  Supervision will read/write properties from here if
present.  Otherwise they're read from static state as normal.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Struct`](../modules/behavior_cluster_export._internal_.md#struct) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `This` | - |
| `owner` | `O` | the owner of the root reference of the managed value |
| `session` | `S` | the [ValueSupervisor.Session](behavior_cluster_export._internal_.Session.md) accessing the value |

#### Returns

`Partial`\<`This`\>

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L100)
