[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Command

# Interface: Command\<RequestT, ResponseT, F\>

## Extended by

- [`OptionalCommand`](OptionalCommand.md)

## Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |
| `F` *extends* [`BitSchema`](../README.md#bitschema) |

## Properties

### invokeAcl

> **invokeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:130

***

### isConditional

> **isConditional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:132

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:133

***

### optional

> **optional**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:125

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:134

***

### requestId

> **requestId**: [`CommandId`](../README.md#commandid)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:126

***

### requestSchema

> **requestSchema**: [`TlvSchema`](../classes/TlvSchema.md)\<`RequestT`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:127

***

### responseId

> **responseId**: [`CommandId`](../README.md#commandid)

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:128

***

### responseSchema

> **responseSchema**: [`TlvSchema`](../classes/TlvSchema.md)\<`ResponseT`\>

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:129

***

### timed

> **timed**: `boolean`

#### Source

matter.js/dist/esm/cluster/Cluster.d.ts:131
