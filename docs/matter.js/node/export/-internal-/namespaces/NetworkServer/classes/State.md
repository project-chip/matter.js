[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [node/export](../../../../README.md) / [\<internal\>](../../../README.md) / [NetworkServer](../README.md) / State

# Class: State

## Extends

- [`State`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md)

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

[`State`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md).[`constructor`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md#constructors)

## Properties

### ble?

> `optional` **ble**: `boolean` = `undefined`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L114)

***

### discoveryCapabilities

> **discoveryCapabilities**: [`TypeFromPartialBitSchema`](../../../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

#### Type declaration

##### ble

> **ble**: [`BitFlag`](../../../../../../schema/export/README.md#bitflag)

Device supports BLE for discovery when not commissioned.

##### onIpNetwork

> **onIpNetwork**: [`BitFlag`](../../../../../../schema/export/README.md#bitflag)

Device is already on the IP network.

##### softAccessPoint

> **softAccessPoint**: [`BitFlag`](../../../../../../schema/export/README.md#bitflag)

Device supports hosting a Soft-AP when not commissioned.

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L115)

***

### ipv4

> **ipv4**: `boolean` = `true`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L113)

***

### listeningAddressIpv4?

> `optional` **listeningAddressIpv4**: `string` = `undefined`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L111)

***

### listeningAddressIpv6?

> `optional` **listeningAddressIpv6**: `string` = `undefined`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L112)

***

### operationalPort

> **operationalPort**: `number` = `-1`

#### Inherited from

[`State`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md).[`operationalPort`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md#operationalport)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L35)

***

### port

> **port**: `number` = `5540`

#### Inherited from

[`State`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md).[`port`](../../../../../../behavior/cluster/export/-internal-/namespaces/NetworkBehavior/classes/State.md#port)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkBehavior.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkBehavior.ts#L34)

***

### subscriptionOptions?

> `optional` **subscriptionOptions**: [`SubscriptionOptions`](../../../interfaces/SubscriptionOptions.md) = `undefined`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkServer.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkServer.ts#L118)
