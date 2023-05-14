[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction](../modules/protocol_interaction.md) / InteractionClient

# Class: InteractionClient

[protocol/interaction](../modules/protocol_interaction.md).InteractionClient

## Table of contents

### Constructors

- [constructor](protocol_interaction.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](protocol_interaction.InteractionClient.md#exchangeprovider)
- [subscribedLocalValues](protocol_interaction.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](protocol_interaction.InteractionClient.md#subscriptionlisteners)

### Methods

- [get](protocol_interaction.InteractionClient.md#get)
- [getAllAttributes](protocol_interaction.InteractionClient.md#getallattributes)
- [getMultipleAttributes](protocol_interaction.InteractionClient.md#getmultipleattributes)
- [getWithVersion](protocol_interaction.InteractionClient.md#getwithversion)
- [invoke](protocol_interaction.InteractionClient.md#invoke)
- [processReadRequest](protocol_interaction.InteractionClient.md#processreadrequest)
- [set](protocol_interaction.InteractionClient.md#set)
- [setMultipleAttributes](protocol_interaction.InteractionClient.md#setmultipleattributes)
- [subscribe](protocol_interaction.InteractionClient.md#subscribe)
- [subscribeAllAttributes](protocol_interaction.InteractionClient.md#subscribeallattributes)
- [subscribeMultipleAttributes](protocol_interaction.InteractionClient.md#subscribemultipleattributes)
- [withMessenger](protocol_interaction.InteractionClient.md#withmessenger)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](protocol.ExchangeProvider.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:159](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L159)

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: [`ExchangeProvider`](protocol.ExchangeProvider.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:160](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L160)

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `Map`<`string`, { `value`: `any` ; `version?`: `number`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:157](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L157)

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `Map`<`number`, (`dataReport`: [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeData`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>\> ; `attributeStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `eventReports`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventData`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TlvStream`](../modules/tlv.md#tlvstream)\> ; `deltaEpochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `deltaSystemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `epochTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\> ; `eventNumber`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `priority`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `systemTimestamp`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `eventStatus`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\> ; `status`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `clusterStatus`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\> ; `status`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`StatusCode`](../enums/protocol_interaction.StatusCode.md)\>  }\>\>  }\>\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `moreChunkedMessages`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `subscriptionId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `suppressResponse`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\>  }\>) => `void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:156](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L156)

## Methods

### get

▸ **get**<`A`\>(`endpointId`, `clusterId`, `attribute`, `alwaysRequestFromRemote?`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/cluster.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpointId` | `number` | `undefined` |
| `clusterId` | `number` | `undefined` |
| `attribute` | `A` | `undefined` |
| `alwaysRequestFromRemote` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/cluster.md#attributejstype)<`A`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:180](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L180)

___

### getAllAttributes

▸ **getAllAttributes**(): `Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:166](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L166)

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`attributeRequests`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeRequests` | { `attributeId?`: `number` ; `clusterId?`: `number` ; `endpointId?`: `number`  }[] |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:170](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L170)

___

### getWithVersion

▸ **getWithVersion**<`A`\>(`endpointId`, `clusterId`, `attribute`, `alwaysRequestFromRemote?`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpointId` | `number` | `undefined` |
| `clusterId` | `number` | `undefined` |
| `attribute` | `A` | `undefined` |
| `alwaysRequestFromRemote` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:185](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L185)

___

### invoke

▸ **invoke**<`C`\>(`endpointId`, `clusterId`, `request`, `id`, `requestSchema`, `_responseId`, `responseSchema`, `optional`): `Promise`<[`ResponseType`](../modules/cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/cluster.md#command)<`any`, `any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `request` | [`RequestType`](../modules/cluster.md#requesttype)<`C`\> |
| `id` | `number` |
| `requestSchema` | [`TlvSchema`](tlv.TlvSchema.md)<[`RequestType`](../modules/cluster.md#requesttype)<`C`\>\> |
| `_responseId` | `number` |
| `responseSchema` | [`TlvSchema`](tlv.TlvSchema.md)<[`ResponseType`](../modules/cluster.md#responsetype)<`C`\>\> |
| `optional` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/cluster.md#responsetype)<`C`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:337](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L337)

___

### processReadRequest

▸ `Private` **processReadRequest**(`messenger`, `request`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`InteractionClientMessenger`](protocol_interaction.InteractionClientMessenger.md) |
| `request` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `clusterId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `enableTagCompression`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `listIndex`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `dataVersionFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `dataVersion`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `path`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `endpoint`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>\>  }\>[]\> ; `eventFilters`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number` \| `bigint`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `eventRequests`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `cluster`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `endpoint`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `event`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`number`\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<`boolean`\> ; `node`: [`OptionalFieldType`](../interfaces/tlv.OptionalFieldType.md)<[`NodeId`](datatype.NodeId.md)\>  }\>[]\> ; `interactionModelRevision`: [`FieldType`](../interfaces/tlv.FieldType.md)<`number`\> ; `isFabricFiltered`: [`FieldType`](../interfaces/tlv.FieldType.md)<`boolean`\>  }\> |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:205](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L205)

___

### set

▸ **set**<`T`\>(`endpointId`, `clusterId`, `attribute`, `value`, `dataVersion?`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `attribute` | [`Attribute`](../modules/cluster.md#attribute)<`T`\> |
| `value` | `T` |
| `dataVersion?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:224](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L224)

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`attributes`): `Promise`<[`AttributeStatus`](../interfaces/protocol_interaction.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | { `attribute`: [`Attribute`](../modules/cluster.md#attribute)<`any`\> ; `clusterId`: `number` ; `dataVersion?`: `number` ; `endpointId`: `number` ; `value`: `any`  }[] |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/protocol_interaction.AttributeStatus.md)[]\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:236](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L236)

___

### subscribe

▸ **subscribe**<`A`\>(`endpointId`, `clusterId`, `attribute`, `minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `attribute` | `A` |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`value`: [`AttributeJsType`](../modules/cluster.md#attributejstype)<`A`\>, `version`: `number`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:259](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L259)

___

### subscribeAllAttributes

▸ **subscribeAllAttributes**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:303](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L303)

___

### subscribeMultipleAttributes

▸ **subscribeMultipleAttributes**(`attributeRequests`, `minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeRequests` | { `attributeId?`: `number` ; `clusterId?`: `number` ; `endpointId?`: `number`  }[] |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/protocol_interaction.DecodedAttributeReportValue.md)) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:307](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L307)

___

### withMessenger

▸ `Private` **withMessenger**<`T`\>(`invoke`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `invoke` | (`messenger`: [`InteractionClientMessenger`](protocol_interaction.InteractionClientMessenger.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:371](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L371)
