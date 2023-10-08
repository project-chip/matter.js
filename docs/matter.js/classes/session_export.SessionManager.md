[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / SessionManager

# Class: SessionManager<ContextT\>

[session/export](../modules/session_export.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](session_export.SessionManager.md#constructor)

### Properties

- [context](session_export.SessionManager.md#context)
- [nextSessionId](session_export.SessionManager.md#nextsessionid)
- [resumptionRecords](session_export.SessionManager.md#resumptionrecords)
- [sessionStorage](session_export.SessionManager.md#sessionstorage)
- [sessions](session_export.SessionManager.md#sessions)
- [sessionsToClose](session_export.SessionManager.md#sessionstoclose)
- [unsecureSession](session_export.SessionManager.md#unsecuresession)

### Methods

- [close](session_export.SessionManager.md#close)
- [createSecureSession](session_export.SessionManager.md#createsecuresession)
- [findResumptionRecordById](session_export.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](session_export.SessionManager.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](session_export.SessionManager.md#getactivesessioninformation)
- [getNextAvailableSessionId](session_export.SessionManager.md#getnextavailablesessionid)
- [getPaseSession](session_export.SessionManager.md#getpasesession)
- [getSession](session_export.SessionManager.md#getsession)
- [getSessionForNode](session_export.SessionManager.md#getsessionfornode)
- [getSessionsToClose](session_export.SessionManager.md#getsessionstoclose)
- [getUnsecureSession](session_export.SessionManager.md#getunsecuresession)
- [initFromStorage](session_export.SessionManager.md#initfromstorage)
- [removeSession](session_export.SessionManager.md#removesession)
- [saveResumptionRecord](session_export.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](session_export.SessionManager.md#storeresumptionrecords)
- [updateFabricForResumptionRecords](session_export.SessionManager.md#updatefabricforresumptionrecords)

## Constructors

### constructor

• **new SessionManager**<`ContextT`\>(`context`, `storage`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/src/session/SessionManager.ts:48

## Properties

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:49

___

### nextSessionId

• `Private` **nextSessionId**: `number`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:43

___

### resumptionRecords

• `Private` **resumptionRecords**: `Map`<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:44

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

packages/matter.js/src/session/SessionManager.ts:45

___

### sessions

• `Private` `Readonly` **sessions**: `Map`<`number`, [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:42

___

### sessionsToClose

• `Private` `Readonly` **sessionsToClose**: [`SecureSession`](session_export.SecureSession.md)<`any`\>[]

#### Defined in

packages/matter.js/src/session/SessionManager.ts:46

___

### unsecureSession

• `Private` `Readonly` **unsecureSession**: [`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:41

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:217

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`, `closeCallback?`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>\>

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
| `closeCallback?` | (`sendClose`: `boolean`) => `Promise`<`void`\> |

#### Returns

`Promise`<[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:57

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)

#### Defined in

packages/matter.js/src/session/SessionManager.ts:147

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

packages/matter.js/src/session/SessionManager.ts:151

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/src/session/SessionManager.ts:201

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:113

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:128

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:124

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:134

___

### getSessionsToClose

▸ **getSessionsToClose**(): [`SecureSession`](session_export.SecureSession.md)<`any`\>[]

#### Returns

[`SecureSession`](session_export.SecureSession.md)<`any`\>[]

#### Defined in

packages/matter.js/src/session/SessionManager.ts:99

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:143

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] |

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:182

___

### removeSession

▸ **removeSession**(`sessionId`, `peerNodeId`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/session/SessionManager.ts:106

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

packages/matter.js/src/session/SessionManager.ts:155

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:169

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/SessionManager.ts:160
