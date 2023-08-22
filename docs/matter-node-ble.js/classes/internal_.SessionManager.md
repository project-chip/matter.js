[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SessionManager

# Class: SessionManager<ContextT\>

[<internal>](../modules/internal_.md).SessionManager

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
- [getSession](internal_.SessionManager.md#getsession)
- [getSessionForNode](internal_.SessionManager.md#getsessionfornode)
- [getUnsecureSession](internal_.SessionManager.md#getunsecuresession)
- [initFromStorage](internal_.SessionManager.md#initfromstorage)
- [removeSession](internal_.SessionManager.md#removesession)
- [saveResumptionRecord](internal_.SessionManager.md#saveresumptionrecord)
- [storeResumptionRecords](internal_.SessionManager.md#storeresumptionrecords)

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
| `storage` | [`StorageContext`](internal_.StorageContext.md) |

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:29

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:23

___

### nextSessionId

• `Private` **nextSessionId**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:26

___

### resumptionRecords

• `Private` **resumptionRecords**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:27

___

### sessionStorage

• `Private` `Readonly` **sessionStorage**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:28

___

### sessions

• `Private` `Readonly` **sessions**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:25

___

### unsecureSession

• `Private` `Readonly` **unsecureSession**: `any`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:24

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:58

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`, `closeCallback?`): `Promise`<[`SecureSession`](internal_.SecureSession.md)<`ContextT`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |
| `closeCallback?` | () => `Promise`<`void`\> |

#### Returns

`Promise`<[`SecureSession`](internal_.SecureSession.md)<`ContextT`\>\>

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:30

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

matter.js/dist/cjs/session/SessionManager.d.ts:36

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

matter.js/dist/cjs/session/SessionManager.d.ts:37

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:41

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:32

___

### getSession

▸ **getSession**(`sessionId`): `undefined` \| [`Session`](../interfaces/internal_.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |

#### Returns

`undefined` \| [`Session`](../interfaces/internal_.Session.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:33

___

### getSessionForNode

▸ **getSessionForNode**(`fabric`, `nodeId`): `undefined` \| [`Session`](../interfaces/internal_.Session.md)<`ContextT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`undefined` \| [`Session`](../interfaces/internal_.Session.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:34

___

### getUnsecureSession

▸ **getUnsecureSession**(): [`UnsecureSession`](internal_.UnsecureSession.md)<`ContextT`\>

#### Returns

[`UnsecureSession`](internal_.UnsecureSession.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:35

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

matter.js/dist/cjs/session/SessionManager.d.ts:40

___

### removeSession

▸ **removeSession**(`sessionId`, `peerNodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:31

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

matter.js/dist/cjs/session/SessionManager.d.ts:38

___

### storeResumptionRecords

▸ **storeResumptionRecords**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/session/SessionManager.d.ts:39
