[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalEvent

# Interface: ConditionalEvent\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalEvent`](cluster_export.OptionalEvent.md)\<`T`, `F`\>

  ↳ **`ConditionalEvent`**

## Table of contents

### Properties

- [id](cluster_export.ConditionalEvent.md#id)
- [isConditional](cluster_export.ConditionalEvent.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalEvent.md#mandatoryif)
- [optional](cluster_export.ConditionalEvent.md#optional)
- [optionalIf](cluster_export.ConditionalEvent.md#optionalif)
- [priority](cluster_export.ConditionalEvent.md#priority)
- [readAcl](cluster_export.ConditionalEvent.md#readacl)
- [schema](cluster_export.ConditionalEvent.md#schema)
- [unknown](cluster_export.ConditionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[id](cluster_export.OptionalEvent.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:717](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L717)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

[OptionalEvent](cluster_export.OptionalEvent.md).[isConditional](cluster_export.OptionalEvent.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:746](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L746)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[mandatoryIf](cluster_export.OptionalEvent.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:724](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L724)

___

### optional

• **optional**: ``true``

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[optional](cluster_export.OptionalEvent.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:742](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L742)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[optionalIf](cluster_export.OptionalEvent.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:723](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L723)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[priority](cluster_export.OptionalEvent.md#priority)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L719)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[readAcl](cluster_export.OptionalEvent.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L721)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[schema](cluster_export.OptionalEvent.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L718)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[OptionalEvent](cluster_export.OptionalEvent.md).[unknown](cluster_export.OptionalEvent.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:725](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/Cluster.ts#L725)
