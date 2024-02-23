[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

[\<internal\>](../modules/internal_.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |

## Hierarchy

- [`Command`](internal_.Command.md)\<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [invokeAcl](internal_.OptionalCommand.md#invokeacl)
- [isConditional](internal_.OptionalCommand.md#isconditional)
- [mandatoryIf](internal_.OptionalCommand.md#mandatoryif)
- [optional](internal_.OptionalCommand.md#optional)
- [optionalIf](internal_.OptionalCommand.md#optionalif)
- [requestId](internal_.OptionalCommand.md#requestid)
- [requestSchema](internal_.OptionalCommand.md#requestschema)
- [responseId](internal_.OptionalCommand.md#responseid)
- [responseSchema](internal_.OptionalCommand.md#responseschema)
- [timed](internal_.OptionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/internal_.AccessLevel.md)

#### Inherited from

[Command](internal_.Command.md).[invokeAcl](internal_.Command.md#invokeacl)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Command](internal_.Command.md).[isConditional](internal_.Command.md#isconditional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:131

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](internal_.Command.md).[mandatoryIf](internal_.Command.md#mandatoryif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### optional

• **optional**: ``true``

#### Overrides

[Command](internal_.Command.md).[optional](internal_.Command.md#optional)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:136

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/internal_.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](internal_.Command.md).[optionalIf](internal_.Command.md#optionalif)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### requestId

• **requestId**: [`CommandId`](../modules/internal_.md#commandid)

#### Inherited from

[Command](internal_.Command.md).[requestId](internal_.Command.md#requestid)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:125

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`RequestT`\>

#### Inherited from

[Command](internal_.Command.md).[requestSchema](internal_.Command.md#requestschema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### responseId

• **responseId**: [`CommandId`](../modules/internal_.md#commandid)

#### Inherited from

[Command](internal_.Command.md).[responseId](internal_.Command.md#responseid)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/internal_.TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[Command](internal_.Command.md).[responseSchema](internal_.Command.md#responseschema)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### timed

• **timed**: `boolean`

#### Inherited from

[Command](internal_.Command.md).[timed](internal_.Command.md#timed)

#### Defined in

matter.js/dist/esm/cluster/Cluster.d.ts:130
