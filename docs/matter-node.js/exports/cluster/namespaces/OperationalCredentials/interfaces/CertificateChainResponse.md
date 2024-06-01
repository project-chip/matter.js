[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / CertificateChainResponse

# Interface: CertificateChainResponse

This command shall be generated in response to a CertificateChainRequest command.

## See

MatterSpecification.v11.Core § 11.17.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCertificateChainResponse`](../README.md#tlvcertificatechainresponse)\>

## Properties

### certificate

> **certificate**: `Uint8Array`

This field shall be the DER encoded certificate corresponding to the CertificateType field in the
CertificateChainRequest command.

#### See

MatterSpecification.v11.Core § 11.17.6.4.1

#### Inherited from

`TypeFromSchema.certificate`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:201
