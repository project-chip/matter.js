[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterController

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
- [ensureSuccess](index.MatterController.md#ensuresuccess)
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
| `scanner` | [`Scanner`](../interfaces/common.Scanner.md) |
| `netInterfaceIpv4` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `certificateManager` | [`RootCertificateManager`](certificate.RootCertificateManager.md) |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/MatterController.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L72)

## Properties

### caseClient

• `Private` `Readonly` **caseClient**: [`CaseClient`](session.CaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L69)

___

### certificateManager

• `Private` `Readonly` **certificateManager**: [`RootCertificateManager`](certificate.RootCertificateManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L76)

___

### channelManager

• `Private` `Readonly` **channelManager**: [`ChannelManager`](protocol.ChannelManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L66)

___

### controllerStorage

• `Private` `Readonly` **controllerStorage**: [`StorageContext`](storage.StorageContext.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L70)

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

[packages/matter.js/src/MatterController.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L67)

___

### fabric

• `Private` `Readonly` **fabric**: [`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L77)

___

### netInterfaceIpv4

• `Private` `Readonly` **netInterfaceIpv4**: [`NetInterface`](../interfaces/net.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L74)

___

### netInterfaceIpv6

• `Private` `Readonly` **netInterfaceIpv6**: [`NetInterface`](../interfaces/net.NetInterface.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L75)

___

### paseClient

• `Private` `Readonly` **paseClient**: [`PaseClient`](session.PaseClient.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:68](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L68)

___

### scanner

• `Private` `Readonly` **scanner**: [`Scanner`](../interfaces/common.Scanner.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L73)

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

[packages/matter.js/src/MatterController.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L65)

___

### storageManager

• `Private` `Readonly` **storageManager**: [`StorageManager`](storage.StorageManager.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L78)

## Methods

### announce

▸ **announce**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:224](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L224)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:228](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L228)

___

### commission

▸ **commission**(`commissionAddress`, `commissionPort`, `_discriminator`, `setupPin`): `Promise`<[`NodeId`](datatype.NodeId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionAddress` | `string` |
| `commissionPort` | `number` |
| `_discriminator` | `number` |
| `setupPin` | `number` |

#### Returns

`Promise`<[`NodeId`](datatype.NodeId.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L90)

___

### connect

▸ **connect**(`nodeId`, `timeoutSeconds?`): `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:177](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L177)

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |
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

[packages/matter.js/src/MatterController.ts:208](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L208)

___

### ensureSuccess

▸ `Private` **ensureSuccess**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv.FieldType.md)<[`CommissioningError`](../enums/cluster.CommissioningError.md)\>  }\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterController.ts:195](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L195)

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:216](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L216)

___

### getFabric

▸ **getFabric**(): [`Fabric`](fabric.Fabric.md)

#### Returns

[`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/MatterController.ts:204](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L204)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `any`

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:200](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L200)

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

[packages/matter.js/src/MatterController.ts:212](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L212)

___

### isCommissioned

▸ **isCommissioned**(): ``false``

#### Returns

``false``

#### Defined in

[packages/matter.js/src/MatterController.ts:173](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L173)

___

### pair

▸ **pair**(`peerNodeId`, `operationalIp`, `operationalPort`): `Promise`<[`MessageChannel`](protocol.MessageChannel.md)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |
| `operationalIp` | `string` |
| `operationalPort` | `number` |

#### Returns

`Promise`<[`MessageChannel`](protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:162](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L162)

___

### resume

▸ **resume**(`peerNodeId`, `timeoutSeconds?`): `Promise`<[`MessageChannel`](protocol.MessageChannel.md)<`unknown`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) | `undefined` |
| `timeoutSeconds` | `number` | `60` |

#### Returns

`Promise`<[`MessageChannel`](protocol.MessageChannel.md)<`unknown`\>\>

#### Defined in

[packages/matter.js/src/MatterController.ts:154](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L154)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/MatterController.ts:220](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L220)

___

### create

▸ `Static` **create**(`scanner`, `netInterfaceIpv4`, `netInterfaceIpv6`, `storageManager`): `Promise`<[`MatterController`](index.MatterController.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common.Scanner.md) |
| `netInterfaceIpv4` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `netInterfaceIpv6` | [`NetInterface`](../interfaces/net.NetInterface.md) |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Returns

`Promise`<[`MatterController`](index.MatterController.md)\>

#### Defined in

[packages/matter.js/src/MatterController.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterController.ts#L43)
