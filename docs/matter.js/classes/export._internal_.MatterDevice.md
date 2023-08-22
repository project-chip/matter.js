[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterDevice

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
| `deviceType` | [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `initialCommissioningCallback` | () => `void` |

#### Defined in

[packages/matter.js/src/MatterDevice.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L55)

## Properties

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L49)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L50)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L43)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L47)

___

### commissioningWindowOpened

• `Private` **commissioningWindowOpened**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L51)

___

### commissioningWindowTimeout

• `Private` `Optional` **commissioningWindowTimeout**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L52)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L56)

___

### deviceType

• `Private` `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L57)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L60)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L48)

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L45)

___

### initialCommissioningCallback

• `Private` `Readonly` **initialCommissioningCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L62)

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L53)

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L59)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L42)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L46)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L61)

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L44)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L58)

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L79)

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:201](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L201)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L90)

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L74)

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L84)

___

### announce

▸ **announce**(`announceOnce?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `announceOnce` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L109)

___

### armFailSafe

▸ **armFailSafe**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L231)

___

### completeCommission

▸ **completeCommission**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:243](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L243)

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
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

[packages/matter.js/src/MatterDevice.ts:170](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L170)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/common_export.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/session_export.Session.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>  }\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:281](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L281)

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

[packages/matter.js/src/MatterDevice.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L197)

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

[packages/matter.js/src/MatterDevice.ts:223](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L223)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:312](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L312)

___

### getFabricBuilder

▸ **getFabricBuilder**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:235](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L235)

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:215](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L215)

___

### getFabrics

▸ **getFabrics**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:239](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L239)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L166)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:219](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L219)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:248](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L248)

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

[packages/matter.js/src/MatterDevice.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L252)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:227](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L227)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:95](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L95)

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L99)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:299](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterDevice.ts#L299)
