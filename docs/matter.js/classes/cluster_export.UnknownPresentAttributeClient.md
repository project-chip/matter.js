[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / UnknownPresentAttributeClient

# Class: UnknownPresentAttributeClient

[cluster/export](../modules/cluster_export.md).UnknownPresentAttributeClient

Special AttributeClient class to allow identifying attributes that are present because reported by the Devices,
but the contained attribute is unknown.

## Hierarchy

- [`PresentAttributeClient`](cluster_export.PresentAttributeClient.md)<`any`\>

  ↳ **`UnknownPresentAttributeClient`**

## Table of contents

### Constructors

- [constructor](cluster_export.UnknownPresentAttributeClient.md#constructor)

### Properties

- [attribute](cluster_export.UnknownPresentAttributeClient.md#attribute)
- [clusterId](cluster_export.UnknownPresentAttributeClient.md#clusterid)
- [endpointId](cluster_export.UnknownPresentAttributeClient.md#endpointid)
- [id](cluster_export.UnknownPresentAttributeClient.md#id)
- [name](cluster_export.UnknownPresentAttributeClient.md#name)
- [schema](cluster_export.UnknownPresentAttributeClient.md#schema)

### Methods

- [addListener](cluster_export.UnknownPresentAttributeClient.md#addlistener)
- [get](cluster_export.UnknownPresentAttributeClient.md#get)
- [getWithVersion](cluster_export.UnknownPresentAttributeClient.md#getwithversion)
- [removeListener](cluster_export.UnknownPresentAttributeClient.md#removelistener)
- [set](cluster_export.UnknownPresentAttributeClient.md#set)
- [subscribe](cluster_export.UnknownPresentAttributeClient.md#subscribe)
- [update](cluster_export.UnknownPresentAttributeClient.md#update)

## Constructors

### constructor

• **new UnknownPresentAttributeClient**(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[constructor](cluster_export.PresentAttributeClient.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../modules/cluster_export.md#attribute)<`any`, `any`\>

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[attribute](cluster_export.PresentAttributeClient.md#attribute)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[clusterId](cluster_export.PresentAttributeClient.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[endpointId](cluster_export.PresentAttributeClient.md#endpointid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[id](cluster_export.PresentAttributeClient.md#id)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[name](cluster_export.PresentAttributeClient.md#name)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)<`any`\>

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[schema](cluster_export.PresentAttributeClient.md#schema)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

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

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[addListener](cluster_export.PresentAttributeClient.md#addlistener)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L164)

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[get](cluster_export.PresentAttributeClient.md#get)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:103](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L103)

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`<`undefined` \| { `value`: `any` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`<`undefined` \| { `value`: `any` ; `version`: `number`  }\>

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[getWithVersion](cluster_export.PresentAttributeClient.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:121](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L121)

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

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[removeListener](cluster_export.PresentAttributeClient.md#removelistener)

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
| `value` | `any` |
| `dataVersion?` | `number` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[set](cluster_export.PresentAttributeClient.md#set)

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

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[subscribe](cluster_export.PresentAttributeClient.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:137](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L137)

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

[PresentAttributeClient](cluster_export.PresentAttributeClient.md).[update](cluster_export.PresentAttributeClient.md#update)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:159](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/client/AttributeClient.ts#L159)
