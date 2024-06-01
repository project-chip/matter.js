[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / [export](../README.md) / MatterNode

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

packages/matter.js/dist/esm/MatterNode.d.ts:12

***

### getPort()

> `abstract` **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Source

packages/matter.js/dist/esm/MatterNode.d.ts:13

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

packages/matter.js/dist/esm/MatterNode.d.ts:14

***

### setMdnsBroadcaster()

> `abstract` **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../exports/mdns/classes/MdnsBroadcaster.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/MatterNode.d.ts:16

***

### setMdnsScanner()

> `abstract` **setMdnsScanner**(`mdnsScanner`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../exports/mdns/classes/MdnsScanner.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/MatterNode.d.ts:17

***

### start()

> `abstract` **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterNode.d.ts:15
