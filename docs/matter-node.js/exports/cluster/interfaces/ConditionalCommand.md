[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ConditionalCommand

# Interface: ConditionalCommand\<RequestT, ResponseT, F\>

## Extends

- [`OptionalCommand`](OptionalCommand.md)\<`RequestT`, `ResponseT`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`invokeAcl`](OptionalCommand.md#invokeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalCommand`](OptionalCommand.md).[`isConditional`](OptionalCommand.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:140

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`mandatoryIf`](OptionalCommand.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`optional`](OptionalCommand.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:137

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`optionalIf`](OptionalCommand.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:134

***

### requestId

> **requestId**: [`CommandId`](../../datatype/README.md#commandid)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`requestId`](OptionalCommand.md#requestid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`RequestT`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`requestSchema`](OptionalCommand.md#requestschema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

***

### responseId

> **responseId**: [`CommandId`](../../datatype/README.md#commandid)

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`responseId`](OptionalCommand.md#responseid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`responseSchema`](OptionalCommand.md#responseschema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalCommand`](OptionalCommand.md).[`timed`](OptionalCommand.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131
