[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionClient

# Class: InteractionClient

[exports/interaction](../modules/exports_interaction.md).InteractionClient

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](exports_interaction.InteractionClient.md#exchangeprovider)
- [processReadRequest](exports_interaction.InteractionClient.md#processreadrequest)
- [subscribedLocalValues](exports_interaction.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](exports_interaction.InteractionClient.md#subscriptionlisteners)
- [withMessenger](exports_interaction.InteractionClient.md#withmessenger)

### Methods

- [get](exports_interaction.InteractionClient.md#get)
- [getAllAttributes](exports_interaction.InteractionClient.md#getallattributes)
- [getMultipleAttributes](exports_interaction.InteractionClient.md#getmultipleattributes)
- [getWithVersion](exports_interaction.InteractionClient.md#getwithversion)
- [invoke](exports_interaction.InteractionClient.md#invoke)
- [set](exports_interaction.InteractionClient.md#set)
- [setMultipleAttributes](exports_interaction.InteractionClient.md#setmultipleattributes)
- [subscribe](exports_interaction.InteractionClient.md#subscribe)
- [subscribeAllAttributes](exports_interaction.InteractionClient.md#subscribeallattributes)
- [subscribeMultipleAttributes](exports_interaction.InteractionClient.md#subscribemultipleattributes)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](exports_protocol.ExchangeProvider.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:37

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:34

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:49

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:36

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:35

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:66

## Methods

### get

▸ **get**<`A`\>(`endpointId`, `clusterId`, `attribute`, `alwaysRequestFromRemote?`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `attribute` | `A` |
| `alwaysRequestFromRemote?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:44

___

### getAllAttributes

▸ **getAllAttributes**(): `Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]\>

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:38

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`attributeRequests`): `Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeRequests` | { `attributeId?`: `number` ; `clusterId?`: `number` ; `endpointId?`: `number`  }[] |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:39

___

### getWithVersion

▸ **getWithVersion**<`A`\>(`endpointId`, `clusterId`, `attribute`, `alwaysRequestFromRemote?`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `attribute` | `A` |
| `alwaysRequestFromRemote?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:45

___

### invoke

▸ **invoke**<`C`\>(`endpointId`, `clusterId`, `request`, `id`, `requestSchema`, `_responseId`, `responseSchema`, `optional`): `Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/exports_cluster.md#command)<`any`, `any`, `C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `request` | [`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\> |
| `id` | `number` |
| `requestSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<[`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\>\> |
| `_responseId` | `number` |
| `responseSchema` | [`TlvSchema`](exports_tlv.TlvSchema.md)<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\> |
| `optional` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:65

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
| `attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`T`\> |
| `value` | `T` |
| `dataVersion?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:50

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`attributes`): `Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | { `attribute`: [`Attribute`](../modules/exports_cluster.md#attribute)<`any`\> ; `clusterId`: `number` ; `dataVersion?`: `number` ; `endpointId`: `number` ; `value`: `any`  }[] |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:51

___

### subscribe

▸ **subscribe**<`A`\>(`endpointId`, `clusterId`, `attribute`, `minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `A`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `attribute` | `A` |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>, `version`: `number`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:58

___

### subscribeAllAttributes

▸ **subscribeAllAttributes**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:59

___

### subscribeMultipleAttributes

▸ **subscribeMultipleAttributes**(`attributeRequests`, `minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `listener?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeRequests` | { `attributeId?`: `number` ; `clusterId?`: `number` ; `endpointId?`: `number`  }[] |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `listener?` | (`data`: [`DecodedAttributeReportValue`](../interfaces/exports_interaction.DecodedAttributeReportValue.md)) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:60
