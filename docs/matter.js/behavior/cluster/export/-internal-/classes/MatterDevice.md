[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / MatterDevice

# Class: MatterDevice

## Constructors

### new MatterDevice()

> **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration.md) |
| `minimumCaseSessionsPerFabricAndNode` | `number` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L97)

## Properties

### #announcementMutex

> `private` **#announcementMutex**: [`Mutex`](Mutex.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:71](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L71)

***

### #construction

> `private` **#construction**: [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L72)

***

### #exchangeManager

> `private` `readonly` **#exchangeManager**: [`ExchangeManager`](../../../../../protocol/export/classes/ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L63)

***

### #fabricManager

> `private` `readonly` **#fabricManager**: [`FabricManager`](../../../../../fabric/export/classes/FabricManager.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L64)

***

### #failsafeContext?

> `private` `optional` **#failsafeContext**: [`FailsafeContext`](../../../../../common/export/classes/FailsafeContext.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L66)

***

### #isClosing

> `private` **#isClosing**: `boolean` = `false`

#### Source

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L62)

***

### #sessionManager

> `private` `readonly` **#sessionManager**: [`SessionManager`](../../../../../session/export/classes/SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L65)

***

### activeCommissioningEndCallback()?

> `private` `optional` **activeCommissioningEndCallback**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L59)

***

### activeCommissioningMode

> `private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../../../../../cluster/export/namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Source

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L58)

***

### announceInterval

> `private` **announceInterval**: [`Timer`](../../../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L60)

***

### announcementStartedTime

> `private` **announcementStartedTime**: `null` \| `number` = `null`

#### Source

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L61)

***

### broadcasters

> `private` `readonly` **broadcasters**: [`InstanceBroadcaster`](../../../../../common/export/interfaces/InstanceBroadcaster.md)[]

#### Source

[packages/matter.js/src/MatterDevice.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L54)

***

### channelManager

> `private` `readonly` **channelManager**: [`ChannelManager`](../../../../../protocol/export/classes/ChannelManager.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L56)

***

### commissioningChangedCallback()

> `private` `readonly` **commissioningChangedCallback**: (`fabricIndex`, `fabricAction`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex) |
| `fabricAction` | [`FabricAction`](../../../../../fabric/export/enumerations/FabricAction.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterDevice.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L102)

***

### fabricStorage

> `readonly` **fabricStorage**: [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L99)

***

### getCommissioningConfig()

> `private` `readonly` **getCommissioningConfig**: () => [`Configuration`](../interfaces/Configuration.md)

#### Returns

[`Configuration`](../interfaces/Configuration.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:100](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L100)

***

### scanners

> `private` `readonly` **scanners**: [`Scanner`](../../../../../common/export/interfaces/Scanner.md)[]

#### Source

[packages/matter.js/src/MatterDevice.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L53)

***

### secureChannelProtocol

> `private` `readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](../../../../../protocol/securechannel/export/classes/SecureChannelProtocol.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L57)

***

### sessionChangedCallback()

> `private` `readonly` **sessionChangedCallback**: (`fabricIndex`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterDevice.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L103)

***

### sessionStorage

> `readonly` **sessionStorage**: [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L98)

***

### transportInterfaces

> `private` `readonly` **transportInterfaces**: ([`TransportInterface`](../../../../../common/export/interfaces/TransportInterface.md) \| [`NetInterface`](../../../../../net/export/interfaces/NetInterface.md))[]

#### Source

[packages/matter.js/src/MatterDevice.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L55)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L74)

***

### exchangeManager

> `get` **exchangeManager**(): [`ExchangeManager`](../../../../../protocol/export/classes/ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`ExchangeManager`](../../../../../protocol/export/classes/ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L188)

***

### fabricManager

> `get` **fabricManager**(): [`FabricManager`](../../../../../fabric/export/classes/FabricManager.md)

#### Returns

[`FabricManager`](../../../../../fabric/export/classes/FabricManager.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L180)

***

### failsafeContext

> `get` **failsafeContext**(): [`FailsafeContext`](../../../../../common/export/classes/FailsafeContext.md)

#### Returns

[`FailsafeContext`](../../../../../common/export/classes/FailsafeContext.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L192)

***

### isClosing

