[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md) / [\<internal\>](../modules/behavior_definitions_access_control_export._internal_.md) / AccessControlManager

# Class: AccessControlManager

[behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md).[\<internal\>](../modules/behavior_definitions_access_control_export._internal_.md).AccessControlManager

Implements Access Control Logic as per Matter Specification

**`See`**

MatterSpecification.v12.Core § 6.6.5.2.

## Table of contents

### Constructors

- [constructor](behavior_definitions_access_control_export._internal_.AccessControlManager.md#constructor)

### Properties

- [#aclList](behavior_definitions_access_control_export._internal_.AccessControlManager.md##acllist)
- [#extensionEntryAccessCheck](behavior_definitions_access_control_export._internal_.AccessControlManager.md##extensionentryaccesscheck)

### Methods

- [#addGrantedPrivilege](behavior_definitions_access_control_export._internal_.AccessControlManager.md##addgrantedprivilege)
- [#getAccessControlEntriesForFabric](behavior_definitions_access_control_export._internal_.AccessControlManager.md##getaccesscontrolentriesforfabric)
- [#getIsdFromMessage](behavior_definitions_access_control_export._internal_.AccessControlManager.md##getisdfrommessage)
- [#subjectMatches](behavior_definitions_access_control_export._internal_.AccessControlManager.md##subjectmatches)
- [allowsPrivilege](behavior_definitions_access_control_export._internal_.AccessControlManager.md#allowsprivilege)
- [getGrantedPrivileges](behavior_definitions_access_control_export._internal_.AccessControlManager.md#getgrantedprivileges)
- [updateAccessControlList](behavior_definitions_access_control_export._internal_.AccessControlManager.md#updateaccesscontrollist)

## Constructors

### constructor

• **new AccessControlManager**(`aclList?`, `extensionEntryAccessCheck?`): [`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aclList` | [`AccessControlEntryStruct`](../interfaces/cluster_export.AccessControl.AccessControlEntryStruct.md)[] | `[]` |
| `extensionEntryAccessCheck?` | (`aclList`: [`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist), `aclEntry`: [`AclEntry`](../modules/behavior_definitions_access_control_export._internal_.md#aclentry), `subjectDesc`: [`IncomingSubjectDescriptor`](../modules/behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor), `endpoint`: [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md), `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid)) => `boolean` | `undefined` |

#### Returns

[`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:69](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L69)

## Properties

### #aclList

• `Private` **#aclList**: [`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist)

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:60](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L60)

___

### #extensionEntryAccessCheck

• `Private` **#extensionEntryAccessCheck**: (`aclList`: [`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist), `aclEntry`: [`AclEntry`](../modules/behavior_definitions_access_control_export._internal_.md#aclentry), `subjectDesc`: [`IncomingSubjectDescriptor`](../modules/behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor), `endpoint`: [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md), `clusterId`: [`ClusterId`](../modules/datatype_export.md#clusterid)) => `boolean`

#### Type declaration

▸ (`aclList`, `aclEntry`, `subjectDesc`, `endpoint`, `clusterId`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `aclList` | [`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist) |
| `aclEntry` | [`AclEntry`](../modules/behavior_definitions_access_control_export._internal_.md#aclentry) |
| `subjectDesc` | [`IncomingSubjectDescriptor`](../modules/behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor) |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:61](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L61)

## Methods

### #addGrantedPrivilege

▸ **#addGrantedPrivilege**(`grantedPrivileges`, `privilege`): `void`

Add the new privilege to the granted privileges set and also add any privileges subsumed by the new privilege.

#### Parameters

| Name | Type |
| :------ | :------ |
| `grantedPrivileges` | `Set`\<[`AccessLevel`](../enums/cluster_export.AccessLevel.md)\> |
| `privilege` | [`AccessLevel`](../enums/cluster_export.AccessLevel.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:121](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L121)

___

### #getAccessControlEntriesForFabric

▸ **#getAccessControlEntriesForFabric**(`fabric`): [`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist)

Get the Access Control List for a given fabric.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

[`AclList`](../modules/behavior_definitions_access_control_export._internal_.md#acllist)

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:95](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L95)

___

### #getIsdFromMessage

▸ **#getIsdFromMessage**(`session`): [`IncomingSubjectDescriptor`](../modules/behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor)

Determines the Incoming Subject Descriptor (ISD) from the given session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |

#### Returns

[`IncomingSubjectDescriptor`](../modules/behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor)

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:302](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L302)

___

### #subjectMatches

▸ **#subjectMatches**(`aclSubject`, `isdSubject`): `boolean`

Subjects must match exactly, or both are CAT with matching CAT ID and acceptable CAT version

#### Parameters

| Name | Type |
| :------ | :------ |
| `aclSubject` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `isdSubject` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:102](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L102)

___

### allowsPrivilege

▸ **allowsPrivilege**(`session`, `endpoint`, `clusterId`, `privilege`): `boolean`

Check if the given ACL entry is allowed to be used for the given subject descriptor, endpoint, and cluster ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `privilege` | [`AccessLevel`](../enums/cluster_export.AccessLevel.md) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:148](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L148)

___

### getGrantedPrivileges

▸ **getGrantedPrivileges**(`session`, `endpoint`, `clusterId`): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)[]

Determines the granted privileges for the given session, endpoint, and cluster ID and returns them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)\<`any`\> |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:172](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L172)

___

### updateAccessControlList

▸ **updateAccessControlList**(`aclList?`): `void`

Public method used to update the Access Control List on changes.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aclList` | [`AccessControlEntryStruct`](../interfaces/cluster_export.AccessControl.AccessControlEntryStruct.md)[] | `[]` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:88](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L88)
