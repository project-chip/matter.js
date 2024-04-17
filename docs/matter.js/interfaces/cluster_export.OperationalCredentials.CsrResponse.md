[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / CsrResponse

# Interface: CsrResponse

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).CsrResponse

This command shall be generated in response to a CSRRequest Command.

See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within this response
command.

See Section F.3, “Node Operational CSR Response test vector” for an example computation of a CSRResponse.

**`See`**

MatterSpecification.v11.Core § 11.17.6.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvCsrResponse`](../modules/cluster_export.OperationalCredentials.md#tlvcsrresponse)\>

  ↳ **`CsrResponse`**

## Table of contents

### Properties

- [attestationSignature](cluster_export.OperationalCredentials.CsrResponse.md#attestationsignature)
- [nocsrElements](cluster_export.OperationalCredentials.CsrResponse.md#nocsrelements)

## Properties

### attestationSignature

• **attestationSignature**: `Uint8Array`

#### Inherited from

TypeFromSchema.attestationSignature

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L281)

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

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:279](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L279)
