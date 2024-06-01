[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

## Extended by

- [`OptionalCommand`](OptionalCommand.md)

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130

***

### isConditional

> **isConditional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

***

### optional

> **optional**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:125

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:134

***

### requestId

> **requestId**: [`CommandId`](../../datatype/README.md#commandid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`RequestT`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

***

### responseId

> **responseId**: [`CommandId`](../../datatype/README.md#commandid)

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`ResponseT`\>

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

***

### timed

> **timed**: `boolean`

#### Source

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131
