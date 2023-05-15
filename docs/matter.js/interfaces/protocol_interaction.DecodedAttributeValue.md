[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / DecodedAttributeValue

# Interface: DecodedAttributeValue

[protocol/interaction](../modules/protocol_interaction.md).DecodedAttributeValue

## Table of contents

### Properties

- [path](protocol_interaction.DecodedAttributeValue.md#path)
- [value](protocol_interaction.DecodedAttributeValue.md#value)
- [version](protocol_interaction.DecodedAttributeValue.md#version)

## Properties

### path

• **path**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributeId` | `number` |
| `attributeName` | `string` |
| `clusterId` | `number` |
| `endpointId` | `number` |
| `nodeId?` | [`NodeId`](../classes/datatype.NodeId.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L31)

___

### value

• **value**: `any`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L39)

___

### version

• `Optional` **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L38)
