[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / CertificateChainType

# Enumeration: CertificateChainType

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).CertificateChainType

This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
attestation certificate chain to transmit back to the client.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.4.2

## Table of contents

### Enumeration Members

- [DacCertificate](cluster_export.OperationalCredentials.CertificateChainType.md#daccertificate)
- [PaiCertificate](cluster_export.OperationalCredentials.CertificateChainType.md#paicertificate)

## Enumeration Members

### DacCertificate

• **DacCertificate** = ``1``

Request the DER- encoded DAC certificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L163)

___

### PaiCertificate

• **PaiCertificate** = ``2``

Request the DER- encoded PAI certificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:168](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L168)
