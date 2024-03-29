[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / MatterDevice

# Class: MatterDevice

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](exports_cluster._internal_.MatterDevice.md#constructor)

### Properties

- [#private](exports_cluster._internal_.MatterDevice.md##private)
- [activeCommissioningEndCallback](exports_cluster._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](exports_cluster._internal_.MatterDevice.md#activecommissioningmode)
- [announceAsCommissionable](exports_cluster._internal_.MatterDevice.md#announceascommissionable)
- [announceInterval](exports_cluster._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](exports_cluster._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](exports_cluster._internal_.MatterDevice.md#broadcasters)
- [channelManager](exports_cluster._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](exports_cluster._internal_.MatterDevice.md#commissioningchangedcallback)
- [fabricStorage](exports_cluster._internal_.MatterDevice.md#fabricstorage)
- [getCommissioningConfig](exports_cluster._internal_.MatterDevice.md#getcommissioningconfig)
- [isClosing](exports_cluster._internal_.MatterDevice.md#isclosing)
- [scanners](exports_cluster._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](exports_cluster._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](exports_cluster._internal_.MatterDevice.md#sessionchangedcallback)
- [sessionStorage](exports_cluster._internal_.MatterDevice.md#sessionstorage)
- [transportInterfaces](exports_cluster._internal_.MatterDevice.md#transportinterfaces)

### Accessors

- [construction](exports_cluster._internal_.MatterDevice.md#construction)
- [exchangeManager](exports_cluster._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](exports_cluster._internal_.MatterDevice.md#fabricmanager)
- [failsafeContext](exports_cluster._internal_.MatterDevice.md#failsafecontext)
- [sessionManager](exports_cluster._internal_.MatterDevice.md#sessionmanager)

### Methods

- [addBroadcaster](exports_cluster._internal_.MatterDevice.md#addbroadcaster)
- [addProtocolHandler](exports_cluster._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](exports_cluster._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](exports_cluster._internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](exports_cluster._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](exports_cluster._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](exports_cluster._internal_.MatterDevice.md#announce)
- [assertFailSafeArmed](exports_cluster._internal_.MatterDevice.md#assertfailsafearmed)
- [beginTimed](exports_cluster._internal_.MatterDevice.md#begintimed)
- [close](exports_cluster._internal_.MatterDevice.md#close)
- [deleteBroadcaster](exports_cluster._internal_.MatterDevice.md#deletebroadcaster)
- [deleteTransportInterface](exports_cluster._internal_.MatterDevice.md#deletetransportinterface)
- [endCommissioning](exports_cluster._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](exports_cluster._internal_.MatterDevice.md#existsopenpasesession)
- [findDevice](exports_cluster._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](exports_cluster._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](exports_cluster._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](exports_cluster._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](exports_cluster._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](exports_cluster._internal_.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](exports_cluster._internal_.MatterDevice.md#getnextavailablesessionid)
- [hasBroadcaster](exports_cluster._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](exports_cluster._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](exports_cluster._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](exports_cluster._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](exports_cluster._internal_.MatterDevice.md#isfailsafearmed)
- [saveResumptionRecord](exports_cluster._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](exports_cluster._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](exports_cluster._internal_.MatterDevice.md#sendfabricannouncements)
- [start](exports_cluster._internal_.MatterDevice.md#start)
- [startAnnouncement](exports_cluster._internal_.MatterDevice.md#startannouncement)
- [create](exports_cluster._internal_.MatterDevice.md#create)

## Constructors

### constructor

• **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](exports_cluster._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/exports_cluster._internal_.Configuration.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/exports_fabric.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |

#### Returns

[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:44

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:26

___

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:38

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:37

___

### announceAsCommissionable

• `Private` **announceAsCommissionable**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:63

___

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:39

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:40

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:33

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:35

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:30

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:28

___

### getCommissioningConfig

• `Private` `Readonly` **getCommissioningConfig**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:29

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:41

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:32

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:36

___

### sessionChangedCallback

• `Private` `Readonly` **sessionChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:31

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:27

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:34

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:42

___

### exchangeManager

• `get` **exchangeManager**(): [`ExchangeManager`](exports_protocol.ExchangeManager.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Returns

[`ExchangeManager`](exports_protocol.ExchangeManager.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:47

___

### fabricManager

• `get` **fabricManager**(): [`FabricManager`](exports_fabric.FabricManager.md)

#### Returns

[`FabricManager`](exports_fabric.FabricManager.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:45

___

### failsafeContext

• `get` **failsafeContext**(): [`FailsafeContext`](exports_common.FailsafeContext-1.md)

#### Returns

[`FailsafeContext`](exports_common.FailsafeContext-1.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:48

___

### sessionManager

• `get` **sessionManager**(): [`SessionManager`](exports_session.SessionManager.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Returns

[`SessionManager`](exports_session.SessionManager.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:46

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:54

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\> |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:59

___

### addScanner

▸ **addScanner**(`scanner`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:52

___

### addTransportInterface

▸ **addTransportInterface**(`transport`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:56

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

packages/matter.js/dist/esm/MatterDevice.d.ts:75

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](exports_session.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:74

___

### announce

▸ **announce**(`announceOnce?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announceOnce?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:62

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

packages/matter.js/dist/esm/MatterDevice.d.ts:50

___

### beginTimed

▸ **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](exports_common.FailsafeContext-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:49

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:82

___

### deleteBroadcaster

▸ **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:55

___

### deleteTransportInterface

▸ **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:57

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:76

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:77

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/exports_common.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](exports_session.Session.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>  }\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:78

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:66

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:70

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:83

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:68

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:72

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:65

___

### hasBroadcaster

▸ **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:53

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

packages/matter.js/dist/esm/MatterDevice.d.ts:58

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:69

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:73

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:51

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:71

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:64

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |
| `expireCommissioningAnnouncement?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:67

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:60

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:61

___

### create

▸ **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/exports_cluster._internal_.Configuration.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/exports_fabric.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |

#### Returns

`Promise`\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:43
