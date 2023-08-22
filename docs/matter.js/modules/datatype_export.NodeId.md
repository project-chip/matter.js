[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype/export](datatype_export.md) / NodeId

# Namespace: NodeId

[datatype/export](datatype_export.md).NodeId

## Table of contents

### Functions

- [getGroupNodeId](datatype_export.NodeId.md#getgroupnodeid)
- [getRandomOperationalNodeId](datatype_export.NodeId.md#getrandomoperationalnodeid)
- [toHexString](datatype_export.NodeId.md#tohexstring)

## Functions

### getGroupNodeId

▸ **getGroupNodeId**(`groupId`): [`NodeId`](datatype_export.md#nodeid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L48)

___

### getRandomOperationalNodeId

▸ **getRandomOperationalNodeId**(): [`NodeId`](datatype_export.md#nodeid)

#### Returns

[`NodeId`](datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/datatype/NodeId.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L39)

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

[packages/matter.js/src/datatype/NodeId.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/datatype/NodeId.ts#L33)
