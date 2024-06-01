[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/access-control/export](../../README.md) / [\<internal\>](../README.md) / AccessControlManager

# Class: AccessControlManager

Implements Access Control Logic as per Matter Specification

## See

MatterSpecification.v12.Core § 6.6.5.2.

## Constructors

### new AccessControlManager()

> **new AccessControlManager**(`aclList`, `extensionEntryAccessCheck`?): [`AccessControlManager`](AccessControlManager.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `aclList` | [`AccessControlEntryStruct`](../../../../../../cluster/export/namespaces/AccessControl/interfaces/AccessControlEntryStruct.md)[] | `[]` |
| `extensionEntryAccessCheck`? | (`aclList`, `aclEntry`, `subjectDesc`, `endpoint`, `clusterId`) => `boolean` | `undefined` |

#### Returns

[`AccessControlManager`](AccessControlManager.md)

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L69)

## Properties

### #aclList

> `private` **#aclList**: [`AclList`](../README.md#acllist)

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L60)

***

### #extensionEntryAccessCheck()

> `private` **#extensionEntryAccessCheck**: (`aclList`, `aclEntry`, `subjectDesc`, `endpoint`, `clusterId`) => `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `aclList` | [`AclList`](../README.md#acllist) |
| `aclEntry` | [`AclEntry`](../README.md#aclentry) |
| `subjectDesc` | [`IncomingSubjectDescriptor`](../README.md#incomingsubjectdescriptor) |
| `endpoint` | [`EndpointInterface`](../../../../../../endpoint/export/interfaces/EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../../../../../../datatype/export/README.md#clusterid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L61)

## Methods

### #addGrantedPrivilege()

> `private` **#addGrantedPrivilege**(`grantedPrivileges`, `privilege`): `void`

Add the new privilege to the granted privileges set and also add any privileges subsumed by the new privilege.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `grantedPrivileges` | `Set`\<[`AccessLevel`](../../../../../../cluster/export/enumerations/AccessLevel.md)\> |
| `privilege` | [`AccessLevel`](../../../../../../cluster/export/enumerations/AccessLevel.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L121)

***

### #getAccessControlEntriesForFabric()

> `private` **#getAccessControlEntriesForFabric**(`fabric`): [`AclList`](../README.md#acllist)

Get the Access Control List for a given fabric.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../../../../fabric/export/classes/Fabric.md) |

#### Returns

[`AclList`](../README.md#acllist)

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L95)

***

### #getIsdFromMessage()

> `private` **#getIsdFromMessage**(`session`): [`IncomingSubjectDescriptor`](../README.md#incomingsubjectdescriptor)

Determines the Incoming Subject Descriptor (ISD) from the given session.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../../../session/export/classes/SecureSession.md)\<`any`\> |

#### Returns

[`IncomingSubjectDescriptor`](../README.md#incomingsubjectdescriptor)

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:302](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L302)

***

### #subjectMatches()

> `private` **#subjectMatches**(`aclSubject`, `isdSubject`): `boolean`

Subjects must match exactly, or both are CAT with matching CAT ID and acceptable CAT version

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `aclSubject` | [`NodeId`](../../../../../../datatype/export/README.md#nodeid) |
| `isdSubject` | [`NodeId`](../../../../../../datatype/export/README.md#nodeid) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L102)

***

### allowsPrivilege()

> **allowsPrivilege**(`session`, `endpoint`, `clusterId`, `privilege`): `boolean`

Check if the given ACL entry is allowed to be used for the given subject descriptor, endpoint, and cluster ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../../../session/export/classes/SecureSession.md)\<`any`\> |
| `endpoint` | [`EndpointInterface`](../../../../../../endpoint/export/interfaces/EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../../../../../../datatype/export/README.md#clusterid) |
| `privilege` | [`AccessLevel`](../../../../../../cluster/export/enumerations/AccessLevel.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L148)

***

### getGrantedPrivileges()

> **getGrantedPrivileges**(`session`, `endpoint`, `clusterId`): [`AccessLevel`](../../../../../../cluster/export/enumerations/AccessLevel.md)[]

Determines the granted privileges for the given session, endpoint, and cluster ID and returns them.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../../../session/export/classes/SecureSession.md)\<`any`\> |
| `endpoint` | [`EndpointInterface`](../../../../../../endpoint/export/interfaces/EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../../../../../../datatype/export/README.md#clusterid) |

#### Returns

[`AccessLevel`](../../../../../../cluster/export/enumerations/AccessLevel.md)[]

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L172)

***

### updateAccessControlList()

> **updateAccessControlList**(`aclList`): `void`

Public method used to update the Access Control List on changes.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `aclList` | [`AccessControlEntryStruct`](../../../../../../cluster/export/namespaces/AccessControl/interfaces/AccessControlEntryStruct.md)[] | `[]` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L88)
