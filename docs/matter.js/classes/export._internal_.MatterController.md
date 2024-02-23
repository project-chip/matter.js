[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / MatterController

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
- [commissionedNodes](export._internal_.MatterController.md#commissionednodes)
- [controllerStorage](export._internal_.MatterController.md#controllerstorage)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [mdnsScanner](export._internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](export._internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](export._internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](export._internal_.MatterController.md#netinterfaceipv6)
- [paseClient](export._internal_.MatterController.md#paseclient)
- [sessionClosedCallback](export._internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](export._internal_.MatterController.md#sessionmanager)
- [storage](export._internal_.MatterController.md#storage)

### Accessors

- [nodeId](export._internal_.MatterController.md#nodeid)

### Methods

- [addTransportInterface](export._internal_.MatterController.md#addtransportinterface)
- [announce](export._internal_.MatterController.md#announce)
- [close](export._internal_.MatterController.md#close)
- [collectScanners](export._internal_.MatterController.md#collectscanners)
- [commission](export._internal_.MatterController.md#commission)
- [commissionDevice](export._internal_.MatterController.md#commissiondevice)
- [connect](export._internal_.MatterController.md#connect)
- [connectOrDiscoverNode](export._internal_.MatterController.md#connectordiscovernode)
- [createSecureSession](export._internal_.MatterController.md#createsecuresession)
- [disconnect](export._internal_.MatterController.md#disconnect)
- [enhanceCommissionedNodeDetails](export._internal_.MatterController.md#enhancecommissionednodedetails)
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getCommissionedNodes](export._internal_.MatterController.md#getcommissionednodes)
- [getCommissionedNodesDetails](export._internal_.MatterController.md#getcommissionednodesdetails)
- [getLastOperationalAddress](export._internal_.MatterController.md#getlastoperationaladdress)
- [getNextAvailableSessionId](export._internal_.MatterController.md#getnextavailablesessionid)
- [getResumptionRecord](export._internal_.MatterController.md#getresumptionrecord)
- [initializePaseSecureChannel](export._internal_.MatterController.md#initializepasesecurechannel)
- [isCommissioned](export._internal_.MatterController.md#iscommissioned)
- [pair](export._internal_.MatterController.md#pair)
- [reconnectLastKnownAddress](export._internal_.MatterController.md#reconnectlastknownaddress)
- [removeNode](export._internal_.MatterController.md#removenode)
- [resume](export._internal_.MatterController.md#resume)
- [saveResumptionRecord](export._internal_.MatterController.md#saveresumptionrecord)
- [setOperationalDeviceData](export._internal_.MatterController.md#setoperationaldevicedata)
- [storeCommissionedNodes](export._internal_.MatterController.md#storecommissionednodes)
- [create](export._internal_.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storage`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](export._internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](certificate_export.RootCertificateManager.md) |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |

#### Returns

[`MatterController`](export._internal_.MatterController.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:154](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L154)

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterController.ts:161](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L161)

___

### bleScanner

• `Private` **bleScanner**: `undefined` \| [`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:151](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L151)

___

### caseClient

• `Private` `Readonly` **caseClient**: [`CaseClient`](session_export.CaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:148](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L148)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:158](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L158)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:145](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L145)

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`CommissionedNodeDetails`](../modules/export._internal_.md#commissionednodedetails)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:152](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L152)

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:149](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L149)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:146](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L146)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:159](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L159)

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:155](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L155)

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:150](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L150)

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:156](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L156)

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:157](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L157)

___

### paseClient

• `Private` `Readonly` **paseClient**: [`PaseClient`](session_export.PaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:147](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L147)

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void`

#### Type declaration

▸ (`peerNodeId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:162](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L162)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<`this`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:144](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L144)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:160](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L160)

## Accessors

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/MatterController.ts:197](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L197)

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

[packages/matter.js/src/MatterController.ts:201](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L201)

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:800](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L800)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:804](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L804)

___

### collectScanners

▸ **collectScanners**(`discoveryCapabilities?`): [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterController.ts:205](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L205)

___

### commission

▸ **commission**(`options`): `Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

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

`Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:246](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L246)

___

### commissionDevice

▸ **commissionDevice**(`paseSecureMessageChannel`, `commissioningOptions`, `discoveryData?`): `Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseSecureMessageChannel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\> |
| `commissioningOptions` | [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions) |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:411](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L411)

___

### connect

▸ **connect**(`peerNodeId`, `timeoutSeconds?`, `discoveryData?`): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:734](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L734)

___

### connectOrDiscoverNode

▸ **connectOrDiscoverNode**(`peerNodeId`, `operationalAddress?`, `timeoutSeconds?`, `discoveryData?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalAddress?` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `timeoutSeconds?` | `number` |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:509](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L509)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

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

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:763](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L763)

___

### disconnect

▸ **disconnect**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:329](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L329)

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:708](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L708)

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:792](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L792)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/MatterController.ts:813](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L813)

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Defined in

[packages/matter.js/src/MatterController.ts:673](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L673)

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

[packages/matter.js/src/MatterController.ts:677](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L677)

___

### getLastOperationalAddress

▸ **getLastOperationalAddress**(`nodeId`): `undefined` \| [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Defined in

[packages/matter.js/src/MatterController.ts:722](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L722)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:759](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L759)

___

### getResumptionRecord

▸ **getResumptionRecord**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:788](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L788)

___

### initializePaseSecureChannel

▸ **initializePaseSecureChannel**(`address`, `passcode`, `device?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/common_export.md#serveraddress) |
| `passcode` | `number` |
| `device?` | [`CommissionableDevice`](../modules/common_export.md#commissionabledevice) |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:348](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L348)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterController.ts:669](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L669)

___

### pair

▸ **pair**(`peerNodeId`, `operationalServerAddress`, `discoveryData?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:617](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L617)

___

### reconnectLastKnownAddress

▸ **reconnectLastKnownAddress**(`peerNodeId`, `operationalAddress`, `discoveryData?`): `Promise`\<`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:485](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L485)

___

### removeNode

▸ **removeNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:334](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L334)

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`, `discoveryData?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:598](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L598)

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

[packages/matter.js/src/MatterController.ts:796](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L796)

___

### setOperationalDeviceData

▸ **setOperationalDeviceData**(`nodeId`, `operationalServerAddress`, `discoveryData?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:691](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L691)

___

### storeCommissionedNodes

▸ **storeCommissionedNodes**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:726](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L726)

___

### create

▸ **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `sessionClosedCallback?`, `adminVendorId?`, `adminFabricId?`, `adminFabricIndex?`, `caseAuthenticatedTags?`): `Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |
| `adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `adminFabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `adminFabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:87](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/MatterController.ts#L87)
