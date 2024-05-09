[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / NocResponse

# Interface: NocResponse

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).NocResponse

This command shall be generated in response to the following commands:

  • AddNOC

  • UpdateNOC

  • UpdateFabricLabel

  • RemoveFabric

It provides status information about the success or failure of those commands.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNocResponse`](../modules/cluster_export.OperationalCredentials.md#tlvnocresponse)\>

  ↳ **`NocResponse`**

## Table of contents

### Properties

- [debugText](cluster_export.OperationalCredentials.NocResponse.md#debugtext)
- [fabricIndex](cluster_export.OperationalCredentials.NocResponse.md#fabricindex)
- [statusCode](cluster_export.OperationalCredentials.NocResponse.md#statuscode)

## Properties

### debugText

• `Optional` **debugText**: `string`

This field may contain debugging textual information from the cluster implementation, which SHOULD NOT be
presented to user interfaces in any way. Its purpose is to help developers in troubleshooting errors and the
contents may go into logs or crash reports.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.3

#### Inherited from

TypeFromSchema.debugText

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:541](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L541)

___

### fabricIndex

• `Optional` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

This field shall be present whenever StatusCode has a value of OK. If present, it shall contain the Fabric
Index of the Fabric last added, removed or updated.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.2

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:532](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L532)

___

### statusCode

• **statusCode**: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)

This field shall contain an NOCStatus value representing the status of an operation involving a NOC.

**`See`**

MatterSpecification.v11.Core § 11.17.6.10.1

#### Inherited from

TypeFromSchema.statusCode

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:524](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L524)
