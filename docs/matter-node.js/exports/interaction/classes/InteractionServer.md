[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / InteractionServer

# Class: InteractionServer

Translates interactions from the Matter protocol to Matter.js APIs.

## Implements

- [`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\>
- [`InteractionRecipient`](../interfaces/InteractionRecipient.md)

## Constructors

### new InteractionServer()

> **new InteractionServer**(`__namedParameters`): [`InteractionServer`](InteractionServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Configuration`](../namespaces/InteractionServer/interfaces/Configuration.md) |

#### Returns

[`InteractionServer`](InteractionServer.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:70

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:69

## Accessors

### isClosing

> `get` `protected` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:72

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`close`](../../protocol/interfaces/ProtocolHandler.md#close)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:91

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`getId`](../../protocol/interfaces/ProtocolHandler.md#getid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:71

***

### handleInvokeRequest()

> **handleInvokeRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleInvokeRequest`](../interfaces/InteractionRecipient.md#handleinvokerequest)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:83

***

### handleReadRequest()

> **handleReadRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`DataReportPayload`](../README.md#datareportpayload)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`DataReportPayload`](../README.md#datareportpayload)\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleReadRequest`](../interfaces/InteractionRecipient.md#handlereadrequest)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:74

***

### handleSubscribeRequest()

> **handleSubscribeRequest**(`exchange`, `__namedParameters`, `messenger`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `messenger` | [`InteractionServerMessenger`](InteractionServerMessenger.md) |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleSubscribeRequest`](../interfaces/InteractionRecipient.md#handlesubscriberequest)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:82

***

### handleTimedRequest()

> **handleTimedRequest**(`exchange`, `__namedParameters`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |

#### Returns

`void`

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleTimedRequest`](../interfaces/InteractionRecipient.md#handletimedrequest)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:90

***

### handleWriteRequest()

> **handleWriteRequest**(`exchange`, `__namedParameters`, `message`): `Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `__namedParameters` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<[`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>\>

#### Implementation of

[`InteractionRecipient`](../interfaces/InteractionRecipient.md).[`handleWriteRequest`](../interfaces/InteractionRecipient.md#handlewriterequest)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:80

***

### invokeCommand()

> `protected` **invokeCommand**(`_path`, `command`, `exchange`, `commandFields`, `message`, `endpoint`, `_receivedWithinTimedInteraction`?): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`CommandPath`](../interfaces/CommandPath.md) |
| `command` | [`CommandServer`](../../cluster/classes/CommandServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `commandFields` | `any` |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |
| `_receivedWithinTimedInteraction`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### clusterCode?

> `optional` **clusterCode**: `number`

##### code

> **code**: [`StatusCode`](../enumerations/StatusCode.md)

##### response

> **response**: [`TlvStream`](../../tlv/README.md#tlvstream)

##### responseId

> **responseId**: [`CommandId`](../../datatype/README.md#commandid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:84

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`onNewExchange`](../../protocol/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:73

***

### readAttribute()

> `protected` **readAttribute**(`_path`, `attribute`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`): `Promise`\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/AttributePath.md) |
| `attribute` | [`AnyAttributeServer`](../../cluster/README.md#anyattributeservert)\<`any`\> |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `_endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<`object`\>

##### value

> **value**: `any`

##### version

> **version**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:75

***

### readEvent()

> `protected` **readEvent**(`_path`, `eventFilters`, `event`, `exchange`, `isFabricFiltered`, `message`, `_endpoint`): `Promise`\<[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`EventPath`](../interfaces/EventPath.md) |
| `eventFilters` | `undefined` \| [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `event` | [`EventServer`](../../cluster/classes/EventServer.md)\<`any`, `any`\> |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `isFabricFiltered` | `boolean` |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `_endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`Promise`\<[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:79

***

### writeAttribute()

> `protected` **writeAttribute**(`_path`, `attribute`, `value`, `exchange`, `message`, `_endpoint`, `_receivedWithinTimedInteraction`?, `isListWrite`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_path` | [`AttributePath`](../interfaces/AttributePath.md) |
| `attribute` | [`AttributeServer`](../../cluster/classes/AttributeServer.md)\<`any`\> |
| `value` | `any` |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](../../cluster/-internal-/classes/MatterDevice.md)\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `_endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |
| `_receivedWithinTimedInteraction`? | `boolean` |
| `isListWrite`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:81
