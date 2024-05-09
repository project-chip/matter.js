[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / [NetworkServer](../modules/node_export._internal_.NetworkServer.md) / State

# Class: State

[\<internal\>](../modules/node_export._internal_.md).[NetworkServer](../modules/node_export._internal_.NetworkServer.md).State

## Hierarchy

- [`State`](behavior_cluster_export._internal_.NetworkBehavior.State.md)

  ↳ **`State`**

## Table of contents

### Constructors

- [constructor](node_export._internal_.NetworkServer.State.md#constructor)

### Properties

- [ble](node_export._internal_.NetworkServer.State.md#ble)
- [discoveryCapabilities](node_export._internal_.NetworkServer.State.md#discoverycapabilities)
- [ipv4](node_export._internal_.NetworkServer.State.md#ipv4)
- [listeningAddressIpv4](node_export._internal_.NetworkServer.State.md#listeningaddressipv4)
- [listeningAddressIpv6](node_export._internal_.NetworkServer.State.md#listeningaddressipv6)
- [operationalPort](node_export._internal_.NetworkServer.State.md#operationalport)
- [port](node_export._internal_.NetworkServer.State.md#port)
- [subscriptionOptions](node_export._internal_.NetworkServer.State.md#subscriptionoptions)

## Constructors

### constructor

• **new State**(): [`State`](node_export._internal_.NetworkServer.State.md)

#### Returns

[`State`](node_export._internal_.NetworkServer.State.md)

#### Inherited from

[State](behavior_cluster_export._internal_.NetworkBehavior.State.md).[constructor](behavior_cluster_export._internal_.NetworkBehavior.State.md#constructor)

## Properties

### ble

• `Optional` **ble**: `boolean` = `undefined`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L115)

___

### discoveryCapabilities

• **discoveryCapabilities**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L116)

___

### ipv4

• **ipv4**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L114)

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string` = `undefined`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L112)

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string` = `undefined`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L113)

___

### operationalPort

• **operationalPort**: `number` = `-1`

#### Inherited from

[State](behavior_cluster_export._internal_.NetworkBehavior.State.md).[operationalPort](behavior_cluster_export._internal_.NetworkBehavior.State.md#operationalport)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L35)

___

### port

• **port**: `number` = `5540`

#### Inherited from

[State](behavior_cluster_export._internal_.NetworkBehavior.State.md).[port](behavior_cluster_export._internal_.NetworkBehavior.State.md#port)

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L34)

___

### subscriptionOptions

• `Optional` **subscriptionOptions**: [`SubscriptionOptions`](../interfaces/node_export._internal_.SubscriptionOptions-1.md) = `undefined`

#### Defined in

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L119)
