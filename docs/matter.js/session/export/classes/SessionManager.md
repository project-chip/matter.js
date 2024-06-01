[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / SessionManager

# Class: SessionManager\<ContextT\>

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Constructors

### new SessionManager()

> **new SessionManager**\<`ContextT`\>(`context`, `sessionStorage`): [`SessionManager`](SessionManager.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `sessionStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

[`SessionManager`](SessionManager.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L61)

## Properties

### #globalUnencryptedMessageCounter

> `private` `readonly` **#globalUnencryptedMessageCounter**: [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md)

#### Source

[packages/matter.js/src/session/SessionManager.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L56)

***

### #insecureSessions

> `private` `readonly` **#insecureSessions**: `Map`\<[`NodeId`](../../../datatype/export/README.md#nodeid), [`InsecureSession`](InsecureSession.md)\<`ContextT`\>\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L51)

***

### #nextSessionId

> `private` **#nextSessionId**: `number`

#### Source

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L53)

***

### #resumptionRecords

> `private` **#resumptionRecords**: `Map`\<[`NodeId`](../../../datatype/export/README.md#nodeid), [`ResumptionRecord`](../interfaces/ResumptionRecord.md)\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L54)

***

### #sessionClosed

> `private` `readonly` **#sessionClosed**: [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L59)

***

### #sessionOpened

> `private` `readonly` **#sessionOpened**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L58)

***

### #sessionStorage

> `private` `readonly` **#sessionStorage**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L55)

***

### #sessions

> `private` `readonly` **#sessions**: [`BasicSet`](../../../util/export/classes/BasicSet.md)\<[`SecureSession`](SecureSession.md)\<`ContextT`\>, [`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L52)

***

### #subscriptionsChanged

> `private` `readonly` **#subscriptionsChanged**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L57)

***

### context

> `private` `readonly` **context**: `ContextT`

#### Source

[packages/matter.js/src/session/SessionManager.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L62)

## Accessors

### sessionClosed

> `get` **sessionClosed**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L76)

***

### sessionOpened

> `get` **sessionOpened**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L72)

***

### subscriptionsChanged

> `get` **subscriptionsChanged**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L68)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:346](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L346)

***

### createSecureSession()

> **createSecureSession**(`args`): `Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |
| `args.fabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L112)

***

### createUnsecureSession()

> **createUnsecureSession**(`options`): [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.initiatorNodeId`? | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `options.isInitiator`? | `boolean` |
| `options.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |

#### Returns

[`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L80)

***

### findGroupSession()

> **findGroupSession**(`groupId`, `groupSessionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `groupId` | `number` |
| `groupSessionId` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SessionManager.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L244)

***

### findOldestInactiveSession()

> **findOldestInactiveSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L177)

***

### findResumptionRecordById()

> **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

[packages/matter.js/src/session/SessionManager.ts:253](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L253)

***

### findResumptionRecordByNodeId()

> **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

[packages/matter.js/src/session/SessionManager.ts:257](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L257)

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

[packages/matter.js/src/session/SessionManager.ts:330](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L330)

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:190](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L190)

***

### getPaseSession()

> **getPaseSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L212)

***

### getSession()

> **getSession**(`sessionId`): `undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L208)

***

### getSessionForNode()

> **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L218)

***

### getUnsecureSession()

> **getUnsecureSession**(`sourceNodeId`?): `undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sourceNodeId`? | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L237)

***

### initFromStorage()

> **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../../fabric/export/classes/Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L296)

***

### removeAllSessionsForNode()

> **removeAllSessionsForNode**(`nodeId`, `sendClose`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) | `undefined` |
| `sendClose` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L227)

***

### removeResumptionRecord()

> **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L172)

***

### removeSession()

> **removeSession**(`sessionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SessionManager.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L165)

***

### saveResumptionRecord()

> **saveResumptionRecord**(`resumptionRecord`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/ResumptionRecord.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L261)

***

### storeResumptionRecords()

> **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L275)

***

### updateFabricForResumptionRecords()

> **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SessionManager.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SessionManager.ts#L266)
