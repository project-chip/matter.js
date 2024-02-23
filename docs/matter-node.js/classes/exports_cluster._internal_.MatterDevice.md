[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / MatterDevice

# Class: MatterDevice

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](exports_cluster._internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](exports_cluster._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](exports_cluster._internal_.MatterDevice.md#activecommissioningmode)
- [announceAsCommissionable](exports_cluster._internal_.MatterDevice.md#announceascommissionable)
- [announceInterval](exports_cluster._internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](exports_cluster._internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](exports_cluster._internal_.MatterDevice.md#broadcasters)
- [channelManager](exports_cluster._internal_.MatterDevice.md#channelmanager)
- [commissioningChangedCallback](exports_cluster._internal_.MatterDevice.md#commissioningchangedcallback)
- [deviceName](exports_cluster._internal_.MatterDevice.md#devicename)
- [deviceType](exports_cluster._internal_.MatterDevice.md#devicetype)
- [discriminator](exports_cluster._internal_.MatterDevice.md#discriminator)
- [exchangeManager](exports_cluster._internal_.MatterDevice.md#exchangemanager)
- [fabricManager](exports_cluster._internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](exports_cluster._internal_.MatterDevice.md#failsafecontext)
- [failSafeExpired](exports_cluster._internal_.MatterDevice.md#failsafeexpired)
- [initialPasscode](exports_cluster._internal_.MatterDevice.md#initialpasscode)
- [isClosing](exports_cluster._internal_.MatterDevice.md#isclosing)
- [productId](exports_cluster._internal_.MatterDevice.md#productid)
- [scanners](exports_cluster._internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](exports_cluster._internal_.MatterDevice.md#securechannelprotocol)
- [sessionChangedCallback](exports_cluster._internal_.MatterDevice.md#sessionchangedcallback)
- [sessionManager](exports_cluster._internal_.MatterDevice.md#sessionmanager)
- [storage](exports_cluster._internal_.MatterDevice.md#storage)
- [transportInterfaces](exports_cluster._internal_.MatterDevice.md#transportinterfaces)
- [vendorId](exports_cluster._internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](exports_cluster._internal_.MatterDevice.md#addbroadcaster)
- [addFabric](exports_cluster._internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](exports_cluster._internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](exports_cluster._internal_.MatterDevice.md#addscanner)
- [addTransportInterface](exports_cluster._internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](exports_cluster._internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](exports_cluster._internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](exports_cluster._internal_.MatterDevice.md#announce)
- [armFailSafe](exports_cluster._internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](exports_cluster._internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](exports_cluster._internal_.MatterDevice.md#completecommission)
- [createSecureSession](exports_cluster._internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](exports_cluster._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](exports_cluster._internal_.MatterDevice.md#existsopenpasesession)
- [findDevice](exports_cluster._internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](exports_cluster._internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](exports_cluster._internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](exports_cluster._internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](exports_cluster._internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](exports_cluster._internal_.MatterDevice.md#getfabrics)
- [getFailSafeContext](exports_cluster._internal_.MatterDevice.md#getfailsafecontext)
- [getNextAvailableSessionId](exports_cluster._internal_.MatterDevice.md#getnextavailablesessionid)
- [getNextFabricIndex](exports_cluster._internal_.MatterDevice.md#getnextfabricindex)
- [hasBroadcaster](exports_cluster._internal_.MatterDevice.md#hasbroadcaster)
- [hasProtocolHandler](exports_cluster._internal_.MatterDevice.md#hasprotocolhandler)
- [initiateExchange](exports_cluster._internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](exports_cluster._internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](exports_cluster._internal_.MatterDevice.md#isfailsafearmed)
- [removePaseSession](exports_cluster._internal_.MatterDevice.md#removepasesession)
- [saveResumptionRecord](exports_cluster._internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](exports_cluster._internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](exports_cluster._internal_.MatterDevice.md#sendfabricannouncements)
- [start](exports_cluster._internal_.MatterDevice.md#start)
- [startAnnouncement](exports_cluster._internal_.MatterDevice.md#startannouncement)
- [stop](exports_cluster._internal_.MatterDevice.md#stop)
- [updateFabric](exports_cluster._internal_.MatterDevice.md#updatefabric)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `commissioningChangedCallback`, `sessionChangedCallback`): [`MatterDevice`](exports_cluster._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `initialPasscode` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |

#### Returns

[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:54

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:49

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:48

___

### announceAsCommissionable

• `Private` **announceAsCommissionable**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:64

___

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:50

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:51

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:41

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:45

___

### commissioningChangedCallback

• `Private` `Readonly` **commissioningChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:38

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:31

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:32

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:35

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:46

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:43

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:53

___

### failSafeExpired

• `Private` **failSafeExpired**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:89

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:36

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:52

___

### productId

• `Private` `Readonly` **productId**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:34

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:40

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:47

___

### sessionChangedCallback

• `Private` `Readonly` **sessionChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:39

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:44

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:37

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:42

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:33

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

packages/matter.js/dist/esm/MatterDevice.d.ts:57

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:81

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

packages/matter.js/dist/esm/MatterDevice.d.ts:60

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

packages/matter.js/dist/esm/MatterDevice.d.ts:55

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/exports_common.TransportInterface.md) |

#### Returns

`this`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:58

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

packages/matter.js/dist/esm/MatterDevice.d.ts:97

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

packages/matter.js/dist/esm/MatterDevice.d.ts:96

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

packages/matter.js/dist/esm/MatterDevice.d.ts:63

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:90

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

packages/matter.js/dist/esm/MatterDevice.d.ts:88

___

### completeCommission

▸ **completeCommission**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:94

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterDevice`](exports_cluster._internal_.MatterDevice.md)\>\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:67

___

### endCommissioning

▸ **endCommissioning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:98

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:99

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

packages/matter.js/dist/esm/MatterDevice.d.ts:100

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

packages/matter.js/dist/esm/MatterDevice.d.ts:78

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

packages/matter.js/dist/esm/MatterDevice.d.ts:85

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:105

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

packages/matter.js/dist/esm/MatterDevice.d.ts:83

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:93

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](exports_common.FailSafeManager.md)

#### Returns

[`FailSafeManager`](exports_common.FailSafeManager.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:92

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:66

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:80

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

packages/matter.js/dist/esm/MatterDevice.d.ts:56

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

packages/matter.js/dist/esm/MatterDevice.d.ts:59

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

packages/matter.js/dist/esm/MatterDevice.d.ts:84

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:95

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:91

___

### removePaseSession

▸ **removePaseSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:87

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:86

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

packages/matter.js/dist/esm/MatterDevice.d.ts:65

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

packages/matter.js/dist/esm/MatterDevice.d.ts:82

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:61

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:62

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:104

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:79
