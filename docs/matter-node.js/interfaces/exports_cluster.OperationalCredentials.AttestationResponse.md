[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / AttestationResponse

# Interface: AttestationResponse

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).AttestationResponse

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAttestationResponse`](../modules/exports_cluster.OperationalCredentials.md#tlvattestationresponse)\>

  ↳ **`AttestationResponse`**

## Table of contents

### Properties

- [attestationElements](exports_cluster.OperationalCredentials.AttestationResponse.md#attestationelements)
- [attestationSignature](exports_cluster.OperationalCredentials.AttestationResponse.md#attestationsignature)

## Properties

### attestationElements

• **attestationElements**: `Uint8Array`

This field shall contain the octet string of the serialized attestation_elements_message.

**`See`**

MatterSpecification.v11.Core § 11.17.6.2.1

#### Inherited from

TypeFromSchema.attestationElements

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:137

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:144
