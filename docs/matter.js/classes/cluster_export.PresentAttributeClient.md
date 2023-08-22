[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / PresentAttributeClient

# Class: PresentAttributeClient<T\>

[cluster/export](../modules/cluster_export.md).PresentAttributeClient

Special AttributeClient class to allow identifying attributes that are present because reported by the Devices.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AttributeClient`](cluster_export.AttributeClient.md)<`T`\>

  ↳ **`PresentAttributeClient`**

  ↳↳ [`UnknownPresentAttributeClient`](cluster_export.UnknownPresentAttributeClient.md)

## Table of contents

### Constructors

- [constructor](cluster_export.PresentAttributeClient.md#constructor)

### Properties

- [attribute](cluster_export.PresentAttributeClient.md#attribute)
- [clusterId](cluster_export.PresentAttributeClient.md#clusterid)
- [endpointId](cluster_export.PresentAttributeClient.md#endpointid)
- [id](cluster_export.PresentAttributeClient.md#id)
- [name](cluster_export.PresentAttributeClient.md#name)
- [schema](cluster_export.PresentAttributeClient.md#schema)

### Methods

- [addListener](cluster_export.PresentAttributeClient.md#addlistener)
- [get](cluster_export.PresentAttributeClient.md#get)
- [getWithVersion](cluster_export.PresentAttributeClient.md#getwithversion)
- [removeListener](cluster_export.PresentAttributeClient.md#removelistener)
- [set](cluster_export.PresentAttributeClient.md#set)
- [subscribe](cluster_export.PresentAttributeClient.md#subscribe)
- [update](cluster_export.PresentAttributeClient.md#update)

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
| `attribute` | [`Attribute`](../modules/cluster_export.md#attribute)<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[constructor](cluster_export.AttributeClient.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/cluster_export.md#attribute)<`T`, `any`\>

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[attribute](cluster_export.AttributeClient.md#attribute)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[clusterId](cluster_export.AttributeClient.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[endpointId](cluster_export.AttributeClient.md#endpointid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[id](cluster_export.AttributeClient.md#id)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[name](cluster_export.AttributeClient.md#name)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`any`\>

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[schema](cluster_export.AttributeClient.md#schema)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

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

[AttributeClient](cluster_export.AttributeClient.md).[addListener](cluster_export.AttributeClient.md#addlistener)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L164)

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| `T`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| `T`\>

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[get](cluster_export.AttributeClient.md#get)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:103](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L103)

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| { `value`: `T` ; `version`: `number`  }\>

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[getWithVersion](cluster_export.AttributeClient.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:121](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L121)

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

[AttributeClient](cluster_export.AttributeClient.md).[removeListener](cluster_export.AttributeClient.md#removelistener)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:169](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L169)

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

[AttributeClient](cluster_export.AttributeClient.md).[set](cluster_export.AttributeClient.md#set)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:66](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L66)

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion?`, `isFabricFiltered?`): `Promise`<`void`\>

Subscribe to the attribute.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `knownDataVersion?` | `number` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[AttributeClient](cluster_export.AttributeClient.md).[subscribe](cluster_export.AttributeClient.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:137](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L137)

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

[AttributeClient](cluster_export.AttributeClient.md).[update](cluster_export.AttributeClient.md#update)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:159](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L159)
