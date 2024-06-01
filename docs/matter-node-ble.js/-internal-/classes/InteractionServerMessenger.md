[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / InteractionServerMessenger

# Class: InteractionServerMessenger

## Extends

- [`InteractionMessenger`](InteractionMessenger.md)\<[`MatterDevice`](MatterDevice.md)\>

## Constructors

### new InteractionServerMessenger()

> **new InteractionServerMessenger**(`exchange`): [`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\> |

#### Returns

[`InteractionServerMessenger`](InteractionServerMessenger.md)

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`constructor`](InteractionMessenger.md#constructors)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`exchange`](InteractionMessenger.md#exchange)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`close`](InteractionMessenger.md#close)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`getExchangeChannelName`](InteractionMessenger.md#getexchangechannelname)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

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

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:56

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/Message.md)\>

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`nextMessage`](InteractionMessenger.md#nextmessage)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`send`](InteractionMessenger.md#send)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

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

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:61

***

### sendDataReportMessage()

> **sendDataReportMessage**(`dataReport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `dataReport` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:62

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

[`InteractionMessenger`](InteractionMessenger.md).[`sendStatus`](InteractionMessenger.md#sendstatus)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/Message.md) |

#### Returns

`void`

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`throwIfErrorStatusMessage`](InteractionMessenger.md#throwiferrorstatusmessage)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`InteractionMessenger`](InteractionMessenger.md).[`waitForSuccess`](InteractionMessenger.md#waitforsuccess)

#### Source

matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
