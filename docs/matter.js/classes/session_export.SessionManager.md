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

[packages/matter.js/src/session/SessionManager.ts:47](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L47)

## Properties

### context

• `Private` `Readonly` **context**: `ContextT`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:48](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L48)

___

### nextSessionId

• `Private` **nextSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:43](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L43)

___

### resumptionRecords

• `Private` **resumptionRecords**: `Map`<[`NodeId`](../modules/datatype_export.md#nodeid), [`ResumptionRecord`](../interfaces/session_export.ResumptionRecord.md)\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:44](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L44)

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:45](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L45)

___

### sessions

• `Private` `Readonly` **sessions**: `Map`<`number`, [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:42](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L42)

___

### unsecureSession

• `Private` `Readonly` **unsecureSession**: [`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:41](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L41)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:232](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L232)

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback?` | () => `Promise`<`void`\> |
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

`Promise`<[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:56](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L56)

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

[packages/matter.js/src/session/SessionManager.ts:162](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L162)

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

[packages/matter.js/src/session/SessionManager.ts:166](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L166)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:216](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L216)

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:118](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L118)

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](session_export.SecureSession.md)<`ContextT`\>

#### Returns

[`SecureSession`](session_export.SecureSession.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:133](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L133)

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

[packages/matter.js/src/session/SessionManager.ts:129](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L129)

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

[packages/matter.js/src/session/SessionManager.ts:139](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L139)

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:158](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L158)

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

[packages/matter.js/src/session/SessionManager.ts:197](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L197)

___

### removeAllSessionsForNode

▸ **removeAllSessionsForNode**(`nodeId`, `sendClose?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `sendClose` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:148](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L148)

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

[packages/matter.js/src/session/SessionManager.ts:113](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L113)

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

[packages/matter.js/src/session/SessionManager.ts:109](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L109)

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

[packages/matter.js/src/session/SessionManager.ts:170](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L170)

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SessionManager.ts:184](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L184)

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

[packages/matter.js/src/session/SessionManager.ts:175](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/session/SessionManager.ts#L175)
