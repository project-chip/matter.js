[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / OptionalCommand

# Interface: OptionalCommand\<RequestT, ResponseT, F\>

## Extends

- [`Command`](Command.md)\<`RequestT`, `ResponseT`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Command`](Command.md).[`invokeAcl`](Command.md#invokeacl)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:130

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Command`](Command.md).[`isConditional`](Command.md#isconditional)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:132

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`mandatoryIf`](Command.md#mandatoryif)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:133

***

### optional

> **optional**: `true`

#### Overrides

[`Command`](Command.md).[`optional`](Command.md#optional)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:137

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Command`](Command.md).[`optionalIf`](Command.md#optionalif)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:134

***

### requestId

> **requestId**: [`CommandId`](../README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`requestId`](Command.md#requestid)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:126

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../classes/TlvSchema.md)\<`RequestT`\>

#### Inherited from

[`Command`](Command.md).[`requestSchema`](Command.md#requestschema)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:127

***

### responseId

> **responseId**: [`CommandId`](../README.md#commandid)

#### Inherited from

[`Command`](Command.md).[`responseId`](Command.md#responseid)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:128

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../classes/TlvSchema.md)\<`ResponseT`\>

#### Inherited from

[`Command`](Command.md).[`responseSchema`](Command.md#responseschema)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:129

***

### timed

> **timed**: `boolean`

#### Inherited from

[`Command`](Command.md).[`timed`](Command.md#timed)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:131
