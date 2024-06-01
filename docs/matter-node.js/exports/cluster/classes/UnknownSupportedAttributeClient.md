[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / UnknownSupportedAttributeClient

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
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |
| `interactionClient` | [`InteractionClient`](../../interaction/classes/InteractionClient.md) |

#### Returns

[`UnknownSupportedAttributeClient`](UnknownSupportedAttributeClient.md)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`constructor`](SupportedAttributeClient.md#constructors)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:30

## Properties

### attribute

> `readonly` **attribute**: [`Attribute`](../interfaces/Attribute.md)\<`any`, `any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`attribute`](SupportedAttributeClient.md#attribute)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:20

***

### clusterId

> `readonly` **clusterId**: [`ClusterId`](../../datatype/README.md#clusterid)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`clusterId`](SupportedAttributeClient.md#clusterid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:23

***

### endpointId

> `readonly` **endpointId**: [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`endpointId`](SupportedAttributeClient.md#endpointid)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:22

***

### id

> `readonly` **id**: [`AttributeId`](../../datatype/README.md#attributeid)

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`id`](SupportedAttributeClient.md#id)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:29

***

### name

> `readonly` **name**: `string`

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`name`](SupportedAttributeClient.md#name)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:21

***

### schema

> `protected` `readonly` **schema**: [`TlvSchema`](../../tlv/classes/TlvSchema.md)\<`any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`schema`](SupportedAttributeClient.md#schema)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:27

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

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:53

***

### get()

> **get**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`any`\>

Get the value of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`get`](SupportedAttributeClient.md#get)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:37

***

### getWithVersion()

> **getWithVersion**(`alwaysRequestFromRemote`?, `isFabricFiltered`?): `Promise`\<`undefined` \| `object`\>

Get the value with version of the attribute. Fabric scoped reads are always done with the remote.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alwaysRequestFromRemote`? | `boolean` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`getWithVersion`](SupportedAttributeClient.md#getwithversion)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:41

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

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:55

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

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:35

***

### subscribe()

> **subscribe**(`minIntervalFloorSeconds`, `maxIntervalCeilingSeconds`, `knownDataVersion`?, `isFabricFiltered`?): `Promise`\<`void`\>

Subscribe to the attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minIntervalFloorSeconds` | `number` |
| `maxIntervalCeilingSeconds` | `number` |
| `knownDataVersion`? | `number` |
| `isFabricFiltered`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SupportedAttributeClient`](SupportedAttributeClient.md).[`subscribe`](SupportedAttributeClient.md#subscribe)

#### Source

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:46

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

packages/matter.js/dist/esm/cluster/client/AttributeClient.d.ts:51
