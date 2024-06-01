[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / CertificateChainType

# Enumeration: CertificateChainType

This enumeration is used by the CertificateChainRequest command to convey which certificate from the device
attestation certificate chain to transmit back to the client.

## See

MatterSpecification.v11.Core § 11.17.4.2

## Enumeration Members

### DacCertificate

> **DacCertificate**: `1`

Request the DER- encoded DAC certificate

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:199](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L199)

***

### PaiCertificate

> **PaiCertificate**: `2`

Request the DER- encoded PAI certificate

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L204)
