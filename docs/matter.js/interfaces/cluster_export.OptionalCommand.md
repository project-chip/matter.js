[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Command`](../modules/cluster_export.md#command)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [isConditional](cluster_export.OptionalCommand.md#isconditional)
- [mandatoryIf](cluster_export.OptionalCommand.md#mandatoryif)
- [optional](cluster_export.OptionalCommand.md#optional)
- [optionalIf](cluster_export.OptionalCommand.md#optionalif)
- [requestId](cluster_export.OptionalCommand.md#requestid)
- [requestSchema](cluster_export.OptionalCommand.md#requestschema)
- [responseId](cluster_export.OptionalCommand.md#responseid)
- [responseSchema](cluster_export.OptionalCommand.md#responseschema)

## Properties

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Command.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:572](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L572)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:573](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L573)

___

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:578](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L578)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:574](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L574)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

Command.requestId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:568](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L568)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:569](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L569)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

Command.responseId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:570](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L570)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:571](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L571)
