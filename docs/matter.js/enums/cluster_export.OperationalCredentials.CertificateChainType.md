[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / CertificateChainType

# Enumeration: CertificateChainType

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).CertificateChainType

This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
attestation certificate chain to transmit back to the client.

**`See`**

MatterSpecification.v11.Core § 11.17.4.2

## Table of contents

### Enumeration Members

- [DacCertificate](cluster_export.OperationalCredentials.CertificateChainType.md#daccertificate)
- [PaiCertificate](cluster_export.OperationalCredentials.CertificateChainType.md#paicertificate)

## Enumeration Members

### DacCertificate

• **DacCertificate** = ``1``

Request the DER- encoded DAC certificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:199](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L199)

___

### PaiCertificate

• **PaiCertificate** = ``2``

Request the DER- encoded PAI certificate

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:204](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L204)
