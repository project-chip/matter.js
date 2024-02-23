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

- [context](internal_.SessionManager.md#context)
- [globalUnencryptedMessageCounter](internal_.SessionManager.md#globalunencryptedmessagecounter)
- [nextSessionId](internal_.SessionManager.md#nextsessionid)
- [resumptionRecords](internal_.SessionManager.md#resumptionrecords)
- [sessionStorage](internal_.SessionManager.md#sessionstorage)
- [sessions](internal_.SessionManager.md#sessions)
- [unsecureSessions](internal_.SessionManager.md#unsecuresessions)

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

• **new SessionManager**\<`ContextT`\>(`context`, `storage`): [`SessionManager`](internal_.SessionManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |

#### Returns

[`SessionManager`](internal_.SessionManager.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:30

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:23

___

### globalUnencryptedMessageCounter

• `Private` `Readonly` **globalUnencryptedMessageCounter**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:29

___

### nextSessionId

• `Private` **nextSessionId**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:26

___

### resumptionRecords

• `Private` **resumptionRecords**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:27

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:28

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:25

___

### unsecureSessions

• `Private` `Readonly` **unsecureSessions**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:24

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:83

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback?` | () => `Promise`\<`void`\> |
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:36

___

### createUnsecureSession

▸ **createUnsecureSession**(`options`): [`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.initiatorNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |
| `options.isInitiator?` | `boolean` |
| `options.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |

#### Returns

[`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:31

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

matter.js/dist/esm/session/SessionManager.d.ts:58

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:51

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

matter.js/dist/esm/session/SessionManager.d.ts:59

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

matter.js/dist/esm/session/SessionManager.d.ts:60

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:65

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:52

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:54

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

matter.js/dist/esm/session/SessionManager.d.ts:53

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

matter.js/dist/esm/session/SessionManager.d.ts:55

___

### getUnsecureSession

▸ **getUnsecureSession**(`sourceNodeId?`): `undefined` \| [`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:57

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](internal_.Fabric.md)[] |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:64

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

matter.js/dist/esm/session/SessionManager.d.ts:56

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:50

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

matter.js/dist/esm/session/SessionManager.d.ts:49

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:61

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:63

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:62
