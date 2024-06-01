[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / MatterController

# Class: MatterController

## Constructors

### new MatterController()

> **new MatterController**(`sessionStorage`, `fabricStorage`, `nodesStore`, `mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `adminVendorId`, `sessionClosedCallback`?): [`MatterController`](MatterController.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `nodesStore` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `mdnsScanner` | [`MdnsScanner`](MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](RootCertificateManager.md) |
| `fabric` | [`Fabric`](Fabric.md) |
| `adminVendorId` | [`VendorId`](../README.md#vendorid-1) |
| `sessionClosedCallback`? | (`peerNodeId`) => `void` |

#### Returns

[`MatterController`](MatterController.md)

#### Source

matter.js/dist/esm/MatterController.d.ts:74

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:53

***

### adminVendorId

> `private` `readonly` **adminVendorId**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:62

***

### bleScanner

> `private` **bleScanner**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:71

***

### caseClient

> `private` `readonly` **caseClient**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:69

***

### certificateManager

> `private` `readonly` **certificateManager**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:60

***

### channelManager

> `private` `readonly` **channelManager**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:66

***

### commissionDevice

> `private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Source

matter.js/dist/esm/MatterController.d.ts:98

***

### commissionedNodes

> `private` `readonly` **commissionedNodes**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:72

***

### connectOrDiscoverNode

> `private` **connectOrDiscoverNode**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:100

***

### exchangeManager

> `private` `readonly` **exchangeManager**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:67

***

### fabric

> `private` `readonly` **fabric**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:61

***

### fabricStorage

> `readonly` **fabricStorage**: [`StorageContext`](StorageContext.md)\<`any`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:55

***

### getLastOperationalAddress

> `private` **getLastOperationalAddress**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:123

***

### initializePaseSecureChannel

> `private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Source

matter.js/dist/esm/MatterController.d.ts:93

***

### mdnsScanner

> `private` `readonly` **mdnsScanner**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:57

***

### netInterfaceBle

> `private` **netInterfaceBle**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:70

***

### netInterfaceIpv4

> `private` `readonly` **netInterfaceIpv4**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:58

***

### netInterfaceIpv6

> `private` `readonly` **netInterfaceIpv6**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:59

***

### nodesStore

> `readonly` **nodesStore**: [`StorageContext`](StorageContext.md)\<`any`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:56

***

### pair

> `private` **pair**: `any`

Pair with an operational device (already commissioned) and establish a CASE session.

#### Source

matter.js/dist/esm/MatterController.d.ts:109

***

### paseClient

> `private` `readonly` **paseClient**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:68

***

### reconnectLastKnownAddress

> `private` **reconnectLastKnownAddress**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:99

***

### resume

> `private` **resume**: `any`

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Source

matter.js/dist/esm/MatterController.d.ts:107

***

### sessionClosedCallback?

> `private` `optional` `readonly` **sessionClosedCallback**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:63

***

### sessionManager

> `readonly` **sessionManager**: [`SessionManager`](SessionManager.md)\<[`MatterController`](MatterController.md)\>

#### Source

matter.js/dist/esm/MatterController.d.ts:65

***

### sessionStorage

> `readonly` **sessionStorage**: [`StorageContext`](StorageContext.md)\<`any`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:54

***

### setOperationalDeviceData

> `private` **setOperationalDeviceData**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:119

***

### storeCommissionedNodes

> `private` **storeCommissionedNodes**: `any`

#### Source

matter.js/dist/esm/MatterController.d.ts:124

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterController`](MatterController.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`MatterController`](MatterController.md)\>

#### Source

matter.js/dist/esm/MatterController.d.ts:73

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../README.md#nodeid-5)

#### Returns

[`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/MatterController.d.ts:75

## Methods

### addTransportInterface()

> **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../interfaces/NetInterface.md) |

#### Returns

`void`

#### Source

matter.js/dist/esm/MatterController.d.ts:76

***

### announce()

> **announce**(): `void`

#### Returns

`void`

#### Source

matter.js/dist/esm/MatterController.d.ts:134

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:135

***

### collectScanners()

> **collectScanners**(`discoveryCapabilities`?): [`Scanner`](../interfaces/Scanner.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discoveryCapabilities`? | [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

[`Scanner`](../interfaces/Scanner.md)[]

#### Source

matter.js/dist/esm/MatterController.d.ts:77

***

### commission()

> **commission**(`options`): `Promise`\<[`NodeId`](../README.md#nodeid-5)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`NodeCommissioningOptions`](../README.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`NodeId`](../README.md#nodeid-5)\>

#### Source

matter.js/dist/esm/MatterController.d.ts:85

***

### connect()

> **connect**(`peerNodeId`, `timeoutSeconds`?, `discoveryData`?): `Promise`\<[`InteractionClient`](InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../README.md#nodeid-5) |
| `timeoutSeconds`? | `number` |
| `discoveryData`? | [`DiscoveryData`](../README.md#discoverydata) |

#### Returns

`Promise`\<[`InteractionClient`](InteractionClient.md)\>

#### Source

matter.js/dist/esm/MatterController.d.ts:129

***

### disconnect()

> **disconnect**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:86

***

### enhanceCommissionedNodeDetails()

> **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `data` | `object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../README.md#supportedstoragetypes)\> |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:120

***

### findResumptionRecordByNodeId()

> **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

matter.js/dist/esm/MatterController.d.ts:132

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

matter.js/dist/esm/MatterController.d.ts:136

***

### getCommissionedNodes()

> **getCommissionedNodes**(): [`NodeId`](../README.md#nodeid-5)[]

#### Returns

[`NodeId`](../README.md#nodeid-5)[]

#### Source

matter.js/dist/esm/MatterController.d.ts:111

***

### getCommissionedNodesDetails()

> **getCommissionedNodesDetails**(): `object`[]

#### Returns

`object`[]

#### Source

matter.js/dist/esm/MatterController.d.ts:112

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:130

***

### getResumptionRecord()

> **getResumptionRecord**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

matter.js/dist/esm/MatterController.d.ts:131

***

### isCommissioned()

> **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/MatterController.d.ts:110

***

### removeNode()

> **removeNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:87

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/MatterController.d.ts:133

***

### create()

> `static` **create**(`sessionStorage`, `rootCertificateStorage`, `fabricStorage`, `nodesStorage`, `scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `sessionClosedCallback`?, `adminVendorId`?, `adminFabricId`?, `adminFabricIndex`?, `caseAuthenticatedTags`?): `Promise`\<[`MatterController`](MatterController.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `rootCertificateStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `nodesStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |
| `scanner` | [`MdnsScanner`](MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/NetInterface.md) |
| `sessionClosedCallback`? | (`peerNodeId`) => `void` |
| `adminVendorId`? | [`VendorId`](../README.md#vendorid-1) |
| `adminFabricId`? | [`FabricId`](../README.md#fabricid-1) |
| `adminFabricIndex`? | [`FabricIndex`](../README.md#fabricindex-1) |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](MatterController.md)\>

#### Source

matter.js/dist/esm/MatterController.d.ts:64
