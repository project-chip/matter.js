[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / CsrResponse

# Interface: CsrResponse

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).CsrResponse

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvCsrResponse`](../modules/exports_cluster.OperationalCredentials.md#tlvcsrresponse)\>

  ↳ **`CsrResponse`**

## Table of contents

### Properties

- [attestationSignature](exports_cluster.OperationalCredentials.CsrResponse.md#attestationsignature)
- [nocsrElements](exports_cluster.OperationalCredentials.CsrResponse.md#nocsrelements)

## Properties

### attestationSignature

• **attestationSignature**: `Uint8Array`

#### Inherited from

TypeFromSchema.attestationSignature

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:246

___

### nocsrElements

• **nocsrElements**: `Uint8Array`

This field shall contain the octet string of the serialized nocsr_elements_message.

This field shall contain the octet string of the necessary attestation_signature as described in Section
11.17.4.9, “NOCSR Information”.

**`See`**

MatterSpecification.v11.Core § 11.17.6.6.1

#### Inherited from

TypeFromSchema.nocsrElements

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:245
