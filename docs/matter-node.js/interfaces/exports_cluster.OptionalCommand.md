[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT\>

[exports/cluster](../modules/exports_cluster.md).OptionalCommand

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Hierarchy

- [`Command`](../modules/exports_cluster.md#command)<`RequestT`, `ResponseT`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [optional](exports_cluster.OptionalCommand.md#optional)
- [requestId](exports_cluster.OptionalCommand.md#requestid)
- [requestSchema](exports_cluster.OptionalCommand.md#requestschema)
- [responseId](exports_cluster.OptionalCommand.md#responseid)
- [responseSchema](exports_cluster.OptionalCommand.md#responseschema)

## Properties

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:67

___

### requestId

• **requestId**: `number`

#### Inherited from

Command.requestId

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:61

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:62

___

### responseId

• **responseId**: `number`

#### Inherited from

Command.responseId

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:63

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

packages/matter.js/dist/cjs/cluster/Cluster.d.ts:64
