[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / NodeOperationalCertStatus

# Enumeration: NodeOperationalCertStatus

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).NodeOperationalCertStatus

This enumeration is used by the NOCResponse common response command to convey detailed out

come of several of this cluster’s operations.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.17.4.3

## Table of contents

### Enumeration Members

- [FabricConflict](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#fabricconflict)
- [InvalidAdminSubject](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidadminsubject)
- [InvalidFabricIndex](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidfabricindex)
- [InvalidNoc](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidnoc)
- [InvalidNodeOpId](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidnodeopid)
- [InvalidPublicKey](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#invalidpublickey)
- [LabelConflict](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#labelconflict)
- [MissingCsr](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#missingcsr)
- [Ok](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#ok)
- [TableFull](cluster_export.OperationalCredentials.NodeOperationalCertStatus.md#tablefull)

## Enumeration Members

### FabricConflict

• **FabricConflict** = ``9``

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:416](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L416)

___

### InvalidAdminSubject

• **InvalidAdminSubject** = ``6``

Invalid CaseAdminSubject field for an AddNOC command.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:411](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L411)

___

### InvalidFabricIndex

• **InvalidFabricIndex** = ``11``

FabricIndex argument is invalid.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:426](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L426)

___

### InvalidNoc

• **InvalidNoc** = ``3``

Any other validation error in NOC chain

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:396](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L396)

___

### InvalidNodeOpId

• **InvalidNodeOpId** = ``2``

The Node Operational ID in the NOC is not formatted correctly.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:391](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L391)

___

### InvalidPublicKey

• **InvalidPublicKey** = ``1``

Public Key in the NOC does not match the public key in the NOCSR

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:386](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L386)

___

### LabelConflict

• **LabelConflict** = ``10``

Label already exists on another Fabric.

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:421](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L421)

___

### MissingCsr

• **MissingCsr** = ``4``

No record of prior CSR for which this NOC could match

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:401](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L401)

___

### Ok

• **Ok** = ``0``

OK, no error

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:381](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L381)

___

### TableFull

• **TableFull** = ``5``

NOCs table full, cannot add another one

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:406](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L406)
