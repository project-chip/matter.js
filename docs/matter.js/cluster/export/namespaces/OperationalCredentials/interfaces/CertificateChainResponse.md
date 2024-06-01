[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / CertificateChainResponse

# Interface: CertificateChainResponse

This command shall be generated in response to a CertificateChainRequest command.

## See

MatterSpecification.v11.Core § 11.17.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCertificateChainResponse`](../README.md#tlvcertificatechainresponse)\>

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

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L233)
