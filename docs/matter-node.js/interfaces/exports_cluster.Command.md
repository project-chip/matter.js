[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

[exports/cluster](../modules/exports_cluster.md).Command

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- **`Command`**

  ↳ [`OptionalCommand`](exports_cluster.OptionalCommand.md)

## Table of contents

### Properties

- [invokeAcl](exports_cluster.Command.md#invokeacl)
- [isConditional](exports_cluster.Command.md#isconditional)
- [mandatoryIf](exports_cluster.Command.md#mandatoryif)
- [optional](exports_cluster.Command.md#optional)
- [optionalIf](exports_cluster.Command.md#optionalif)
- [requestId](exports_cluster.Command.md#requestid)
- [requestSchema](exports_cluster.Command.md#requestschema)
- [responseId](exports_cluster.Command.md#responseid)
- [responseSchema](exports_cluster.Command.md#responseschema)
- [timed](exports_cluster.Command.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### optional

• **optional**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:124

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### requestId

• **requestId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:125

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`RequestT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### responseId

• **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`ResponseT`\>

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### timed

• **timed**: `boolean`

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130
