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

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:616](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L616)
