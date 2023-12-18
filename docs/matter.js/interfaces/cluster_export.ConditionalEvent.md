[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalEvent

# Interface: ConditionalEvent\<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalEvent`](../modules/cluster_export.md#optionalevent)\<`T`, `F`\>

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

OptionalEvent.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:714](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L714)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalEvent.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:743](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L743)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalEvent.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L721)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalEvent.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:739](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L739)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

OptionalEvent.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:720](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L720)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

OptionalEvent.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:716](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L716)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

OptionalEvent.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L718)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

OptionalEvent.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:715](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L715)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalEvent.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:722](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L722)
