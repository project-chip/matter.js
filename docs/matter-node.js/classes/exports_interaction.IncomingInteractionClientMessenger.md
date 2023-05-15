[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / IncomingInteractionClientMessenger

# Class: IncomingInteractionClientMessenger

[exports/interaction](../modules/exports_interaction.md).IncomingInteractionClientMessenger

## Hierarchy

- [`InteractionMessenger`](index._internal_.InteractionMessenger.md)<[`MatterController`](index.MatterController.md)\>

  ↳ **`IncomingInteractionClientMessenger`**

  ↳↳ [`InteractionClientMessenger`](exports_interaction.InteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](exports_interaction.IncomingInteractionClientMessenger.md#constructor)

### Properties

- [exchange](exports_interaction.IncomingInteractionClientMessenger.md#exchange)

### Methods

- [close](exports_interaction.IncomingInteractionClientMessenger.md#close)
- [nextMessage](exports_interaction.IncomingInteractionClientMessenger.md#nextmessage)
- [readDataReport](exports_interaction.IncomingInteractionClientMessenger.md#readdatareport)
- [send](exports_interaction.IncomingInteractionClientMessenger.md#send)
- [sendStatus](exports_interaction.IncomingInteractionClientMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](exports_interaction.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](exports_interaction.IncomingInteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new IncomingInteractionClientMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[constructor](index._internal_.InteractionMessenger.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:43

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[exchange](index._internal_.InteractionMessenger.md#exchange)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:42

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[close](index._internal_.InteractionMessenger.md#close)

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

[InteractionMessenger](index._internal_.InteractionMessenger.md).[nextMessage](index._internal_.InteractionMessenger.md#nextmessage)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:47

___

### readDataReport

▸ **readDataReport**(): `Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`TlvStream`](../modules/exports_tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](exports_datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`StatusCode`](../enums/exports_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:56

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

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:44

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

[InteractionMessenger](index._internal_.InteractionMessenger.md).[sendStatus](index._internal_.InteractionMessenger.md#sendstatus)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:45

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

[InteractionMessenger](index._internal_.InteractionMessenger.md).[throwIfErrorStatusMessage](index._internal_.InteractionMessenger.md#throwiferrorstatusmessage)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:49

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[waitForSuccess](index._internal_.InteractionMessenger.md#waitforsuccess)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:46
