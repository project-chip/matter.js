[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MatterController

# Class: MatterController

[\<internal\>](../modules/internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](internal_.MatterController.md#constructor)

### Properties

- [adminVendorId](internal_.MatterController.md#adminvendorid)
- [bleScanner](internal_.MatterController.md#blescanner)
- [caseClient](internal_.MatterController.md#caseclient)
- [certificateManager](internal_.MatterController.md#certificatemanager)
- [channelManager](internal_.MatterController.md#channelmanager)
- [commissionDevice](internal_.MatterController.md#commissiondevice)
- [commissionedNodes](internal_.MatterController.md#commissionednodes)
- [connectOrDiscoverNode](internal_.MatterController.md#connectordiscovernode)
- [controllerStorage](internal_.MatterController.md#controllerstorage)
- [exchangeManager](internal_.MatterController.md#exchangemanager)
- [fabric](internal_.MatterController.md#fabric)
- [getLastOperationalAddress](internal_.MatterController.md#getlastoperationaladdress)
- [initializePaseSecureChannel](internal_.MatterController.md#initializepasesecurechannel)
- [mdnsScanner](internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](internal_.MatterController.md#netinterfaceipv6)
- [pair](internal_.MatterController.md#pair)
- [paseClient](internal_.MatterController.md#paseclient)
- [reconnectLastKnownAddress](internal_.MatterController.md#reconnectlastknownaddress)
- [resume](internal_.MatterController.md#resume)
- [sessionClosedCallback](internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](internal_.MatterController.md#sessionmanager)
- [setOperationalDeviceData](internal_.MatterController.md#setoperationaldevicedata)
- [storage](internal_.MatterController.md#storage)
- [storeCommissionedNodes](internal_.MatterController.md#storecommissionednodes)

### Accessors

- [nodeId](internal_.MatterController.md#nodeid)

### Methods

- [addTransportInterface](internal_.MatterController.md#addtransportinterface)
- [announce](internal_.MatterController.md#announce)
- [close](internal_.MatterController.md#close)
- [collectScanners](internal_.MatterController.md#collectscanners)
- [commission](internal_.MatterController.md#commission)
- [connect](internal_.MatterController.md#connect)
- [createSecureSession](internal_.MatterController.md#createsecuresession)
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

• **new MatterController**(`mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storage`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](internal_.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](internal_.RootCertificateManager.md) |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `adminVendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |

#### Returns

[`MatterController`](internal_.MatterController.md)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:71

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:59

___

### bleScanner

• `Private` **bleScanner**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:69

___

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:66

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:56

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:63

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:95

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:70

___

### connectOrDiscoverNode

• `Private` **connectOrDiscoverNode**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:97

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:67

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:64

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:57

___

### getLastOperationalAddress

• `Private` **getLastOperationalAddress**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:120

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:90

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:53

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:68

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:54

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:55

___

### pair

• `Private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:106

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:65

___

### reconnectLastKnownAddress

• `Private` **reconnectLastKnownAddress**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:96

___

### resume

• `Private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Defined in

matter.js/dist/esm/MatterController.d.ts:104

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:60

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:62

___

### setOperationalDeviceData

• `Private` **setOperationalDeviceData**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:116

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:58

___

### storeCommissionedNodes

• `Private` **storeCommissionedNodes**: `any`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:121

## Accessors

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/MatterController.d.ts:72

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

matter.js/dist/esm/MatterController.d.ts:73

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:142

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:143

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

matter.js/dist/esm/MatterController.d.ts:74

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

matter.js/dist/esm/MatterController.d.ts:82

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

matter.js/dist/esm/MatterController.d.ts:126

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](internal_.SecureSession.md)\<[`MatterController`](internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](internal_.SecureSession.md)\<[`MatterController`](internal_.MatterController.md)\>\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:128

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

matter.js/dist/esm/MatterController.d.ts:83

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:117

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

matter.js/dist/esm/MatterController.d.ts:140

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:144

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/internal_.md#nodeid)[]

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:108

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/internal_.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` ; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/internal_.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

matter.js/dist/esm/MatterController.d.ts:109

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:127

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

matter.js/dist/esm/MatterController.d.ts:139

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:107

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

matter.js/dist/esm/MatterController.d.ts:84

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/MatterController.d.ts:141

___

### create

▸ **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `sessionClosedCallback?`, `adminVendorId?`, `adminFabricId?`, `adminFabricIndex?`, `caseAuthenticatedTags?`): `Promise`\<[`MatterController`](internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`MdnsScanner`](internal_.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |
| `adminVendorId?` | [`VendorId`](../modules/internal_.md#vendorid) |
| `adminFabricId?` | [`FabricId`](../modules/internal_.md#fabricid) |
| `adminFabricIndex?` | [`FabricIndex`](../modules/internal_.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/esm/MatterController.d.ts:61
