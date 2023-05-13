[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / IncomingInteractionClientMessenger

# Class: IncomingInteractionClientMessenger

[protocol/interaction](../modules/protocol_interaction.md).IncomingInteractionClientMessenger

## Hierarchy

- [`InteractionMessenger`](index._internal_.InteractionMessenger.md)<[`MatterController`](index.MatterController.md)\>

  ↳ **`IncomingInteractionClientMessenger`**

  ↳↳ [`InteractionClientMessenger`](protocol_interaction.InteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](protocol_interaction.IncomingInteractionClientMessenger.md#constructor)

### Properties

- [exchange](protocol_interaction.IncomingInteractionClientMessenger.md#exchange)

### Methods

- [close](protocol_interaction.IncomingInteractionClientMessenger.md#close)
- [nextMessage](protocol_interaction.IncomingInteractionClientMessenger.md#nextmessage)
- [readDataReport](protocol_interaction.IncomingInteractionClientMessenger.md#readdatareport)
- [send](protocol_interaction.IncomingInteractionClientMessenger.md#send)
- [sendStatus](protocol_interaction.IncomingInteractionClientMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](protocol_interaction.IncomingInteractionClientMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](protocol_interaction.IncomingInteractionClientMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new IncomingInteractionClientMessenger**(`exchange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\> |

#### Inherited from

[InteractionMessenger](index._internal_.InteractionMessenger.md).[constructor](index._internal_.InteractionMessenger.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L62)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<[`MatterController`](index.MatterController.md)\>

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

### readDataReport

▸ **readDataReport**(): `Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Returns

`Promise`<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:213](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L213)

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
