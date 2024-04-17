[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / AttributeClient

# Class: AttributeClient\<T\>

[cluster/export](../modules/cluster_export.md).AttributeClient

General class for AttributeClients

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`AttributeClient`**

  ↳ [`SupportedAttributeClient`](cluster_export.SupportedAttributeClient.md)

## Table of contents

### Constructors

- [constructor](cluster_export.AttributeClient.md#constructor)

### Properties

- [attribute](cluster_export.AttributeClient.md#attribute)
- [clusterId](cluster_export.AttributeClient.md#clusterid)
- [endpointId](cluster_export.AttributeClient.md#endpointid)
- [id](cluster_export.AttributeClient.md#id)
- [interactionClient](cluster_export.AttributeClient.md#interactionclient)
- [isFabricScoped](cluster_export.AttributeClient.md#isfabricscoped)
- [isWritable](cluster_export.AttributeClient.md#iswritable)
- [listeners](cluster_export.AttributeClient.md#listeners)
- [name](cluster_export.AttributeClient.md#name)
- [schema](cluster_export.AttributeClient.md#schema)

### Methods

- [addListener](cluster_export.AttributeClient.md#addlistener)
- [get](cluster_export.AttributeClient.md#get)
- [getWithVersion](cluster_export.AttributeClient.md#getwithversion)
- [removeListener](cluster_export.AttributeClient.md#removelistener)
- [set](cluster_export.AttributeClient.md#set)
- [subscribe](cluster_export.AttributeClient.md#subscribe)
- [update](cluster_export.AttributeClient.md#update)

## Constructors

### constructor

• **new AttributeClient**\<`T`\>(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`AttributeClient`](cluster_export.AttributeClient.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`T`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) |

#### Returns

[`AttributeClient`](cluster_export.AttributeClient.md)\<`T`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

• `Readonly` **attribute**: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`T`, `any`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

___

### clusterId

• `Readonly` **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

___

### endpointId

• `Readonly` **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

___

### id

• `Readonly` **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

___

### interactionClient

• `Private` `Readonly` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L53)

___

### isFabricScoped

• `Private` `Readonly` **isFabricScoped**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L43)

___

### isWritable

• `Private` `Readonly` **isWritable**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L42)

___

### listeners

• `Private` `Readonly` **listeners**: (`newValue`: `T`) => `void`[]

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L45)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

___

### schema

• `Protected` `Readonly` **schema**: [`TlvSchema`](tlv_export.TlvSchema.md)\<`any`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:173](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L173)

___

### get

▸ **get**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`undefined` \| `T`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L112)

___

### getWithVersion

▸ **getWithVersion**(`alwaysRequestFromRemote?`, `isFabricFiltered?`): `Promise`\<`undefined` \| \{ `value`: `T` ; `version`: `number`  }\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote?` | `boolean` | `undefined` |
| `isFabricFiltered` | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| \{ `value`: `T` ; `version`: `number`  }\>

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L130)

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

[packages/matter.js/src/cluster/client/AttributeClient.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L178)

___

### set

▸ **set**(`value`, `dataVersion?`): `Promise`\<`void`\>

Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
cluster dataVersion of the server matches. If it does not match it is rejected with an Error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `dataVersion?` | `number` |

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L146)

___

### update

▸ **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/client/AttributeClient.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/client/AttributeClient.ts#L168)
