[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / SessionManager

# Class: SessionManager<ContextT\>

[exports/session](../modules/exports_session.md).SessionManager

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](exports_session.SessionManager.md#constructor)

### Properties

- [context](exports_session.SessionManager.md#context)
- [nextSessionId](exports_session.SessionManager.md#nextsessionid)
- [resumptionRecords](exports_session.SessionManager.md#resumptionrecords)
- [sessionStorage](exports_session.SessionManager.md#sessionstorage)
- [sessions](exports_session.SessionManager.md#sessions)
- [unsecureSession](exports_session.SessionManager.md#unsecuresession)

### Methods

- [close](exports_session.SessionManager.md#close)
- [createSecureSession](exports_session.SessionManager.md#createsecuresession)
- [findResumptionRecordById](exports_session.SessionManager.md#findresumptionrecordbyid)
- [findResumptionRecordByNodeId](exports_session.SessionManager.md#findresumptionrecordbynodeid)
- [getActiveSessionInformation](exports_session.SessionManager.md#getactivesessioninformation)
- [getNextAvailableSessionId](exports_session.SessionManager.md#getnextavailablesessionid)
- [getPaseSession](exports_session.SessionManager.md#getpasesession)
- [getSession](exports_session.SessionManager.md#getsession)
- [getSessionForNode](exports_session.SessionManager.md#getsessionfornode)
- [getUnsecureSession](exports_session.SessionManager.md#getunsecuresession)
- [initFromStorage](exports_session.SessionManager.md#initfromstorage)
- [removeAllSessionsForNode](exports_session.SessionManager.md#removeallsessionsfornode)
- [removeResumptionRecord](exports_session.SessionManager.md#removeresumptionrecord)
- [removeSession](exports_session.SessionManager.md#removesession)
- [saveResumptionRecord](exports_session.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](exports_session.SessionManager.md#storeresumptionrecords)
- [updateFabricForResumptionRecords](exports_session.SessionManager.md#updatefabricforresumptionrecords)

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:29

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:23

___

### nextSessionId

• `Private` **nextSessionId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:26

___

### resumptionRecords

• `Private` **resumptionRecords**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:27

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:28

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:25

___

### unsecureSession

• `Private` `Readonly` **unsecureSession**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:24

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:76

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback?` | () => `Promise`<`void`\> |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<`ContextT`\>\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:30

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:52

___

### findResumptionRecordByNodeId

▸ **findResumptionRecordByNodeId**(`nodeId`): `undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md)

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:53

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/exports_datatype.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/exports_datatype.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/exports_datatype.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:58

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:46

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](exports_session.SecureSession.md)<`ContextT`\>

#### Returns

[`SecureSession`](exports_session.SecureSession.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:48

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:47

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`undefined` \| [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:49

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](exports_session.UnsecureSession.md)<`ContextT`\>

#### Returns

[`UnsecureSession`](exports_session.UnsecureSession.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:51

___

### initFromStorage

▸ **initFromStorage**(`fabrics`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:57

___

### removeAllSessionsForNode

▸ **removeAllSessionsForNode**(`nodeId`, `sendClose?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `sendClose?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:50

___

### removeResumptionRecord

▸ **removeResumptionRecord**(`peerNodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:45

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

packages/matter.js/dist/esm/session/SessionManager.d.ts:44

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/exports_session.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:54

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:56

___

### updateFabricForResumptionRecords

▸ **updateFabricForResumptionRecords**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SessionManager.d.ts:55
