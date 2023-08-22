[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / Command

# Interface: Command<RequestT, ResponseT, F\>

[cluster/export](../modules/cluster_export.md).Command

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Table of contents

### Properties

- [isConditional](cluster_export.Command.md#isconditional)
- [mandatoryIf](cluster_export.Command.md#mandatoryif)
- [optional](cluster_export.Command.md#optional)
- [optionalIf](cluster_export.Command.md#optionalif)
- [requestId](cluster_export.Command.md#requestid)
- [requestSchema](cluster_export.Command.md#requestschema)
- [responseId](cluster_export.Command.md#responseid)
- [responseSchema](cluster_export.Command.md#responseschema)

## Properties

### isConditional

• **isConditional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:572](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L572)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:573](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L573)

___

### optional

• **optional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:567](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L567)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:574](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L574)

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:568](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L568)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:569](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L569)

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:570](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L570)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:571](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L571)
