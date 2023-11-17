[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterNode

# Class: MatterNode

[export](../modules/export.md).MatterNode

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- **`MatterNode`**

  ↳ [`CommissioningController`](export.CommissioningController.md)

  ↳ [`CommissioningServer`](export.CommissioningServer.md)

## Table of contents

### Constructors

- [constructor](export.MatterNode.md#constructor)

### Methods

- [close](export.MatterNode.md#close)
- [getPort](export.MatterNode.md#getport)
- [initialize](export.MatterNode.md#initialize)
- [setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)
- [setMdnsScanner](export.MatterNode.md#setmdnsscanner)
- [start](export.MatterNode.md#start)

## Constructors

### constructor

• **new MatterNode**()

## Methods

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:12

___

### getPort

▸ `Abstract` **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:13

___

### initialize

▸ `Abstract` **initialize**(`ipv4Disabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:14

___

### setMdnsBroadcaster

▸ `Abstract` **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:16

___

### setMdnsScanner

▸ `Abstract` **setMdnsScanner**(`mdnsScanner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:17

___

### start

▸ `Abstract` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterNode.d.ts:15
