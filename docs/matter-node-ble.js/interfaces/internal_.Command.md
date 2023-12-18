[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

[\<internal\>](../modules/internal_.md).Command

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Table of contents

### Properties

- [invokeAcl](internal_.Command.md#invokeacl)
- [isConditional](internal_.Command.md#isconditional)
- [mandatoryIf](internal_.Command.md#mandatoryif)
- [optional](internal_.Command.md#optional)
- [optionalIf](internal_.Command.md#optionalif)
- [requestId](internal_.Command.md#requestid)
- [requestSchema](internal_.Command.md#requestschema)
- [responseId](internal_.Command.md#responseid)
- [responseSchema](internal_.Command.md#responseschema)
- [timed](internal_.Command.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:131

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### optional

• **optional**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:124

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### requestId

• **requestId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:125

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`RequestT`\>

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### responseId

• **responseId**: [`CommandId`](../modules/internal_.md#commandid)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`ResponseT`\>

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### timed

• **timed**: `boolean`

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:130
