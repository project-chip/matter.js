[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / PresentAttributeClient

# Class: PresentAttributeClient<T\>

[exports/cluster](../modules/exports_cluster.md).PresentAttributeClient

Special AttributeClient class to allow identifying attributes that are present because reported by the Devices.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeClient`](exports_cluster.AttributeClient.md)<`T`\>

  ↳ **`PresentAttributeClient`**

  ↳↳ [`UnknownPresentAttributeClient`](exports_cluster.UnknownPresentAttributeClient.md)

## Table of contents

### Constructors

- [constructor](exports_cluster.PresentAttributeClient.md#constructor)

### Properties

- [attribute](exports_cluster.PresentAttributeClient.md#attribute)
- [clusterId](exports_cluster.PresentAttributeClient.md#clusterid)
- [endpointId](exports_cluster.PresentAttributeClient.md#endpointid)
- [id](exports_cluster.PresentAttributeClient.md#id)
- [name](exports_cluster.PresentAttributeClient.md#name)
- [schema](exports_cluster.PresentAttributeClient.md#schema)

### Methods

- [addListener](exports_cluster.PresentAttributeClient.md#addlistener)
- [get](exports_cluster.PresentAttributeClient.md#get)
- [getWithVersion](exports_cluster.PresentAttributeClient.md#getwithversion)
- [removeListener](exports_cluster.PresentAttributeClient.md#removelistener)
- [set](exports_cluster.PresentAttributeClient.md#set)
- [subscribe](exports_cluster.PresentAttributeClient.md#subscribe)
- [update](exports_cluster.PresentAttributeClient.md#update)

## Constructors

### constructor

• **new PresentAttributeClient**<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[constructor](exports_cluster.AttributeClient.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `any`\>

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[attribute](exports_cluster.AttributeClient.md#attribute)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:20

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[clusterId](exports_cluster.AttributeClient.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[endpointId](exports_cluster.AttributeClient.md#endpointid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:22

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[id](exports_cluster.AttributeClient.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:29

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[name](exports_cluster.AttributeClient.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:21

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`any`\>

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[schema](exports_cluster.AttributeClient.md#schema)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[addListener](exports_cluster.AttributeClient.md#addlistener)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[get](exports_cluster.AttributeClient.md#get)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[getWithVersion](exports_cluster.AttributeClient.md#getwithversion)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[removeListener](exports_cluster.AttributeClient.md#removelistener)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[set](exports_cluster.AttributeClient.md#set)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[subscribe](exports_cluster.AttributeClient.md#subscribe)

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

#### Inherited from

[AttributeClient](exports_cluster.AttributeClient.md).[update](exports_cluster.AttributeClient.md#update)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:51
