[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AccessControl](../modules/cluster_export.AccessControl.md) / AccessControlExtensionStruct

# Interface: AccessControlExtensionStruct

[cluster/export](../modules/cluster_export.md).[AccessControl](../modules/cluster_export.AccessControl.md).AccessControlExtensionStruct

**`See`**

MatterSpecification.v11.Core § 9.10.4.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAccessControlExtensionStruct`](../modules/cluster_export.AccessControl.md#tlvaccesscontrolextensionstruct)\>

  ↳ **`AccessControlExtensionStruct`**

## Table of contents

### Properties

- [data](cluster_export.AccessControl.AccessControlExtensionStruct.md#data)
- [fabricIndex](cluster_export.AccessControl.AccessControlExtensionStruct.md#fabricindex)

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

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:238](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L238)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/AccessControlCluster.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AccessControlCluster.ts#L240)
