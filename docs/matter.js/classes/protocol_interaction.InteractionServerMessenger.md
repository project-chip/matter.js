[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

[protocol/interaction](../modules/protocol_interaction.md).InteractionServerMessenger

## Hierarchy

- [`InteractionMessenger`](index._internal_.InteractionMessenger.md)<[`MatterDevice`](index.MatterDevice.md)\>

  ↳ **`InteractionServerMessenger`**

## Table of contents

### Constructors

- [constructor](protocol_interaction.InteractionServerMessenger.md#constructor)

### Properties

- [exchange](protocol_interaction.InteractionServerMessenger.md#exchange)

### Methods

- [close](protocol_interaction.InteractionServerMessenger.md#close)
- [handleRequest](protocol_interaction.InteractionServerMessenger.md#handlerequest)
- [nextMessage](protocol_interaction.InteractionServerMessenger.md#nextmessage)
- [send](protocol_interaction.InteractionServerMessenger.md#send)
- [sendDataReport](protocol_interaction.InteractionServerMessenger.md#senddatareport)
- [sendStatus](protocol_interaction.InteractionServerMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](protocol_interaction.InteractionServerMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](protocol_interaction.InteractionServerMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionServerMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[constructor](index._internal_.InteractionMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L62)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[exchange](index._internal_.InteractionMessenger.md#exchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L63)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[close](index._internal_.InteractionMessenger.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

___

### handleRequest

▸ **handleRequest**(`handleReadRequest`, `handleWriteRequest`, `handleSubscribeRequest`, `handleInvokeRequest`, `handleTimedRequest`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handleReadRequest` | (`request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>) => [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\> |
| `handleWriteRequest` | (`request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\>  }\>) => [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\> |
| `handleSubscribeRequest` | (`request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>, `messenger`: [`InteractionServerMessenger`](protocol_interaction.InteractionServerMessenger.md)) => `Promise`<`void`\> |
| `handleInvokeRequest` | (`request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>, `message`: [`Message`](../interfaces/codec.Message.md)) => `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\>\> |
| `handleTimedRequest` | (`request`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `timeout`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\>  }\>) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:101](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L101)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[nextMessage](index._internal_.InteractionMessenger.md#nextmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L79)

___

### send

▸ **send**(`messageType`, `payload`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[send](index._internal_.InteractionMessenger.md#send)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L66)

___

### sendDataReport

▸ **sendDataReport**(`dataReport`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:161](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L161)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[sendStatus](index._internal_.InteractionMessenger.md#sendstatus)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L70)

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`void`

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](index._internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L91)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[waitForSuccess](index._internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L74)
