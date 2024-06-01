[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / AttestationResponse

# Interface: AttestationResponse

This command shall be generated in response to an Attestation Request command.

See Section 11.17.4.7, “Attestation Information” for details about the generation of the fields within this
response command.

See Section F.2, “Device Attestation Response test vector” for an example computation of an AttestationResponse.

## See

MatterSpecification.v11.Core § 11.17.6.2

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAttestationResponse`](../README.md#tlvattestationresponse)\>

## Properties

### attestationElements

> **attestationElements**: `Uint8Array`

This field shall contain the octet string of the serialized attestation_elements_message.

#### See

MatterSpecification.v11.Core § 11.17.6.2.1

#### Inherited from

`TypeFromSchema.attestationElements`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:137

***

### attestationSignature

> **attestationSignature**: `Uint8Array`

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.7, “Attestation Information”.

#### See

MatterSpecification.v11.Core § 11.17.6.2.2

#### Inherited from

`TypeFromSchema.attestationSignature`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:144
