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
- [setOperationalDeviceData](export._internal_.MatterController.md#setoperationaldevicedata)
- [storage](export._internal_.MatterController.md#storage)
- [storeCommissionedNodes](export._internal_.MatterController.md#storecommissionednodes)

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
- [enhanceCommissionedNodeDetails](export._internal_.MatterController.md#enhancecommissionednodedetails)
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getCommissionedNodes](export._internal_.MatterController.md#getcommissionednodes)
- [getCommissionedNodesDetails](export._internal_.MatterController.md#getcommissionednodesdetails)
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

packages/matter.js/dist/esm/MatterController.d.ts:71

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:59

___

### bleScanner

• `Private` **bleScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:69

___

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:66

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:56

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:63

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:95

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:70

___

### connectOrDiscoverNode

• `Private` **connectOrDiscoverNode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:97

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:67

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:64

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:57

___

### getLastOperationalAddress

• `Private` **getLastOperationalAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:120

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:90

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:53

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:68

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:54

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:55

___

### pair

• `Private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:106

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:65

___

### reconnectLastKnownAddress

• `Private` **reconnectLastKnownAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:96

___

### resume

• `Private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:104

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:60

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:62

___

### setOperationalDeviceData

• `Private` **setOperationalDeviceData**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:116

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:58

___

### storeCommissionedNodes

• `Private` **storeCommissionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:121

## Accessors

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:72

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

packages/matter.js/dist/esm/MatterController.d.ts:73

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:142

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:143

___

### collectScanners

▸ **collectScanners**(`discoveryCapabilities?`): [`Scanner`](../interfaces/exports_common.Scanner.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |

#### Returns

[`Scanner`](../interfaces/exports_common.Scanner.md)[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:74

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

packages/matter.js/dist/esm/MatterController.d.ts:82

___

### connect

▸ **connect**(`peerNodeId`, `timeoutSeconds?`, `discoveryData?`): `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `discoveryData?` | [`DiscoveryData`](../modules/exports_common.md#discoverydata) |

#### Returns

`Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:126

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

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

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:128

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

packages/matter.js/dist/esm/MatterController.d.ts:83

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:117

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

packages/matter.js/dist/esm/MatterController.d.ts:140

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:144

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:108

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:109

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:127

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

packages/matter.js/dist/esm/MatterController.d.ts:139

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:107

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

packages/matter.js/dist/esm/MatterController.d.ts:84

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

packages/matter.js/dist/esm/MatterController.d.ts:141

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

packages/matter.js/dist/esm/MatterController.d.ts:61
