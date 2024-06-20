[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [\<internal\>](../modules/export._internal_.md) / MatterController

# Class: MatterController

[export](../modules/export.md).[\<internal\>](../modules/export._internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](export._internal_.MatterController.md#constructor)

### Properties

- [#construction](export._internal_.MatterController.md##construction)
- [adminVendorId](export._internal_.MatterController.md#adminvendorid)
- [bleScanner](export._internal_.MatterController.md#blescanner)
- [caseClient](export._internal_.MatterController.md#caseclient)
- [certificateManager](export._internal_.MatterController.md#certificatemanager)
- [channelManager](export._internal_.MatterController.md#channelmanager)
- [commissionedNodes](export._internal_.MatterController.md#commissionednodes)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [fabricStorage](export._internal_.MatterController.md#fabricstorage)
- [mdnsScanner](export._internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](export._internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](export._internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](export._internal_.MatterController.md#netinterfaceipv6)
- [nodesStore](export._internal_.MatterController.md#nodesstore)
- [paseClient](export._internal_.MatterController.md#paseclient)
- [sessionClosedCallback](export._internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](export._internal_.MatterController.md#sessionmanager)
- [sessionStorage](export._internal_.MatterController.md#sessionstorage)

### Accessors

- [construction](export._internal_.MatterController.md#construction)
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

• **new MatterController**(`sessionStorage`, `fabricStorage`, `nodesStore`, `mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `adminVendorId`, `sessionClosedCallback?`): [`MatterController`](export._internal_.MatterController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `nodesStore` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](certificate_export.RootCertificateManager.md) |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |

#### Returns

[`MatterController`](export._internal_.MatterController.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:169](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L169)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:163](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L163)

___

### adminVendorId

• `Private` `Readonly` **adminVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterController.ts:178](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L178)

___

### bleScanner

• `Private` **bleScanner**: `undefined` \| [`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:161](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L161)

___

### caseClient

• `Private` `Readonly` **caseClient**: [`CaseClient`](session_export.CaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:159](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L159)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:176](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L176)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:156](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L156)

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`CommissionedNodeDetails`](../modules/export._internal_.md#commissionednodedetails)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:162](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L162)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:157](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L157)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:177](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L177)

___

### fabricStorage

• `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:171](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L171)

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:173](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L173)

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:160](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L160)

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:174](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L174)

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:175](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L175)

___

### nodesStore

• `Readonly` **nodesStore**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:172](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L172)

___

### paseClient

• `Private` `Readonly` **paseClient**: [`PaseClient`](session_export.PaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:158](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L158)

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

[packages/matter.js/src/MatterController.ts:179](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L179)

___

### sessionManager

• `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:155](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L155)

___

### sessionStorage

• `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:170](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L170)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:165](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L165)

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/MatterController.ts:212](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L212)

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

[packages/matter.js/src/MatterController.ts:216](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L216)

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:794](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L794)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:798](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L798)

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

[packages/matter.js/src/MatterController.ts:220](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L220)

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

[packages/matter.js/src/MatterController.ts:261](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L261)

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

[packages/matter.js/src/MatterController.ts:426](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L426)

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

[packages/matter.js/src/MatterController.ts:753](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L753)

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

[packages/matter.js/src/MatterController.ts:524](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L524)

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

[packages/matter.js/src/MatterController.ts:344](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L344)

___

### enhanceCommissionedNodeDetails

▸ **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `data` | `Object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:727](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L727)

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

[packages/matter.js/src/MatterController.ts:786](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L786)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/MatterController.ts:807](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L807)

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Defined in

[packages/matter.js/src/MatterController.ts:692](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L692)

___

### getCommissionedNodesDetails

▸ **getCommissionedNodesDetails**(): \{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Returns

\{ `advertisedName`: `undefined` \| `string` = discoveryData.DN; `basicInformationData`: `undefined` \| `Record`\<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\> ; `discoveryData`: `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata) ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `operationalAddress`: `undefined` \| `string`  }[]

#### Defined in

[packages/matter.js/src/MatterController.ts:696](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L696)

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

[packages/matter.js/src/MatterController.ts:741](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L741)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:778](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L778)

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

[packages/matter.js/src/MatterController.ts:782](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L782)

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

[packages/matter.js/src/MatterController.ts:363](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L363)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterController.ts:688](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L688)

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

[packages/matter.js/src/MatterController.ts:636](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L636)

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

[packages/matter.js/src/MatterController.ts:500](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L500)

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

[packages/matter.js/src/MatterController.ts:349](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L349)

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

[packages/matter.js/src/MatterController.ts:617](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L617)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:790](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L790)

___

### setOperationalDeviceData

▸ **setOperationalDeviceData**(`nodeId`, `operationalServerAddress`, `discoveryData?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `discoveryData?` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:710](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L710)

___

### storeCommissionedNodes

▸ **storeCommissionedNodes**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:745](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L745)

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
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |
| `adminVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `adminFabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `adminFabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:89](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/MatterController.ts#L89)
