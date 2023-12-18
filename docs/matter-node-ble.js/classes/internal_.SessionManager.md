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
- [nextSessionId](internal_.SessionManager.md#nextsessionid)
- [resumptionRecords](internal_.SessionManager.md#resumptionrecords)
- [sessionStorage](internal_.SessionManager.md#sessionstorage)
- [sessions](internal_.SessionManager.md#sessions)
- [unsecureSession](internal_.SessionManager.md#unsecuresession)

### Methods

- [close](internal_.SessionManager.md#close)
- [createSecureSession](internal_.SessionManager.md#createsecuresession)
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

matter.js/dist/esm/session/SessionManager.d.ts:29

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:23

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

### unsecureSession

• `Private` `Readonly` **unsecureSession**: `any`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:24

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:76

___

### createSecureSession

▸ **createSecureSession**(`args`): `Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback?` | () => `Promise`\<`void`\> |
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionId` | `number` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:30

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

matter.js/dist/esm/session/SessionManager.d.ts:52

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

matter.js/dist/esm/session/SessionManager.d.ts:53

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): \{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

\{ `fabric`: `undefined` \| \{ `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `fabricIndex`: [`FabricIndex`](../modules/internal_.md#fabricindex) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:58

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:46

___

### getPaseSession

▸ **getPaseSession**(): [`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Returns

[`SecureSession`](internal_.SecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:48

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`Session`](../interfaces/internal_.Session.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`Session`](../interfaces/internal_.Session.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:47

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`Session`](../interfaces/internal_.Session.md)\<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`Session`](../interfaces/internal_.Session.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:49

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Returns

[`UnsecureSession`](internal_.UnsecureSession.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:51

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

matter.js/dist/esm/session/SessionManager.d.ts:57

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

matter.js/dist/esm/session/SessionManager.d.ts:50

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

matter.js/dist/esm/session/SessionManager.d.ts:45

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

matter.js/dist/esm/session/SessionManager.d.ts:44

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

matter.js/dist/esm/session/SessionManager.d.ts:54

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SessionManager.d.ts:56

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

matter.js/dist/esm/session/SessionManager.d.ts:55
