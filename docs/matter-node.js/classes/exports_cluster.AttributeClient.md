[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / AttributeClient

# Class: AttributeClient<T\>

[exports/cluster](../modules/exports_cluster.md).AttributeClient

General class for AttributeClients

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`AttributeClient`**

  ↳ [`PresentAttributeClient`](exports_cluster.PresentAttributeClient.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.AttributeClient.md#constructor)

### Properties

- [attribute](exports_cluster.AttributeClient.md#attribute)
- [clusterId](exports_cluster.AttributeClient.md#clusterid)
- [endpointId](exports_cluster.AttributeClient.md#endpointid)
- [id](exports_cluster.AttributeClient.md#id)
- [interactionClient](exports_cluster.AttributeClient.md#interactionclient)
- [isFabricScoped](exports_cluster.AttributeClient.md#isfabricscoped)
- [isWritable](exports_cluster.AttributeClient.md#iswritable)
- [listeners](exports_cluster.AttributeClient.md#listeners)
- [name](exports_cluster.AttributeClient.md#name)
- [schema](exports_cluster.AttributeClient.md#schema)

### Methods

- [addListener](exports_cluster.AttributeClient.md#addlistener)
- [get](exports_cluster.AttributeClient.md#get)
- [getWithVersion](exports_cluster.AttributeClient.md#getwithversion)
- [removeListener](exports_cluster.AttributeClient.md#removelistener)
- [set](exports_cluster.AttributeClient.md#set)
- [subscribe](exports_cluster.AttributeClient.md#subscribe)
- [update](exports_cluster.AttributeClient.md#update)

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
| `attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `any`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:20

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:22

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:29

___

### interactionClient

• `Private` `Readonly` **interactionClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:24

___

### isFabricScoped

• `Private` `Readonly` **isFabricScoped**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:26

___

### isWritable

• `Private` `Readonly` **isWritable**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:25

___

### listeners

• `Private` `Readonly` **listeners**: `any`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:28

___

### name

• `Readonly` **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:21

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`any`\>

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:27

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:53

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:37

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:41

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:55

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:35

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:46

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

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:51
