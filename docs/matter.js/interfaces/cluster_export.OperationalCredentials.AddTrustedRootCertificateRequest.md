[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / AddTrustedRootCertificateRequest

# Interface: AddTrustedRootCertificateRequest

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).AddTrustedRootCertificateRequest

Input to the OperationalCredentials addTrustedRootCertificate command

**`See`**

MatterSpecification.v11.Core § 11.17.6.13

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAddTrustedRootCertificateRequest`](../modules/cluster_export.OperationalCredentials.md#tlvaddtrustedrootcertificaterequest)\>

  ↳ **`AddTrustedRootCertificateRequest`**

## Table of contents

### Properties

- [rootCaCertificate](cluster_export.OperationalCredentials.AddTrustedRootCertificateRequest.md#rootcacertificate)

## Properties

### rootCaCertificate

• **rootCaCertificate**: `Uint8Array`

#### Inherited from

TypeFromSchema.rootCaCertificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:681](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L681)
