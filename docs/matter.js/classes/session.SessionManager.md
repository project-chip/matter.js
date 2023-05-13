[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / SessionManager

# Class: SessionManager<ContextT\>

[session](../modules/session.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](session.SessionManager.md#constructor)

### Properties

- [context](session.SessionManager.md#context)
- [nextSessionId](session.SessionManager.md#nextsessionid)
- [resumptionRecords](session.SessionManager.md#resumptionrecords)
- [sessionStorage](session.SessionManager.md#sessionstorage)
- [sessions](session.SessionManager.md#sessions)
- [unsecureSession](session.SessionManager.md#unsecuresession)

### Methods

- [createSecureSession](session.SessionManager.md#createsecuresession)
- [findResumptionRecordById](session.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](session.SessionManager.md#findresumptionrecordbynodeid)
- [getNextAvailableSessionId](session.SessionManager.md#getnextavailablesessionid)
- [getSession](session.SessionManager.md#getsession)
- [getSessionForNode](session.SessionManager.md#getsessionfornode)
- [getUnsecureSession](session.SessionManager.md#getunsecuresession)
- [initFromStorage](session.SessionManager.md#initfromstorage)
- [removeSession](session.SessionManager.md#removesession)
- [saveResumptionRecord](session.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](session.SessionManager.md#storeresumptionrecords)

## Constructors

### constructor

• **new SessionManager**<`ContextT`\>(`context`, `storageManager`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L43)

## Properties

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L44)

___

### nextSessionId

• `Private` **nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L39)

___

### resumptionRecords

• `Private` **resumptionRecords**: `Map`<`bigint`, [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L40)

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: [`StorageContext`](storage.StorageContext.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L41)

___

### sessions

• `Private` `Readonly` **sessions**: `Map`<`number`, [`Session`](../interfaces/session.Session.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L38)

___

### unsecureSession

• `Private` `Readonly` **unsecureSession**: [`UnsecureSession`](session.UnsecureSession.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L37)

## Methods

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](session.SecureSession.md)<`ContextT`\>\>

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

`Promise`<[`SecureSession`](session.SecureSession.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L52)

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:94](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L94)

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L98)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L66)

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L77)

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`undefined` \| [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L81)

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](session.UnsecureSession.md)<`ContextT`\>

#### Returns

[`UnsecureSession`](session.UnsecureSession.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L90)

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](fabric.Fabric.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:117](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L117)

___

### removeSession

▸ **removeSession**(`sessionId`, `peerNodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L60)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L102)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SessionManager.ts#L107)
