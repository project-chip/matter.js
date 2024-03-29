[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MatterController

# Class: MatterController

[\<internal\>](../modules/internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](internal_.MatterController.md#constructor)

### Properties

- [#private](internal_.MatterController.md##private)
- [adminVendorId](internal_.MatterController.md#adminvendorid)
- [bleScanner](internal_.MatterController.md#blescanner)
- [caseClient](internal_.MatterController.md#caseclient)
- [certificateManager](internal_.MatterController.md#certificatemanager)
- [channelManager](internal_.MatterController.md#channelmanager)
- [commissionDevice](internal_.MatterController.md#commissiondevice)
- [commissionedNodes](internal_.MatterController.md#commissionednodes)
- [connectOrDiscoverNode](internal_.MatterController.md#connectordiscovernode)
- [exchangeManager](internal_.MatterController.md#exchangemanager)
- [fabric](internal_.MatterController.md#fabric)
- [fabricStorage](internal_.MatterController.md#fabricstorage)
- [getLastOperationalAddress](internal_.MatterController.md#getlastoperationaladdress)
- [initializePaseSecureChannel](internal_.MatterController.md#initializepasesecurechannel)
- [mdnsScanner](internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](internal_.MatterController.md#netinterfaceipv6)
- [nodesStore](internal_.MatterController.md#nodesstore)
- [pair](internal_.MatterController.md#pair)
- [paseClient](internal_.MatterController.md#paseclient)
- [reconnectLastKnownAddress](internal_.MatterController.md#reconnectlastknownaddress)
- [resume](internal_.MatterController.md#resume)
- [sessionClosedCallback](internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](internal_.MatterController.md#sessionmanager)
- [sessionStorage](internal_.MatterController.md#sessionstorage)
- [setOperationalDeviceData](internal_.MatterController.md#setoperationaldevicedata)
- [storeCommissionedNodes](internal_.MatterController.md#storecommissionednodes)

### Accessors

- [construction](internal_.MatterController.md#construction)
- [nodeId](internal_.MatterController.md#nodeid)

### Methods

- [addTransportInterface](internal_.MatterController.md#addtransportinterface)
- [announce](internal_.MatterController.md#announce)
- [close](internal_.MatterController.md#close)
- [collectScanners](internal_.MatterController.md#collectscanners)
- [commission](internal_.MatterController.md#commission)
- [connect](internal_.MatterController.md#connect)
- [disconnect](internal_.MatterController.md#disconnect)
- [enhanceCommissionedNodeDetails](internal_.MatterController.md#enhancecommissionednodedetails)
- [findResumptionRecordByNodeId](internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](internal_.MatterController.md#getactivesessioninformation)
- [getCommissionedNodes](internal_.MatterController.md#getcommissionednodes)
- [getCommissionedNodesDetails](internal_.MatterController.md#getcommissionednodesdetails)
- [getNextAvailableSessionId](internal_.MatterController.md#getnextavailablesessionid)
- [getResumptionRecord](internal_.MatterController.md#getresumptionrecord)
- [isCommissioned](internal_.MatterController.md#iscommissioned)
- [removeNode](internal_.MatterController.md#removenode)
- [saveResumptionRecord](internal_.MatterController.md#saveresumptionrecord)
- [create](internal_.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`sessionStorage`, `fabricStorage`, `nodesStore`, `mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `nodesStore` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `mdnsScanner` | [`MdnsScanner`](internal_.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](internal_.RootCertificateManager.md) |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `adminVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |

#### Returns

[`MatterController`](internal_.MatterController.md)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:74

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:53

___

### adminVendorId

• `Private` `Readonly` **adminVendorId**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:62

___

### bleScanner

• `Private` **bleScanner**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:71

___

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:69

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:60

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:66

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:98

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:72

___

### connectOrDiscoverNode

• `Private` **connectOrDiscoverNode**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:100

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:67

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:61

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](internal_.StorageContext.md)\<`any`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:55

___

### getLastOperationalAddress

• `Private` **getLastOperationalAddress**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:123

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:93

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:57

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:70

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:58

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:59

___

### nodesStore

• `Readonly` **nodesStore**: [`StorageContext`](internal_.StorageContext.md)\<`any`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:56

___

### pair

• `Private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:109

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:68

___

### reconnectLastKnownAddress

• `Private` **reconnectLastKnownAddress**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:99

___

### resume

• `Private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:107

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:63

___

### sessionManager

• `Readonly` **sessionManager**: [`SessionManager`](internal_.SessionManager.md)\<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:65

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](internal_.StorageContext.md)\<`any`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:54

___

### setOperationalDeviceData

• `Private` **setOperationalDeviceData**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:119

___

### storeCommissionedNodes

• `Private` **storeCommissionedNodes**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:124

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:73

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:75

## Methods

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:76

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:134

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:135

___

### collectScanners

▸ **collectScanners**(`discoveryCapabilities?`): [`Scanner`](../interfaces/internal_.Scanner.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/internal_.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/internal_.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/internal_.md#bitflag)  }\> |

#### Returns

[`Scanner`](../interfaces/internal_.Scanner.md)[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:77

___

### commission

▸ **commission**(`options`): `Promise`\<[`NodeId`](../modules/internal_.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`NodeCommissioningOptions`](../modules/internal_.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`NodeId`](../modules/internal_.md#nodeid)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:85

___

### connect

▸ **connect**(`peerNodeId`, `timeoutSeconds?`, `discoveryData?`): `Promise`\<[`InteractionClient`](internal_.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `discoveryData?` | [`DiscoveryData`](../modules/internal_.md#discoverydata) |

#### Returns

`Promise`\<[`InteractionClient`](internal_.InteractionClient.md)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:129

___

### disconnect

▸ **disconnect**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:86

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:120

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:132

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:136

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/internal_.md#nodeid)[]

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:111

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/internal_.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/internal_.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:112

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:130

___

### getResumptionRecord

▸ **getResumptionRecord**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:131

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:110

___

### removeNode

▸ **removeNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:87

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:133

___

### create

▸ **create**(`sessionStorage`, `rootCertificateStorage`, `fabricStorage`, `nodesStorage`, `scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `sessionClosedCallback?`, `adminVendorId?`, `adminFabricId?`, `adminFabricIndex?`, `caseAuthenticatedTags?`): `Promise`\<[`MatterController`](internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `rootCertificateStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `nodesStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |
| `scanner` | [`MdnsScanner`](internal_.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |
| `adminVendorId?` | [`VendorId`](../modules/internal_.md#vendorid) |
| `adminFabricId?` | [`FabricId`](../modules/internal_.md#fabricid) |
| `adminFabricIndex?` | [`FabricIndex`](../modules/internal_.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:64
