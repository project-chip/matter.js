[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / MatterController

# Class: MatterController

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](export._internal_.MatterController.md#constructor)

### Properties

- [adminVendorId](export._internal_.MatterController.md#adminvendorid)
- [bleScanner](export._internal_.MatterController.md#blescanner)
- [caseClient](export._internal_.MatterController.md#caseclient)
- [certificateManager](export._internal_.MatterController.md#certificatemanager)
- [channelManager](export._internal_.MatterController.md#channelmanager)
- [commissionDevice](export._internal_.MatterController.md#commissiondevice)
- [commissionedNodes](export._internal_.MatterController.md#commissionednodes)
- [connectOrDiscoverNode](export._internal_.MatterController.md#connectordiscovernode)
- [controllerStorage](export._internal_.MatterController.md#controllerstorage)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [getLastOperationalAddress](export._internal_.MatterController.md#getlastoperationaladdress)
- [initializePaseSecureChannel](export._internal_.MatterController.md#initializepasesecurechannel)
- [mdnsScanner](export._internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](export._internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](export._internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](export._internal_.MatterController.md#netinterfaceipv6)
- [pair](export._internal_.MatterController.md#pair)
- [paseClient](export._internal_.MatterController.md#paseclient)
- [reconnectLastKnownAddress](export._internal_.MatterController.md#reconnectlastknownaddress)
- [resume](export._internal_.MatterController.md#resume)
- [sessionClosedCallback](export._internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](export._internal_.MatterController.md#sessionmanager)
- [setOperationalServerAddress](export._internal_.MatterController.md#setoperationalserveraddress)
- [storage](export._internal_.MatterController.md#storage)
- [storeCommisionedNodes](export._internal_.MatterController.md#storecommisionednodes)

### Accessors

- [nodeId](export._internal_.MatterController.md#nodeid)

### Methods

- [addTransportInterface](export._internal_.MatterController.md#addtransportinterface)
- [announce](export._internal_.MatterController.md#announce)
- [close](export._internal_.MatterController.md#close)
- [collectScanners](export._internal_.MatterController.md#collectscanners)
- [commission](export._internal_.MatterController.md#commission)
- [connect](export._internal_.MatterController.md#connect)
- [createSecureSession](export._internal_.MatterController.md#createsecuresession)
- [disconnect](export._internal_.MatterController.md#disconnect)
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getCommissionedNodes](export._internal_.MatterController.md#getcommissionednodes)
- [getNextAvailableSessionId](export._internal_.MatterController.md#getnextavailablesessionid)
- [getResumptionRecord](export._internal_.MatterController.md#getresumptionrecord)
- [isCommissioned](export._internal_.MatterController.md#iscommissioned)
- [removeNode](export._internal_.MatterController.md#removenode)
- [saveResumptionRecord](export._internal_.MatterController.md#saveresumptionrecord)
- [create](export._internal_.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storage`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](export._internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](exports_certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `adminVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |

#### Returns

[`MatterController`](export._internal_.MatterController.md)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:67

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:55

___

### bleScanner

• `Private` **bleScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:65

___

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:62

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:52

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:59

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:91

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:66

___

### connectOrDiscoverNode

• `Private` **connectOrDiscoverNode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:93

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:63

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:60

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:53

___

### getLastOperationalAddress

• `Private` **getLastOperationalAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:106

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:86

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:49

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:64

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:50

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:51

___

### pair

• `Private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:102

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:61

___

### reconnectLastKnownAddress

• `Private` **reconnectLastKnownAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:92

___

### resume

• `Private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:100

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:56

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:58

___

### setOperationalServerAddress

• `Private` **setOperationalServerAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:105

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:54

___

### storeCommisionedNodes

• `Private` **storeCommisionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:107

## Accessors

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:68

## Methods

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:69

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:118

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:119

___

### collectScanners

▸ **collectScanners**(`discoveryCapabilities?`): [`Scanner`](../interfaces/exports_common.Scanner.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\> |

#### Returns

[`Scanner`](../interfaces/exports_common.Scanner.md)[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:70

___

### commission

▸ **commission**(`options`): `Promise`\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NodeCommissioningOptions`](../modules/export.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:78

___

### connect

▸ **connect**(`peerNodeId`, `timeoutSeconds?`): `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:112

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransmissionTimeoutMs?`, `activeRetransmissionTimeoutMs?`): `Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

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

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:114

___

### disconnect

▸ **disconnect**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:79

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:116

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:120

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:104

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:113

___

### getResumptionRecord

▸ **getResumptionRecord**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:115

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:103

___

### removeNode

▸ **removeNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:80

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

packages/matter.js/dist/esm/MatterController.d.ts:117

___

### create

▸ **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `sessionClosedCallback?`, `adminVendorId?`, `adminFabricId?`, `adminFabricIndex?`, `caseAuthenticatedTags?`): `Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |
| `adminVendorId?` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `adminFabricId?` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `adminFabricIndex?` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:57
