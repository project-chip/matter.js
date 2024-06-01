[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [export](../README.md) / MatterNode

# Class: `abstract` MatterNode

Abstract base class that represents a node in the matter ecosystem.

## Extended by

- [`CommissioningController`](CommissioningController.md)
- [`CommissioningServer`](CommissioningServer.md)

## Constructors

### new MatterNode()

> **new MatterNode**(): [`MatterNode`](MatterNode.md)

#### Returns

[`MatterNode`](MatterNode.md)

## Methods

### close()

> `abstract` **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterNode.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L14)

***

### getPort()

> `abstract` **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Source

[packages/matter.js/src/MatterNode.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L16)

***

### initialize()

> `abstract` **initialize**(`ipv4Disabled`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterNode.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L18)

***

### setMdnsBroadcaster()

> `abstract` **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../mdns/export/classes/MdnsBroadcaster.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterNode.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L22)

***

### setMdnsScanner()

> `abstract` **setMdnsScanner**(`mdnsScanner`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterNode.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L24)

***

### start()

> `abstract` **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterNode.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterNode.ts#L20)
