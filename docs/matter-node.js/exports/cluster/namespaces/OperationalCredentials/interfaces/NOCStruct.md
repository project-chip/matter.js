[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / NOCStruct

# Interface: NOCStruct

This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a given Node.

Note that the Trusted Root CA Certificate is not included in this structure. The roots are available in the
TrustedRootCertificates attribute of the Node Operational Credentials cluster.

## See

MatterSpecification.v11.Core § 11.17.4.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvNOCStruct`](../README.md#tlvnocstruct)\>

## Properties

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:36

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:35

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:28
