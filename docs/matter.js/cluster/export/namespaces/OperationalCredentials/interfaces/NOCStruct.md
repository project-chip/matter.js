[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / NOCStruct

# Interface: NOCStruct

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

## See

MatterSpecification.v11.Core § 11.17.4.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNOCStruct`](../README.md#tlvnocstruct)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L59)

***

### icac

> **icac**: `null` \| `Uint8Array`

This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter Certificate
Encoding. If no ICAC is present in the chain, this field shall be set to null.

#### See

MatterSpecification.v11.Core § 11.17.4.4.2

#### Inherited from

`TypeFromSchema.icac`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L57)

***

### noc

> **noc**: `Uint8Array`

This field shall contain the NOC for the struct’s associated fabric, encoded using Matter Certificate
Encoding.

#### See

MatterSpecification.v11.Core § 11.17.4.4.1

#### Inherited from

`TypeFromSchema.noc`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L49)
