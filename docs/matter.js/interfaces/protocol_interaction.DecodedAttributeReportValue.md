[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / DecodedAttributeReportValue

# Interface: DecodedAttributeReportValue

[protocol/interaction](../modules/protocol_interaction.md).DecodedAttributeReportValue

## Table of contents

### Properties

- [path](protocol_interaction.DecodedAttributeReportValue.md#path)
- [value](protocol_interaction.DecodedAttributeReportValue.md#value)
- [version](protocol_interaction.DecodedAttributeReportValue.md#version)

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

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L19)

___

### value

• **value**: `any`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L27)

___

### version

• **version**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/AttributeDataDecoder.ts#L26)
