[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](../modules/exports_datatype.md) / GroupId

# Class: GroupId

[exports/datatype](../modules/exports_datatype.md).GroupId

A Group Identifier (Group ID or GID) is a 16-bit number that identifies a set of Nodes across a
Fabric at the message layer (see Section 4.15, “Group Key Management”). A Group ID can further
be bound to one or more Endpoints within each Node in the group at the interaction layer.

The Group ID space is allocated as described in Table 2, “Group ID Allocations”:
0x0000 - Null or unspecified Group ID
0x0001 - 0xFEFF: Application Group ID, assigned by fabric Administrator
0xFF00 - 0xFFFF: Universal Group ID range reserved for static multicast and anycast identifiers

**`See`**

MatterCoreSpecificationV1_0 § 2.5.4

## Table of contents

### Constructors

- [constructor](exports_datatype.GroupId.md#constructor)

### Properties

- [id](exports_datatype.GroupId.md#id)

## Constructors

### constructor

• **new GroupId**(`id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Defined in

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:21

## Properties

### id

• `Readonly` **id**: `number`

#### Defined in

packages/matter.js/dist/cjs/datatype/GroupId.d.ts:20
