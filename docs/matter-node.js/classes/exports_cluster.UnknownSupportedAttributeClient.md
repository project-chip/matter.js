[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / UnknownSupportedAttributeClient

# Class: UnknownSupportedAttributeClient

[exports/cluster](../modules/exports_cluster.md).UnknownSupportedAttributeClient

Special AttributeClient class to allow identifying attributes that are supported because reported by the Devices,
but the contained attribute is unknown.

## Hierarchy

- [`SupportedAttributeClient`](exports_cluster.SupportedAttributeClient.md)\<`any`\>

  ↳ **`UnknownSupportedAttributeClient`**

## Table of contents

### Constructors

- [constructor](exports_cluster.UnknownSupportedAttributeClient.md#constructor)

### Properties

- [attribute](exports_cluster.UnknownSupportedAttributeClient.md#attribute)
- [clusterId](exports_cluster.UnknownSupportedAttributeClient.md#clusterid)
- [endpointId](exports_cluster.UnknownSupportedAttributeClient.md#endpointid)
- [id](exports_cluster.UnknownSupportedAttributeClient.md#id)
- [name](exports_cluster.UnknownSupportedAttributeClient.md#name)
- [schema](exports_cluster.UnknownSupportedAttributeClient.md#schema)

### Methods

- [addListener](exports_cluster.UnknownSupportedAttributeClient.md#addlistener)
- [get](exports_cluster.UnknownSupportedAttributeClient.md#get)
- [getWithVersion](exports_cluster.UnknownSupportedAttributeClient.md#getwithversion)
- [removeListener](exports_cluster.UnknownSupportedAttributeClient.md#removelistener)
- [set](exports_cluster.UnknownSupportedAttributeClient.md#set)
- [subscribe](exports_cluster.UnknownSupportedAttributeClient.md#subscribe)
- [update](exports_cluster.UnknownSupportedAttributeClient.md#update)

## Constructors

### constructor

• **new UnknownSupportedAttributeClient**(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`UnknownSupportedAttributeClient`](exports_cluster.UnknownSupportedAttributeClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `interactionClient` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Returns

[`UnknownSupportedAttributeClient`](exports_cluster.UnknownSupportedAttributeClient.md)

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[constructor](exports_cluster.SupportedAttributeClient.md#constructor)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`any`, `any`\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[attribute](exports_cluster.SupportedAttributeClient.md#attribute)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:20

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[clusterId](exports_cluster.SupportedAttributeClient.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:23

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[endpointId](exports_cluster.SupportedAttributeClient.md#endpointid)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:22

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/exports_datatype.md#attributeid)

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[id](exports_cluster.SupportedAttributeClient.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:29

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[name](exports_cluster.SupportedAttributeClient.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:21

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](exports_tlv.TlvSchema.md)\<`any`\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[schema](exports_cluster.SupportedAttributeClient.md#schema)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:27

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

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[addListener](exports_cluster.SupportedAttributeClient.md#addlistener)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:53

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[get](exports_cluster.SupportedAttributeClient.md#get)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:37

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`undefined` \| \{ `value`: `any` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`undefined` \| \{ `value`: `any` ; `version`: `number`  }\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[getWithVersion](exports_cluster.SupportedAttributeClient.md#getwithversion)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:41

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

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[removeListener](exports_cluster.SupportedAttributeClient.md#removelistener)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:55

___

### set

▸ **set**(`value`, `dataVersion?`): `Promise`\<`void`\>

Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
cluster dataVersion of the server matches. If it does not match it is rejected with an Error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `dataVersion?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[set](exports_cluster.SupportedAttributeClient.md#set)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:35

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion?`, `isFabricFiltered?`): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `knownDataVersion?` | `number` |
| `isFabricFiltered?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[subscribe](exports_cluster.SupportedAttributeClient.md#subscribe)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:46

___

### update

▸ **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[SupportedAttributeClient](exports_cluster.SupportedAttributeClient.md).[update](exports_cluster.SupportedAttributeClient.md#update)

#### Defined in

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:51
