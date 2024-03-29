[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / SessionManager

# Class: SessionManager\<ContextT\>

[exports/session](../modules/exports_session.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](exports_session.SessionManager.md#constructor)

### Properties

- [#private](exports_session.SessionManager.md##private)
- [context](exports_session.SessionManager.md#context)

### Accessors

- [sessionClosed](exports_session.SessionManager.md#sessionclosed)
- [sessionOpened](exports_session.SessionManager.md#sessionopened)
- [subscriptionsChanged](exports_session.SessionManager.md#subscriptionschanged)

### Methods

- [close](exports_session.SessionManager.md#close)
- [createSecureSession](exports_session.SessionManager.md#createsecuresession)
- [createUnsecureSession](exports_session.SessionManager.md#createunsecuresession)
- [findGroupSession](exports_session.SessionManager.md#findgroupsession)
- [findOldestInactiveSession](exports_session.SessionManager.md#findoldestinactivesession)
- [findResumptionRecordById](exports_session.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](exports_session.SessionManager.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](exports_session.SessionManager.md#getactivesessioninformation)
- [getNextAvailableSessionId](exports_session.SessionManager.md#getnextavailablesessionid)
- [getPaseSession](exports_session.SessionManager.md#getpasesession)
- [getSession](exports_session.SessionManager.md#getsession)
- [getSessionForNode](exports_session.SessionManager.md#getsessionfornode)
- [getUnsecureSession](exports_session.SessionManager.md#getunsecuresession)
- [initFromStorage](exports_session.SessionManager.md#initfromstorage)
- [removeAllSessionsForNode](exports_session.SessionManager.md#removeallsessionsfornode)
- [removeResumptionRecord](exports_session.SessionManager.md#removeresumptionrecord)
- [removeSession](exports_session.SessionManager.md#removesession)
- [saveResumptionRecord](exports_session.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](exports_session.SessionManager.md#storeresumptionrecords)
- [updateFabricForResumptionRecords](exports_session.SessionManager.md#updatefabricforresumptionrecords)

## Constructors

### constructor

• **new SessionManager**\<`ContextT`\>(`context`, `sessionStorage`): [`SessionManager`](exports_session.SessionManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `sessionStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

[`SessionManager`](exports_session.SessionManager.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:25

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:23

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:24

## Accessors

### sessionClosed

• `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:28

___

### sessionOpened

• `get` **sessionOpened**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:27

___

### subscriptionsChanged

• `get` **subscriptionsChanged**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:26

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:72

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:34

___

### createUnsecureSession

▸ **createUnsecureSession**(`options`): [`InsecureSession`](exports_session.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.initiatorNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `options.isInitiator?` | `boolean` |
| `options.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |

#### Returns

[`InsecureSession`](exports_session.InsecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:29

___

### findGroupSession

▸ **findGroupSession**(`groupId`, `groupSessionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |
| `groupSessionId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:54

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:47

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:55

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:56

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/exports_fabric.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:61

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:48

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:50

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:49

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`SecureSession`](exports_session.SecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:51

___

### getUnsecureSession

▸ **getUnsecureSession**(`sourceNodeId?`): `undefined` \| [`InsecureSession`](exports_session.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`InsecureSession`](exports_session.InsecureSession.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:53

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:60

___

### removeAllSessionsForNode

▸ **removeAllSessionsForNode**(`nodeId`, `sendClose?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `sendClose?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:52

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:46

___

### removeSession

▸ **removeSession**(`sessionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:45

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:57

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:59

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:58
