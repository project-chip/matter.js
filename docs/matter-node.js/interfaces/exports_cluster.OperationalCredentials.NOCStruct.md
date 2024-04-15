[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / NOCStruct

# Interface: NOCStruct

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).NOCStruct

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

**`See`**

MatterSpecification.v11.Core § 11.17.4.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNOCStruct`](../modules/exports_cluster.OperationalCredentials.md#tlvnocstruct)\>

  ↳ **`NOCStruct`**

## Table of contents

### Properties

- [fabricIndex](exports_cluster.OperationalCredentials.NOCStruct.md#fabricindex)
- [icac](exports_cluster.OperationalCredentials.NOCStruct.md#icac)
- [noc](exports_cluster.OperationalCredentials.NOCStruct.md#noc)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:36

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:35

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:28
