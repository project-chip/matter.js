[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / SessionManager

# Class: SessionManager\<ContextT\>

[session/export](../modules/session_export.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](session_export.SessionManager.md#constructor)

### Properties

- [#globalUnencryptedMessageCounter](session_export.SessionManager.md##globalunencryptedmessagecounter)
- [#insecureSessions](session_export.SessionManager.md##insecuresessions)
- [#nextSessionId](session_export.SessionManager.md##nextsessionid)
- [#resumptionRecords](session_export.SessionManager.md##resumptionrecords)
- [#sessionClosed](session_export.SessionManager.md##sessionclosed)
- [#sessionOpened](session_export.SessionManager.md##sessionopened)
- [#sessionStorage](session_export.SessionManager.md##sessionstorage)
- [#sessions](session_export.SessionManager.md##sessions)
- [#subscriptionsChanged](session_export.SessionManager.md##subscriptionschanged)
- [context](session_export.SessionManager.md#context)

### Accessors

- [sessionClosed](session_export.SessionManager.md#sessionclosed)
- [sessionOpened](session_export.SessionManager.md#sessionopened)
- [subscriptionsChanged](session_export.SessionManager.md#subscriptionschanged)

### Methods

- [close](session_export.SessionManager.md#close)
- [createSecureSession](session_export.SessionManager.md#createsecuresession)
- [createUnsecureSession](session_export.SessionManager.md#createunsecuresession)
- [findGroupSession](session_export.SessionManager.md#findgroupsession)
- [findOldestInactiveSession](session_export.SessionManager.md#findoldestinactivesession)
- [findResumptionRecordById](session_export.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](session_export.SessionManager.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](session_export.SessionManager.md#getactivesessioninformation)
- [getNextAvailableSessionId](session_export.SessionManager.md#getnextavailablesessionid)
- [getPaseSession](session_export.SessionManager.md#getpasesession)
- [getSession](session_export.SessionManager.md#getsession)
- [getSessionForNode](session_export.SessionManager.md#getsessionfornode)
- [getUnsecureSession](session_export.SessionManager.md#getunsecuresession)
- [initFromStorage](session_export.SessionManager.md#initfromstorage)
- [removeAllSessionsForNode](session_export.SessionManager.md#removeallsessionsfornode)
- [removeResumptionRecord](session_export.SessionManager.md#removeresumptionrecord)
- [removeSession](session_export.SessionManager.md#removesession)
- [saveResumptionRecord](session_export.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](session_export.SessionManager.md#storeresumptionrecords)
- [updateFabricForResumptionRecords](session_export.SessionManager.md#updatefabricforresumptionrecords)

## Constructors

### constructor

• **new SessionManager**\<`ContextT`\>(`context`, `sessionStorage`): [`SessionManager`](session_export.SessionManager.md)\<`ContextT`\>

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

[`SessionManager`](session_export.SessionManager.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L58)

## Properties

### #globalUnencryptedMessageCounter

• `Private` `Readonly` **#globalUnencryptedMessageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L53)

___

### #insecureSessions

• `Private` `Readonly` **#insecureSessions**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L48)

___

### #nextSessionId

• `Private` **#nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L50)

___

### #resumptionRecords

• `Private` **#resumptionRecords**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L51)

___

### #sessionClosed

• `Private` `Readonly` **#sessionClosed**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L56)

___

### #sessionOpened

• `Private` `Readonly` **#sessionOpened**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L55)

___

### #sessionStorage

• `Private` `Readonly` **#sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L52)

___

### #sessions

• `Private` `Readonly` **#sessions**: [`BasicSet`](util_export.BasicSet.md)\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>, [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L49)

___

### #subscriptionsChanged

• `Private` `Readonly` **#subscriptionsChanged**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L54)

___

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L59)

## Accessors

### sessionClosed

• `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L73)

___

### sessionOpened

• `get` **sessionOpened**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L69)

___

### subscriptionsChanged

• `get` **subscriptionsChanged**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L65)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:327](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L327)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L109)

___

### createUnsecureSession

▸ **createUnsecureSession**(`options`): [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.initiatorNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `options.isInitiator?` | `boolean` |
| `options.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |

#### Returns

[`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L77)

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

[packages/matter.js/src/session/SessionManager.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L238)

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:171](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L171)

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

[packages/matter.js/src/session/SessionManager.ts:247](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L247)

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

[packages/matter.js/src/session/SessionManager.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L251)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:311](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L311)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L184)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L206)

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L202)

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L212)

___

### getUnsecureSession

▸ **getUnsecureSession**(`sourceNodeId?`): `undefined` \| [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L231)

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:286](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L286)

___

### removeAllSessionsForNode

▸ **removeAllSessionsForNode**(`nodeId`, `sendClose?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `sendClose` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:221](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L221)

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L166)

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

[packages/matter.js/src/session/SessionManager.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L159)

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L255)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:269](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L269)

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:260](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/SessionManager.ts#L260)
