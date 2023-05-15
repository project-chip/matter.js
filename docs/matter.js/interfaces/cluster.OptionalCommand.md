[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT\>

[cluster](../modules/cluster.md).OptionalCommand

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Hierarchy

- [`Command`](../modules/cluster.md#command)<`RequestT`, `ResponseT`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [optional](cluster.OptionalCommand.md#optional)
- [requestId](cluster.OptionalCommand.md#requestid)
- [requestSchema](cluster.OptionalCommand.md#requestschema)
- [responseId](cluster.OptionalCommand.md#responseid)
- [responseSchema](cluster.OptionalCommand.md#responseschema)

## Properties

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L43)

___

### requestId

• **requestId**: `number`

#### Inherited from

Command.requestId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### responseId

• **responseId**: `number`

#### Inherited from

Command.responseId

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)
