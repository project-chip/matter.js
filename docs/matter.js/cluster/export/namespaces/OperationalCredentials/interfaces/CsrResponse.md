[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / CsrResponse

# Interface: CsrResponse

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

## See

MatterSpecification.v11.Core § 11.17.6.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvCsrResponse`](../README.md#tlvcsrresponse)\>

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

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:284](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L284)

***

### nocsrElements

> **nocsrElements**: `Uint8Array`

This field shall contain the octet string of the serialized nocsr_elements_message.

#### See

MatterSpecification.v11.Core § 11.17.6.6.1

#### Inherited from

`TypeFromSchema.nocsrElements`

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:276](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L276)
