[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MatterDevice

# Class: MatterDevice

[\<internal\>](../modules/internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](internal_.MatterDevice.md#constructor)

### Properties

- [#private](internal_.MatterDevice.md##private)
- [activeCommissioningEndCallback](internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](internal_.MatterDevice.md#activecommissioningmode)
- [announceAsCommissionable](internal_.MatterDevice.md#announceascommissionable)
- [announceInterval](internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](internal_.MatterDevice.md#broadcasters)
- [channelManager](internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](internal_.MatterDevice.md#commissioningchangedcallback)
- [fabricStorage](internal_.MatterDevice.md#fabricstorage)
- [getCommissioningConfig](internal_.MatterDevice.md#getcommissioningconfig)
- [isClosing](internal_.MatterDevice.md#isclosing)
- [scanners](internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](internal_.MatterDevice.md#sessionchangedcallback)
- [sessionStorage](internal_.MatterDevice.md#sessionstorage)
- [transportInterfaces](internal_.MatterDevice.md#transportinterfaces)

### Accessors

- [construction](internal_.MatterDevice.md#construction)
- [exchangeManager](internal_.MatterDevice.md#exchangemanager)
- [fabricManager](internal_.MatterDevice.md#fabricmanager)
- [failsafeContext](internal_.MatterDevice.md#failsafecontext)
- [sessionManager](internal_.MatterDevice.md#sessionmanager)

### Methods

- [addBroadcaster](internal_.MatterDevice.md#addbroadcaster)
- [addProtocolHandler](internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](internal_.MatterDevice.md#addscanner)
- [addTransportInterface](internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](internal_.MatterDevice.md#announce)
- [assertFailSafeArmed](internal_.MatterDevice.md#assertfailsafearmed)
- [beginTimed](internal_.MatterDevice.md#begintimed)
- [close](internal_.MatterDevice.md#close)
- [deleteBroadcaster](internal_.MatterDevice.md#deletebroadcaster)
- [deleteTransportInterface](internal_.MatterDevice.md#deletetransportinterface)
- [endCommissioning](internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](internal_.MatterDevice.md#existsopenpasesession)
- [findDevice](internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](internal_.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](internal_.MatterDevice.md#getnextavailablesessionid)
- [hasBroadcaster](internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](internal_.MatterDevice.md#isfailsafearmed)
- [saveResumptionRecord](internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](internal_.MatterDevice.md#sendfabricannouncements)
- [start](internal_.MatterDevice.md#start)
- [startAnnouncement](internal_.MatterDevice.md#startannouncement)
- [create](internal_.MatterDevice.md#create)

## Constructors

### constructor

• **new MatterDevice**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/internal_.Configuration-1.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/internal_.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex)) => `void` |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:44

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:26

___

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:38

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:37

___

### announceAsCommissionable

• `Private` **announceAsCommissionable**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:63

___

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:39

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:40

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:33

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:35

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:30

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](internal_.StorageContext.md)\<`any`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:28

___

### getCommissioningConfig

• `Private` `Readonly` **getCommissioningConfig**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:29

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:41

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:32

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:36

___

### sessionChangedCallback

• `Private` `Readonly` **sessionChangedCallback**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:31

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](internal_.StorageContext.md)\<`any`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:27

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:34

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:42

___

### exchangeManager

• `get` **exchangeManager**(): [`ExchangeManager`](internal_.ExchangeManager.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Returns

[`ExchangeManager`](internal_.ExchangeManager.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:47

___

### fabricManager

• `get` **fabricManager**(): [`FabricManager`](internal_.FabricManager.md)

#### Returns

[`FabricManager`](internal_.FabricManager.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:45

___

### failsafeContext

• `get` **failsafeContext**(): [`FailsafeContext`](internal_.FailsafeContext-1.md)

#### Returns

[`FailsafeContext`](internal_.FailsafeContext-1.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:48

___

### sessionManager

• `get` **sessionManager**(): [`SessionManager`](internal_.SessionManager.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Returns

[`SessionManager`](internal_.SessionManager.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:46

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:54

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)\<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:59

___

### addScanner

▸ **addScanner**(`scanner`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/internal_.Scanner.md) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:52

___

### addTransportInterface

▸ **addTransportInterface**(`transport`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/internal_.TransportInterface.md) |

#### Returns

`this`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:56

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

matter.js/dist/esm/MatterDevice.d.ts:75

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](internal_.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:74

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

matter.js/dist/esm/MatterDevice.d.ts:62

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

matter.js/dist/esm/MatterDevice.d.ts:50

___

### beginTimed

▸ **beginTimed**(`failsafeContext`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `failsafeContext` | [`FailsafeContext`](internal_.FailsafeContext-1.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:49

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:82

___

### deleteBroadcaster

▸ **deleteBroadcaster**(`broadcaster`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:55

___

### deleteTransportInterface

▸ **deleteTransportInterface**(`transport`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`TransportInterface`](../interfaces/internal_.TransportInterface.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:57

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:76

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:77

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](internal_.Session.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:78

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:66

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:70

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:83

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:68

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](internal_.Fabric.md)[]

#### Returns

[`Fabric`](internal_.Fabric.md)[]

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:72

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:65

___

### hasBroadcaster

▸ **hasBroadcaster**(`broadcaster`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md) |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:53

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

matter.js/dist/esm/MatterDevice.d.ts:58

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:69

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:73

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:51

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:71

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/internal_.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:64

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](internal_.Fabric.md)[] |
| `expireCommissioningAnnouncement?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:67

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:60

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:61

___

### create

▸ **create**(`sessionStorage`, `fabricStorage`, `getCommissioningConfig`, `commissioningChangedCallback`, `sessionChangedCallback`): `Promise`\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `getCommissioningConfig` | () => [`Configuration`](../interfaces/internal_.Configuration-1.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex), `fabricAction`: [`FabricAction`](../enums/internal_.FabricAction.md)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex)) => `void` |

#### Returns

`Promise`\<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/esm/MatterDevice.d.ts:43
