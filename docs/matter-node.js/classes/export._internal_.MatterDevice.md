[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterDevice

# Class: MatterDevice

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](export._internal_.MatterDevice.md#constructor)

### Properties

- [announceInterval](export._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](export._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](export._internal_.MatterDevice.md#broadcasters)
- [channelManager](export._internal_.MatterDevice.md#channelmanager)
- [commissioningWindowOpened](export._internal_.MatterDevice.md#commissioningwindowopened)
- [commissioningWindowTimeout](export._internal_.MatterDevice.md#commissioningwindowtimeout)
- [deviceName](export._internal_.MatterDevice.md#devicename)
- [deviceType](export._internal_.MatterDevice.md#devicetype)
- [discriminator](export._internal_.MatterDevice.md#discriminator)
- [exchangeManager](export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](export._internal_.MatterDevice.md#fabricmanager)
- [initialCommissioningCallback](export._internal_.MatterDevice.md#initialcommissioningcallback)
- [isClosing](export._internal_.MatterDevice.md#isclosing)
- [productId](export._internal_.MatterDevice.md#productid)
- [scanners](export._internal_.MatterDevice.md#scanners)
- [sessionManager](export._internal_.MatterDevice.md#sessionmanager)
- [storage](export._internal_.MatterDevice.md#storage)
- [transportInterfaces](export._internal_.MatterDevice.md#transportinterfaces)
- [vendorId](export._internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](export._internal_.MatterDevice.md#addbroadcaster)
- [addFabric](export._internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](export._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](export._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](export._internal_.MatterDevice.md#addtransportinterface)
- [announce](export._internal_.MatterDevice.md#announce)
- [armFailSafe](export._internal_.MatterDevice.md#armfailsafe)
- [completeCommission](export._internal_.MatterDevice.md#completecommission)
- [createSecureSession](export._internal_.MatterDevice.md#createsecuresession)
- [findDevice](export._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](export._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](export._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](export._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricBuilder](export._internal_.MatterDevice.md#getfabricbuilder)
- [getFabricByIndex](export._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](export._internal_.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](export._internal_.MatterDevice.md#getnextavailablesessionid)
- [initiateExchange](export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](export._internal_.MatterDevice.md#iscommissioned)
- [openCommissioningModeWindow](export._internal_.MatterDevice.md#opencommissioningmodewindow)
- [saveResumptionRecord](export._internal_.MatterDevice.md#saveresumptionrecord)
- [start](export._internal_.MatterDevice.md#start)
- [startAnnouncement](export._internal_.MatterDevice.md#startannouncement)
- [stop](export._internal_.MatterDevice.md#stop)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `storage`, `initialCommissioningCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `initialCommissioningCallback` | () => `void` |

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:45

## Properties

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:40

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:41

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:34

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:38

___

### commissioningWindowOpened

• `Private` **commissioningWindowOpened**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:42

___

### commissioningWindowTimeout

• `Private` `Optional` **commissioningWindowTimeout**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:43

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:26

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:27

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:30

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:39

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:36

___

### initialCommissioningCallback

• `Private` `Readonly` **initialCommissioningCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:32

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:44

___

### productId

• `Private` `Readonly` **productId**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:29

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:33

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:37

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:31

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:35

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:28

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:47

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:56

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:49

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:46

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:48

___

### announce

▸ **announce**(`announceOnce?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announceOnce?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:52

___

### armFailSafe

▸ **armFailSafe**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:61

___

### completeCommission

▸ **completeCommission**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:64

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
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

packages/matter.js/dist/cjs/MatterDevice.d.ts:54

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/exports_common.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/exports_common.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/exports_session.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:67

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

packages/matter.js/dist/cjs/MatterDevice.d.ts:55

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

packages/matter.js/dist/cjs/MatterDevice.d.ts:59

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:72

___

### getFabricBuilder

▸ **getFabricBuilder**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:62

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:57

___

### getFabrics

▸ **getFabrics**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:63

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:53

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `protocolId` | `number` |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:58

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:65

___

### openCommissioningModeWindow

▸ **openCommissioningModeWindow**(`mode`, `discriminator`, `timeout`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `discriminator` | `undefined` \| `number` |
| `timeout` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:66

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

packages/matter.js/dist/cjs/MatterDevice.d.ts:60

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:50

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:51

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterDevice.d.ts:71
