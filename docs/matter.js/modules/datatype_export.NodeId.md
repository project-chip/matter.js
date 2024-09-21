[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype/export](datatype_export.md) / NodeId

# Namespace: NodeId

[datatype/export](datatype_export.md).NodeId

## Table of contents

### Variables

- [UNSPECIFIED\_NODE\_ID](datatype_export.NodeId.md#unspecified_node_id)

### Functions

- [extractAsCaseAuthenticatedTag](datatype_export.NodeId.md#extractascaseauthenticatedtag)
- [fromCaseAuthenticatedTag](datatype_export.NodeId.md#fromcaseauthenticatedtag)
- [fromGroupNodeId](datatype_export.NodeId.md#fromgroupnodeid)
- [fromTemporaryLocalNodeId](datatype_export.NodeId.md#fromtemporarylocalnodeid)
- [getFromPakeKeyIdentifier](datatype_export.NodeId.md#getfrompakekeyidentifier)
- [isCaseAuthenticatedTag](datatype_export.NodeId.md#iscaseauthenticatedtag)
- [isOperationalNodeId](datatype_export.NodeId.md#isoperationalnodeid)
- [randomOperationalNodeId](datatype_export.NodeId.md#randomoperationalnodeid)
- [toHexString](datatype_export.NodeId.md#tohexstring)

## Variables

### UNSPECIFIED\_NODE\_ID

• `Const` **UNSPECIFIED\_NODE\_ID**: [`NodeId`](datatype_export.md#nodeid)

The Unspecified Node ID (0x0000_0000_0000_0000) is a reserved value that never appears in messages or protocol
usage. It exists to mark or detect the presence of uninitialized, missing, or invalid Node IDs.

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:37](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L37)

## Functions

### extractAsCaseAuthenticatedTag

▸ **extractAsCaseAuthenticatedTag**(`nodeId`): [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

[`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:102](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L102)

___

### fromCaseAuthenticatedTag

▸ **fromCaseAuthenticatedTag**(`id`): [`NodeId`](datatype_export.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a group of peer nodes that share a
single CASE session as specified in Section 6.6.2.1.2, “Subjects identified by CASE Authenticated Tag”.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag) |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:90](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L90)

___

### fromGroupNodeId

▸ **fromGroupNodeId**(`groupId`): [`NodeId`](datatype_export.md#nodeid)

A Group Node ID is a 64-bit Node ID that contains a particular Group ID in the lower half of the Node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:67](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L67)

___

### fromTemporaryLocalNodeId

▸ **fromTemporaryLocalNodeId**(`id`): [`NodeId`](datatype_export.md#nodeid)

A Temporary Local Node ID is a 64-bit Node ID that contains an implementation-dependent value in its lower
32 bits. This allows implementations to keep track of connections or transport-layer links and similar
housekeeping internal usage purposes in contexts where an Operational Node ID is unavailable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:79](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L79)

___

### getFromPakeKeyIdentifier

▸ **getFromPakeKeyIdentifier**(`id`): [`NodeId`](datatype_export.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a particular PAKE key as specified in
Section 6.6.2.1.1, “PASE and Group Subjects”. An example usage would be to create an ACL entry to provide
administrative access to any commissioner communicating via a PASE session established with a particular pincode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:114](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L114)

___

### isCaseAuthenticatedTag

▸ **isCaseAuthenticatedTag**(`nodeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:97](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L97)

___

### isOperationalNodeId

▸ **isOperationalNodeId**(`nodeId`): `boolean`

Returns whether the given Node ID is an Operational Node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:62](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L62)

___

### randomOperationalNodeId

▸ **randomOperationalNodeId**(): [`NodeId`](datatype_export.md#nodeid)

An Operational Node ID is a 64-bit number that uniquely identifies an individual Node on a Fabric. All messages
must have an Operational Node ID as the source address. All unicast messages must have an Operational Node ID
as the destination address.

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:50](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L50)

___

### toHexString

▸ **toHexString**(`nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:39](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/NodeId.ts#L39)
