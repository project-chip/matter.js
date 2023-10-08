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

- [invokeAcl](cluster_export.Command.md#invokeacl)
- [isConditional](cluster_export.Command.md#isconditional)
- [mandatoryIf](cluster_export.Command.md#mandatoryif)
- [optional](cluster_export.Command.md#optional)
- [optionalIf](cluster_export.Command.md#optionalif)
- [requestId](cluster_export.Command.md#requestid)
- [requestSchema](cluster_export.Command.md#requestschema)
- [responseId](cluster_export.Command.md#responseid)
- [responseSchema](cluster_export.Command.md#responseschema)
- [timed](cluster_export.Command.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:604

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:606

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:607

___

### optional

• **optional**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:599

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:608

___

### requestId

• **requestId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:600

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`RequestT`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:601

___

### responseId

• **responseId**: [`CommandId`](../modules/datatype_export.md#commandid)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:602

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`ResponseT`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:603

___

### timed

• **timed**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:605
