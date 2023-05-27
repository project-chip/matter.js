[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / InteractionServer

# Class: InteractionServer

[protocol/interaction](../modules/protocol_interaction.md).InteractionServer

## Implements

- [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](protocol_interaction.InteractionServer.md#constructor)

### Properties

- [attributePaths](protocol_interaction.InteractionServer.md#attributepaths)
- [attributes](protocol_interaction.InteractionServer.md#attributes)
- [commandPaths](protocol_interaction.InteractionServer.md#commandpaths)
- [commands](protocol_interaction.InteractionServer.md#commands)
- [endpoints](protocol_interaction.InteractionServer.md#endpoints)
- [nextSubscriptionId](protocol_interaction.InteractionServer.md#nextsubscriptionid)
- [storageManager](protocol_interaction.InteractionServer.md#storagemanager)

### Methods

- [addEndpoint](protocol_interaction.InteractionServer.md#addendpoint)
- [getAttributes](protocol_interaction.InteractionServer.md#getattributes)
- [getId](protocol_interaction.InteractionServer.md#getid)
- [handleInvokeRequest](protocol_interaction.InteractionServer.md#handleinvokerequest)
- [handleReadRequest](protocol_interaction.InteractionServer.md#handlereadrequest)
- [handleSubscribeRequest](protocol_interaction.InteractionServer.md#handlesubscriberequest)
- [handleTimedRequest](protocol_interaction.InteractionServer.md#handletimedrequest)
- [handleWriteRequest](protocol_interaction.InteractionServer.md#handlewriterequest)
- [onNewExchange](protocol_interaction.InteractionServer.md#onnewexchange)
- [resolveAttributeName](protocol_interaction.InteractionServer.md#resolveattributename)
- [setRootEndpoint](protocol_interaction.InteractionServer.md#setrootendpoint)

## Constructors

### constructor

• **new InteractionServer**(`storageManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:235](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L235)

## Properties

### attributePaths

• `Private` **attributePaths**: [`AttributePath`](../interfaces/protocol_interaction.AttributePath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:230](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L230)

___

### attributes

• `Private` **attributes**: `Map`<`string`, [`AttributeServer`](cluster.AttributeServer.md)<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:229](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L229)

___

### commandPaths

• `Private` **commandPaths**: [`CommandPath`](../interfaces/protocol_interaction.CommandPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:232](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L232)

___

### commands

• `Private` **commands**: `Map`<`string`, [`CommandServer`](cluster.CommandServer.md)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:231](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L231)

___

### endpoints

• `Private` **endpoints**: `Map`<`number`, [`Endpoint`](device.Endpoint.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:228](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L228)

___

### nextSubscriptionId

• `Private` **nextSubscriptionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:233](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L233)

___

### storageManager

• `Private` `Readonly` **storageManager**: [`StorageManager`](storage.StorageManager.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:236](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L236)

## Methods

### addEndpoint

▸ **addEndpoint**(`endpointId`, `device`, `clusters`): [`InteractionServer`](protocol_interaction.InteractionServer.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `device` | `Object` |
| `device.code` | `number` |
| `device.name` | `string` |
| `clusters` | [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[] |

#### Returns

[`InteractionServer`](protocol_interaction.InteractionServer.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:246](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L246)

___

### getAttributes

▸ `Private` **getAttributes**(`filters`, `onlyWritable?`): [`AttributeWithPath`](../interfaces/protocol_interaction.AttributeWithPath.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filters` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[] | `undefined` |
| `onlyWritable` | `boolean` | `false` |

#### Returns

[`AttributeWithPath`](../interfaces/protocol_interaction.AttributeWithPath.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:536](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L536)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[getId](../interfaces/protocol.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:239](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L239)

___

### handleInvokeRequest

▸ **handleInvokeRequest**(`exchange`, `«destructured»`, `message`): `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\> |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:453](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L453)

___

### handleReadRequest

▸ **handleReadRequest**(`exchange`, `«destructured»`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\> |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:326](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L326)

___

### handleSubscribeRequest

▸ **handleSubscribeRequest**(`exchange`, `«destructured»`, `messenger`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |
| `messenger` | [`InteractionServerMessenger`](protocol_interaction.InteractionServerMessenger.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:403](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L403)

___

### handleTimedRequest

▸ **handleTimedRequest**(`exchange`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:504](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L504)

___

### handleWriteRequest

▸ **handleWriteRequest**(`exchange`, `«destructured»`): [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\>  }\> |

#### Returns

[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:357](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L357)

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[onNewExchange](../interfaces/protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:316](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L316)

___

### resolveAttributeName

▸ `Private` **resolveAttributeName**(`«destructured»`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\> |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:509](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L509)

___

### setRootEndpoint

▸ **setRootEndpoint**(`endpoint`): [`InteractionServer`](protocol_interaction.InteractionServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device.Endpoint.md) |

#### Returns

[`InteractionServer`](protocol_interaction.InteractionServer.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:297](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L297)
