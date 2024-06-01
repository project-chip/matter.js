[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / Parts

# Class: Parts

Manages parent-child relationship between endpoints.

You can manipulate child parts using [MutableSet](../../../../util/export/interfaces/MutableSet.md) interface.

Notifications of structural change bubble via Endpoint.lifecycle.changed.

## Implements

- [`MutableSet`](../../../../util/export/interfaces/MutableSet.md)\<[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md), [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md) \| [`Agent`](../../../../endpoint/export/classes/Agent.md)\>
- [`ObservableSet`](../../../../util/export/interfaces/ObservableSet.md)\<[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\>

## Constructors

### new Parts()

> **new Parts**(`endpoint`): [`Parts`](Parts.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`Parts`](Parts.md)

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L32)

## Properties

### #bubbleChange()

> `private` **#bubbleChange**: (`type`, `endpoint`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Change`](../enumerations/Change.md) |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L28)

***

### #children

> `private` **#children**: [`BasicSet`](../../../../util/export/classes/BasicSet.md)\<[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>, [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L29)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L30)

## Accessors

### added

> `get` **added**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L121)

***

### areReady

> `get` **areReady**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L103)

***

### deleted

> `get` **deleted**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L125)

***

### size

> `get` **size**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L129)

## Methods

### #adoptPart()

> `private` **#adoptPart**(`child`): `void`

Take ownership of an endpoint.  Invoked when an endpoint is added.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L156)

***

### #disownPart()

> `private` **#disownPart**(`child`): `void`

Terminate ownership of an endpoint.  Invoked when an endpoint is destroyed or removed from state.parts.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L180)

***

### #endpointFor()

> `private` **#endpointFor**(`child`): [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Agent`](../../../../endpoint/export/classes/Agent.md) \| [`Definition`](../../../../endpoint/export/namespaces/Endpoint/README.md#definitiont)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L220)

***

### #get()

> `private` **#get**(`id`): `undefined` \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L82)

***

### #validateInsertion()

> `private` **#validateInsertion**(`forefather`, `endpoint`, `usedNumbers`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `forefather` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |
| `usedNumbers`? | `Set`\<`number`\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L187)

***

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>\>

#### Returns

`IterableIterator`\<[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L133)

***

### add()

> **add**(`child`): [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Agent`](../../../../endpoint/export/classes/Agent.md) \| [`Definition`](../../../../endpoint/export/namespaces/Endpoint/README.md#definitiont)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Implementation of

[`MutableSet`](../../../../util/export/interfaces/MutableSet.md).[`add`](../../../../util/export/interfaces/MutableSet.md#add)

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L50)

***

### assertIdAvailable()

> **assertIdAvailable**(`id`, `endpoint`): `void`

Confirm availability of an ID amongst the endpoint's children.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L140)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Implementation of

[`MutableSet`](../../../../util/export/interfaces/MutableSet.md).[`clear`](../../../../util/export/interfaces/MutableSet.md#clear)

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L60)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L147)

***

### delete()

> **delete**(`child`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Agent`](../../../../endpoint/export/classes/Agent.md) \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`boolean`

#### Implementation of

[`MutableSet`](../../../../util/export/interfaces/MutableSet.md).[`delete`](../../../../util/export/interfaces/MutableSet.md#delete)

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L56)

***

### get()

> **get**(`id`): `undefined` \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L64)

***

### has()

> **has**(`identity`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identity` | `string` \| [`Agent`](../../../../endpoint/export/classes/Agent.md) \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L90)

***

### indexOf()

> **indexOf**(`child`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `child` | [`Agent`](../../../../endpoint/export/classes/Agent.md) \| [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`number`

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L107)

***

### require()

> **require**(`id`): [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/Parts.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/Parts.ts#L72)
