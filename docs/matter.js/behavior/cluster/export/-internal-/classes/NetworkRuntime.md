[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / NetworkRuntime

# Class: `abstract` NetworkRuntime

Base class for networking implementation.

## Extended by

- [`ServerNetworkRuntime`](../../../../../node/export/-internal-/classes/ServerNetworkRuntime.md)

## Constructors

### new NetworkRuntime()

> **new NetworkRuntime**(`owner`): [`NetworkRuntime`](NetworkRuntime.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Node`](../../../../../node/export/classes/Node.md)\<[`RootEndpoint`](../../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\> |

#### Returns

[`NetworkRuntime`](NetworkRuntime.md)

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L23)

## Properties

### #closed

> `private` **#closed**: `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L20)

***

### #closing

> `private` **#closing**: `Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L18)

***

### #owner

> `private` **#owner**: [`Node`](../../../../../node/export/classes/Node.md)\<[`RootEndpoint`](../../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L17)

***

### #resolveClosed()

> `private` **#resolveClosed**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L21)

***

### #resolveClosing()

> `private` **#resolveClosing**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L19)

***

### operationalPort

> `abstract` **operationalPort**: `number`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L81)

## Accessors

### owner

> `get` `protected` **owner**(): [`Node`](../../../../../node/export/classes/Node.md)\<[`RootEndpoint`](../../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\>

#### Returns

[`Node`](../../../../../node/export/classes/Node.md)\<[`RootEndpoint`](../../../../../endpoint/definitions/system/RootEndpoint/interfaces/RootEndpoint.md)\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L89)

## Methods

### #stop()

> `private` **#stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L73)

***

### blockNewActivity()

> `protected` `abstract` **blockNewActivity**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L87)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L68)

***

### run()

> **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L41)

***

### start()

> `protected` `abstract` **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L83)

***

### stop()

> `protected` `abstract` **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/behavior/system/network/NetworkRuntime.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/network/NetworkRuntime.ts#L85)
