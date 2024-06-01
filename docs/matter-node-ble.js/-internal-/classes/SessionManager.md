[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / SessionManager

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
| `sessionStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |

#### Returns

[`SessionManager`](SessionManager.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:27

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:25

***

### context

> `private` `readonly` **context**: `any`

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:26

## Accessors

### sessionClosed

> `get` **sessionClosed**(): [`AsyncObservable`](../interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`AsyncObservable`](../interfaces/AsyncObservable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:30

***

### sessionOpened

> `get` **sessionOpened**(): [`Observable`](../interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:29

***

### subscriptionsChanged

> `get` **subscriptionsChanged**(): [`Observable`](../interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Returns

[`Observable`](../interfaces/Observable.md)\<[[`SecureSession`](SecureSession.md)\<`ContextT`\>], `void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:28

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:75

***

### createSecureSession()

> **createSecureSession**(`args`): `Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |
| `args.fabric` | `undefined` \| [`Fabric`](Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../README.md#nodeid-5) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<`ContextT`\>\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:36

***

### createUnsecureSession()

> **createUnsecureSession**(`options`): [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.initiatorNodeId`? | [`NodeId`](../README.md#nodeid-5) |
| `options.isInitiator`? | `boolean` |
| `options.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |

#### Returns

[`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:31

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

matter.js/dist/esm/session/SessionManager.d.ts:57

***

### findOldestInactiveSession()

> **findOldestInactiveSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:50

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

matter.js/dist/esm/session/SessionManager.d.ts:58

***

### findResumptionRecordByNodeId()

> **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/ResumptionRecord.md)

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:59

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(): `object`[]

#### Returns

`object`[]

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:64

***

### getNextAvailableSessionId()

> **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:51

***

### getPaseSession()

> **getPaseSession**(): [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:53

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

matter.js/dist/esm/session/SessionManager.d.ts:52

***

### getSessionForNode()

> **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`SecureSession`](SecureSession.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:54

***

### getUnsecureSession()

> **getUnsecureSession**(`sourceNodeId`?): `undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sourceNodeId`? | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`InsecureSession`](InsecureSession.md)\<`ContextT`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:56

***

### initFromStorage()

> **initFromStorage**(`fabrics`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](Fabric.md)[] |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:63

***

### removeAllSessionsForNode()

> **removeAllSessionsForNode**(`nodeId`, `sendClose`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `sendClose`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:55

***

### removeResumptionRecord()

> **removeResumptionRecord**(`peerNodeId`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:49

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

matter.js/dist/esm/session/SessionManager.d.ts:48

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

matter.js/dist/esm/session/SessionManager.d.ts:60

***

### storeResumptionRecords()

> **storeResumptionRecords**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:62

***

### updateFabricForResumptionRecords()

> **updateFabricForResumptionRecords**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SessionManager.d.ts:61
