[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterDevice

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
| `vendorId` | [`VendorId`](datatype.VendorId.md) |
| `productId` | `number` |
| `discriminator` | `number` |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/MatterDevice.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L48)

## Properties

### announceInterval

• `Private` **announceInterval**: ``null`` \| [`Timer`](../interfaces/time.Timer.md) = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L44)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L45)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`Broadcaster`](../interfaces/common.Broadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L38)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L42)

___

### commissioningWindowOpened

• `Private` **commissioningWindowOpened**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L46)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L49)

___

### deviceType

• `Private` `Readonly` **deviceType**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L50)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L53)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L43)

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L40)

___

### netInterfaces

• `Private` `Readonly` **netInterfaces**: [`NetInterface`](../interfaces/net.NetInterface.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L39)

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L52)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L37)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L41)

___

### storageManager

• `Private` `Readonly` **storageManager**: [`StorageManager`](storage.StorageManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L54)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](datatype.VendorId.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L51)

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`Broadcaster`](../interfaces/common.Broadcaster.md) |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L69)

___

### addFabric

▸ **addFabric**(`fabric`): [`FabricIndex`](datatype.FabricIndex.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |

#### Returns

[`FabricIndex`](datatype.FabricIndex.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:154](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L154)

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

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L74)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:80](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L80)

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](index.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common.Scanner.md) |

#### Returns

[`MatterDevice`](index.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L64)

___

### announce

▸ **announce**(`announceOnce?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `announceOnce` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:99](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L99)

___

### armFailSafe

▸ **armFailSafe**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:179](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L179)

___

### completeCommission

▸ **completeCommission**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:191](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L191)

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |
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

[packages/matter.js/src/MatterDevice.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L146)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](datatype.NodeId.md) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/net.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session.Session.md)<[`MatterDevice`](index.MatterDevice.md)\>  }\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:210](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L210)

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

[packages/matter.js/src/MatterDevice.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L150)

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

[packages/matter.js/src/MatterDevice.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L171)

___

### getFabricBuilder

▸ **getFabricBuilder**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:183](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L183)

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](datatype.FabricIndex.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:163](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L163)

___

### getFabrics

▸ **getFabrics**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:187](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L187)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:142](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L142)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `protocolId` | `number` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:167](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L167)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:196](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L196)

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

[packages/matter.js/src/MatterDevice.ts:200](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L200)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:175](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L175)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:85](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L85)

___

### startAnnouncement

▸ **startAnnouncement**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:93](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L93)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:221](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterDevice.ts#L221)
