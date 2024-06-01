[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / CsrResponse

# Interface: CsrResponse

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

## See

MatterSpecification.v11.Core § 11.17.6.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvCsrResponse`](../README.md#tlvcsrresponse)\>

## Properties

### attestationSignature

> **attestationSignature**: `Uint8Array`

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.9, “NOCSR Information”.

#### See

MatterSpecification.v11.Core § 11.17.6.6.2

#### Inherited from

`TypeFromSchema.attestationSignature`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:249

***

### nocsrElements

> **nocsrElements**: `Uint8Array`

This field shall contain the octet string of the serialized nocsr_elements_message.

#### See

MatterSpecification.v11.Core § 11.17.6.6.1

#### Inherited from

`TypeFromSchema.nocsrElements`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:242
