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

- [clearSubscriptionsForNode](session_export.SessionManager.md#clearsubscriptionsfornode)
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

[packages/matter.js/src/session/SessionManager.ts:62](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L62)

## Properties

### #globalUnencryptedMessageCounter

• `Private` `Readonly` **#globalUnencryptedMessageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:57](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L57)

___

### #insecureSessions

• `Private` `Readonly` **#insecureSessions**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:52](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L52)

___

### #nextSessionId

• `Private` **#nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:54](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L54)

___

### #resumptionRecords

• `Private` **#resumptionRecords**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:55](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L55)

___

### #sessionClosed

• `Private` `Readonly` **#sessionClosed**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:60](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L60)

___

### #sessionOpened

• `Private` `Readonly` **#sessionOpened**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:59](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L59)

___

### #sessionStorage

• `Private` `Readonly` **#sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:56](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L56)

___

### #sessions

• `Private` `Readonly` **#sessions**: [`BasicSet`](util_export.BasicSet.md)\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>, [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L53)

___

### #subscriptionsChanged

• `Private` `Readonly` **#subscriptionsChanged**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:58](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L58)

___

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L63)

## Accessors

### sessionClosed

• `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:77](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L77)

___

### sessionOpened

• `get` **sessionOpened**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:73](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L73)

___

### subscriptionsChanged

• `get` **subscriptionsChanged**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:69](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L69)

## Methods

### clearSubscriptionsForNode

▸ **clearSubscriptionsForNode**(`fabricIndex`, `nodeId`, `flushSubscriptions?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `flushSubscriptions?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:347](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L347)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:355](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L355)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |
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

[packages/matter.js/src/session/SessionManager.ts:113](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L113)

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

[packages/matter.js/src/session/SessionManager.ts:81](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L81)

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

[packages/matter.js/src/session/SessionManager.ts:245](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L245)

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:178](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L178)

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

[packages/matter.js/src/session/SessionManager.ts:254](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L254)

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

[packages/matter.js/src/session/SessionManager.ts:258](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L258)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:331](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L331)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:191](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L191)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:213](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L213)

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

[packages/matter.js/src/session/SessionManager.ts:209](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L209)

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

[packages/matter.js/src/session/SessionManager.ts:219](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L219)

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

[packages/matter.js/src/session/SessionManager.ts:238](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L238)

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

[packages/matter.js/src/session/SessionManager.ts:297](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L297)

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

[packages/matter.js/src/session/SessionManager.ts:228](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L228)

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

[packages/matter.js/src/session/SessionManager.ts:173](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L173)

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

[packages/matter.js/src/session/SessionManager.ts:166](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L166)

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

[packages/matter.js/src/session/SessionManager.ts:262](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L262)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:276](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L276)

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

[packages/matter.js/src/session/SessionManager.ts:267](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SessionManager.ts#L267)
