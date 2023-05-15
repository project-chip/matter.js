[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / AttributeStatus

# Interface: AttributeStatus

[protocol/interaction](../modules/protocol_interaction.md).AttributeStatus

## Table of contents

### Properties

- [path](protocol_interaction.AttributeStatus.md#path)
- [status](protocol_interaction.AttributeStatus.md#status)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId?` | `number` |
| `clusterId?` | `number` |
| `endpointId?` | `number` |
| `nodeId?` | [`NodeId`](../classes/datatype.NodeId.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L31)

___

### status

• **status**: [`StatusCode`](../enums/protocol_interaction.StatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L37)
