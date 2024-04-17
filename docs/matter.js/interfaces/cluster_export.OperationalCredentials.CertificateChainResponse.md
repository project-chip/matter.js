[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / CertificateChainResponse

# Interface: CertificateChainResponse

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).CertificateChainResponse

This command shall be generated in response to a CertificateChainRequest command.

**`See`**

MatterSpecification.v11.Core § 11.17.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCertificateChainResponse`](../modules/cluster_export.OperationalCredentials.md#tlvcertificatechainresponse)\>

  ↳ **`CertificateChainResponse`**

## Table of contents

### Properties

- [certificate](cluster_export.OperationalCredentials.CertificateChainResponse.md#certificate)

## Properties

### certificate

• **certificate**: `Uint8Array`

This field shall be the DER encoded certificate corresponding to the CertificateType field in the
CertificateChainRequest command.

**`See`**

MatterSpecification.v11.Core § 11.17.6.4.1

#### Inherited from

TypeFromSchema.certificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L233)
