[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterDevice

# Class: MatterDevice

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](export._internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](export._internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](export._internal_.MatterDevice.md#activecommissioningmode)
- [announceAsCommissionable](export._internal_.MatterDevice.md#announceascommissionable)
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
- [failSafeExpired](export._internal_.MatterDevice.md#failsafeexpired)
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
- [armFailSafe](export._internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](export._internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](export._internal_.MatterDevice.md#completecommission)
- [createSecureSession](export._internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](export._internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](export._internal_.MatterDevice.md#existsopenpasesession)
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
| `deviceType` | [`DeviceTypeId`](../modules/exports_datatype.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `initialPasscode` | `number` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `commissioningChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |
| `sessionChangedCallback` | (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void` |

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

packages/matter.js/dist/esm/MatterDevice.d.ts:79

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

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](export._internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](export._internal_.MatterDevice.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:57

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

packages/matter.js/dist/esm/MatterDevice.d.ts:71

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

packages/matter.js/dist/esm/MatterDevice.d.ts:60

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

packages/matter.js/dist/esm/MatterDevice.d.ts:55

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

packages/matter.js/dist/esm/MatterDevice.d.ts:58

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

packages/matter.js/dist/esm/MatterDevice.d.ts:87

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](exports_session.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:86

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

packages/matter.js/dist/esm/MatterDevice.d.ts:63

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:80

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

packages/matter.js/dist/esm/MatterDevice.d.ts:78

___

### completeCommission

▸ **completeCommission**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:84

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransmissionTimeoutMs?`, `activeRetransmissionTimeoutMs?`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

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
| `idleRetransmissionTimeoutMs?` | `number` |
| `activeRetransmissionTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:67

___

### endCommissioning

▸ **endCommissioning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:88

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:89

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

packages/matter.js/dist/esm/MatterDevice.d.ts:90

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

packages/matter.js/dist/esm/MatterDevice.d.ts:68

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

packages/matter.js/dist/esm/MatterDevice.d.ts:75

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:95

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

packages/matter.js/dist/esm/MatterDevice.d.ts:73

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:83

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](exports_common.FailSafeManager.md)

#### Returns

[`FailSafeManager`](exports_common.FailSafeManager.md)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:82

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:66

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:70

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

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:74

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:85

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:81

___

### removePaseSession

▸ **removePaseSession**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:77

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

packages/matter.js/dist/esm/MatterDevice.d.ts:76

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:65

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |
| `expireCommissioningAnnouncement?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:72

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:61

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:62

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterDevice.d.ts:94

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

packages/matter.js/dist/esm/MatterDevice.d.ts:69
