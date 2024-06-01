[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / InteractionClientMessenger

# Class: InteractionClientMessenger

## Extends

- [`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md)

## Constructors

### new InteractionClientMessenger()

> **new InteractionClientMessenger**(`exchangeProvider`): [`InteractionClientMessenger`](InteractionClientMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](../../../export/classes/ExchangeProvider.md) |

#### Returns

[`InteractionClientMessenger`](InteractionClientMessenger.md)

#### Overrides

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`constructor`](IncomingInteractionClientMessenger.md#constructors)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L390)

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterController`](../../../../export/-internal-/classes/MatterController.md)\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`exchange`](IncomingInteractionClientMessenger.md#exchange)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

***

### exchangeProvider

> `private` `readonly` **exchangeProvider**: [`ExchangeProvider`](../../../export/classes/ExchangeProvider.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:390](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L390)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`close`](IncomingInteractionClientMessenger.md#close)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`getExchangeChannelName`](IncomingInteractionClientMessenger.md#getexchangechannelname)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../../codec/export/interfaces/Message.md)\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`nextMessage`](IncomingInteractionClientMessenger.md#nextmessage)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

***

### readDataReport()

> **readDataReport**(): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`readDataReport`](IncomingInteractionClientMessenger.md#readdatareport)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:355](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L355)

***

### request()

> `private` **request**\<`RequestT`, `ResponseT`\>(`requestMessageType`, `requestSchema`, `responseMessageType`, `responseSchema`, `request`, `minimumResponseTimeoutMs`?): `Promise`\<`ResponseT`\>

#### Type parameters

| Type parameter |
| :------ |
| `RequestT` |
| `ResponseT` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `requestMessageType` | `number` |
| `requestSchema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\> |
| `responseMessageType` | `number` |
| `responseSchema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`ResponseT`\> |
| `request` | `RequestT` |
| `minimumResponseTimeoutMs`? | `number` |

#### Returns

`Promise`\<`ResponseT`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:505](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L505)

***

### requestWithSuppressedResponse()

> `private` **requestWithSuppressedResponse**\<`RequestT`\>(`requestMessageType`, `requestSchema`, `request`, `minimumResponseTimeoutMs`?): `Promise`\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `RequestT` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `requestMessageType` | `number` |
| `requestSchema` | [`TlvSchema`](../../../../tlv/export/classes/TlvSchema.md)\<`RequestT`\> |
| `request` | `RequestT` |
| `minimumResponseTimeoutMs`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:493](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L493)

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

Implements a send method with an automatic reconnection mechanism

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../../export/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`send`](IncomingInteractionClientMessenger.md#send)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:395](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L395)

***

### sendInvokeCommand()

> **sendInvokeCommand**(`invokeRequest`, `minimumResponseTimeoutMs`?): `Promise`\<`undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `invokeRequest` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `minimumResponseTimeoutMs`? | `number` |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:452](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L452)

***

### sendReadRequest()

> **sendReadRequest**(`readRequest`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `readRequest` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:415](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L415)

***

### sendStatus()

> **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enumerations/StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`sendStatus`](IncomingInteractionClientMessenger.md#sendstatus)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

***

### sendSubscribeRequest()

> **sendSubscribeRequest**(`subscribeRequest`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscribeRequest` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### report

> **report**: [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### attributeReports

> **attributeReports**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

###### eventReports

> **eventReports**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]\>

###### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

###### moreChunkedMessages

> **moreChunkedMessages**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

###### subscriptionId

> **subscriptionId**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

###### suppressResponse

> **suppressResponse**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`boolean`\>

##### subscribeResponse

> **subscribeResponse**: [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

###### maxInterval

> **maxInterval**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

###### subscriptionId

> **subscriptionId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:425](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L425)

***

### sendTimedRequest()

> **sendTimedRequest**(`timeoutSeconds`): `Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:486](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L486)

***

### sendWriteCommand()

> **sendWriteCommand**(`writeRequest`): `Promise`\<`undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writeRequest` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:472](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L472)

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`void`

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`throwIfErrorStatusMessage`](IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`waitForSuccess`](IncomingInteractionClientMessenger.md#waitforsuccess)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
