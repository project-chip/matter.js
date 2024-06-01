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

[packages/matter.js/src/session/SessionManager.ts:61](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L61)

## Properties

### #globalUnencryptedMessageCounter

• `Private` `Readonly` **#globalUnencryptedMessageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:56](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L56)

___

### #insecureSessions

• `Private` `Readonly` **#insecureSessions**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`InsecureSession`](session_export.InsecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:51](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L51)

___

### #nextSessionId

• `Private` **#nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L53)

___

### #resumptionRecords

• `Private` **#resumptionRecords**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:54](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L54)

___

### #sessionClosed

• `Private` `Readonly` **#sessionClosed**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:59](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L59)

___

### #sessionOpened

• `Private` `Readonly` **#sessionOpened**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:58](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L58)

___

### #sessionStorage

• `Private` `Readonly` **#sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:55](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L55)

___

### #sessions

• `Private` `Readonly` **#sessions**: [`BasicSet`](util_export.BasicSet.md)\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>, [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:52](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L52)

___

### #subscriptionsChanged

• `Private` `Readonly` **#subscriptionsChanged**: [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:57](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L57)

___

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:62](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L62)

## Accessors

### sessionClosed

• `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:76](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L76)

___

### sessionOpened

• `get` **sessionOpened**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:72](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L72)

___

### subscriptionsChanged

• `get` **subscriptionsChanged**(): [`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[session: SecureSession\<ContextT\>], `void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:68](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L68)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:346](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L346)

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

[packages/matter.js/src/session/SessionManager.ts:112](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L112)

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

[packages/matter.js/src/session/SessionManager.ts:80](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L80)

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

[packages/matter.js/src/session/SessionManager.ts:244](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L244)

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:177](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L177)

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

[packages/matter.js/src/session/SessionManager.ts:253](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L253)

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

[packages/matter.js/src/session/SessionManager.ts:257](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L257)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:330](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L330)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:190](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L190)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:212](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L212)

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

[packages/matter.js/src/session/SessionManager.ts:208](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L208)

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

[packages/matter.js/src/session/SessionManager.ts:218](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L218)

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

[packages/matter.js/src/session/SessionManager.ts:237](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L237)

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

[packages/matter.js/src/session/SessionManager.ts:296](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L296)

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

[packages/matter.js/src/session/SessionManager.ts:227](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L227)

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

[packages/matter.js/src/session/SessionManager.ts:172](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L172)

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

[packages/matter.js/src/session/SessionManager.ts:165](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L165)

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

[packages/matter.js/src/session/SessionManager.ts:261](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L261)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:275](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L275)

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

[packages/matter.js/src/session/SessionManager.ts:266](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/session/SessionManager.ts#L266)
