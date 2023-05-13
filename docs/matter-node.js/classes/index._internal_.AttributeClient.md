[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / AttributeClient

# Class: AttributeClient<T\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).AttributeClient

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](index._internal_.AttributeClient.md#constructor)

### Properties

- [attribute](index._internal_.AttributeClient.md#attribute)
- [clusterId](index._internal_.AttributeClient.md#clusterid)
- [endpointId](index._internal_.AttributeClient.md#endpointid)
- [getInteractionClientCallback](index._internal_.AttributeClient.md#getinteractionclientcallback)
- [listeners](index._internal_.AttributeClient.md#listeners)
- [name](index._internal_.AttributeClient.md#name)
- [validator](index._internal_.AttributeClient.md#validator)
- [writable](index._internal_.AttributeClient.md#writable)

### Methods

- [addListener](index._internal_.AttributeClient.md#addlistener)
- [get](index._internal_.AttributeClient.md#get)
- [getWithVersion](index._internal_.AttributeClient.md#getwithversion)
- [removeListener](index._internal_.AttributeClient.md#removelistener)
- [set](index._internal_.AttributeClient.md#set)
- [setInteractionClientRequestorCallback](index._internal_.AttributeClient.md#setinteractionclientrequestorcallback)
- [subscribe](index._internal_.AttributeClient.md#subscribe)
- [update](index._internal_.AttributeClient.md#update)

## Constructors

### constructor

• **new AttributeClient**<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `getInteractionClientCallback`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`T`\> |
| `name` | `string` |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `getInteractionClientCallback` | () => `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:17

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/exports_cluster.md#attribute)<`T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:9

___

### clusterId

• `Readonly` **clusterId**: `number`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:12

___

### endpointId

• `Readonly` **endpointId**: `number`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:11

___

### getInteractionClientCallback

• `Private` **getInteractionClientCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:13

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:16

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:10

___

### validator

• `Private` `Readonly` **validator**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:15

___

### writable

• `Private` `Readonly` **writable**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:14

## Methods

### addListener

▸ **addListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:27

___

### get

▸ **get**(`alwaysRequestFromRemote?`): `Promise`<`undefined` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:19

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`): `Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:20

___

### removeListener

▸ **removeListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:28

___

### set

▸ **set**(`value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:18

___

### setInteractionClientRequestorCallback

▸ **setInteractionClientRequestorCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:26

___

### subscribe

▸ **subscribe**(`minIntervalS`, `maxIntervalS`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalS` | `number` |
| `maxIntervalS` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:24

___

### update

▸ **update**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:25
