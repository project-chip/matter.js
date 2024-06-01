[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [environment/export](../README.md) / MdnsService

# Class: MdnsService

## Constructors

### new MdnsService()

> **new MdnsService**(`environment`, `options`?): [`MdnsService`](MdnsService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |
| `options`? | [`Options`](../namespaces/MdnsService/interfaces/Options.md) |

#### Returns

[`MdnsService`](MdnsService.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L31)

## Properties

### #broadcaster?

> `private` `optional` **#broadcaster**: [`MdnsBroadcaster`](../../../mdns/export/classes/MdnsBroadcaster.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L21)

***

### #construction

> `private` `readonly` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MdnsService`](MdnsService.md)\>

#### Source

[packages/matter.js/src/environment/MdnsService.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L23)

***

### #enableIpv4

> `private` `readonly` **#enableIpv4**: `boolean`

#### Source

[packages/matter.js/src/environment/MdnsService.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L24)

***

### #scanner?

> `private` `optional` **#scanner**: [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L22)

***

### limitedToNetInterface?

> `optional` `readonly` **limitedToNetInterface**: `string`

#### Source

[packages/matter.js/src/environment/MdnsService.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L25)

## Accessors

### \[value\]

> `get` **\[value\]**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/environment/MdnsService.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L70)

***

### broadcaster

> `get` **broadcaster**(): [`MdnsBroadcaster`](../../../mdns/export/classes/MdnsBroadcaster.md)

#### Returns

[`MdnsBroadcaster`](../../../mdns/export/classes/MdnsBroadcaster.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L62)

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MdnsService`](MdnsService.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MdnsService`](MdnsService.md)\>

#### Source

[packages/matter.js/src/environment/MdnsService.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L74)

***

### enableIpv4

> `get` **enableIpv4**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/environment/MdnsService.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L27)

***

### scanner

> `get` **scanner**(): [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md)

#### Returns

[`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L66)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/environment/MdnsService.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L78)

***

### createInstanceBroadcaster()

> **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](../../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L58)

***

### `[create]`()

> `static` **\[create\]**(`environment`): [`MdnsService`](MdnsService.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](Environment.md) |

#### Returns

[`MdnsService`](MdnsService.md)

#### Source

[packages/matter.js/src/environment/MdnsService.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/MdnsService.ts#L54)
