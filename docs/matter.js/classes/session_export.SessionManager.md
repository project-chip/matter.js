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

[packages/matter.js/src/session/SessionManager.ts:53](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L53)

## Properties

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:54](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L54)

___

### globalUnencryptedMessageCounter

• `Private` `Readonly` **globalUnencryptedMessageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:51](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L51)

___

### nextSessionId

• `Private` **nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:48](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L48)

___

### resumptionRecords

• `Private` **resumptionRecords**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:49](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L49)

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:50](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L50)

___

### sessions

• `Private` `Readonly` **sessions**: `Map`\<`number`, [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:47](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L47)

___

### unsecureSessions

• `Private` `Readonly` **unsecureSessions**: `Map`\<[`NodeId`](../modules/datatype_export.md#nodeid), [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:46](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L46)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:304](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L304)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback?` | () => `Promise`\<`void`\> |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:92](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L92)

___

### createUnsecureSession

▸ **createUnsecureSession**(`options`): [`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.initiatorNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `options.isInitiator?` | `boolean` |
| `options.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:60](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L60)

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

[packages/matter.js/src/session/SessionManager.ts:219](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L219)

___

### findOldestInactiveSession

▸ **findOldestInactiveSession**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:151](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L151)

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

[packages/matter.js/src/session/SessionManager.ts:228](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L228)

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

[packages/matter.js/src/session/SessionManager.ts:232](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L232)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:288](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L288)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:166](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L166)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:187](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L187)

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

[packages/matter.js/src/session/SessionManager.ts:183](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L183)

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

[packages/matter.js/src/session/SessionManager.ts:193](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L193)

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

[packages/matter.js/src/session/SessionManager.ts:212](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L212)

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

[packages/matter.js/src/session/SessionManager.ts:266](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L266)

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

[packages/matter.js/src/session/SessionManager.ts:202](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L202)

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

[packages/matter.js/src/session/SessionManager.ts:146](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L146)

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

[packages/matter.js/src/session/SessionManager.ts:142](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L142)

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

[packages/matter.js/src/session/SessionManager.ts:236](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L236)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:250](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L250)

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

[packages/matter.js/src/session/SessionManager.ts:241](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SessionManager.ts#L241)
