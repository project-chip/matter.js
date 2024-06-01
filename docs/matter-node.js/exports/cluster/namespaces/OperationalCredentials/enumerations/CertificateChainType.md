[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / CertificateChainType

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:168

***

### PaiCertificate

> **PaiCertificate**: `2`

Request the DER- encoded PAI certificate

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:172
