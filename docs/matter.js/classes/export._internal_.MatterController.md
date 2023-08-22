[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterController

# Class: MatterController

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](export._internal_.MatterController.md#constructor)

### Properties

- [caseClient](export._internal_.MatterController.md#caseclient)
- [certificateManager](export._internal_.MatterController.md#certificatemanager)
- [channelManager](export._internal_.MatterController.md#channelmanager)
- [commissioningOptions](export._internal_.MatterController.md#commissioningoptions)
- [controllerStorage](export._internal_.MatterController.md#controllerstorage)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [mdnsScanner](export._internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](export._internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](export._internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](export._internal_.MatterController.md#netinterfaceipv6)
- [operationalServerAddress](export._internal_.MatterController.md#operationalserveraddress)
- [paseClient](export._internal_.MatterController.md#paseclient)
- [sessionClosedCallback](export._internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](export._internal_.MatterController.md#sessionmanager)
- [storage](export._internal_.MatterController.md#storage)

### Methods

- [addTransportInterface](export._internal_.MatterController.md#addtransportinterface)
- [announce](export._internal_.MatterController.md#announce)
- [close](export._internal_.MatterController.md#close)
- [commission](export._internal_.MatterController.md#commission)
- [commissionDevice](export._internal_.MatterController.md#commissiondevice)
- [commissionViaBle](export._internal_.MatterController.md#commissionviable)
- [connect](export._internal_.MatterController.md#connect)
- [createSecureSession](export._internal_.MatterController.md#createsecuresession)
- [discoverDeviceAddressesByIdentifier](export._internal_.MatterController.md#discoverdeviceaddressesbyidentifier)
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getFabric](export._internal_.MatterController.md#getfabric)
- [getNextAvailableSessionId](export._internal_.MatterController.md#getnextavailablesessionid)
- [getOperationalServerAddress](export._internal_.MatterController.md#getoperationalserveraddress)
- [getResumptionRecord](export._internal_.MatterController.md#getresumptionrecord)
- [initializePaseSecureChannel](export._internal_.MatterController.md#initializepasesecurechannel)
- [isCommissioned](export._internal_.MatterController.md#iscommissioned)
- [iterateServerAddresses](export._internal_.MatterController.md#iterateserveraddresses)
- [pair](export._internal_.MatterController.md#pair)
- [resume](export._internal_.MatterController.md#resume)
- [saveResumptionRecord](export._internal_.MatterController.md#saveresumptionrecord)
- [setOperationalServerAddress](export._internal_.MatterController.md#setoperationalserveraddress)
- [create](export._internal_.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storage`, `operationalServerAddress?`, `commissioningOptions?`, `sessionClosedCallback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](certificate_export.RootCertificateManager.md) |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |

#### Defined in

[packages/matter.js/src/MatterController.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L133)

## Properties

### caseClient

• `Private` `Readonly` **caseClient**: [`CaseClient`](session_export.CaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L128)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate_export.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:137](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L137)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol_export.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:125](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L125)

___

### commissioningOptions

• `Private` `Readonly` **commissioningOptions**: [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions)

#### Defined in

[packages/matter.js/src/MatterController.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L130)

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:129](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L129)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

[packages/matter.js/src/MatterController.ts:126](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L126)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L138)

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: [`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:134](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L134)

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:131](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L131)

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:135](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L135)

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L136)

___

### operationalServerAddress

• `Optional` **operationalServerAddress**: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Defined in

[packages/matter.js/src/MatterController.ts:140](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L140)

___

### paseClient

• `Private` `Readonly` **paseClient**: [`PaseClient`](session_export.PaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:127](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L127)

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

[packages/matter.js/src/MatterController.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L142)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

[packages/matter.js/src/MatterController.ts:124](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L124)

___

### storage

• `Private` `Readonly` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:139](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L139)

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

[packages/matter.js/src/MatterController.ts:166](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L166)

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:640](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L640)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterController.ts:644](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L644)

___

### commission

▸ **commission**(`identifierData`, `passCode`, `timeoutSeconds?`, `knownAddress?`): `Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `passCode` | `number` | `undefined` |
| `timeoutSeconds` | `number` | `30` |
| `knownAddress?` | [`ServerAddress`](../modules/common_export.md#serveraddress) | `undefined` |

#### Returns

`Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:242](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L242)

___

### commissionDevice

▸ `Private` **commissionDevice**(`paseSecureMessageChannel`): `Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.
TODO: Split this out into an own CommissioningHandler class

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseSecureMessageChannel` | [`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\> |

#### Returns

`Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:341](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L341)

___

### commissionViaBle

▸ **commissionViaBle**(`identifierData`, `passCode`, `timeoutSeconds?`): `Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `passCode` | `number` | `undefined` |
| `timeoutSeconds` | `number` | `30` |

#### Returns

`Promise`<[`NodeId`](../modules/datatype_export.md#nodeid)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:198](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L198)

___

### connect

▸ **connect**(`nodeId`, `timeoutSeconds?`): `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:573](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L573)

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:601](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L601)

___

### discoverDeviceAddressesByIdentifier

▸ `Private` **discoverDeviceAddressesByIdentifier**(`scanner`, `identifier`, `timeoutSeconds?`): `Promise`<[`ServerAddress`](../modules/common_export.md#serveraddress)[]\>

Discovers devices by a provided identifier. It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) | `undefined` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `30` |

#### Returns

`Promise`<[`ServerAddress`](../modules/common_export.md#serveraddress)[]\>

#### Defined in

[packages/matter.js/src/MatterController.ts:174](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L174)

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:632](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L632)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:653](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L653)

___

### getFabric

▸ **getFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:597](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L597)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:593](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L593)

___

### getOperationalServerAddress

▸ **getOperationalServerAddress**(): `undefined` \| [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Returns

`undefined` \| [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Defined in

[packages/matter.js/src/MatterController.ts:565](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L565)

___

### getResumptionRecord

▸ **getResumptionRecord**(`resumptionId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:628](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L628)

___

### initializePaseSecureChannel

▸ `Private` **initializePaseSecureChannel**(`address`, `passCode`): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](../modules/common_export.md#serveraddress) |
| `passCode` | `number` |

#### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<[`MatterController`](export._internal_.MatterController.md)\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:290](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L290)

___

### isCommissioned

▸ **isCommissioned**(): ``false``

#### Returns

``false``

#### Defined in

[packages/matter.js/src/MatterController.ts:556](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L556)

___

### iterateServerAddresses

▸ **iterateServerAddresses**<`SA`, `T`, `E`\>(`servers`, `errorType`, `updateNetworkInterfaceFunc`, `func`, `lastKnownServer?`): `Promise`<{ `result`: `T` ; `resultAddress`: `SA`  }\>

Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
discovered addresses or devices) and then next server address is tried.The result of the first successful method
call is returned. The logic makes sure to only try each unique address (IP/port) once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SA` | extends [`ServerAddress`](../modules/common_export.md#serveraddress) |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `servers` | `SA`[] |
| `errorType` | [`ClassExtends`](../modules/util_export.md#classextends)<`E`\> |
| `updateNetworkInterfaceFunc` | () => `Promise`<`SA`[]\> |
| `func` | (`server`: `SA`) => `Promise`<`T`\> |
| `lastKnownServer?` | `SA` |

#### Returns

`Promise`<{ `result`: `T` ; `resultAddress`: `SA`  }\>

#### Defined in

[packages/matter.js/src/MatterController.ts:409](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L409)

___

### pair

▸ **pair**(`peerNodeId`, `operationalServerAddress`): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<`unknown`\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |

#### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<`unknown`\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:511](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L511)

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<`unknown`\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeoutSeconds` | `number` | `60` |

#### Returns

`Promise`<[`MessageChannel`](protocol_export.MessageChannel.md)<`unknown`\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:470](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L470)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:636](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L636)

___

### setOperationalServerAddress

▸ **setOperationalServerAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:560](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L560)

___

### create

▸ `Static` **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `operationalServerAddress?`, `commissioningOptions?`, `sessionClosedCallback?`): `Promise`<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/common_export.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/protocol_export.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |

#### Returns

`Promise`<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterController.ts#L71)
