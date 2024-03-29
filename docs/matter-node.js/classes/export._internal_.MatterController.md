[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / MatterController

# Class: MatterController

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](export._internal_.MatterController.md#constructor)

### Properties

- [#private](export._internal_.MatterController.md##private)
- [adminVendorId](export._internal_.MatterController.md#adminvendorid)
- [bleScanner](export._internal_.MatterController.md#blescanner)
- [caseClient](export._internal_.MatterController.md#caseclient)
- [certificateManager](export._internal_.MatterController.md#certificatemanager)
- [channelManager](export._internal_.MatterController.md#channelmanager)
- [commissionDevice](export._internal_.MatterController.md#commissiondevice)
- [commissionedNodes](export._internal_.MatterController.md#commissionednodes)
- [connectOrDiscoverNode](export._internal_.MatterController.md#connectordiscovernode)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [fabricStorage](export._internal_.MatterController.md#fabricstorage)
- [getLastOperationalAddress](export._internal_.MatterController.md#getlastoperationaladdress)
- [initializePaseSecureChannel](export._internal_.MatterController.md#initializepasesecurechannel)
- [mdnsScanner](export._internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](export._internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](export._internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](export._internal_.MatterController.md#netinterfaceipv6)
- [nodesStore](export._internal_.MatterController.md#nodesstore)
- [pair](export._internal_.MatterController.md#pair)
- [paseClient](export._internal_.MatterController.md#paseclient)
- [reconnectLastKnownAddress](export._internal_.MatterController.md#reconnectlastknownaddress)
- [resume](export._internal_.MatterController.md#resume)
- [sessionClosedCallback](export._internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](export._internal_.MatterController.md#sessionmanager)
- [sessionStorage](export._internal_.MatterController.md#sessionstorage)
- [setOperationalDeviceData](export._internal_.MatterController.md#setoperationaldevicedata)
- [storeCommissionedNodes](export._internal_.MatterController.md#storecommissionednodes)

### Accessors

- [construction](export._internal_.MatterController.md#construction)
- [nodeId](export._internal_.MatterController.md#nodeid)

### Methods

- [addTransportInterface](export._internal_.MatterController.md#addtransportinterface)
- [announce](export._internal_.MatterController.md#announce)
- [close](export._internal_.MatterController.md#close)
- [collectScanners](export._internal_.MatterController.md#collectscanners)
- [commission](export._internal_.MatterController.md#commission)
- [connect](export._internal_.MatterController.md#connect)
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

• **new MatterController**(`sessionStorage`, `fabricStorage`, `nodesStore`, `mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](export._internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `nodesStore` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `mdnsScanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](exports_certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `adminVendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |

#### Returns

[`MatterController`](export._internal_.MatterController.md)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:74

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:53

___

### adminVendorId

• `Private` `Readonly` **adminVendorId**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:62

___

### bleScanner

• `Private` **bleScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:71

___

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:69

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:60

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:66

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:98

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:72

___

### connectOrDiscoverNode

• `Private` **connectOrDiscoverNode**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:100

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:67

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:61

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:55

___

### getLastOperationalAddress

• `Private` **getLastOperationalAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:123

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:93

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:57

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:70

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:58

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:59

___

### nodesStore

• `Readonly` **nodesStore**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:56

___

### pair

• `Private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:109

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:68

___

### reconnectLastKnownAddress

• `Private` **reconnectLastKnownAddress**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:99

___

### resume

• `Private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:107

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:63

___

### sessionManager

• `Readonly` **sessionManager**: [`SessionManager`](exports_session.SessionManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:65

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:54

___

### setOperationalDeviceData

• `Private` **setOperationalDeviceData**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:119

___

### storeCommissionedNodes

• `Private` **storeCommissionedNodes**: `any`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:124

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:73

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:75

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

packages/matter.js/dist/esm/MatterController.d.ts:76

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:134

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:135

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

packages/matter.js/dist/esm/MatterController.d.ts:77

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

packages/matter.js/dist/esm/MatterController.d.ts:85

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

packages/matter.js/dist/esm/MatterController.d.ts:129

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

packages/matter.js/dist/esm/MatterController.d.ts:86

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:120

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

packages/matter.js/dist/esm/MatterController.d.ts:132

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:136

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:111

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/exports_common.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:112

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:130

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

packages/matter.js/dist/esm/MatterController.d.ts:131

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:110

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

packages/matter.js/dist/esm/MatterController.d.ts:87

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:133

___

### create

▸ **create**(`sessionStorage`, `rootCertificateStorage`, `fabricStorage`, `nodesStorage`, `scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `sessionClosedCallback?`, `adminVendorId?`, `adminFabricId?`, `adminFabricIndex?`, `caseAuthenticatedTags?`): `Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `rootCertificateStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `nodesStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `scanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |
| `adminVendorId?` | [`VendorId`](../modules/exports_datatype.md#vendorid) |
| `adminFabricId?` | [`FabricId`](../modules/exports_datatype.md#fabricid) |
| `adminFabricIndex?` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/MatterController.d.ts:64
