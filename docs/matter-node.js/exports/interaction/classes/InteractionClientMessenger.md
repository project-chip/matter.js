[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / InteractionClientMessenger

# Class: InteractionClientMessenger

## Extends

- [`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md)

## Constructors

### new InteractionClientMessenger()

> **new InteractionClientMessenger**(`exchangeProvider`): [`InteractionClientMessenger`](InteractionClientMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](../../protocol/classes/ExchangeProvider.md) |

#### Returns

[`InteractionClientMessenger`](InteractionClientMessenger.md)

#### Overrides

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`constructor`](IncomingInteractionClientMessenger.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:69

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`exchange`](IncomingInteractionClientMessenger.md#exchange)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

***

### exchangeProvider

> `private` `readonly` **exchangeProvider**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:68

***

### request

> `private` **request**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:256

***

### requestWithSuppressedResponse

> `private` **requestWithSuppressedResponse**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:255

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`close`](IncomingInteractionClientMessenger.md#close)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`getExchangeChannelName`](IncomingInteractionClientMessenger.md#getexchangechannelname)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`nextMessage`](IncomingInteractionClientMessenger.md#nextmessage)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

***

### readDataReport()

> **readDataReport**(): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`readDataReport`](IncomingInteractionClientMessenger.md#readdatareport)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:65

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

Implements a send method with an automatic reconnection mechanism

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../protocol/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`send`](IncomingInteractionClientMessenger.md#send)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:71

***

### sendInvokeCommand()

> **sendInvokeCommand**(`invokeRequest`, `minimumResponseTimeoutMs`?): `Promise`\<`undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `invokeRequest` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `minimumResponseTimeoutMs`? | `number` |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:209

***

### sendReadRequest()

> **sendReadRequest**(`readRequest`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `readRequest` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:72

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

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

***

### sendSubscribeRequest()

> **sendSubscribeRequest**(`subscribeRequest`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscribeRequest` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`object`\>

##### report

> **report**: [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### attributeReports

> **attributeReports**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[]\>

###### eventReports

> **eventReports**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[]\>

###### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

###### moreChunkedMessages

> **moreChunkedMessages**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<`boolean`\>

###### subscriptionId

> **subscriptionId**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<`number`\>

###### suppressResponse

> **suppressResponse**: [`OptionalFieldType`](../../tlv/interfaces/OptionalFieldType.md)\<`boolean`\>

##### subscribeResponse

> **subscribeResponse**: [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>

###### Type declaration

###### interactionModelRevision

> **interactionModelRevision**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

###### maxInterval

> **maxInterval**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

###### subscriptionId

> **subscriptionId**: [`FieldType`](../../tlv/interfaces/FieldType.md)\<`number`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:137

***

### sendTimedRequest()

> **sendTimedRequest**(`timeoutSeconds`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:251

***

### sendWriteCommand()

> **sendWriteCommand**(`writeRequest`): `Promise`\<`undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `writeRequest` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:234

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`void`

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`throwIfErrorStatusMessage`](IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IncomingInteractionClientMessenger`](IncomingInteractionClientMessenger.md).[`waitForSuccess`](IncomingInteractionClientMessenger.md#waitforsuccess)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
