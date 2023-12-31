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
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getCommissionedNodes](export._internal_.MatterController.md#getcommissionednodes)
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
- [setOperationalServerAddress](export._internal_.MatterController.md#setoperationalserveraddress)
- [storeCommisionedNodes](export._internal_.MatterController.md#storecommisionednodes)
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

[packages/matter.js/src/MatterController.ts:150](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L150)

## Properties

### adminVendorId

• `Private` `Readonly` **adminVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

[packages/matter.js/src/MatterController.ts:157](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L157)

___

### bleScanner

• `Private` **bleScanner**: `undefined` \| [`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:147](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L147)

___

### caseClient

• `Private` `Readonly` **caseClient**: [`CaseClient`](session_export.CaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:144](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L144)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:154](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L154)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:141](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L141)

___

### commissionedNodes

• `Private` `Readonly` **commissionedNodes**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`CommissionedNodeDetails`](../modules/export._internal_.md#commissionednodedetails)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:148](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L148)

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:145](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L145)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: [`ExchangeManager`](protocol_export.ExchangeManager.md)\<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:142](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L142)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:155](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L155)

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:151](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L151)

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:146](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L146)

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:152](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L152)

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:153](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L153)

___

### paseClient

• `Private` `Readonly` **paseClient**: [`PaseClient`](session_export.PaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:143](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L143)

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

[packages/matter.js/src/MatterController.ts:158](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L158)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: [`SessionManager`](session_export.SessionManager.md)\<`this`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:140](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L140)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:156](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L156)

## Accessors

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/MatterController.ts:193](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L193)

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

[packages/matter.js/src/MatterController.ts:197](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L197)

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:710](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L710)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:714](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L714)

___

### collectScanners

▸ **collectScanners**(`discoveryCapabilities?`): [`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\> |

#### Returns

[`Scanner`](../interfaces/common_export.Scanner.md)[]

#### Defined in

[packages/matter.js/src/MatterController.ts:201](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L201)

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

[packages/matter.js/src/MatterController.ts:242](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L242)

___

### commissionDevice

▸ **commissionDevice**(`paseSecureMessageChannel`, `commissioningOptions`): `Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseSecureMessageChannel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\> |
| `commissioningOptions` | [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions) |

#### Returns

`Promise`\<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:397](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L397)

___

### connect

▸ **connect**(`peerNodeId`, `timeoutSeconds?`): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:647](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L647)

___

### connectOrDiscoverNode

▸ **connectOrDiscoverNode**(`peerNodeId`, `operationalAddress?`, `timeoutSeconds?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalAddress?` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:485](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L485)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:672](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L672)

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

[packages/matter.js/src/MatterController.ts:325](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L325)

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

[packages/matter.js/src/MatterController.ts:702](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L702)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/MatterController.ts:723](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L723)

___

### getCommissionedNodes

▸ **getCommissionedNodes**(): [`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Defined in

[packages/matter.js/src/MatterController.ts:624](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L624)

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

[packages/matter.js/src/MatterController.ts:635](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L635)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:668](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L668)

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

[packages/matter.js/src/MatterController.ts:698](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L698)

___

### initializePaseSecureChannel

▸ **initializePaseSecureChannel**(`address`, `passcode`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/common_export.md#serveraddress) |
| `passcode` | `number` |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:344](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L344)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/MatterController.ts:620](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L620)

___

### pair

▸ **pair**(`peerNodeId`, `operationalServerAddress`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:575](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L575)

___

### reconnectLastKnownAddress

▸ **reconnectLastKnownAddress**(`peerNodeId`, `operationalAddress`): `Promise`\<`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |

#### Returns

`Promise`\<`undefined` \| [`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:462](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L462)

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

[packages/matter.js/src/MatterController.ts:330](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L330)

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`MessageChannel`](protocol_export.MessageChannel.md)\<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:556](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L556)

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

[packages/matter.js/src/MatterController.ts:706](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L706)

___

### setOperationalServerAddress

▸ **setOperationalServerAddress**(`nodeId`, `operationalServerAddress`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:628](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L628)

___

### storeCommisionedNodes

▸ **storeCommisionedNodes**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:639](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L639)

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

[packages/matter.js/src/MatterController.ts:83](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/MatterController.ts#L83)
