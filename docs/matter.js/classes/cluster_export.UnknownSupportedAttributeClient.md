[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / UnknownSupportedAttributeClient

# Class: UnknownSupportedAttributeClient

[cluster/export](../modules/cluster_export.md).UnknownSupportedAttributeClient

Special AttributeClient class to allow identifying attributes that are supported because reported by the Devices,
but the contained attribute is unknown.

## Hierarchy

- [`SupportedAttributeClient`](cluster_export.SupportedAttributeClient.md)\<`any`\>

  ↳ **`UnknownSupportedAttributeClient`**

## Table of contents

### Constructors

- [constructor](cluster_export.UnknownSupportedAttributeClient.md#constructor)

### Properties

- [attribute](cluster_export.UnknownSupportedAttributeClient.md#attribute)
- [clusterId](cluster_export.UnknownSupportedAttributeClient.md#clusterid)
- [endpointId](cluster_export.UnknownSupportedAttributeClient.md#endpointid)
- [id](cluster_export.UnknownSupportedAttributeClient.md#id)
- [name](cluster_export.UnknownSupportedAttributeClient.md#name)
- [schema](cluster_export.UnknownSupportedAttributeClient.md#schema)

### Methods

- [addListener](cluster_export.UnknownSupportedAttributeClient.md#addlistener)
- [get](cluster_export.UnknownSupportedAttributeClient.md#get)
- [getWithVersion](cluster_export.UnknownSupportedAttributeClient.md#getwithversion)
- [removeListener](cluster_export.UnknownSupportedAttributeClient.md#removelistener)
- [set](cluster_export.UnknownSupportedAttributeClient.md#set)
- [subscribe](cluster_export.UnknownSupportedAttributeClient.md#subscribe)
- [update](cluster_export.UnknownSupportedAttributeClient.md#update)

## Constructors

### constructor

• **new UnknownSupportedAttributeClient**(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`UnknownSupportedAttributeClient`](cluster_export.UnknownSupportedAttributeClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Returns

[`UnknownSupportedAttributeClient`](cluster_export.UnknownSupportedAttributeClient.md)

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[constructor](cluster_export.SupportedAttributeClient.md#constructor)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\>

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[attribute](cluster_export.SupportedAttributeClient.md#attribute)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[clusterId](cluster_export.SupportedAttributeClient.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[endpointId](cluster_export.SupportedAttributeClient.md#endpointid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[id](cluster_export.SupportedAttributeClient.md#id)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[name](cluster_export.SupportedAttributeClient.md#name)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`any`\>

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[schema](cluster_export.SupportedAttributeClient.md#schema)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

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

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[addListener](cluster_export.SupportedAttributeClient.md#addlistener)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L173)

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[get](cluster_export.SupportedAttributeClient.md#get)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L112)

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`undefined` \| \{ `value`: `any` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| \{ `value`: `any` ; `version`: `number`  }\>

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[getWithVersion](cluster_export.SupportedAttributeClient.md#getwithversion)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L130)

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

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[removeListener](cluster_export.SupportedAttributeClient.md#removelistener)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L178)

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

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[set](cluster_export.SupportedAttributeClient.md#set)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L66)

___

### subscribe

▸ **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion?`, `isFabricFiltered?`): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `knownDataVersion?` | `number` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[subscribe](cluster_export.SupportedAttributeClient.md#subscribe)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L146)

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

[SupportedAttributeClient](cluster_export.SupportedAttributeClient.md).[update](cluster_export.SupportedAttributeClient.md#update)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L168)
