[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionClientMessenger

# Class: InteractionClientMessenger

[exports/interaction](../modules/exports_interaction.md).InteractionClientMessenger

## Hierarchy

- [`IncomingInteractionClientMessenger`](exports_interaction.IncomingInteractionClientMessenger.md)

  ↳ **`InteractionClientMessenger`**

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionClientMessenger.md#constructor)

### Properties

- [exchange](exports_interaction.InteractionClientMessenger.md#exchange)
- [exchangeProvider](exports_interaction.InteractionClientMessenger.md#exchangeprovider)
- [request](exports_interaction.InteractionClientMessenger.md#request)
- [requestWithSuppressedResponse](exports_interaction.InteractionClientMessenger.md#requestwithsuppressedresponse)

### Methods

- [close](exports_interaction.InteractionClientMessenger.md#close)
- [nextMessage](exports_interaction.InteractionClientMessenger.md#nextmessage)
- [readDataReport](exports_interaction.InteractionClientMessenger.md#readdatareport)
- [send](exports_interaction.InteractionClientMessenger.md#send)
- [sendInvokeCommand](exports_interaction.InteractionClientMessenger.md#sendinvokecommand)
- [sendReadRequest](exports_interaction.InteractionClientMessenger.md#sendreadrequest)
- [sendStatus](exports_interaction.InteractionClientMessenger.md#sendstatus)
- [sendSubscribeRequest](exports_interaction.InteractionClientMessenger.md#sendsubscriberequest)
- [sendTimedRequest](exports_interaction.InteractionClientMessenger.md#sendtimedrequest)
- [sendWriteCommand](exports_interaction.InteractionClientMessenger.md#sendwritecommand)
- [throwIfErrorStatusMessage](exports_interaction.InteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](exports_interaction.InteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionClientMessenger**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](exports_protocol.ExchangeProvider.md) |

#### Overrides

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[constructor](exports_interaction.IncomingInteractionClientMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:60

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[exchange](exports_interaction.IncomingInteractionClientMessenger.md#exchange)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:42

___

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:59

___

### request

• `Private` **request**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:247

___

### requestWithSuppressedResponse

• `Private` **requestWithSuppressedResponse**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:246

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[close](exports_interaction.IncomingInteractionClientMessenger.md#close)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:48

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[nextMessage](exports_interaction.IncomingInteractionClientMessenger.md#nextmessage)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:47

___

### readDataReport

▸ **readDataReport**(): `Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[readDataReport](exports_interaction.IncomingInteractionClientMessenger.md#readdatareport)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:56

___

### send

▸ **send**(`messageType`, `payload`, `expectAckOnly?`): `Promise`<`void`\>

Implements a send method with an automatic reconnection mechanism

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `expectAckOnly?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Overrides

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[send](exports_interaction.IncomingInteractionClientMessenger.md#send)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:62

___

### sendInvokeCommand

▸ **sendInvokeCommand**(`invokeRequest`): `Promise`<`undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeRequest` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<`undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `command`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandFields`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\>  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `commandPath`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `commandId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:200

___

### sendReadRequest

▸ **sendReadRequest**(`readRequest`): `Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readRequest` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:63

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/exports_interaction.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[sendStatus](exports_interaction.IncomingInteractionClientMessenger.md#sendstatus)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:45

___

### sendSubscribeRequest

▸ **sendSubscribeRequest**(`subscribeRequest`): `Promise`<{ `report`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\> ; `subscribeResponse`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscribeRequest` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>[]\> ; `isFabricFiltered`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\> |

#### Returns

`Promise`<{ `report`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\> ; `subscribeResponse`: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\>  }\>  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:128

___

### sendTimedRequest

▸ **sendTimedRequest**(`timeoutSeconds`): `Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:242

___

### sendWriteCommand

▸ **sendWriteCommand**(`writeRequest`): `Promise`<`undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `writeRequest` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>[]\>  }\> |

#### Returns

`Promise`<`undefined` \| [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>[]\>  }\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:225

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[throwIfErrorStatusMessage](exports_interaction.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:49

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[IncomingInteractionClientMessenger](exports_interaction.IncomingInteractionClientMessenger.md).[waitForSuccess](exports_interaction.IncomingInteractionClientMessenger.md#waitforsuccess)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:46
