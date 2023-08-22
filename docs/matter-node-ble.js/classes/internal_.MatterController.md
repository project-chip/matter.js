[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MatterController

# Class: MatterController

[<internal>](../modules/internal_.md).MatterController

## Table of contents

### Constructors

- [constructor](internal_.MatterController.md#constructor)

### Properties

- [caseClient](internal_.MatterController.md#caseclient)
- [certificateManager](internal_.MatterController.md#certificatemanager)
- [channelManager](internal_.MatterController.md#channelmanager)
- [commissionDevice](internal_.MatterController.md#commissiondevice)
- [commissioningOptions](internal_.MatterController.md#commissioningoptions)
- [controllerStorage](internal_.MatterController.md#controllerstorage)
- [discoverDeviceAddressesByIdentifier](internal_.MatterController.md#discoverdeviceaddressesbyidentifier)
- [exchangeManager](internal_.MatterController.md#exchangemanager)
- [fabric](internal_.MatterController.md#fabric)
- [initializePaseSecureChannel](internal_.MatterController.md#initializepasesecurechannel)
- [mdnsScanner](internal_.MatterController.md#mdnsscanner)
- [netInterfaceBle](internal_.MatterController.md#netinterfaceble)
- [netInterfaceIpv4](internal_.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](internal_.MatterController.md#netinterfaceipv6)
- [operationalServerAddress](internal_.MatterController.md#operationalserveraddress)
- [paseClient](internal_.MatterController.md#paseclient)
- [sessionClosedCallback](internal_.MatterController.md#sessionclosedcallback)
- [sessionManager](internal_.MatterController.md#sessionmanager)
- [storage](internal_.MatterController.md#storage)

### Methods

- [addTransportInterface](internal_.MatterController.md#addtransportinterface)
- [announce](internal_.MatterController.md#announce)
- [close](internal_.MatterController.md#close)
- [commission](internal_.MatterController.md#commission)
- [commissionViaBle](internal_.MatterController.md#commissionviable)
- [connect](internal_.MatterController.md#connect)
- [createSecureSession](internal_.MatterController.md#createsecuresession)
- [findResumptionRecordByNodeId](internal_.MatterController.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](internal_.MatterController.md#getactivesessioninformation)
- [getFabric](internal_.MatterController.md#getfabric)
- [getNextAvailableSessionId](internal_.MatterController.md#getnextavailablesessionid)
- [getOperationalServerAddress](internal_.MatterController.md#getoperationalserveraddress)
- [getResumptionRecord](internal_.MatterController.md#getresumptionrecord)
- [isCommissioned](internal_.MatterController.md#iscommissioned)
- [iterateServerAddresses](internal_.MatterController.md#iterateserveraddresses)
- [pair](internal_.MatterController.md#pair)
- [resume](internal_.MatterController.md#resume)
- [saveResumptionRecord](internal_.MatterController.md#saveresumptionrecord)
- [setOperationalServerAddress](internal_.MatterController.md#setoperationalserveraddress)
- [create](internal_.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`mdnsScanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storage`, `operationalServerAddress?`, `commissioningOptions?`, `sessionClosedCallback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`Scanner`](../interfaces/internal_.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](internal_.RootCertificateManager.md) |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/internal_.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/internal_.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:53

## Properties

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:49

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:39

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:46

___

### commissionDevice

• `Private` **commissionDevice**: `any`

Method to commission a device with a PASE secure channel. It returns the NodeId of the commissioned device on
success.
TODO: Split this out into an own CommissioningHandler class

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:80

___

### commissioningOptions

• `Private` `Readonly` **commissioningOptions**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:51

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:50

___

### discoverDeviceAddressesByIdentifier

• `Private` **discoverDeviceAddressesByIdentifier**: `any`

Discovers devices by a provided identifier. It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:59

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:47

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:40

___

### initializePaseSecureChannel

• `Private` **initializePaseSecureChannel**: `any`

Method to start commission process with a PASE pairing.
If this not successful and throws an RetransmissionLimitReachedError the address is invalid or the passcode
is wrong.

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:74

___

### mdnsScanner

• `Private` `Readonly` **mdnsScanner**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:36

___

### netInterfaceBle

• `Private` **netInterfaceBle**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:52

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:37

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:38

___

### operationalServerAddress

• `Optional` **operationalServerAddress**: [`ServerAddressIp`](../modules/internal_.md#serveraddressip)

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:42

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:48

___

### sessionClosedCallback

• `Private` `Optional` `Readonly` **sessionClosedCallback**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:43

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:45

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:41

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

matter.js/dist/cjs/MatterController.d.ts:54

___

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:114

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:115

___

### commission

▸ **commission**(`identifierData`, `passCode`, `timeoutSeconds?`, `knownAddress?`): `Promise`<[`NodeId`](../modules/internal_.md#nodeid)\>

Commission a device by its identifier and the Passcode. If a known address is provided this is tried first
before discovering devices in the network. If multiple addresses or devices are found, they are tried all after
each other. It returns the NodeId of the commissioned device.
If it throws an PairRetransmissionLimitReachedError that means that no found device responded to the pairing
request or the passode did not match to any discovered device/address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `passCode` | `number` |
| `timeoutSeconds?` | `number` |
| `knownAddress?` | [`ServerAddress`](../modules/internal_.md#serveraddress) |

#### Returns

`Promise`<[`NodeId`](../modules/internal_.md#nodeid)\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:68

___

### commissionViaBle

▸ **commissionViaBle**(`identifierData`, `passCode`, `timeoutSeconds?`): `Promise`<[`NodeId`](../modules/internal_.md#nodeid)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifierData` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `passCode` | `number` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`NodeId`](../modules/internal_.md#nodeid)\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:60

___

### connect

▸ **connect**(`nodeId`, `timeoutSeconds?`): `Promise`<[`InteractionClient`](internal_.InteractionClient.md)\>

Connect to the device by opening a channel and creating a new CASE session if necessary.
Returns a InteractionClient on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`InteractionClient`](internal_.InteractionClient.md)\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:107

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
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

matter.js/dist/cjs/MatterController.d.ts:110

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:112

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:116

___

### getFabric

▸ **getFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:109

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:108

___

### getOperationalServerAddress

▸ **getOperationalServerAddress**(): `undefined` \| [`ServerAddressIp`](../modules/internal_.md#serveraddressip)

#### Returns

`undefined` \| [`ServerAddressIp`](../modules/internal_.md#serveraddressip)

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:102

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

matter.js/dist/cjs/MatterController.d.ts:111

___

### isCommissioned

▸ **isCommissioned**(): ``false``

#### Returns

``false``

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:100

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
| `SA` | extends [`ServerAddress`](../modules/internal_.md#serveraddress) |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `servers` | `SA`[] |
| `errorType` | [`ClassExtends`](../modules/internal_.md#classextends)<`E`\> |
| `updateNetworkInterfaceFunc` | () => `Promise`<`SA`[]\> |
| `func` | (`server`: `SA`) => `Promise`<`T`\> |
| `lastKnownServer?` | `SA` |

#### Returns

`Promise`<{ `result`: `T` ; `resultAddress`: `SA`  }\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:87

___

### pair

▸ **pair**(`peerNodeId`, `operationalServerAddress`): `Promise`<[`MessageChannel`](internal_.MessageChannel.md)<`unknown`\>\>

Pair with an operational device (already commissioned) and establish a CASE session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `operationalServerAddress` | [`ServerAddressIp`](../modules/internal_.md#serveraddressip) |

#### Returns

`Promise`<[`MessageChannel`](internal_.MessageChannel.md)<`unknown`\>\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:99

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`<[`MessageChannel`](internal_.MessageChannel.md)<`unknown`\>\>

Resume a device connection and establish a CASE session that was previously paired with the controller. This
method will try to connect to the device using the previously used server address (if set). If that fails, the
device is discovered again using its operational instance details.
It returns the operational MessageChannel on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`MessageChannel`](internal_.MessageChannel.md)<`unknown`\>\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:97

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:113

___

### setOperationalServerAddress

▸ **setOperationalServerAddress**(`address`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddressIp`](../modules/internal_.md#serveraddressip) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:101

___

### create

▸ `Static` **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storage`, `operationalServerAddress?`, `commissioningOptions?`, `sessionClosedCallback?`): `Promise`<[`MatterController`](internal_.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/internal_.Scanner.md) |
| `netInterfaceIpv4` | `undefined` \| [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/internal_.NetInterface.md) |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `operationalServerAddress?` | [`ServerAddressIp`](../modules/internal_.md#serveraddressip) |
| `commissioningOptions?` | [`CommissioningOptions`](../modules/internal_.md#commissioningoptions) |
| `sessionClosedCallback?` | (`peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid)) => `void` |

#### Returns

`Promise`<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/cjs/MatterController.d.ts:44
