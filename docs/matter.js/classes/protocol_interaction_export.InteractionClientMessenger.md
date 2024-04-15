[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / InteractionClientMessenger

# Class: InteractionClientMessenger

[protocol/interaction/export](../modules/protocol_interaction_export.md).InteractionClientMessenger

## Hierarchy

- [`IncomingInteractionClientMessenger`](protocol_interaction_export.IncomingInteractionClientMessenger.md)

  ↳ **`InteractionClientMessenger`**

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.InteractionClientMessenger.md#constructor)

### Properties

- [exchange](protocol_interaction_export.InteractionClientMessenger.md#exchange)
- [exchangeProvider](protocol_interaction_export.InteractionClientMessenger.md#exchangeprovider)

### Methods

- [close](protocol_interaction_export.InteractionClientMessenger.md#close)
- [getExchangeChannelName](protocol_interaction_export.InteractionClientMessenger.md#getexchangechannelname)
- [nextMessage](protocol_interaction_export.InteractionClientMessenger.md#nextmessage)
- [readDataReport](protocol_interaction_export.InteractionClientMessenger.md#readdatareport)
- [request](protocol_interaction_export.InteractionClientMessenger.md#request)
- [requestWithSuppressedResponse](protocol_interaction_export.InteractionClientMessenger.md#requestwithsuppressedresponse)
- [send](protocol_interaction_export.InteractionClientMessenger.md#send)
- [sendInvokeCommand](protocol_interaction_export.InteractionClientMessenger.md#sendinvokecommand)
- [sendReadRequest](protocol_interaction_export.InteractionClientMessenger.md#sendreadrequest)
- [sendStatus](protocol_interaction_export.InteractionClientMessenger.md#sendstatus)
- [sendSubscribeRequest](protocol_interaction_export.InteractionClientMessenger.md#sendsubscriberequest)
- [sendTimedRequest](protocol_interaction_export.InteractionClientMessenger.md#sendtimedrequest)
- [sendWriteCommand](protocol_interaction_export.InteractionClientMessenger.md#sendwritecommand)
- [throwIfErrorStatusMessage](protocol_interaction_export.InteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](protocol_interaction_export.InteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionClientMessenger**(`exchangeProvider`): [`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](protocol_export.ExchangeProvider.md) |

#### Returns

[`InteractionClientMessenger`](protocol_interaction_export.InteractionClientMessenger.md)

#### Overrides

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[constructor](protocol_interaction_export.IncomingInteractionClientMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L390)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[exchange](protocol_interaction_export.IncomingInteractionClientMessenger.md#exchange)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

___

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: [`ExchangeProvider`](protocol_export.ExchangeProvider.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:390](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L390)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[close](protocol_interaction_export.IncomingInteractionClientMessenger.md#close)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

___

### getExchangeChannelName

▸ **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[getExchangeChannelName](protocol_interaction_export.IncomingInteractionClientMessenger.md#getexchangechannelname)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[nextMessage](protocol_interaction_export.IncomingInteractionClientMessenger.md#nextmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

___

### readDataReport

▸ **readDataReport**(): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[readDataReport](protocol_interaction_export.IncomingInteractionClientMessenger.md#readdatareport)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L355)

___

### request

▸ **request**\<`RequestT`, `ResponseT`\>(`requestMessageType`, `requestSchema`, `responseMessageType`, `responseSchema`, `request`, `minimumResponseTimeoutMs?`): `Promise`\<`ResponseT`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestMessageType` | `number` |
| `requestSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`RequestT`\> |
| `responseMessageType` | `number` |
| `responseSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`ResponseT`\> |
| `request` | `RequestT` |
| `minimumResponseTimeoutMs?` | `number` |

#### Returns

`Promise`\<`ResponseT`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:505](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L505)

___

### requestWithSuppressedResponse

▸ **requestWithSuppressedResponse**\<`RequestT`\>(`requestMessageType`, `requestSchema`, `request`, `minimumResponseTimeoutMs?`): `Promise`\<`void`\>

#### Type parameters

| Name |
| :------ |
| `RequestT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestMessageType` | `number` |
| `requestSchema` | [`TlvSchema`](tlv_export.TlvSchema.md)\<`RequestT`\> |
| `request` | `RequestT` |
| `minimumResponseTimeoutMs?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:493](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L493)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

Implements a send method with an automatic reconnection mechanism

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[send](protocol_interaction_export.IncomingInteractionClientMessenger.md#send)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:395](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L395)

___

### sendInvokeCommand

▸ **sendInvokeCommand**(`invokeRequest`, `minimumResponseTimeoutMs?`): `Promise`\<`undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: ... ; `commandPath`: ...  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: ... ; `status`: ...  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeRequest` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `commandPath`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `commandId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommandId`](../modules/datatype_export.md#commandid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\> |
| `minimumResponseTimeoutMs?` | `number` |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `invokeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `command`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandFields`: ... ; `commandPath`: ...  }\>\> ; `status`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commandPath`: ... ; `status`: ...  }\>\>  }\>[]\> ; `suppressResponse`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:452](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L452)

___

### sendReadRequest

▸ **sendReadRequest**(`readRequest`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `readRequest` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\> |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\> ; `eventNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `priority`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<...\>  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<...\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:415](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L415)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction_export.StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[sendStatus](protocol_interaction_export.IncomingInteractionClientMessenger.md#sendstatus)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

___

### sendSubscribeRequest

▸ **sendSubscribeRequest**(`subscribeRequest`): `Promise`\<\{ `report`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `dataVersion`: ... ; `path`: ...  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `deltaEpochTimestamp`: ... ; `deltaSystemTimestamp`: ... ; `epochTimestamp`: ... ; `eventNumber`: ... ; `path`: ... ; `priority`: ... ; `systemTimestamp`: ...  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\> ; `subscribeResponse`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscribeRequest` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `dataVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `endpointId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `keepSubscriptions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `maxIntervalCeilingSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `minIntervalFloorSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> |

#### Returns

`Promise`\<\{ `report`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `dataVersion`: ... ; `path`: ...  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventData`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: ... ; `deltaEpochTimestamp`: ... ; `deltaSystemTimestamp`: ... ; `epochTimestamp`: ... ; `eventNumber`: ... ; `path`: ... ; `priority`: ... ; `systemTimestamp`: ...  }\>\> ; `eventStatus`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: ... ; `status`: ...  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\> ; `subscribeResponse`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxInterval`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:425](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L425)

___

### sendTimedRequest

▸ **sendTimedRequest**(`timeoutSeconds`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`StatusCode`](../enums/protocol_interaction_export.StatusCode.md)\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:486](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L486)

___

### sendWriteCommand

▸ **sendWriteCommand**(`writeRequest`): `Promise`\<`undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `clusterId`: ... ; `enableTagCompression`: ... ; `endpointId`: ... ; `listIndex`: ... ; `nodeId`: ...  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: ... ; `status`: ...  }\>\>  }\>[]\>  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `writeRequest` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `timedRequest`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `writeRequests`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TlvStream`](../modules/tlv_export.md#tlvstream)\> ; `dataVersion`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`number`\> ; `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`AttributeId`](../modules/datatype_export.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<...\>\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<... \| ...\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>\>  }\>[]\>  }\> |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `interactionModelRevision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `writeResponses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `path`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attributeId`: ... ; `clusterId`: ... ; `enableTagCompression`: ... ; `endpointId`: ... ; `listIndex`: ... ; `nodeId`: ...  }\>\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterStatus`: ... ; `status`: ...  }\>\>  }\>[]\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:472](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L472)

___

### throwIfErrorStatusMessage

▸ **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`void`

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[throwIfErrorStatusMessage](protocol_interaction_export.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[IncomingInteractionClientMessenger](protocol_interaction_export.IncomingInteractionClientMessenger.md).[waitForSuccess](protocol_interaction_export.IncomingInteractionClientMessenger.md#waitforsuccess)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
