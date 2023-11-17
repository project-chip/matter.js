[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterDevice

# Class: MatterDevice

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](export._internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](export._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](export._internal_.MatterDevice.md#activecommissioningmode)
- [announceInterval](export._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](export._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](export._internal_.MatterDevice.md#broadcasters)
- [channelManager](export._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](export._internal_.MatterDevice.md#commissioningchangedcallback)
- [deviceName](export._internal_.MatterDevice.md#devicename)
- [deviceType](export._internal_.MatterDevice.md#devicetype)
- [discriminator](export._internal_.MatterDevice.md#discriminator)
- [exchangeManager](export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](export._internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](export._internal_.MatterDevice.md#failsafecontext)
- [initialPasscode](export._internal_.MatterDevice.md#initialpasscode)
- [isClosing](export._internal_.MatterDevice.md#isclosing)
- [productId](export._internal_.MatterDevice.md#productid)
- [scanners](export._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](export._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](export._internal_.MatterDevice.md#sessionchangedcallback)
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
- [allowBasicCommissioning](export._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](export._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](export._internal_.MatterDevice.md#announce)
- [announceAsCommissionable](export._internal_.MatterDevice.md#announceascommissionable)
- [armFailSafe](export._internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](export._internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](export._internal_.MatterDevice.md#completecommission)
- [createSecureSession](export._internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](export._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](export._internal_.MatterDevice.md#existsopenpasesession)
- [failSafeExpired](export._internal_.MatterDevice.md#failsafeexpired)
- [findDevice](export._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](export._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](export._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](export._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](export._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](export._internal_.MatterDevice.md#getfabrics)
- [getFailSafeContext](export._internal_.MatterDevice.md#getfailsafecontext)
- [getNextAvailableSessionId](export._internal_.MatterDevice.md#getnextavailablesessionid)
- [getNextFabricIndex](export._internal_.MatterDevice.md#getnextfabricindex)
- [hasBroadcaster](export._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](export._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](export._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](export._internal_.MatterDevice.md#isfailsafearmed)
- [removePaseSession](export._internal_.MatterDevice.md#removepasesession)
- [saveResumptionRecord](export._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](export._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](export._internal_.MatterDevice.md#sendfabricannouncements)
- [start](export._internal_.MatterDevice.md#start)
- [startAnnouncement](export._internal_.MatterDevice.md#startannouncement)
- [stop](export._internal_.MatterDevice.md#stop)
- [updateFabric](export._internal_.MatterDevice.md#updatefabric)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `commissioningChangedCallback`, `sessionChangedCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `initialPasscode` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void` |

#### Defined in

[packages/matter.js/src/MatterDevice.ts:71](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L71)

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:65](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L65)

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L64)

___

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:66](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L66)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:67](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L67)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L57)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L61)

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:79](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L79)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:72](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L72)

___

### deviceType

• `Private` `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:73](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L73)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:76](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L76)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L62)

___

### fabricManager

• `Private` `Readonly` **fabricManager**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L59)

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: [`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:69](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L69)

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:77](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L77)

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:68](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L68)

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:75](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L75)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L56)

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:63](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L63)

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

[packages/matter.js/src/MatterDevice.ts:80](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L80)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)<`this`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L60)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:78](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L78)

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L58)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L74)

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

[packages/matter.js/src/MatterDevice.ts:107](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L107)

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

[packages/matter.js/src/MatterDevice.ts:299](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L299)

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

[packages/matter.js/src/MatterDevice.ts:122](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L122)

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

[packages/matter.js/src/MatterDevice.ts:98](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L98)

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

[packages/matter.js/src/MatterDevice.ts:112](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L112)

___

### allowBasicCommissioning

▸ **allowBasicCommissioning**(`commissioningEndCallback?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningEndCallback?` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:524](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L524)

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](session_export.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:505](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L505)

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

[packages/matter.js/src/MatterDevice.ts:141](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L141)

___

### announceAsCommissionable

▸ `Private` **announceAsCommissionable**(`mode`, `activeCommissioningEndCallback?`, `discriminator?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `activeCommissioningEndCallback?` | () => `void` |
| `discriminator?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:190](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L190)

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:436](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L436)

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

[packages/matter.js/src/MatterDevice.ts:346](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L346)

___

### completeCommission

▸ **completeCommission**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:479](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L479)

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransmissionTimeoutMs?`, `activeRetransmissionTimeoutMs?`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

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
| `idleRetransmissionTimeoutMs?` | `number` |
| `activeRetransmissionTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:234](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L234)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:544](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L544)

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:567](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L567)

___

### failSafeExpired

▸ `Private` **failSafeExpired**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:354](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L354)

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

[packages/matter.js/src/MatterDevice.ts:571](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L571)

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

[packages/matter.js/src/MatterDevice.ts:285](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L285)

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

[packages/matter.js/src/MatterDevice.ts:331](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L331)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:607](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L607)

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

[packages/matter.js/src/MatterDevice.ts:323](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L323)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:475](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L475)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](common_export.FailSafeManager.md)

#### Returns

[`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:470](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L470)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:230](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L230)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:295](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L295)

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

[packages/matter.js/src/MatterDevice.ts:103](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L103)

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

[packages/matter.js/src/MatterDevice.ts:118](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L118)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:327](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L327)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:501](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L501)

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:466](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L466)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:339](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L339)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:335](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L335)

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:211](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L211)

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncement` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:316](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L316)

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:127](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L127)

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:131](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L131)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:589](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L589)

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:289](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/MatterDevice.ts#L289)
