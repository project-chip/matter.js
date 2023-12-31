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

- [context](session_export.SessionManager.md#context)
- [globalUnencryptedMessageCounter](session_export.SessionManager.md#globalunencryptedmessagecounter)
- [nextSessionId](session_export.SessionManager.md#nextsessionid)
- [resumptionRecords](session_export.SessionManager.md#resumptionrecords)
- [sessionStorage](session_export.SessionManager.md#sessionstorage)
- [sessions](session_export.SessionManager.md#sessions)
- [unsecureSessions](session_export.SessionManager.md#unsecuresessions)

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

• **new SessionManager**\<`ContextT`\>(`context`, `storage`): [`SessionManager`](session_export.SessionManager.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ContextT` |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Returns

[`SessionManager`](session_export.SessionManager.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L46)

## Properties

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:47](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L47)

___

### globalUnencryptedMessageCounter

• `Private` `Readonly` **globalUnencryptedMessageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L44)

___

### nextSessionId

• `Private` **nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:41](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L41)

___

### resumptionRecords

• `Private` **resumptionRecords**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:42](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L42)

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:43](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L43)

___

### sessions

• `Private` `Readonly` **sessions**: `Map`\<`number`, [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:40](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L40)

___

### unsecureSessions

• `Private` `Readonly` **unsecureSessions**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L39)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:287](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L287)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback?` | () => `Promise`\<`void`\> |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:78](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L78)

___

### createUnsecureSession

▸ **createUnsecureSession**(`initiatorNodeId?`): [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initiatorNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L53)

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

[packages/matter.js/src/session/SessionManager.ts:208](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L208)

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:140](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L140)

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

[packages/matter.js/src/session/SessionManager.ts:217](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L217)

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

[packages/matter.js/src/session/SessionManager.ts:221](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L221)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:271](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L271)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:155](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L155)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:176](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L176)

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

[packages/matter.js/src/session/SessionManager.ts:172](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L172)

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

[packages/matter.js/src/session/SessionManager.ts:182](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L182)

___

### getUnsecureSession

▸ **getUnsecureSession**(`sourceNodeId?`): `undefined` \| [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:201](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L201)

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

[packages/matter.js/src/session/SessionManager.ts:252](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L252)

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

[packages/matter.js/src/session/SessionManager.ts:191](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L191)

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:135](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L135)

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

[packages/matter.js/src/session/SessionManager.ts:131](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L131)

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

[packages/matter.js/src/session/SessionManager.ts:225](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L225)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:239](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L239)

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

[packages/matter.js/src/session/SessionManager.ts:230](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SessionManager.ts#L230)
