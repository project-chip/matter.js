[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterController

# Class: MatterController

[index](../modules/index.md).MatterController

## Table of contents

### Constructors

- [constructor](index.MatterController.md#constructor)

### Properties

- [caseClient](index.MatterController.md#caseclient)
- [certificateManager](index.MatterController.md#certificatemanager)
- [channelManager](index.MatterController.md#channelmanager)
- [controllerStorage](index.MatterController.md#controllerstorage)
- [ensureSuccess](index.MatterController.md#ensuresuccess)
- [exchangeManager](index.MatterController.md#exchangemanager)
- [fabric](index.MatterController.md#fabric)
- [netInterfaceIpv4](index.MatterController.md#netinterfaceipv4)
- [netInterfaceIpv6](index.MatterController.md#netinterfaceipv6)
- [paseClient](index.MatterController.md#paseclient)
- [scanner](index.MatterController.md#scanner)
- [sessionManager](index.MatterController.md#sessionmanager)
- [storageManager](index.MatterController.md#storagemanager)

### Methods

- [announce](index.MatterController.md#announce)
- [close](index.MatterController.md#close)
- [commission](index.MatterController.md#commission)
- [connect](index.MatterController.md#connect)
- [createSecureSession](index.MatterController.md#createsecuresession)
- [findResumptionRecordByNodeId](index.MatterController.md#findresumptionrecordbynodeid)
- [getFabric](index.MatterController.md#getfabric)
- [getNextAvailableSessionId](index.MatterController.md#getnextavailablesessionid)
- [getResumptionRecord](index.MatterController.md#getresumptionrecord)
- [isCommissioned](index.MatterController.md#iscommissioned)
- [pair](index.MatterController.md#pair)
- [resume](index.MatterController.md#resume)
- [saveResumptionRecord](index.MatterController.md#saveresumptionrecord)
- [create](index.MatterController.md#create)

## Constructors

### constructor

• **new MatterController**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `certificateManager`, `fabric`, `storageManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |
| `netInterfaceIpv4` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](exports_certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:30

## Properties

### caseClient

• `Private` `Readonly` **caseClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:28

___

### certificateManager

• `Private` `Readonly` **certificateManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:20

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:25

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:29

___

### ensureSuccess

• `Private` **ensureSuccess**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:36

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:26

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:21

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:18

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:19

___

### paseClient

• `Private` `Readonly` **paseClient**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:27

___

### scanner

• `Private` `Readonly` **scanner**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:17

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:24

___

### storageManager

• `Private` `Readonly` **storageManager**: `any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:22

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:43

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:44

___

### commission

▸ **commission**(`commissionAddress`, `commissionPort`, `_discriminator`, `setupPin`): `Promise`<[`NodeId`](exports_datatype.NodeId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionAddress` | `string` |
| `commissionPort` | `number` |
| `_discriminator` | `number` |
| `setupPin` | `number` |

#### Returns

`Promise`<[`NodeId`](exports_datatype.NodeId.md)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:31

___

### connect

▸ **connect**(`nodeId`, `timeoutSeconds?`): `Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:35

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
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

packages/matter.js/dist/cjs/MatterController.d.ts:39

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](exports_datatype.NodeId.md) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:41

___

### getFabric

▸ **getFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:38

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:37

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

packages/matter.js/dist/cjs/MatterController.d.ts:40

___

### isCommissioned

▸ **isCommissioned**(): ``false``

#### Returns

``false``

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:34

___

### pair

▸ **pair**(`peerNodeId`, `operationalIp`, `operationalPort`): `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `operationalIp` | `string` |
| `operationalPort` | `number` |

#### Returns

`Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:33

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`MessageChannel`](exports_protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:32

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

packages/matter.js/dist/cjs/MatterController.d.ts:42

___

### create

▸ `Static` **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storageManager`): `Promise`<[`MatterController`](index.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |
| `netInterfaceIpv4` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Returns

`Promise`<[`MatterController`](index.MatterController.md)\>

#### Defined in

packages/matter.js/dist/cjs/MatterController.d.ts:23
