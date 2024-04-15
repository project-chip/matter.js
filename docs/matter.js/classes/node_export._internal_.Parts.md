[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / Parts

# Class: Parts

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).Parts

Manages parent-child relationship between endpoints.

You can manipulate child parts using [MutableSet](../interfaces/util_export.MutableSet.md) interface.

Notifications of structural change bubble via Endpoint.lifecycle.changed.

## Implements

- [`MutableSet`](../interfaces/util_export.MutableSet.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md), [`Endpoint`](endpoint_export.Endpoint-1.md) \| [`Agent`](endpoint_export.Agent-1.md)\>
- [`ObservableSet`](../interfaces/util_export.ObservableSet.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\>

## Table of contents

### Constructors

- [constructor](node_export._internal_.Parts.md#constructor)

### Properties

- [#bubbleChange](node_export._internal_.Parts.md##bubblechange)
- [#children](node_export._internal_.Parts.md##children)
- [#endpoint](node_export._internal_.Parts.md##endpoint)

### Accessors

- [added](node_export._internal_.Parts.md#added)
- [areReady](node_export._internal_.Parts.md#areready)
- [deleted](node_export._internal_.Parts.md#deleted)
- [size](node_export._internal_.Parts.md#size)

### Methods

- [#adoptPart](node_export._internal_.Parts.md##adoptpart)
- [#disownPart](node_export._internal_.Parts.md##disownpart)
- [#endpointFor](node_export._internal_.Parts.md##endpointfor)
- [#get](node_export._internal_.Parts.md##get)
- [#validateInsertion](node_export._internal_.Parts.md##validateinsertion)
- [[iterator]](node_export._internal_.Parts.md#[iterator])
- [add](node_export._internal_.Parts.md#add)
- [assertIdAvailable](node_export._internal_.Parts.md#assertidavailable)
- [clear](node_export._internal_.Parts.md#clear)
- [close](node_export._internal_.Parts.md#close)
- [delete](node_export._internal_.Parts.md#delete)
- [get](node_export._internal_.Parts.md#get)
- [has](node_export._internal_.Parts.md#has)
- [indexOf](node_export._internal_.Parts.md#indexof)
- [require](node_export._internal_.Parts.md#require)

## Constructors

### constructor

• **new Parts**(`endpoint`): [`Parts`](node_export._internal_.Parts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`Parts`](node_export._internal_.Parts.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L32)

## Properties

### #bubbleChange

• `Private` **#bubbleChange**: (`type`: [`Change`](../enums/node_export._internal_.Change.md), `endpoint`: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>) => `void`

#### Type declaration

▸ (`type`, `endpoint`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Change`](../enums/node_export._internal_.Change.md) |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L28)

___

### #children

• `Private` **#children**: [`BasicSet`](util_export.BasicSet.md)\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>, [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L29)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L30)

## Accessors

### added

• `get` **added**(): [`Observable`](../interfaces/util_export.Observable.md)\<[[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>], `void`\>

#### Implementation of

ObservableSet.added

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L121)

___

### areReady

• `get` **areReady**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L103)

___

### deleted

• `get` **deleted**(): [`Observable`](../interfaces/util_export.Observable.md)\<[[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>], `void`\>

#### Implementation of

ObservableSet.deleted

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L125)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L129)

## Methods

### #adoptPart

▸ **#adoptPart**(`child`): `void`

Take ownership of an endpoint.  Invoked when an endpoint is added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:156](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L156)

___

### #disownPart

▸ **#disownPart**(`child`): `void`

Terminate ownership of an endpoint.  Invoked when an endpoint is destroyed or removed from state.parts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:180](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L180)

___

### #endpointFor

▸ **#endpointFor**(`child`): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Agent`](endpoint_export.Agent-1.md) \| [`Definition`](../modules/endpoint_export.Endpoint.md#definition)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L220)

___

### #get

▸ **#get**(`id`): `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L82)

___

### #validateInsertion

▸ **#validateInsertion**(`forefather`, `endpoint`, `usedNumbers?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forefather` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |
| `usedNumbers?` | `Set`\<`number`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L187)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>\>

#### Returns

`IterableIterator`\<[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L133)

___

### add

▸ **add**(`child`): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Agent`](endpoint_export.Agent-1.md) \| [`Definition`](../modules/endpoint_export.Endpoint.md#definition)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[add](../interfaces/util_export.MutableSet.md#add)

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L50)

___

### assertIdAvailable

▸ **assertIdAvailable**(`id`, `endpoint`): `void`

Confirm availability of an ID amongst the endpoint's children.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L140)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[clear](../interfaces/util_export.MutableSet.md#clear)

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L60)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L147)

___

### delete

▸ **delete**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Agent`](endpoint_export.Agent-1.md) \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`boolean`

#### Implementation of

[MutableSet](../interfaces/util_export.MutableSet.md).[delete](../interfaces/util_export.MutableSet.md#delete)

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L56)

___

### get

▸ **get**(`id`): `undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L64)

___

### has

▸ **has**(`identity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `identity` | `string` \| [`Agent`](endpoint_export.Agent-1.md) \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L90)

___

### indexOf

▸ **indexOf**(`child`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Agent`](endpoint_export.Agent-1.md) \| [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L107)

___

### require

▸ **require**(`id`): [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/Parts.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/Parts.ts#L72)
