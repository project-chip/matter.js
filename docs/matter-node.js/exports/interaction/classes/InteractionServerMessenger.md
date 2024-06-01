[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

## Extends

- [`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

## Constructors

### new InteractionServerMessenger()

> **new InteractionServerMessenger**(`exchange`): [`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |

#### Returns

[`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`constructor`](../-internal-/classes/InteractionMessenger.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`exchange`](../-internal-/classes/InteractionMessenger.md#exchange)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`close`](../-internal-/classes/InteractionMessenger.md#close)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`getExchangeChannelName`](../-internal-/classes/InteractionMessenger.md#getexchangechannelname)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

***

### handleRequest()

> **handleRequest**(`recipient`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `recipient` | [`InteractionRecipient`](../interfaces/InteractionRecipient.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:56

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

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`nextMessage`](../-internal-/classes/InteractionMessenger.md#nextmessage)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../protocol/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`send`](../-internal-/classes/InteractionMessenger.md#send)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

***

### sendDataReport()

> **sendDataReport**(`dataReportPayload`): `Promise`\<`void`\>

Handle DataReportPayload with the content of a DataReport to send, split them into multiple DataReport
messages and send them out based on the size.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dataReportPayload` | [`DataReportPayload`](../README.md#datareportpayload) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:61

***

### sendDataReportMessage()

> **sendDataReportMessage**(`dataReport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:62

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

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`sendStatus`](../-internal-/classes/InteractionMessenger.md#sendstatus)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

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

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`throwIfErrorStatusMessage`](../-internal-/classes/InteractionMessenger.md#throwiferrorstatusmessage)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](../-internal-/classes/InteractionMessenger.md).[`waitForSuccess`](../-internal-/classes/InteractionMessenger.md#waitforsuccess)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
