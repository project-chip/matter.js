[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalEvent

# Interface: OptionalEvent<T, F\>

[cluster/export](../modules/cluster_export.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Event`](../modules/cluster_export.md#event)<`T`, `F`\>

  ↳ **`OptionalEvent`**

## Table of contents

### Properties

- [id](cluster_export.OptionalEvent.md#id)
- [isConditional](cluster_export.OptionalEvent.md#isconditional)
- [mandatoryIf](cluster_export.OptionalEvent.md#mandatoryif)
- [optional](cluster_export.OptionalEvent.md#optional)
- [optionalIf](cluster_export.OptionalEvent.md#optionalif)
- [priority](cluster_export.OptionalEvent.md#priority)
- [schema](cluster_export.OptionalEvent.md#schema)
- [unknown](cluster_export.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

Event.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:659](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L659)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:663](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L663)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:665](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L665)

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:679](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L679)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:664](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L664)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:661](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L661)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

Event.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:660](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L660)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Event.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:666](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L666)
