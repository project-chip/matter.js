[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / AttributeWithPath

# Interface: AttributeWithPath

[protocol/interaction/export](../modules/protocol_interaction_export.md).AttributeWithPath

## Table of contents

### Properties

- [attribute](protocol_interaction_export.AttributeWithPath.md#attribute)
- [path](protocol_interaction_export.AttributeWithPath.md#path)

## Properties

### attribute

• **attribute**: [`AttributeServer`](../classes/cluster_export.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](../classes/cluster_export.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](../classes/cluster_export.FixedAttributeServer.md)<`any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L86)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L85)
