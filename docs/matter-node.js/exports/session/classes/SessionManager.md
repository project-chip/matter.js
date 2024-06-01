[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / SessionManager

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:27

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:25

***

### context

> `private` `readonly` **context**: `any`

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:26

## Accessors

### sessionClosed

> `get` **sessionClosed**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:30

***

### sessionOpened

> `get` **sessionOpened**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:29

***

### subscriptionsChanged

> `get` **subscriptionsChanged**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:28

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:75

***

### createSecureSession()

> **createSecureSession**(`args`): `Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../datatype/README.md#caseauthenticatedtag)[] |
| `args.fabric` | `undefined` \| [`Fabric`](../../fabric/classes/Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:36

***

### createUnsecureSession()

> **createUnsecureSession**(`options`): [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.initiatorNodeId`? | [`NodeId`](../../datatype/README.md#nodeid) |
| `options.isInitiator`? | `boolean` |
| `options.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |

#### Returns

[`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:31

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:57

***

### findOldestInactiveSession()

> **findOldestInactiveSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:50

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:58

***

### findResumptionRecordByNodeId()

> **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:59

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:64

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:51

***

### getPaseSession()

> **getPaseSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:53

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:52

***

### getSessionForNode()

> **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:54

***

### getUnsecureSession()

> **getUnsecureSession**(`sourceNodeId`?): `undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sourceNodeId`? | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:56

***

### initFromStorage()

> **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](../../fabric/classes/Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:63

***

### removeAllSessionsForNode()

> **removeAllSessionsForNode**(`nodeId`, `sendClose`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `sendClose`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:55

***

### removeResumptionRecord()

> **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:49

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:48

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:60

***

### storeResumptionRecords()

> **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:62

***

### updateFabricForResumptionRecords()

> **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/SessionManager.d.ts:61
