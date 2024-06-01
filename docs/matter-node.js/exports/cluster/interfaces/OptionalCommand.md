[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

## Extends

- [`Command`](Command.md)\<`RequestT`, `ResponseT`, `F`\>

## Extended by

- [`ConditionalCommand`](ConditionalCommand.md)

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

[`Command`](Command.md).[`invokeAcl`](Command.md#invokeacl)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Command`](Command.md).[`isConditional`](Command.md#isconditional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`mandatoryIf`](Command.md#mandatoryif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

***

### optional

> **optional**: `true`

#### Overrides

[`Command`](Command.md).[`optional`](Command.md#optional)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:137

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`optionalIf`](Command.md#optionalif)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:134

***

### requestId

> **requestId**: [`CommandId`](../../datatype/README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`requestId`](Command.md#requestid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`RequestT`\>

#### Inherited from

[`Command`](Command.md).[`requestSchema`](Command.md#requestschema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

***

### responseId

> **responseId**: [`CommandId`](../../datatype/README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`responseId`](Command.md#responseid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[`Command`](Command.md).[`responseSchema`](Command.md#responseschema)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

***

### timed

> **timed**: `boolean`

#### Inherited from

[`Command`](Command.md).[`timed`](Command.md#timed)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131
