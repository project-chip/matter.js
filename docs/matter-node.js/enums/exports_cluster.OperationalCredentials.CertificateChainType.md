[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / CertificateChainType

# Enumeration: CertificateChainType

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).CertificateChainType

This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
attestation certificate chain to transmit back to the client.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.4.2

## Table of contents

### Enumeration Members

- [DacCertificate](exports_cluster.OperationalCredentials.CertificateChainType.md#daccertificate)
- [PaiCertificate](exports_cluster.OperationalCredentials.CertificateChainType.md#paicertificate)

## Enumeration Members

### DacCertificate

• **DacCertificate** = ``1``

Request the DER- encoded DAC certificate

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:129

___

### PaiCertificate

• **PaiCertificate** = ``2``

Request the DER- encoded PAI certificate

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:133
