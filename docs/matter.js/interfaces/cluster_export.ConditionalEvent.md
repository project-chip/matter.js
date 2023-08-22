[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalEvent

# Interface: ConditionalEvent<T, F\>

[cluster/export](../modules/cluster_export.md).ConditionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalEvent`](../modules/cluster_export.md#optionalevent)<`T`, `F`\>

  ↳ **`ConditionalEvent`**

## Table of contents

### Properties

- [id](cluster_export.ConditionalEvent.md#id)
- [isConditional](cluster_export.ConditionalEvent.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalEvent.md#mandatoryif)
- [optional](cluster_export.ConditionalEvent.md#optional)
- [optionalIf](cluster_export.ConditionalEvent.md#optionalif)
- [priority](cluster_export.ConditionalEvent.md#priority)
- [schema](cluster_export.ConditionalEvent.md#schema)
- [unknown](cluster_export.ConditionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

OptionalEvent.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:659](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L659)

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalEvent.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:683](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L683)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:665](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L665)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalEvent.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:679](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L679)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalEvent.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:664](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L664)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

OptionalEvent.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:661](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L661)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

OptionalEvent.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:660](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L660)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

OptionalEvent.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:666](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L666)
