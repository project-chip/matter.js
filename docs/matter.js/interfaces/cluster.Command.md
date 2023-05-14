[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / Command

# Interface: Command<RequestT, ResponseT\>

[cluster](../modules/cluster.md).Command

## Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

## Table of contents

### Properties

- [optional](cluster.Command.md#optional)
- [requestId](cluster.Command.md#requestid)
- [requestSchema](cluster.Command.md#requestschema)
- [responseId](cluster.Command.md#responseid)
- [responseSchema](cluster.Command.md#responseschema)

## Properties

### optional

• **optional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### requestId

• **requestId**: `number`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`RequestT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### responseId

• **responseId**: `number`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/tlv.TlvSchema.md)<`ResponseT`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/Cluster.ts#L42)
