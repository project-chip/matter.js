[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Command`](exports_cluster.Command.md)\<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

  ↳↳ [`ConditionalCommand`](exports_cluster.ConditionalCommand.md)

## Table of contents

### Properties

- [invokeAcl](exports_cluster.OptionalCommand.md#invokeacl)
- [isConditional](exports_cluster.OptionalCommand.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalCommand.md#mandatoryif)
- [optional](exports_cluster.OptionalCommand.md#optional)
- [optionalIf](exports_cluster.OptionalCommand.md#optionalif)
- [requestId](exports_cluster.OptionalCommand.md#requestid)
- [requestSchema](exports_cluster.OptionalCommand.md#requestschema)
- [responseId](exports_cluster.OptionalCommand.md#responseid)
- [responseSchema](exports_cluster.OptionalCommand.md#responseschema)
- [timed](exports_cluster.OptionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

[Command](exports_cluster.Command.md).[invokeAcl](exports_cluster.Command.md#invokeacl)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Command](exports_cluster.Command.md).[isConditional](exports_cluster.Command.md#isconditional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](exports_cluster.Command.md).[mandatoryIf](exports_cluster.Command.md#mandatoryif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### optional

• **optional**: ``true``

#### Overrides

[Command](exports_cluster.Command.md).[optional](exports_cluster.Command.md#optional)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:137

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Command](exports_cluster.Command.md).[optionalIf](exports_cluster.Command.md#optionalif)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:134

___

### requestId

• **requestId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

[Command](exports_cluster.Command.md).[requestId](exports_cluster.Command.md#requestid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`RequestT`\>

#### Inherited from

[Command](exports_cluster.Command.md).[requestSchema](exports_cluster.Command.md#requestschema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseId

• **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

[Command](exports_cluster.Command.md).[responseId](exports_cluster.Command.md#responseid)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[Command](exports_cluster.Command.md).[responseSchema](exports_cluster.Command.md#responseschema)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### timed

• **timed**: `boolean`

#### Inherited from

[Command](exports_cluster.Command.md).[timed](exports_cluster.Command.md#timed)

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131
