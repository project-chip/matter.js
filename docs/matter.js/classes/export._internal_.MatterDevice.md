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
- [deviceName](export._internal_.MatterDevice.md#devicename)
- [deviceType](export._internal_.MatterDevice.md#devicetype)
- [discriminator](export._internal_.MatterDevice.md#discriminator)
- [exchangeManager](export._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](export._internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](export._internal_.MatterDevice.md#failsafecontext)
- [initialCommissioningCallback](export._internal_.MatterDevice.md#initialcommissioningcallback)
- [initialPasscode](export._internal_.MatterDevice.md#initialpasscode)
- [isClosing](export._internal_.MatterDevice.md#isclosing)
- [productId](export._internal_.MatterDevice.md#productid)
- [scanners](export._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](export._internal_.MatterDevice.md#securechannelprotocol)
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
- [closeSession](export._internal_.MatterDevice.md#closesession)
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
- [initiateExchange](export._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](export._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](export._internal_.MatterDevice.md#isfailsafearmed)
- [processSessionsToClose](export._internal_.MatterDevice.md#processsessionstoclose)
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

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `initialCommissioningCallback`)

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
| `initialCommissioningCallback` | () => `void` |

#### Defined in

packages/matter.js/src/MatterDevice.ts:73

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/matter.js/src/MatterDevice.ts:67

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: [`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md) = `AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen`

#### Defined in

packages/matter.js/src/MatterDevice.ts:66

___

### announceInterval

• `Private` **announceInterval**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:68

___

### announcementStartedTime

• `Private` **announcementStartedTime**: ``null`` \| `number` = `null`

#### Defined in

packages/matter.js/src/MatterDevice.ts:69

___

### broadcasters

• `Private` `Readonly` **broadcasters**: [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)[]

#### Defined in

packages/matter.js/src/MatterDevice.ts:59

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:63

___

### deviceName

• `Private` `Readonly` **deviceName**: `string`

#### Defined in

packages/matter.js/src/MatterDevice.ts:74

___

### deviceType

• `Private` `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

packages/matter.js/src/MatterDevice.ts:75

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

packages/matter.js/src/MatterDevice.ts:78

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:64

___

### fabricManager

• `Private` `Readonly` **fabricManager**: [`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:61

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: [`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:71

___

### initialCommissioningCallback

• `Private` `Readonly` **initialCommissioningCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/matter.js/src/MatterDevice.ts:81

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `number`

#### Defined in

packages/matter.js/src/MatterDevice.ts:79

___

### isClosing

• `Private` **isClosing**: `boolean` = `false`

#### Defined in

packages/matter.js/src/MatterDevice.ts:70

___

### productId

• `Private` `Readonly` **productId**: `number`

#### Defined in

packages/matter.js/src/MatterDevice.ts:77

___

### scanners

• `Private` `Readonly` **scanners**: [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

packages/matter.js/src/MatterDevice.ts:58

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:65

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)<`this`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:62

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:80

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: ([`TransportInterface`](../interfaces/common_export.TransportInterface.md) \| [`NetInterface`](../interfaces/net_export.NetInterface.md))[]

#### Defined in

packages/matter.js/src/MatterDevice.ts:60

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

packages/matter.js/src/MatterDevice.ts:76

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

packages/matter.js/src/MatterDevice.ts:100

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

packages/matter.js/src/MatterDevice.ts:271

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

packages/matter.js/src/MatterDevice.ts:111

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

packages/matter.js/src/MatterDevice.ts:95

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

packages/matter.js/src/MatterDevice.ts:105

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

packages/matter.js/src/MatterDevice.ts:529

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

packages/matter.js/src/MatterDevice.ts:510

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

packages/matter.js/src/MatterDevice.ts:130

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

packages/matter.js/src/MatterDevice.ts:185

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

packages/matter.js/src/MatterDevice.ts:441

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

packages/matter.js/src/MatterDevice.ts:351

___

### closeSession

▸ `Private` **closeSession**(`session`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:329

___

### completeCommission

▸ **completeCommission**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:484

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

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

`Promise`<[`SecureSession`](session_export.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:229

___

### endCommissioning

▸ **endCommissioning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:549

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/MatterDevice.ts:571

___

### failSafeExpired

▸ `Private` **failSafeExpired**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:359

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

packages/matter.js/src/MatterDevice.ts:575

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

packages/matter.js/src/MatterDevice.ts:258

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

packages/matter.js/src/MatterDevice.ts:305

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/src/MatterDevice.ts:611

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

packages/matter.js/src/MatterDevice.ts:297

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

packages/matter.js/src/MatterDevice.ts:480

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](common_export.FailSafeManager.md)

#### Returns

[`FailSafeManager`](common_export.FailSafeManager.md)

#### Defined in

packages/matter.js/src/MatterDevice.ts:475

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/src/MatterDevice.ts:225

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

packages/matter.js/src/MatterDevice.ts:267

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

packages/matter.js/src/MatterDevice.ts:301

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/MatterDevice.ts:506

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/MatterDevice.ts:471

___

### processSessionsToClose

▸ **processSessionsToClose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:322

___

### removePaseSession

▸ **removePaseSession**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:313

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

packages/matter.js/src/MatterDevice.ts:309

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

packages/matter.js/src/MatterDevice.ts:206

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

packages/matter.js/src/MatterDevice.ts:290

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:116

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:120

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/MatterDevice.ts:593

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

packages/matter.js/src/MatterDevice.ts:262
