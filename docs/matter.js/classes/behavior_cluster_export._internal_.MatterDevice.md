[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / MatterDevice

# Class: MatterDevice

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.MatterDevice.md#constructor)

### Properties

- [#announcementMutex](behavior_cluster_export._internal_.MatterDevice.md##announcementmutex)
- [#construction](behavior_cluster_export._internal_.MatterDevice.md##construction)
- [#exchangeManager](behavior_cluster_export._internal_.MatterDevice.md##exchangemanager)
- [#fabricManager](behavior_cluster_export._internal_.MatterDevice.md##fabricmanager)
- [#failsafeContext](behavior_cluster_export._internal_.MatterDevice.md##failsafecontext)
- [#sessionManager](behavior_cluster_export._internal_.MatterDevice.md##sessionmanager)
- [activeCommissioningEndCallback](behavior_cluster_export._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](behavior_cluster_export._internal_.MatterDevice.md#activecommissioningmode)
- [announceInterval](behavior_cluster_export._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](behavior_cluster_export._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](behavior_cluster_export._internal_.MatterDevice.md#broadcasters)
- [channelManager](behavior_cluster_export._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](behavior_cluster_export._internal_.MatterDevice.md#commissioningchangedcallback)
- [fabricStorage](behavior_cluster_export._internal_.MatterDevice.md#fabricstorage)
- [getCommissioningConfig](behavior_cluster_export._internal_.MatterDevice.md#getcommissioningconfig)
- [isClosing](behavior_cluster_export._internal_.MatterDevice.md#isclosing)
- [scanners](behavior_cluster_export._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](behavior_cluster_export._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](behavior_cluster_export._internal_.MatterDevice.md#sessionchangedcallback)
- [sessionStorage](behavior_cluster_export._internal_.MatterDevice.md#sessionstorage)
- [transportInterfaces](behavior_cluster_export._internal_.MatterDevice.md#transportinterfaces)

### Accessors

- [construction](behavior_cluster_export._internal_.MatterDevice.md#construction)
- [exchangeManager](behavior_cluster_export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](behavior_cluster_export._internal_.MatterDevice.md#fabricmanager)
- [failsafeContext](behavior_cluster_export._internal_.MatterDevice.md#failsafecontext)
- [sessionManager](behavior_cluster_export._internal_.MatterDevice.md#sessionmanager)

### Methods

- [addBroadcaster](behavior_cluster_export._internal_.MatterDevice.md#addbroadcaster)
- [addProtocolHandler](behavior_cluster_export._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](behavior_cluster_export._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](behavior_cluster_export._internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](behavior_cluster_export._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](behavior_cluster_export._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](behavior_cluster_export._internal_.MatterDevice.md#announce)
- [announceAsCommissionable](behavior_cluster_export._internal_.MatterDevice.md#announceascommissionable)
- [assertFailSafeArmed](behavior_cluster_export._internal_.MatterDevice.md#assertfailsafearmed)
- [beginTimed](behavior_cluster_export._internal_.MatterDevice.md#begintimed)
- [close](behavior_cluster_export._internal_.MatterDevice.md#close)
- [deleteBroadcaster](behavior_cluster_export._internal_.MatterDevice.md#deletebroadcaster)
- [deleteTransportInterface](behavior_cluster_export._internal_.MatterDevice.md#deletetransportinterface)
- [endCommissioning](behavior_cluster_export._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](behavior_cluster_export._internal_.MatterDevice.md#existsopenpasesession)
- [findDevice](behavior_cluster_export._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](behavior_cluster_export._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](behavior_cluster_export._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](behavior_cluster_export._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](behavior_cluster_export._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](behavior_cluster_export._internal_.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](behavior_cluster_export._internal_.MatterDevice.md#getnextavailablesessionid)
- [hasBroadcaster](behavior_cluster_export._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](behavior_cluster_export._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](behavior_cluster_export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](behavior_cluster_export._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](behavior_cluster_export._internal_.MatterDevice.md#isfailsafearmed)
- [saveResumptionRecord](behavior_cluster_export._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](behavior_cluster_export._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](behavior_cluster_export._internal_.MatterDevice.md#sendfabricannouncements)
- [start](behavior_cluster_export._internal_.MatterDevice.md#start)
- [startAnnouncement](behavior_cluster_export._internal_.MatterDevice.md#startannouncement)
- [create](behavior_cluster_export._internal_.MatterDevice.md#create)

## Constructors

### constructor

• **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/behavior_cluster_export._internal_.Configuration.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/fabric_export.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |

#### Returns

[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L95)

## Properties

### #announcementMutex

• `Private` **#announcementMutex**: [`Mutex`](behavior_cluster_export._internal_.Mutex.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:71](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L71)

___

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L72)

___

### #exchangeManager

• `Private` `Readonly` **#exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L63)

___

### #fabricManager

• `Private` `Readonly` **#fabricManager**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L64)

___

### #failsafeContext

• `Private` `Optional` **#failsafeContext**: [`FailsafeContext`](common_export.FailsafeContext-1.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L66)

___

### #sessionManager

• `Private` `Readonly` **#sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L65)

___

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L59)

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L58)

___

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L60)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L61)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L54)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L56)

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/fabric_export.FabricAction.md)) => `void`

#### Type declaration

▸ (`fabricIndex`, `fabricAction`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `fabricAction` | [`FabricAction`](../enums/fabric_export.FabricAction.md) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L99)

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L97)

___

### getCommissioningConfig

• `Private` `Readonly` **getCommissioningConfig**: () => [`Configuration`](../interfaces/behavior_cluster_export._internal_.Configuration.md)

#### Type declaration

▸ (): [`Configuration`](../interfaces/behavior_cluster_export._internal_.Configuration.md)

##### Returns

[`Configuration`](../interfaces/behavior_cluster_export._internal_.Configuration.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L98)

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L62)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L53)

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L57)

___

### sessionChangedCallback

• `Private` `Readonly` **sessionChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L100)

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L96)

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L55)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L74)

___

### exchangeManager

• `get` **exchangeManager**(): [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Returns

[`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L174)

___

### fabricManager

• `get` **fabricManager**(): [`FabricManager`](fabric_export.FabricManager.md)

#### Returns

[`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L166)

___

### failsafeContext

• `get` **failsafeContext**(): [`FailsafeContext`](common_export.FailsafeContext-1.md)

#### Returns

[`FailsafeContext`](common_export.FailsafeContext-1.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L178)

___

### sessionManager

• `get` **sessionManager**(): [`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Returns

[`SessionManager`](session_export.SessionManager.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L170)

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L226)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L257)

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |

#### Returns

[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L217)

___

### addTransportInterface

▸ **addTransportInterface**(`transport`): [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:239](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L239)

___

### allowBasicCommissioning

▸ **allowBasicCommissioning**(`commissioningEndCallback?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningEndCallback?` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:420](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L420)

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](session_export.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:401](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L401)

___

### announce

▸ **announce**(`announceOnce?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `announceOnce` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:276](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L276)

___

### announceAsCommissionable

▸ **announceAsCommissionable**(`mode`, `activeCommissioningEndCallback?`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `activeCommissioningEndCallback?` | () => `void` |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:321](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L321)

___

### assertFailSafeArmed

▸ **assertFailSafeArmed**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L205)

___

### beginTimed

▸ **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](common_export.FailsafeContext-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L183)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:485](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L485)

___

### deleteBroadcaster

▸ **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L231)

___

### deleteTransportInterface

▸ **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L245)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:440](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L440)

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:463](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L463)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](session_export.Session.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>  }\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:467](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L467)

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L366)

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:385](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L385)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:504](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L504)

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:377](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L377)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:393](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L393)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L362)

___

### hasBroadcaster

▸ **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:222](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L222)

___

### hasProtocolHandler

▸ **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:253](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L253)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:381](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L381)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:397](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L397)

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L213)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:389](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L389)

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:345](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L345)

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncement` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:370](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L370)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:262](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L262)

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L266)

___

### create

▸ **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/behavior_cluster_export._internal_.Configuration.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/fabric_export.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |

#### Returns

`Promise`\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterDevice.ts#L78)
