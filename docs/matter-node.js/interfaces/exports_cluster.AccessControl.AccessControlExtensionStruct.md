[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccessControl](../modules/exports_cluster.AccessControl.md) / AccessControlExtensionStruct

# Interface: AccessControlExtensionStruct

[exports/cluster](../modules/exports_cluster.md).[AccessControl](../modules/exports_cluster.AccessControl.md).AccessControlExtensionStruct

**`See`**

MatterSpecification.v11.Core § 9.10.4.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAccessControlExtensionStruct`](../modules/exports_cluster.AccessControl.md#tlvaccesscontrolextensionstruct)\>

  ↳ **`AccessControlExtensionStruct`**

## Table of contents

### Properties

- [data](exports_cluster.AccessControl.AccessControlExtensionStruct.md#data)
- [fabricIndex](exports_cluster.AccessControl.AccessControlExtensionStruct.md#fabricindex)

## Properties

### data

• **data**: `Uint8Array`

This field may be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s

Access Control Entries.

The contents shall consist of a top-level anonymous list; each list element shall include a profile-specific
tag encoded in fully-qualified form.

Administrators may iterate over this list of elements, and interpret selected elements at their discretion.
The content of each element is not specified, but may be coordinated among manufacturers at their discretion.

**`See`**

MatterSpecification.v11.Core § 9.10.4.6.1

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:206

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:207
