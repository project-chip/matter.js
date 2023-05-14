[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / CertificateChainType

# Enumeration: CertificateChainType

[exports/cluster](../modules/exports_cluster.md).CertificateChainType

Used by the CertificateChainRequest command to convey which certificate from the device attestation certificate
chain to transmit back to the client.

**`See`**

MatterCoreSpecificationV1_0 § 11.17.5.8

## Table of contents

### Enumeration Members

- [DeviceAttestation](exports_cluster.CertificateChainType.md#deviceattestation)
- [ProductAttestationIntermediate](exports_cluster.CertificateChainType.md#productattestationintermediate)

## Enumeration Members

### DeviceAttestation

• **DeviceAttestation** = ``1``

Request the DER- encoded DAC certificate

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:17

___

### ProductAttestationIntermediate

• **ProductAttestationIntermediate** = ``2``

Request the DER- encoded PAI certificate

#### Defined in

packages/matter.js/dist/cjs/cluster/OperationalCredentialsCluster.d.ts:19
