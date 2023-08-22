[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownPresentAttributeClient

# Class: UnknownPresentAttributeClient

[exports/cluster](../modules/exports_cluster.md).UnknownPresentAttributeClient

Special AttributeClient class to allow identifying attributes that are present because reported by the Devices,
but the contained attribute is unknown.

## Hierarchy

- [`PresentAttributeClient`](exports_cluster.PresentAttributeClient.md)<`any`\>

  ↳ **`UnknownPresentAttributeClient`**

## Table of contents

### Constructors

- [constructor](exports_cluster.UnknownPresentAttributeClient.md#constructor)

### Properties

- [attribute](exports_cluster.UnknownPresentAttributeClient.md#attribute)
- [clusterId](exports_cluster.UnknownPresentAttributeClient.md#clusterid)
- [endpointId](exports_cluster.UnknownPresentAttributeClient.md#endpointid)
- [id](exports_cluster.UnknownPresentAttributeClient.md#id)
- [name](exports_cluster.UnknownPresentAttributeClient.md#name)
- [schema](exports_cluster.UnknownPresentAttributeClient.md#schema)

### Methods

- [addListener](exports_cluster.UnknownPresentAttributeClient.md#addlistener)
- [get](exports_cluster.UnknownPresentAttributeClient.md#get)
- [getWithVersion](exports_cluster.UnknownPresentAttributeClient.md#getwithversion)
- [removeListener](exports_cluster.UnknownPresentAttributeClient.md#removelistener)
- [set](exports_cluster.UnknownPresentAttributeClient.md#set)
- [subscribe](exports_cluster.UnknownPresentAttributeClient.md#subscribe)
- [update](exports_cluster.UnknownPresentAttributeClient.md#update)

## Constructors

### constructor

• **new UnknownPresentAttributeClient**(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[constructor](exports_cluster.PresentAttributeClient.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\>

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[attribute](exports_cluster.PresentAttributeClient.md#attribute)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:20

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[clusterId](exports_cluster.PresentAttributeClient.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[endpointId](exports_cluster.PresentAttributeClient.md#endpointid)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:22

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[id](exports_cluster.PresentAttributeClient.md#id)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:29

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[name](exports_cluster.PresentAttributeClient.md#name)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:21

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)<`any`\>

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[schema](exports_cluster.PresentAttributeClient.md#schema)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:27

## Methods

### addListener

▸ **addListener**(`listener`): `void`

Add a listener to the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[addListener](exports_cluster.PresentAttributeClient.md#addlistener)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:53

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[get](exports_cluster.PresentAttributeClient.md#get)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:37

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| { `value`: `any` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: `any` ; `version`: `number`  }\>

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[getWithVersion](exports_cluster.PresentAttributeClient.md#getwithversion)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:41

___

### removeListener

▸ **removeListener**(`listener`): `void`

Remove a listener from the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`newValue`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[removeListener](exports_cluster.PresentAttributeClient.md#removelistener)

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
| `value` | `any` |
| `dataVersion?` | `number` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[set](exports_cluster.PresentAttributeClient.md#set)

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

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[subscribe](exports_cluster.PresentAttributeClient.md#subscribe)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:46

___

### update

▸ `Private` **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[PresentAttributeClient](exports_cluster.PresentAttributeClient.md).[update](exports_cluster.PresentAttributeClient.md#update)

#### Defined in

packages/matter.js/dist/cjs/cluster/client/AttributeClient.d.ts:51
