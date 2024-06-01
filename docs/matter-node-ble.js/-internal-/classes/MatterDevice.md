[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / MatterDevice

# Class: MatterDevice

## Constructors

### new MatterDevice()

> **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](MatterDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration-1.md) |
| `minimumCaseSessionsPerFabricAndNode` | `number` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` |

#### Returns

[`MatterDevice`](MatterDevice.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:43

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:26

***

### activeCommissioningEndCallback?

> `private` `optional` **activeCommissioningEndCallback**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:38

***

### activeCommissioningMode

> `private` **activeCommissioningMode**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:37

***

### announceAsCommissionable

> `private` **announceAsCommissionable**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:64

***

### announceInterval

> `private` **announceInterval**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:39

***

### announcementStartedTime

> `private` **announcementStartedTime**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:40

***

### broadcasters

> `private` `readonly` **broadcasters**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:33

***

### channelManager

> `private` `readonly` **channelManager**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:35

***

### commissioningChangedCallback

> `private` `readonly` **commissioningChangedCallback**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:30

***

### fabricStorage

> `readonly` **fabricStorage**: [`StorageContext`](StorageContext.md)\<`any`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:28

***

### getCommissioningConfig

> `private` `readonly` **getCommissioningConfig**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:29

***

### scanners

> `private` `readonly` **scanners**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:32

***

### secureChannelProtocol

> `private` `readonly` **secureChannelProtocol**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:36

***

### sessionChangedCallback

> `private` `readonly` **sessionChangedCallback**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:31

***

### sessionStorage

> `readonly` **sessionStorage**: [`StorageContext`](StorageContext.md)\<`any`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:27

***

### transportInterfaces

> `private` `readonly` **transportInterfaces**: `any`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:34

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:41

***

### exchangeManager

> `get` **exchangeManager**(): [`ExchangeManager`](ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`ExchangeManager`](ExchangeManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:46

***

### fabricManager

> `get` **fabricManager**(): [`FabricManager`](FabricManager.md)

#### Returns

[`FabricManager`](FabricManager.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:44

***

### failsafeContext

> `get` **failsafeContext**(): [`FailsafeContext`](FailsafeContext.md)

#### Returns

[`FailsafeContext`](FailsafeContext.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:47

***

### isClosing

> `get` **isClosing**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:48

***

### sessionManager

> `get` **sessionManager**(): [`SessionManager`](SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Returns

[`SessionManager`](SessionManager.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:45

## Methods

### addBroadcaster()

> **addBroadcaster**(`broadcaster`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/InstanceBroadcaster.md) |

#### Returns

`this`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:54

***

### addProtocolHandler()

> **addProtocolHandler**(`protocol`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<[`MatterDevice`](MatterDevice.md)\> |

#### Returns

`this`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:59

***

### addScanner()

> **addScanner**(`scanner`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/Scanner.md) |

#### Returns

`this`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:52

***

### addTransportInterface()

> **addTransportInterface**(`transport`): `this`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/TransportInterface.md) |

#### Returns

`this`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:56

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

matter.js/dist/esm/MatterDevice.d.ts:76

***

### allowEnhancedCommissioning()

> **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:75

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

matter.js/dist/esm/MatterDevice.d.ts:63

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

matter.js/dist/esm/MatterDevice.d.ts:50

***

### beginTimed()

> **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](FailsafeContext.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:49

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:83

***

### deleteBroadcaster()

> **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:55

***

### deleteTransportInterface()

> **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:57

***

### endCommissioning()

> **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:77

***

### existsOpenPaseSession()

> **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:78

***

### expireAllFabricAnnouncements()

> **expireAllFabricAnnouncements**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:62

***

### findDevice()

> **findDevice**(`fabric`, `nodeId`, `timeOutSeconds`?): `Promise`\<`undefined` \| `object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `timeOutSeconds`? | `number` |

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:79

***

### findFabricFromDestinationId()

> **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:67

***

### findResumptionRecordById()

> **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:71

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

matter.js/dist/esm/MatterDevice.d.ts:84

***

### getFabricByIndex()

> **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../README.md#fabricindex-1) |

#### Returns

`undefined` \| [`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/MatterDevice.d.ts:69

***

### getFabrics()

> **getFabrics**(): [`Fabric`](Fabric.md)[]

#### Returns

[`Fabric`](Fabric.md)[]

#### Source

matter.js/dist/esm/MatterDevice.d.ts:73

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:66

***

### hasBroadcaster()

> **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:53

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

matter.js/dist/esm/MatterDevice.d.ts:58

***

### initiateExchange()

> **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](MessageExchange.md)\<[`MatterDevice`](MatterDevice.md)\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:70

***

### isCommissioned()

> **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:74

***

### isFailsafeArmed()

> **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterDevice.d.ts:51

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:72

***

### sendCommissionableAnnouncement()

> **sendCommissionableAnnouncement**(`mode`, `discriminator`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enumerations/CommissioningWindowStatus.md) |
| `discriminator`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:65

***

### sendFabricAnnouncements()

> **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](Fabric.md)[] |
| `expireCommissioningAnnouncement`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:68

***

### start()

> **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:60

***

### startAnnouncement()

> **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:61

***

### create()

> `static` **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `minimumCaseSessionsPerFabricAndNode`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/Configuration-1.md) |
| `minimumCaseSessionsPerFabricAndNode` | `undefined` \| `number` |
| `commissioningChangedCallback` | (`fabricIndex`, `fabricAction`) => `void` |
| `sessionChangedCallback` | (`fabricIndex`) => `void` |

#### Returns

`Promise`\<[`MatterDevice`](MatterDevice.md)\>

#### Source

matter.js/dist/esm/MatterDevice.d.ts:42
