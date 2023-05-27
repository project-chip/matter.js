[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterDevice

# Class: MatterDevice

[index](../modules/index.md).MatterDevice

## Table of contents

### Constructors

- [constructor](index.MatterDevice.md#constructor)

### Properties

- [announceInterval](index.MatterDevice.md#announceinterval)
- [announcementStartedTime](index.MatterDevice.md#announcementstartedtime)
- [broadcasters](index.MatterDevice.md#broadcasters)
- [channelManager](index.MatterDevice.md#channelmanager)
- [commissioningWindowOpened](index.MatterDevice.md#commissioningwindowopened)
- [deviceName](index.MatterDevice.md#devicename)
- [deviceType](index.MatterDevice.md#devicetype)
- [discriminator](index.MatterDevice.md#discriminator)
- [exchangeManager](index.MatterDevice.md#exchangemanager)
- [fabricManager](index.MatterDevice.md#fabricmanager)
- [netInterfaces](index.MatterDevice.md#netinterfaces)
- [productId](index.MatterDevice.md#productid)
- [scanners](index.MatterDevice.md#scanners)
- [sessionManager](index.MatterDevice.md#sessionmanager)
- [storageManager](index.MatterDevice.md#storagemanager)
- [vendorId](index.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](index.MatterDevice.md#addbroadcaster)
- [addFabric](index.MatterDevice.md#addfabric)
- [addNetInterface](index.MatterDevice.md#addnetinterface)
- [addProtocolHandler](index.MatterDevice.md#addprotocolhandler)
- [addScanner](index.MatterDevice.md#addscanner)
- [announce](index.MatterDevice.md#announce)
- [armFailSafe](index.MatterDevice.md#armfailsafe)
- [completeCommission](index.MatterDevice.md#completecommission)
- [createSecureSession](index.MatterDevice.md#createsecuresession)
- [findDevice](index.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](index.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](index.MatterDevice.md#findresumptionrecordbyid)
- [getFabricBuilder](index.MatterDevice.md#getfabricbuilder)
- [getFabricByIndex](index.MatterDevice.md#getfabricbyindex)
- [getFabrics](index.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](index.MatterDevice.md#getnextavailablesessionid)
- [initiateExchange](index.MatterDevice.md#initiateexchange)
- [isCommissioned](index.MatterDevice.md#iscommissioned)
- [openCommissioningModeWindow](index.MatterDevice.md#opencommissioningmodewindow)
- [saveResumptionRecord](index.MatterDevice.md#saveresumptionrecord)
- [start](index.MatterDevice.md#start)
- [startAnnouncement](index.MatterDevice.md#startannouncement)
- [stop](index.MatterDevice.md#stop)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `storageManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | `number` |
| `vendorId` | [`VendorId`](exports_datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:40

## Properties

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:37

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:38

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:31

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:35

___

### commissioningWindowOpened

• `Private` **commissioningWindowOpened**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:39

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:24

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:25

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:28

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:36

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:33

___

### netInterfaces

• `Private` `Readonly` **netInterfaces**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:32

___

### productId

• `Private` `Readonly` **productId**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:27

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:30

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:34

___

### storageManager

• `Private` `Readonly` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:29

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:26

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`Broadcaster`](../interfaces/exports_common.Broadcaster.md) |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:42

___

### addFabric

▸ **addFabric**(`fabric`): [`FabricIndex`](exports_datatype.FabricIndex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

[`FabricIndex`](exports_datatype.FabricIndex.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:51

___

### addNetInterface

▸ **addNetInterface**(`netInterface`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../interfaces/net.NetInterface.md) |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:43

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:44

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:41

___

### announce

▸ **announce**(`announceOnce?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `announceOnce?` | `boolean` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:47

___

### armFailSafe

▸ **armFailSafe**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:56

___

### completeCommission

▸ **completeCommission**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:59

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:49

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>  }\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:62

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:50

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:54

___

### getFabricBuilder

▸ **getFabricBuilder**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:57

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](exports_datatype.FabricIndex.md) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:52

___

### getFabrics

▸ **getFabrics**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:58

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:48

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `protocolId` | `number` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:53

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:60

___

### openCommissioningModeWindow

▸ **openCommissioningModeWindow**(`mode`, `discriminator`, `timeout`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `discriminator` | `number` |
| `timeout` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:61

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:55

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:45

___

### startAnnouncement

▸ **startAnnouncement**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:46

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:66
