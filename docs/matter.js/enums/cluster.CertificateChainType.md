[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / CertificateChainType

# Enumeration: CertificateChainType

[cluster](../modules/cluster.md).CertificateChainType

Used by the CertificateChainRequest command to convey which certificate from the device attestation certificate
chain to transmit back to the client.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17.5.8

## Table of contents

### Enumeration Members

- [DeviceAttestation](cluster.CertificateChainType.md#deviceattestation)
- [ProductAttestationIntermediate](cluster.CertificateChainType.md#productattestationintermediate)

## Enumeration Members

### DeviceAttestation

• **DeviceAttestation** = ``1``

Request the DER- encoded DAC certificate

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L71)

___

### ProductAttestationIntermediate

• **ProductAttestationIntermediate** = ``2``

Request the DER- encoded PAI certificate

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L74)