> `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:197](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L197)

***

### sessionManager

> `get` **sessionManager**(): [`SessionManager`](../../../../../session/export/classes/SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`SessionManager`](../../../../../session/export/classes/SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L184)

## Methods

### addBroadcaster()

> **addBroadcaster**(`broadcaster`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../../../common/export/interfaces/InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L244)

***

### addProtocolHandler()

> **addProtocolHandler**(`protocol`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../../../../../protocol/export/interfaces/ProtocolHandler.md)\<[`MatterDevice`](MatterDevice.md)\> |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L275)

***

### addScanner()

> **addScanner**(`scanner`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../../../../../common/export/interfaces/Scanner.md) |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L235)

***

### addTransportInterface()

> **addTransportInterface**(`transport`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../../../../../common/export/interfaces/TransportInterface.md) |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:257](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L257)

***

### allowBasicCommissioning()

> **allowBasicCommissioning**(`commissioningEndCallback`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissioningEndCallback`? | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:442](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L442)

***

### allowEnhancedCommissioning()

> **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](../../../../../session/export/classes/PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:423](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L423)

***

### announce()

> **announce**(`announceOnce`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `announceOnce` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L300)

***

### announceAsCommissionable()

> `private` **announceAsCommissionable**(`mode`, `activeCommissioningEndCallback`?, `discriminator`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../../../../../cluster/export/namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md) |
| `activeCommissioningEndCallback`? | () => `void` |
| `discriminator`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:343](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L343)

***

### assertFailSafeArmed()

> **assertFailSafeArmed**(`message`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message`? | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterDevice.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L223)

***

### beginTimed()

> **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](../../../../../common/export/classes/FailsafeContext.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L201)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:507](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L507)

***

### deleteBroadcaster()

> **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../../../common/export/interfaces/InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L249)

***

### deleteTransportInterface()

> **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../../../../../common/export/interfaces/TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L263)

***

### endCommissioning()

> **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:462](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L462)

***

### existsOpenPaseSession()

> **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:485](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L485)

***

### expireAllFabricAnnouncements()

> **expireAllFabricAnnouncements**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:294](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L294)

***

### findDevice()

> **findDevice**(`fabric`, `nodeId`, `timeOutSeconds`): `Promise`\<`undefined` \| `object`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../../../../../datatype/export/README.md#nodeid) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:489](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L489)

***

### findFabricFromDestinationId()

> **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](../../../../../fabric/export/classes/Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](../../../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:388](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L388)

***

### findResumptionRecordById()

> **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../../../../../session/export/interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../../../../../session/export/interfaces/ResumptionRecord.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:407](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L407)

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

[packages/matter.js/src/MatterDevice.ts:526](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L526)

***

### getFabricByIndex()

> **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](../../../../../fabric/export/classes/Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](../../../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/MatterDevice.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L399)

***

### getFabrics()

> **getFabrics**(): [`Fabric`](../../../../../fabric/export/classes/Fabric.md)[]

#### Returns

[`Fabric`](../../../../../fabric/export/classes/Fabric.md)[]

#### Source

[packages/matter.js/src/MatterDevice.ts:415](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L415)

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:384](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L384)

***

### hasBroadcaster()

> **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../../../common/export/interfaces/InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L240)

***

### hasProtocolHandler()

> **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:271](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L271)

***

### initiateExchange()

> **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](../../../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../../../datatype/export/README.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](../../../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:403](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L403)

***

### isCommissioned()

> **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:419](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L419)

***

### isFailsafeArmed()

> **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterDevice.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L231)

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../../../../../session/export/interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:411](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L411)

***

### sendCommissionableAnnouncement()

> **sendCommissionableAnnouncement**(`mode`, `discriminator`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../../../../../cluster/export/namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md) |
| `discriminator`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L367)

***

### sendFabricAnnouncements()

> **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](../../../../../fabric/export/classes/Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncement` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:392](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L392)

***

### start()

> **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:280](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L280)

***

### startAnnouncement()

> **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterDevice.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L284)

***

### create()

> `static` **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\> | `undefined` |
| `fabricStorage` | [`StorageContext`](../../../../../storage/export/classes/StorageContext.md)\<`any`\> | `undefined` |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration.md) | `undefined` |
| `minimumCaseSessionsPerFabricAndNode` | `number` | `3` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` | `undefined` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` | `undefined` |

#### Returns

`Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Source

[packages/matter.js/src/MatterDevice.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterDevice.ts#L78)
