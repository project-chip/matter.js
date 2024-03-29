[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SessionManager

# Class: SessionManager\<ContextT\>

[\<internal\>](../modules/internal_.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](internal_.SessionManager.md#constructor)

### Properties

- [#private](internal_.SessionManager.md##private)
- [context](internal_.SessionManager.md#context)

### Accessors

- [sessionClosed](internal_.SessionManager.md#sessionclosed)
- [sessionOpened](internal_.SessionManager.md#sessionopened)
- [subscriptionsChanged](internal_.SessionManager.md#subscriptionschanged)

### Methods

- [close](internal_.SessionManager.md#close)
- [createSecureSession](internal_.SessionManager.md#createsecuresession)
- [createUnsecureSession](internal_.SessionManager.md#createunsecuresession)
- [findGroupSession](internal_.SessionManager.md#findgroupsession)
- [findOldestInactiveSession](internal_.SessionManager.md#findoldestinactivesession)
- [findResumptionRecordById](internal_.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](internal_.SessionManager.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](internal_.SessionManager.md#getactivesessioninformation)
- [getNextAvailableSessionId](internal_.SessionManager.md#getnextavailablesessionid)
- [getPaseSession](internal_.SessionManager.md#getpasesession)
- [getSession](internal_.SessionManager.md#getsession)
- [getSessionForNode](internal_.SessionManager.md#getsessionfornode)
- [getUnsecureSession](internal_.SessionManager.md#getunsecuresession)
- [initFromStorage](internal_.SessionManager.md#initfromstorage)
- [removeAllSessionsForNode](internal_.SessionManager.md#removeallsessionsfornode)
- [removeResumptionRecord](internal_.SessionManager.md#removeresumptionrecord)
- [removeSession](internal_.SessionManager.md#removesession)
- [saveResumptionRecord](internal_.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](internal_.SessionManager.md#storeresumptionrecords)
- [updateFabricForResumptionRecords](internal_.SessionManager.md#updatefabricforresumptionrecords)

## Constructors

### constructor

• **new SessionManager**\<`ContextT`\>(`context`, `sessionStorage`): [`SessionManager`](internal_.SessionManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `sessionStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |

#### Returns

[`SessionManager`](internal_.SessionManager.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:25

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:23

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:24

## Accessors

### sessionClosed

• `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/internal_.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/internal_.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:28

___

### sessionOpened

• `get` **sessionOpened**(): [`Observable`](../interfaces/internal_.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/internal_.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:27

___

### subscriptionsChanged

• `get` **subscriptionsChanged**(): [`Observable`](../interfaces/internal_.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/internal_.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:26

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:72

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:34

___

### createUnsecureSession

▸ **createUnsecureSession**(`options`): [`InsecureSession`](internal_.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.initiatorNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |
| `options.isInitiator?` | `boolean` |
| `options.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |

#### Returns

[`InsecureSession`](internal_.InsecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:29

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

matter.js/dist/esm/session/SessionManager.d.ts:54

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:47

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:55

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:56

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/internal_.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:61

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:48

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:50

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:49

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:51

___

### getUnsecureSession

▸ **getUnsecureSession**(`sourceNodeId?`): `undefined` \| [`InsecureSession`](internal_.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`InsecureSession`](internal_.InsecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:53

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](internal_.Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:60

___

### removeAllSessionsForNode

▸ **removeAllSessionsForNode**(`nodeId`, `sendClose?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `sendClose?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:52

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:46

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

matter.js/dist/esm/session/SessionManager.d.ts:45

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:57

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:59

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:58
