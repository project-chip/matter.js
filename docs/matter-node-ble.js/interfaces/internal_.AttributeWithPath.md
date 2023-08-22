[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AttributeWithPath

# Interface: AttributeWithPath

[<internal>](../modules/internal_.md).AttributeWithPath

## Table of contents

### Properties

- [attribute](internal_.AttributeWithPath.md#attribute)
- [path](internal_.AttributeWithPath.md#path)

## Properties

### attribute

• **attribute**: [`AttributeServer`](../classes/internal_.AttributeServer.md)<`any`\> \| [`FabricScopedAttributeServer`](../classes/internal_.FabricScopedAttributeServer.md)<`any`\> \| [`FixedAttributeServer`](../classes/internal_.FixedAttributeServer.md)<`any`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:41

___

### path

• **path**: [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<[`AttributeId`](../modules/internal_.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionServer.d.ts:40
