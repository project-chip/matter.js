[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / AttributeWithPath

# Interface: AttributeWithPath

[protocol/interaction](../modules/protocol_interaction.md).AttributeWithPath

## Table of contents

### Properties

- [attribute](protocol_interaction.AttributeWithPath.md#attribute)
- [path](protocol_interaction.AttributeWithPath.md#path)

## Properties

### attribute

• **attribute**: [`AttributeServer`](../classes/cluster.AttributeServer.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:211](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L211)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv.OptionalFieldType.md)<[`NodeId`](../classes/datatype.NodeId.md)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:210](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L210)
