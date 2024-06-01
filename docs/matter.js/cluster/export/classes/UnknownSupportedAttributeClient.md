[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / UnknownSupportedAttributeClient

# Class: UnknownSupportedAttributeClient

Special AttributeClient class to allow identifying attributes that are supported because reported by the Devices,
but the contained attribute is unknown.

## Extends

- [`SupportedAttributeClient`](SupportedAttributeClient.md)\<`any`\>

## Constructors

### new UnknownSupportedAttributeClient()

> **new UnknownSupportedAttributeClient**(`attribute`, `name`, `endpointId`, `clusterId`, `interactionClient`): [`UnknownSupportedAttributeClient`](UnknownSupportedAttributeClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attribute` | [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\> |
| `name` | `string` |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md) |

#### Returns

[`UnknownSupportedAttributeClient`](UnknownSupportedAttributeClient.md)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`constructor`](SupportedAttributeClient.md#constructors)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L48)

## Properties

### attribute

> `readonly` **attribute**: [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`attribute`](SupportedAttributeClient.md#attribute)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L49)

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../../datatype/export/README.md#clusterid)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`clusterId`](SupportedAttributeClient.md#clusterid)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L52)

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`endpointId`](SupportedAttributeClient.md#endpointid)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L51)

***

### id

> `readonly` **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`id`](SupportedAttributeClient.md#id)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L46)

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`name`](SupportedAttributeClient.md#name)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L50)

***

### schema

> `protected` `readonly` **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`schema`](SupportedAttributeClient.md#schema)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L44)

## Methods

### addListener()

> **addListener**(`listener`): `void`

Add a listener to the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`addListener`](SupportedAttributeClient.md#addlistener)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L173)

***

### get()

> **get**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`get`](SupportedAttributeClient.md#get)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L112)

***

### getWithVersion()

> **getWithVersion**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `object`\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`getWithVersion`](SupportedAttributeClient.md#getwithversion)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L130)

***

### removeListener()

> **removeListener**(`listener`): `void`

Remove a listener from the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`newValue`) => `void` |

#### Returns

`void`

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`removeListener`](SupportedAttributeClient.md#removelistener)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L178)

***

### set()

> **set**(`value`, `dataVersion`?): `Promise`\<`void`\>

Set the value of the attribute. When dataVersion parameter is provided the value is only set when the
cluster dataVersion of the server matches. If it does not match it is rejected with an Error.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |
| `dataVersion`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`set`](SupportedAttributeClient.md#set)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L66)

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion`?, `isFabricFiltered`?): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `minIntervalFloorSeconds` | `number` | `undefined` |
| `maxIntervalCeilingSeconds` | `number` | `undefined` |
| `knownDataVersion`? | `number` | `undefined` |
| `isFabricFiltered`? | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`subscribe`](SupportedAttributeClient.md#subscribe)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L146)

***

### update()

> `private` **update**(`value`): `void`

Update the value of the attribute. Just internally used!

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`update`](SupportedAttributeClient.md#update)

#### Source

[packages/matter.js/src/cluster/client/AttributeClient.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/client/AttributeClient.ts#L168)
