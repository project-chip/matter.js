[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / NOCStruct

# Interface: NOCStruct

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).NOCStruct

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNOCStruct`](../modules/cluster_export.OperationalCredentials.md#tlvnocstruct)\>

  ↳ **`NOCStruct`**

## Table of contents

### Properties

- [fabricIndex](cluster_export.OperationalCredentials.NOCStruct.md#fabricindex)
- [icac](cluster_export.OperationalCredentials.NOCStruct.md#icac)
- [noc](cluster_export.OperationalCredentials.NOCStruct.md#noc)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L59)

___

### icac

• **icac**: ``null`` \| `Uint8Array`

This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter Certificate
Encoding. If no ICAC is present in the chain, this field shall be set to null.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4.2

#### Inherited from

TypeFromSchema.icac

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L57)

___

### noc

• **noc**: `Uint8Array`

This field shall contain the NOC for the struct’s associated fabric, encoded using Matter Certificate
Encoding.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4.1

#### Inherited from

TypeFromSchema.noc

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L49)
