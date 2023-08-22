[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MatterController

# Class: MatterController

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](export._internal_.MatterController.md#constructor)

### Properties

- [caseClient](export._internal_.MatterController.md#caseclient)
- [certificateManager](export._internal_.MatterController.md#certificatemanager)
- [channelManager](export._internal_.MatterController.md#channelmanager)
- [commissionDevice](export._internal_.MatterController.md#commissiondevice)
- [commissioningOptions](export._internal_.MatterController.md#commissioningoptions)
- [controllerStorage](export._internal_.MatterController.md#controllerstorage)
- [discoverDeviceAddressesByIdentifier](export._internal_.MatterController.md#discoverdeviceaddressesbyidentifier)
- [exchangeManager](export._internal_.MatterController.md#exchangemanager)
- [fabric](export._internal_.MatterController.md#fabric)
- [initializePaseSecureChannel](export._internal_.MatterController.md#initializepasesecurechannel)
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
- [commissionViaBle](export._internal_.MatterController.md#commissionviable)
- [connect](export._internal_.MatterController.md#connect)
- [createSecureSession](export._internal_.MatterController.md#createsecuresession)
- [findResumptionRecordByNodeId](export._internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](export._internal_.MatterController.md#getactivesessioninformation)
- [getFabric](export._internal_.MatterController.md#getfabric)
- [getNextAvailableSessionId](export._internal_.MatterController.md#getnextavailablesessionid)
- [getOperationalServerAddress](export._internal_.MatterController.md#getoperationalserveraddress)
- [getResumptionRecord](export._internal_.MatterController.md#getresumptionrecord)
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
| `mdnsScanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](exports_certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/exports_common.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/exports_protocol.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:53

## Properties

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:49

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:39

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:46

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.
TODO: Split this out into an own CommissioningHandler class

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:80

___

### commissioningOptions

• `Private` `Readonly` **commissioningOptions**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:51

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:50

___

### discoverDeviceAddressesByIdentifier

• `Private` **discoverDeviceAddressesByIdentifier**: `any`

Discovers devices by a provided identifier. It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:59

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:47

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:40

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:74

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:36

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:52

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:37

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:38

___

### operationalServerAddress

• `Optional` **operationalServerAddress**: [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:42

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:48

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:43

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:45

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:41

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

packages/matter.js/dist/cjs/MatterController.d.ts:54

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:114

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:115

___

### commission

▸ **commission**(`identifierData`, `passCode`, `timeoutSeconds?`, `knownAddress?`): `Promise`<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `passCode` | `number` |
| `timeoutSeconds?` | `number` |
| `knownAddress?` | [`ServerAddress`](../modules/exports_common.md#serveraddress) |

#### Returns

`Promise`<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:68

___

### commissionViaBle

▸ **commissionViaBle**(`identifierData`, `passCode`, `timeoutSeconds?`): `Promise`<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `passCode` | `number` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`NodeId`](../modules/exports_datatype.md#nodeid)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:60

___

### connect

▸ **connect**(`nodeId`, `timeoutSeconds?`): `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:107

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
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

packages/matter.js/dist/cjs/MatterController.d.ts:110

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:112

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:116

___

### getFabric

▸ **getFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:109

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:108

___

### getOperationalServerAddress

▸ **getOperationalServerAddress**(): `undefined` \| [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)

#### Returns

`undefined` \| [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:102

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

packages/matter.js/dist/cjs/MatterController.d.ts:111

___

### isCommissioned

▸ **isCommissioned**(): ``false``

#### Returns

``false``

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:100

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
| `SA` | extends [`ServerAddress`](../modules/exports_common.md#serveraddress) |
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

packages/matter.js/dist/cjs/MatterController.d.ts:87

___

### pair

▸ **pair**(`peerNodeId`, `operationalServerAddress`): `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/exports_common.md#serveraddressip) |

#### Returns

`Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:99

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:97

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:113

___

### setOperationalServerAddress

▸ **setOperationalServerAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddressIp`](../modules/exports_common.md#serveraddressip) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:101

___

### create

▸ `Static` **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `operationalServerAddress?`, `commissioningOptions?`, `sessionClosedCallback?`): `Promise`<[`MatterController`](export._internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net_export.NetInterface.md) |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/exports_common.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/exports_protocol.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid)) => `void` |

#### Returns

`Promise`<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:44
