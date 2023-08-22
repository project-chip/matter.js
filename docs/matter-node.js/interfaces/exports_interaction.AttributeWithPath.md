[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / AttributeWithPath

# Interface: AttributeWithPath

[exports/interaction](../modules/exports_interaction.md).AttributeWithPath

## Table of contents

### Properties

- [attribute](exports_interaction.AttributeWithPath.md#attribute)
- [path](exports_interaction.AttributeWithPath.md#path)

## Properties

### attribute

• **attribute**: [`AttributeServer`](../classes/exports_cluster.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](../classes/exports_cluster.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](../classes/exports_cluster.FixedAttributeServer.md)<`any`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:41

___

### path

• **path**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:40
