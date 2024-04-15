[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / AttestationResponse

# Interface: AttestationResponse

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).AttestationResponse

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAttestationResponse`](../modules/cluster_export.OperationalCredentials.md#tlvattestationresponse)\>

  ↳ **`AttestationResponse`**

## Table of contents

### Properties

- [attestationElements](cluster_export.OperationalCredentials.AttestationResponse.md#attestationelements)
- [attestationSignature](cluster_export.OperationalCredentials.AttestationResponse.md#attestationsignature)

## Properties

### attestationElements

• **attestationElements**: `Uint8Array`

This field shall contain the octet string of the serialized attestation_elements_message.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2.1

#### Inherited from

TypeFromSchema.attestationElements

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L166)

___

### attestationSignature

• **attestationSignature**: `Uint8Array`

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.7, “Attestation Information”.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2.2

#### Inherited from

TypeFromSchema.attestationSignature

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L174)
