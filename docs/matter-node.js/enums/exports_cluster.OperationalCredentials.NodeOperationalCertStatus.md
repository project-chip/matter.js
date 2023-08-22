[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md) / NodeOperationalCertStatus

# Enumeration: NodeOperationalCertStatus

[exports/cluster](../modules/exports_cluster.md).[OperationalCredentials](../modules/exports_cluster.OperationalCredentials.md).NodeOperationalCertStatus

This enumeration is used by the NOCResponse common response command to convey detailed out

come of several of this cluster’s operations.

**`See`**

MatterCoreSpecificationV1_1 § 11.17.4.3

## Table of contents

### Enumeration Members

- [FabricConflict](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#fabricconflict)
- [InvalidAdminSubject](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#invalidadminsubject)
- [InvalidFabricIndex](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#invalidfabricindex)
- [InvalidNoc](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#invalidnoc)
- [InvalidNodeOpId](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#invalidnodeopid)
- [InvalidPublicKey](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#invalidpublickey)
- [LabelConflict](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#labelconflict)
- [MissingCsr](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#missingcsr)
- [Ok](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#ok)
- [TableFull](exports_cluster.OperationalCredentials.NodeOperationalCertStatus.md#tablefull)

## Enumeration Members

### FabricConflict

• **FabricConflict** = ``9``

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:364

___

### InvalidAdminSubject

• **InvalidAdminSubject** = ``6``

Invalid CaseAdminSubject field for an AddNOC command.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:360

___

### InvalidFabricIndex

• **InvalidFabricIndex** = ``11``

FabricIndex argument is invalid.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:372

___

### InvalidNoc

• **InvalidNoc** = ``3``

Any other validation error in NOC chain

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:348

___

### InvalidNodeOpId

• **InvalidNodeOpId** = ``2``

The Node Operational ID in the NOC is not formatted correctly.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:344

___

### InvalidPublicKey

• **InvalidPublicKey** = ``1``

Public Key in the NOC does not match the public key in the NOCSR

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:340

___

### LabelConflict

• **LabelConflict** = ``10``

Label already exists on another Fabric.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:368

___

### MissingCsr

• **MissingCsr** = ``4``

No record of prior CSR for which this NOC could match

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:352

___

### Ok

• **Ok** = ``0``

OK, no error

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:336

___

### TableFull

• **TableFull** = ``5``

NOCs table full, cannot add another one

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OperationalCredentialsCluster.d.ts:356
