[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](exports_datatype.md) / NodeId

# Namespace: NodeId

[exports/datatype](exports_datatype.md).NodeId

## Table of contents

### Variables

- [UNSPECIFIED\_NODE\_ID](exports_datatype.NodeId.md#unspecified_node_id)

### Functions

- [extractAsCaseAuthenticatedTag](exports_datatype.NodeId.md#extractascaseauthenticatedtag)
- [getFromCaseAuthenticatedTag](exports_datatype.NodeId.md#getfromcaseauthenticatedtag)
- [getFromGroupNodeId](exports_datatype.NodeId.md#getfromgroupnodeid)
- [getFromPakeKeyIdentifier](exports_datatype.NodeId.md#getfrompakekeyidentifier)
- [getFromTemporaryLocalNodeId](exports_datatype.NodeId.md#getfromtemporarylocalnodeid)
- [getRandomOperationalNodeId](exports_datatype.NodeId.md#getrandomoperationalnodeid)
- [toHexString](exports_datatype.NodeId.md#tohexstring)

## Variables

### UNSPECIFIED\_NODE\_ID

• `Const` **UNSPECIFIED\_NODE\_ID**: [`NodeId`](exports_datatype.md#nodeid)

The Unspecified Node ID (0x0000_0000_0000_0000) is a reserved value that never appears in messages or protocol
usage. It exists to mark or detect the presence of uninitialized, missing, or invalid Node IDs.

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:22

## Functions

### extractAsCaseAuthenticatedTag

▸ **extractAsCaseAuthenticatedTag**(`nodeId`): [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |

#### Returns

[`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:43

___

### getFromCaseAuthenticatedTag

▸ **getFromCaseAuthenticatedTag**(`id`): [`NodeId`](exports_datatype.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a group of peer nodes that share a
single CASE session as specified in Section 6.6.2.1.2, “Subjects identified by CASE Authenticated Tag”.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag) |

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:42

___

### getFromGroupNodeId

▸ **getFromGroupNodeId**(`groupId`): [`NodeId`](exports_datatype.md#nodeid)

A Group Node ID is a 64-bit Node ID that contains a particular Group ID in the lower half of the Node ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:31

___

### getFromPakeKeyIdentifier

▸ **getFromPakeKeyIdentifier**(`id`): [`NodeId`](exports_datatype.md#nodeid)

This subrange of Node ID is used to assign an access control subject to a particular PAKE key as specified in
Section 6.6.2.1.1, “PASE and Group Subjects”. An example usage would be to create an ACL entry to provide
administrative access to any commissioner communicating via a PASE session established with a particular pincode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:49

___

### getFromTemporaryLocalNodeId

▸ **getFromTemporaryLocalNodeId**(`id`): [`NodeId`](exports_datatype.md#nodeid)

A Temporary Local Node ID is a 64-bit Node ID that contains an implementation-dependent value in its lower
32 bits. This allows implementations to keep track of connections or transport-layer links and similar
housekeeping internal usage purposes in contexts where an Operational Node ID is unavailable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:37

___

### getRandomOperationalNodeId

▸ **getRandomOperationalNodeId**(): [`NodeId`](exports_datatype.md#nodeid)

An Operational Node ID is a 64-bit number that uniquely identifies an individual Node on a Fabric. All messages
must have an Operational Node ID as the source address. All unicast messages must have an Operational Node ID
as the destination address.

#### Returns

[`NodeId`](exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:29

___

### toHexString

▸ **toHexString**(`nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/datatype/NodeId.d.ts:23
