[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [export](../../README.md) / [\<internal\>](../README.md) / MatterController

# Class: MatterController

## Constructors

### new MatterController()

> **new MatterController**(`sessionStorage`, `fabricStorage`, `nodesStore`, `mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `adminVendorId`, `sessionClosedCallback`?): [`MatterController`](MatterController.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `nodesStore` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `mdnsScanner` | [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../../../net/export/interfaces/NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../../../net/export/interfaces/NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](../../../certificate/export/classes/RootCertificateManager.md) |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `adminVendorId` | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `sessionClosedCallback`? | (`peerNodeId`) => `void` |

#### Returns

[`MatterController`](MatterController.md)

#### Source

[packages/matter.js/src/MatterController.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L169)

## Properties

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MatterController`](MatterController.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L163)

***

### adminVendorId

> `private` `readonly` **adminVendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

#### Source

[packages/matter.js/src/MatterController.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L178)

***

### bleScanner

> `private` **bleScanner**: `undefined` \| [`Scanner`](../../../common/export/interfaces/Scanner.md)

#### Source

[packages/matter.js/src/MatterController.ts:161](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L161)

***

### caseClient

> `private` `readonly` **caseClient**: [`CaseClient`](../../../session/export/classes/CaseClient.md)

#### Source

[packages/matter.js/src/MatterController.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L159)

***

### certificateManager

> `private` `readonly` **certificateManager**: [`RootCertificateManager`](../../../certificate/export/classes/RootCertificateManager.md)

#### Source

[packages/matter.js/src/MatterController.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L176)

***

### channelManager

> `private` `readonly` **channelManager**: [`ChannelManager`](../../../protocol/export/classes/ChannelManager.md)

#### Source

[packages/matter.js/src/MatterController.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L156)

***

### commissionedNodes

> `private` `readonly` **commissionedNodes**: `Map`\<[`NodeId`](../../../datatype/export/README.md#nodeid), [`CommissionedNodeDetails`](../README.md#commissionednodedetails)\>

#### Source

[packages/matter.js/src/MatterController.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L162)

***

### exchangeManager

> `private` `readonly` **exchangeManager**: [`ExchangeManager`](../../../protocol/export/classes/ExchangeManager.md)\<[`MatterController`](MatterController.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:157](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L157)

***

### fabric

> `private` `readonly` **fabric**: [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/MatterController.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L177)

***

### fabricStorage

> `readonly` **fabricStorage**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/MatterController.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L171)

***

### mdnsScanner

> `private` `readonly` **mdnsScanner**: [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/MatterController.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L173)

***

### netInterfaceBle

> `private` **netInterfaceBle**: `undefined` \| [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Source

[packages/matter.js/src/MatterController.ts:160](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L160)

***

### netInterfaceIpv4

> `private` `readonly` **netInterfaceIpv4**: `undefined` \| [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Source

[packages/matter.js/src/MatterController.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L174)

***

### netInterfaceIpv6

> `private` `readonly` **netInterfaceIpv6**: [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Source

[packages/matter.js/src/MatterController.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L175)

***

### nodesStore

> `readonly` **nodesStore**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/MatterController.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L172)

***

### paseClient

> `private` `readonly` **paseClient**: [`PaseClient`](../../../session/export/classes/PaseClient.md)

#### Source

[packages/matter.js/src/MatterController.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L158)

***

### sessionClosedCallback()?

> `private` `optional` `readonly` **sessionClosedCallback**: (`peerNodeId`) => `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterController.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L179)

***

### sessionManager

> `readonly` **sessionManager**: [`SessionManager`](../../../session/export/classes/SessionManager.md)\<[`MatterController`](MatterController.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L155)

***

### sessionStorage

> `readonly` **sessionStorage**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/MatterController.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L170)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MatterController`](MatterController.md)\>

#### Returns

[`AsyncConstruction`](../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`MatterController`](MatterController.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L165)

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Returns

[`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/MatterController.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L212)

## Methods

### addTransportInterface()

> **addTransportInterface**(`netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `netInterface` | [`NetInterface`](../../../net/export/interfaces/NetInterface.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterController.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L216)

***

### announce()

> **announce**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/MatterController.ts:794](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L794)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:798](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L798)

***

### collectScanners()

> **collectScanners**(`discoveryCapabilities`): [`Scanner`](../../../common/export/interfaces/Scanner.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discoveryCapabilities` | [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> |

#### Returns

[`Scanner`](../../../common/export/interfaces/Scanner.md)[]

#### Source

[packages/matter.js/src/MatterController.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L220)

***

### commission()

> **commission**(`options`): `Promise`\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`NodeCommissioningOptions`](../../README.md#nodecommissioningoptions) |

#### Returns

`Promise`\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/MatterController.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L261)

***

### commissionDevice()

> `private` **commissionDevice**(`paseSecureMessageChannel`, `commissioningOptions`, `discoveryData`?): `Promise`\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `paseSecureMessageChannel` | [`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\> |
| `commissioningOptions` | [`CommissioningOptions`](../../../protocol/export/README.md#commissioningoptions) |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<[`NodeId`](../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/MatterController.ts:426](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L426)

***

### connect()

> **connect**(`peerNodeId`, `timeoutSeconds`?, `discoveryData`?): `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `timeoutSeconds`? | `number` |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:753](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L753)

***

### connectOrDiscoverNode()

> `private` **connectOrDiscoverNode**(`peerNodeId`, `operationalAddress`?, `timeoutSeconds`?, `discoveryData`?): `Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `operationalAddress`? | [`ServerAddressIp`](../../../common/export/README.md#serveraddressip) |
| `timeoutSeconds`? | `number` |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Source

[packages/matter.js/src/MatterController.ts:524](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L524)

***

### disconnect()

> **disconnect**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:344](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L344)

***

### enhanceCommissionedNodeDetails()

> **enhanceCommissionedNodeDetails**(`nodeId`, `data`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `data` | `object` |
| `data.basicInformationData` | `Record`\<`string`, [`SupportedStorageTypes`](../../../storage/export/README.md#supportedstoragetypes)\> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:727](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L727)

***

### findResumptionRecordByNodeId()

> **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../../../session/export/interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../../../session/export/interfaces/ResumptionRecord.md)

#### Source

[packages/matter.js/src/MatterController.ts:786](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L786)

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

[packages/matter.js/src/MatterController.ts:807](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L807)

***

### getCommissionedNodes()

> **getCommissionedNodes**(): [`NodeId`](../../../datatype/export/README.md#nodeid)[]

#### Returns

[`NodeId`](../../../datatype/export/README.md#nodeid)[]

#### Source

[packages/matter.js/src/MatterController.ts:692](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L692)

***

### getCommissionedNodesDetails()

> **getCommissionedNodesDetails**(): `object`[]

#### Returns

`object`[]

#### Source

[packages/matter.js/src/MatterController.ts:696](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L696)

***

### getLastOperationalAddress()

> `private` **getLastOperationalAddress**(`nodeId`): `undefined` \| [`ServerAddressIp`](../../../common/export/README.md#serveraddressip)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`ServerAddressIp`](../../../common/export/README.md#serveraddressip)

#### Source

[packages/matter.js/src/MatterController.ts:741](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L741)

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

[packages/matter.js/src/MatterController.ts:778](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L778)

***

### getResumptionRecord()

> **getResumptionRecord**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../../../session/export/interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../../../session/export/interfaces/ResumptionRecord.md)

#### Source

[packages/matter.js/src/MatterController.ts:782](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L782)

***

### initializePaseSecureChannel()

> `private` **initializePaseSecureChannel**(`address`, `passcode`, `device`?): `Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../../../common/export/README.md#serveraddress) |
| `passcode` | `number` |
| `device`? | [`CommissionableDevice`](../../../common/export/README.md#commissionabledevice) |

#### Returns

`Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Source

[packages/matter.js/src/MatterController.ts:363](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L363)

***

### isCommissioned()

> **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/MatterController.ts:688](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L688)

***

### pair()

> `private` **pair**(`peerNodeId`, `operationalServerAddress`, `discoveryData`?): `Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../../../common/export/README.md#serveraddressip) |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Source

[packages/matter.js/src/MatterController.ts:636](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L636)

***

### reconnectLastKnownAddress()

> `private` **reconnectLastKnownAddress**(`peerNodeId`, `operationalAddress`, `discoveryData`?): `Promise`\<`undefined` \| [`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `operationalAddress` | [`ServerAddressIp`](../../../common/export/README.md#serveraddressip) |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<`undefined` \| [`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Source

[packages/matter.js/src/MatterController.ts:500](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L500)

***

### removeNode()

> **removeNode**(`nodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L349)

***

### resume()

> `private` **resume**(`peerNodeId`, `timeoutSeconds`?, `discoveryData`?): `Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `timeoutSeconds`? | `number` |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<[`MessageChannel`](../../../protocol/export/classes/MessageChannel.md)\<[`MatterController`](MatterController.md)\>\>

#### Source

[packages/matter.js/src/MatterController.ts:617](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L617)

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../../../session/export/interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:790](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L790)

***

### setOperationalDeviceData()

> `private` **setOperationalDeviceData**(`nodeId`, `operationalServerAddress`, `discoveryData`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../../../common/export/README.md#serveraddressip) |
| `discoveryData`? | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:710](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L710)

***

### storeCommissionedNodes()

> `private` **storeCommissionedNodes**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/MatterController.ts:745](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L745)

***

### create()

> `static` **create**(`sessionStorage`, `rootCertificateStorage`, `fabricStorage`, `nodesStorage`, `scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `sessionClosedCallback`?, `adminVendorId`?, `adminFabricId`?, `adminFabricIndex`?, `caseAuthenticatedTags`?): `Promise`\<[`MatterController`](MatterController.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `rootCertificateStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `fabricStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `nodesStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |
| `scanner` | [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../../../net/export/interfaces/NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../../../net/export/interfaces/NetInterface.md) |
| `sessionClosedCallback`? | (`peerNodeId`) => `void` |
| `adminVendorId`? | [`VendorId`](../../../datatype/export/README.md#vendorid) |
| `adminFabricId`? | [`FabricId`](../../../datatype/export/README.md#fabricid) |
| `adminFabricIndex`? | [`FabricIndex`](../../../datatype/export/README.md#fabricindex) |
| `caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |

#### Returns

`Promise`\<[`MatterController`](MatterController.md)\>

#### Source

[packages/matter.js/src/MatterController.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterController.ts#L89)
