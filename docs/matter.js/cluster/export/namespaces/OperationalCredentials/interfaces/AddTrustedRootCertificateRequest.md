[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / AddTrustedRootCertificateRequest

# Interface: AddTrustedRootCertificateRequest

Input to the OperationalCredentials addTrustedRootCertificate command

## See

MatterSpecification.v11.Core § 11.17.6.13

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAddTrustedRootCertificateRequest`](../README.md#tlvaddtrustedrootcertificaterequest)\>

## Properties

### rootCaCertificate

> **rootCaCertificate**: `Uint8Array`

#### Inherited from

`TypeFromSchema.rootCaCertificate`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:681](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L681)
