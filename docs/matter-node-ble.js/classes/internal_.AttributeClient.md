[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AttributeClient

# Class: AttributeClient<T\>

[<internal>](../modules/internal_.md).AttributeClient

General class for AttributeClients

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](internal_.AttributeClient.md#constructor)

### Properties

- [attribute](internal_.AttributeClient.md#attribute)
- [clusterId](internal_.AttributeClient.md#clusterid)
- [endpointId](internal_.AttributeClient.md#endpointid)
- [id](internal_.AttributeClient.md#id)
- [interactionClient](internal_.AttributeClient.md#interactionclient)
- [isFabricScoped](internal_.AttributeClient.md#isfabricscoped)
- [isWritable](internal_.AttributeClient.md#iswritable)
- [listeners](internal_.AttributeClient.md#listeners)
- [name](internal_.AttributeClient.md#name)
- [schema](internal_.AttributeClient.md#schema)

### Methods

- [addListener](internal_.AttributeClient.md#addlistener)
- [get](internal_.AttributeClient.md#get)
- [getWithVersion](internal_.AttributeClient.md#getwithversion)
- [removeListener](internal_.AttributeClient.md#removelistener)
- [set](internal_.AttributeClient.md#set)
- [subscribe](internal_.AttributeClient.md#subscribe)
- [update](internal_.AttributeClient.md#update)

## Constructors

### constructor

• **new AttributeClient**<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../modules/internal_.md#attribute)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `interactionClient` | [`InteractionClient`](internal_.InteractionClient.md) |

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/internal_.md#attribute)<`T`, `any`\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:20

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:22

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/internal_.md#attributeid)

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:29

___

### interactionClient

• `Private` `Readonly` **interactionClient**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:24

___

### isFabricScoped

• `Private` `Readonly` **isFabricScoped**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:26

___

### isWritable

• `Private` `Readonly` **isWritable**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:25

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:28

___

### name

• `Readonly` **name**: `string`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:21

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](internal_.TlvSchema.md)<`any`\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:27

## Methods

### addListener

▸ **addListener**(`listener`): `void`

Add a listener to the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:53

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| `T`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:37

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:41

___

### removeListener

▸ **removeListener**(`listener`): `void`

Remove a listener from the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `T`) => `void` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:55

___

### set

▸ **set**(`value`, `dataVersion?`): `Promise`<`void`\>

Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
cluster dataVersion of the server matches. If it does not match it is rejected with an Error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `dataVersion?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:35

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion?`, `isFabricFiltered?`): `Promise`<`void`\>

Subscribe to the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `knownDataVersion?` | `number` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:46

___

### update

▸ `Private` **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:51
