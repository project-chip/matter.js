[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ConditionalCommand

# Interface: ConditionalCommand<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).ConditionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`OptionalCommand`](../modules/cluster_export.md#optionalcommand)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`ConditionalCommand`**

## Table of contents

### Properties

- [isConditional](cluster_export.ConditionalCommand.md#isconditional)
- [mandatoryIf](cluster_export.ConditionalCommand.md#mandatoryif)
- [optional](cluster_export.ConditionalCommand.md#optional)
- [optionalIf](cluster_export.ConditionalCommand.md#optionalif)
- [requestId](cluster_export.ConditionalCommand.md#requestid)
- [requestSchema](cluster_export.ConditionalCommand.md#requestschema)
- [responseId](cluster_export.ConditionalCommand.md#responseid)
- [responseSchema](cluster_export.ConditionalCommand.md#responseschema)

## Properties

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalCommand.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:583](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L583)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:573](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L573)

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalCommand.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:578](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L578)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:574](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L574)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

OptionalCommand.requestId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:568](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L568)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Inherited from

OptionalCommand.requestSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:569](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L569)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Inherited from

OptionalCommand.responseId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:570](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L570)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Inherited from

OptionalCommand.responseSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:571](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L571)
