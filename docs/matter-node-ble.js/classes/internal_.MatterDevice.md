[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MatterDevice

# Class: MatterDevice

[<internal>](../modules/internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](internal_.MatterDevice.md#constructor)

### Properties

- [announceInterval](internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](internal_.MatterDevice.md#broadcasters)
- [channelManager](internal_.MatterDevice.md#channelmanager)
- [commissioningWindowOpened](internal_.MatterDevice.md#commissioningwindowopened)
- [commissioningWindowTimeout](internal_.MatterDevice.md#commissioningwindowtimeout)
- [deviceName](internal_.MatterDevice.md#devicename)
- [deviceType](internal_.MatterDevice.md#devicetype)
- [discriminator](internal_.MatterDevice.md#discriminator)
- [exchangeManager](internal_.MatterDevice.md#exchangemanager)
- [fabricManager](internal_.MatterDevice.md#fabricmanager)
- [initialCommissioningCallback](internal_.MatterDevice.md#initialcommissioningcallback)
- [isClosing](internal_.MatterDevice.md#isclosing)
- [productId](internal_.MatterDevice.md#productid)
- [scanners](internal_.MatterDevice.md#scanners)
- [sessionManager](internal_.MatterDevice.md#sessionmanager)
- [storage](internal_.MatterDevice.md#storage)
- [transportInterfaces](internal_.MatterDevice.md#transportinterfaces)
- [vendorId](internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](internal_.MatterDevice.md#addbroadcaster)
- [addFabric](internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](internal_.MatterDevice.md#addscanner)
- [addTransportInterface](internal_.MatterDevice.md#addtransportinterface)
- [announce](internal_.MatterDevice.md#announce)
- [armFailSafe](internal_.MatterDevice.md#armfailsafe)
- [completeCommission](internal_.MatterDevice.md#completecommission)
- [createSecureSession](internal_.MatterDevice.md#createsecuresession)
- [findDevice](internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricBuilder](internal_.MatterDevice.md#getfabricbuilder)
- [getFabricByIndex](internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](internal_.MatterDevice.md#getfabrics)
- [getNextAvailableSessionId](internal_.MatterDevice.md#getnextavailablesessionid)
- [initiateExchange](internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](internal_.MatterDevice.md#iscommissioned)
- [openCommissioningModeWindow](internal_.MatterDevice.md#opencommissioningmodewindow)
- [saveResumptionRecord](internal_.MatterDevice.md#saveresumptionrecord)
- [start](internal_.MatterDevice.md#start)
- [startAnnouncement](internal_.MatterDevice.md#startannouncement)
- [stop](internal_.MatterDevice.md#stop)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `storage`, `initialCommissioningCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/internal_.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `initialCommissioningCallback` | () => `void` |

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:45

## Properties

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:40

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:41

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:34

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:38

___

### commissioningWindowOpened

• `Private` **commissioningWindowOpened**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:42

___

### commissioningWindowTimeout

• `Private` `Optional` **commissioningWindowTimeout**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:43

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:26

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:27

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:30

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:39

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:36

___

### initialCommissioningCallback

• `Private` `Readonly` **initialCommissioningCallback**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:32

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:44

___

### productId

• `Private` `Readonly` **productId**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:29

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:33

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:37

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:31

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:35

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:28

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:47

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:56

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:49

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/internal_.Scanner.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:46

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/internal_.TransportInterface.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:48

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

matter.js/dist/cjs/MatterDevice.d.ts:52

___

### armFailSafe

▸ **armFailSafe**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:61

___

### completeCommission

▸ **completeCommission**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:64

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
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

matter.js/dist/cjs/MatterDevice.d.ts:54

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:67

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

matter.js/dist/cjs/MatterDevice.d.ts:55

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

matter.js/dist/cjs/MatterDevice.d.ts:59

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:72

___

### getFabricBuilder

▸ **getFabricBuilder**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:62

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:57

___

### getFabrics

▸ **getFabrics**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:63

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:53

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `protocolId` | `number` |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:58

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:65

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

matter.js/dist/cjs/MatterDevice.d.ts:66

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:60

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:50

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:51

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:71
