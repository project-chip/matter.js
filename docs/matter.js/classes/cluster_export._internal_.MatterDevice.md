[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [\<internal\>](../modules/cluster_export._internal_.md) / MatterDevice

# Class: MatterDevice

[cluster/export](../modules/cluster_export.md).[\<internal\>](../modules/cluster_export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](cluster_export._internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](cluster_export._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](cluster_export._internal_.MatterDevice.md#activecommissioningmode)
- [announceInterval](cluster_export._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](cluster_export._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](cluster_export._internal_.MatterDevice.md#broadcasters)
- [channelManager](cluster_export._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](cluster_export._internal_.MatterDevice.md#commissioningchangedcallback)
- [deviceName](cluster_export._internal_.MatterDevice.md#devicename)
- [deviceType](cluster_export._internal_.MatterDevice.md#devicetype)
- [discriminator](cluster_export._internal_.MatterDevice.md#discriminator)
- [exchangeManager](cluster_export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](cluster_export._internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](cluster_export._internal_.MatterDevice.md#failsafecontext)
- [initialPasscode](cluster_export._internal_.MatterDevice.md#initialpasscode)
- [isClosing](cluster_export._internal_.MatterDevice.md#isclosing)
- [productId](cluster_export._internal_.MatterDevice.md#productid)
- [scanners](cluster_export._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](cluster_export._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](cluster_export._internal_.MatterDevice.md#sessionchangedcallback)
- [sessionManager](cluster_export._internal_.MatterDevice.md#sessionmanager)
- [storage](cluster_export._internal_.MatterDevice.md#storage)
- [transportInterfaces](cluster_export._internal_.MatterDevice.md#transportinterfaces)
- [vendorId](cluster_export._internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](cluster_export._internal_.MatterDevice.md#addbroadcaster)
- [addFabric](cluster_export._internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](cluster_export._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](cluster_export._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](cluster_export._internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](cluster_export._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](cluster_export._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](cluster_export._internal_.MatterDevice.md#announce)
- [announceAsCommissionable](cluster_export._internal_.MatterDevice.md#announceascommissionable)
- [armFailSafe](cluster_export._internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](cluster_export._internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](cluster_export._internal_.MatterDevice.md#completecommission)
- [createSecureSession](cluster_export._internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](cluster_export._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](cluster_export._internal_.MatterDevice.md#existsopenpasesession)
- [failSafeExpired](cluster_export._internal_.MatterDevice.md#failsafeexpired)
- [findDevice](cluster_export._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](cluster_export._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](cluster_export._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](cluster_export._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](cluster_export._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](cluster_export._internal_.MatterDevice.md#getfabrics)
- [getFailSafeContext](cluster_export._internal_.MatterDevice.md#getfailsafecontext)
- [getNextAvailableSessionId](cluster_export._internal_.MatterDevice.md#getnextavailablesessionid)
- [getNextFabricIndex](cluster_export._internal_.MatterDevice.md#getnextfabricindex)
- [hasBroadcaster](cluster_export._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](cluster_export._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](cluster_export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](cluster_export._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](cluster_export._internal_.MatterDevice.md#isfailsafearmed)
- [removePaseSession](cluster_export._internal_.MatterDevice.md#removepasesession)
- [saveResumptionRecord](cluster_export._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](cluster_export._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](cluster_export._internal_.MatterDevice.md#sendfabricannouncements)
- [start](cluster_export._internal_.MatterDevice.md#start)
- [startAnnouncement](cluster_export._internal_.MatterDevice.md#startannouncement)
- [stop](cluster_export._internal_.MatterDevice.md#stop)
- [updateFabric](cluster_export._internal_.MatterDevice.md#updatefabric)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](cluster_export._internal_.MatterDevice.md)

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

#### Returns

[`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:70](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L70)

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:64](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L64)

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:63](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L63)

___

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:65](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L65)

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:66](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L66)

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:56](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L56)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:60](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L60)

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

[packages/matter.js/src/MatterDevice.ts:78](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L78)

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:71](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L71)

___

### deviceType

• `Private` `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:72](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L72)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:75](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L75)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:61](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L61)

___

### fabricManager

• `Private` `Readonly` **fabricManager**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:58](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L58)

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: [`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:68](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L68)

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:76](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L76)

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:67](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L67)

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:74](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L74)

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:55](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L55)

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:62](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L62)

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

[packages/matter.js/src/MatterDevice.ts:79](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L79)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<`this`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:59](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L59)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:77](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L77)

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:57](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L57)

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:73](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L73)

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:106](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L106)

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:282](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L282)

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:121](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L121)

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |

#### Returns

[`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:97](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L97)

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/common_export.TransportInterface.md) |

#### Returns

[`MatterDevice`](cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:111](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L111)

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

[packages/matter.js/src/MatterDevice.ts:505](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L505)

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

[packages/matter.js/src/MatterDevice.ts:486](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L486)

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

[packages/matter.js/src/MatterDevice.ts:140](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L140)

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

[packages/matter.js/src/MatterDevice.ts:185](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L185)

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:417](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L417)

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

[packages/matter.js/src/MatterDevice.ts:326](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L326)

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:460](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L460)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:229](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L229)

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:525](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L525)

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:548](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L548)

___

### failSafeExpired

▸ **failSafeExpired**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:334](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L334)

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](session_export.Session.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeOutSeconds` | `number` | `5` |

#### Returns

`Promise`\<`undefined` \| \{ `channel`: [`Channel`](../interfaces/common_export.Channel.md)\<`Uint8Array`\> ; `session`: [`Session`](session_export.Session.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>  }\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:552](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L552)

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

[packages/matter.js/src/MatterDevice.ts:268](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L268)

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

[packages/matter.js/src/MatterDevice.ts:311](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L311)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:588](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L588)

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

[packages/matter.js/src/MatterDevice.ts:303](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L303)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/MatterDevice.ts:456](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L456)

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](common_export.FailSafeManager.md)

#### Returns

[`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:451](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L451)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:225](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L225)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/MatterDevice.ts:278](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L278)

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

[packages/matter.js/src/MatterDevice.ts:102](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L102)

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

[packages/matter.js/src/MatterDevice.ts:117](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L117)

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<[`MatterDevice`](cluster_export._internal_.MatterDevice.md)\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:307](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L307)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:482](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L482)

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterDevice.ts:447](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L447)

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:319](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L319)

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

[packages/matter.js/src/MatterDevice.ts:315](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L315)

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

[packages/matter.js/src/MatterDevice.ts:206](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L206)

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

[packages/matter.js/src/MatterDevice.ts:296](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L296)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:126](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L126)

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:130](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L130)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterDevice.ts:570](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L570)

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

[packages/matter.js/src/MatterDevice.ts:272](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterDevice.ts#L272)
