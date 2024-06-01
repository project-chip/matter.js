[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / MatterDevice

# Class: MatterDevice

## Constructors

### new MatterDevice()

> **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration.md) |
| `minimumCaseSessionsPerFabricAndNode` | `number` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:43

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:26

***

### activeCommissioningEndCallback?

> `private` `optional` **activeCommissioningEndCallback**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:38

***

### activeCommissioningMode

> `private` **activeCommissioningMode**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:37

***

### announceAsCommissionable

> `private` **announceAsCommissionable**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:64

***

### announceInterval

> `private` **announceInterval**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:39

***

### announcementStartedTime

> `private` **announcementStartedTime**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:40

***

### broadcasters

> `private` `readonly` **broadcasters**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:33

***

### channelManager

> `private` `readonly` **channelManager**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:35

***

### commissioningChangedCallback

> `private` `readonly` **commissioningChangedCallback**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:30

***

### fabricStorage

> `readonly` **fabricStorage**: [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:28

***

### getCommissioningConfig

> `private` `readonly` **getCommissioningConfig**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:29

***

### scanners

> `private` `readonly` **scanners**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:32

***

### secureChannelProtocol

> `private` `readonly` **secureChannelProtocol**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:36

***

### sessionChangedCallback

> `private` `readonly` **sessionChangedCallback**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:31

***

### sessionStorage

> `readonly` **sessionStorage**: [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:27

***

### transportInterfaces

> `private` `readonly` **transportInterfaces**: `any`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:34

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:41

***

### exchangeManager

> `get` **exchangeManager**(): [`ExchangeManager`](../../../protocol/classes/ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`ExchangeManager`](../../../protocol/classes/ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:46

***

### fabricManager

> `get` **fabricManager**(): [`FabricManager`](../../../fabric/classes/FabricManager.md)

#### Returns

[`FabricManager`](../../../fabric/classes/FabricManager.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:44

***

### failsafeContext

> `get` **failsafeContext**(): [`FailsafeContext`](../../../common/classes/FailsafeContext.md)

#### Returns

[`FailsafeContext`](../../../common/classes/FailsafeContext.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:47

***

### isClosing

> `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:48

***

### sessionManager

> `get` **sessionManager**(): [`SessionManager`](../../../session/classes/SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`SessionManager`](../../../session/classes/SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:45

## Methods

### addBroadcaster()

> **addBroadcaster**(`broadcaster`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:54

***

### addProtocolHandler()

> **addProtocolHandler**(`protocol`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../../../protocol/interfaces/ProtocolHandler.md)\<[`MatterDevice`](MatterDevice.md)\> |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:59

***

### addScanner()

> **addScanner**(`scanner`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../../../common/interfaces/Scanner.md) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:52

***

### addTransportInterface()

> **addTransportInterface**(`transport`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../../../common/interfaces/TransportInterface.md) |

#### Returns

`this`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:56

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

packages/matter.js/dist/esm/MatterDevice.d.ts:76

***

### allowEnhancedCommissioning()

> **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](../../../session/classes/PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:75

***

### announce()

> **announce**(`announceOnce`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `announceOnce`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:63

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

packages/matter.js/dist/esm/MatterDevice.d.ts:50

***

### beginTimed()

> **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](../../../common/classes/FailsafeContext.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:49

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:83

***

### deleteBroadcaster()

> **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:55

***

### deleteTransportInterface()

> **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../../../common/interfaces/TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:57

***

### endCommissioning()

> **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:77

***

### existsOpenPaseSession()

> **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:78

***

### expireAllFabricAnnouncements()

> **expireAllFabricAnnouncements**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:62

***

### findDevice()

> **findDevice**(`fabric`, `nodeId`, `timeOutSeconds`?): `Promise`\<`undefined` \| `object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/README.md#nodeid) |
| `timeOutSeconds`? | `number` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:79

***

### findFabricFromDestinationId()

> **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](../../../fabric/classes/Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](../../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:67

***

### findResumptionRecordById()

> **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../../../session/interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../../../session/interfaces/ResumptionRecord.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:71

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:84

***

### getFabricByIndex()

> **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](../../../fabric/classes/Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../datatype/README.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](../../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:69

***

### getFabrics()

> **getFabrics**(): [`Fabric`](../../../fabric/classes/Fabric.md)[]

#### Returns

[`Fabric`](../../../fabric/classes/Fabric.md)[]

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:73

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:66

***

### hasBroadcaster()

> **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../../../common/interfaces/InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:53

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

packages/matter.js/dist/esm/MatterDevice.d.ts:58

***

### initiateExchange()

> **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](../../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/README.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](../../../protocol/classes/MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:70

***

### isCommissioned()

> **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:74

***

### isFailsafeArmed()

> **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:51

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../../../session/interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:72

***

### sendCommissionableAnnouncement()

> **sendCommissionableAnnouncement**(`mode`, `discriminator`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../../namespaces/AdministratorCommissioning/enumerations/CommissioningWindowStatus.md) |
| `discriminator`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:65

***

### sendFabricAnnouncements()

> **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../../fabric/classes/Fabric.md)[] |
| `expireCommissioningAnnouncement`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:68

***

### start()

> **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:60

***

### startAnnouncement()

> **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:61

***

### create()

> `static` **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration.md) |
| `minimumCaseSessionsPerFabricAndNode` | `undefined` \| `number` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` |

#### Returns

`Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Source

packages/matter.js/dist/esm/MatterDevice.d.ts:42
