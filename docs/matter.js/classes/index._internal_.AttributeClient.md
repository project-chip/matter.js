[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / AttributeClient

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
| `attribute` | [`Attribute`](../modules/cluster.md#attribute)<`T`\> |
| `name` | `string` |
| `endpointId` | `number` |
| `clusterId` | `number` |
| `getInteractionClientCallback` | () => `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\> |

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L15)

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/cluster.md#attribute)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L16)

___

### clusterId

• `Readonly` **clusterId**: `number`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L19)

___

### endpointId

• `Readonly` **endpointId**: `number`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L18)

___

### getInteractionClientCallback

• `Private` **getInteractionClientCallback**: () => `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

#### Type declaration

▸ (): `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

##### Returns

`Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L20)

___

### listeners

• `Private` `Readonly` **listeners**: (`newValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L13)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L17)

___

### validator

• `Private` `Readonly` **validator**: (`value`: `T`, `name`: `string`) => `void`

#### Type declaration

▸ (`value`, `name`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L12)

___

### writable

• `Private` `Readonly` **writable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L11)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L76)

___

### get

▸ **get**(`alwaysRequestFromRemote?`): `Promise`<`undefined` \| `T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L41)

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`): `Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L80)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L29)

___

### setInteractionClientRequestorCallback

▸ **setInteractionClientRequestorCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L72)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L56)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/client/AttributeClient.ts#L64)
