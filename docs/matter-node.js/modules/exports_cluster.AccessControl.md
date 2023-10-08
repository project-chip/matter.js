[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AccessControl

# Namespace: AccessControl

[exports/cluster](exports_cluster.md).AccessControl

## Table of contents

### Enumerations

- [AccessControlEntryAuthMode](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)
- [AccessControlEntryPrivilege](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)
- [ChangeType](../enums/exports_cluster.AccessControl.ChangeType.md)

### Variables

- [Cluster](exports_cluster.AccessControl.md#cluster)
- [TlvAccessControlEntryChangedEvent](exports_cluster.AccessControl.md#tlvaccesscontrolentrychangedevent)
- [TlvAccessControlEntryStruct](exports_cluster.AccessControl.md#tlvaccesscontrolentrystruct)
- [TlvAccessControlExtensionChangedEvent](exports_cluster.AccessControl.md#tlvaccesscontrolextensionchangedevent)
- [TlvAccessControlExtensionStruct](exports_cluster.AccessControl.md#tlvaccesscontrolextensionstruct)
- [TlvAccessControlTargetStruct](exports_cluster.AccessControl.md#tlvaccesscontroltargetstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `accessControlEntriesPerFabric`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](exports_cluster.md#writablefabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](exports_cluster.md#optionalwritablefabricscopedattribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](exports_cluster.md#fixedattribute)<`number`, `any`\>  } ; `events`: { `accessControlEntryChanged`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `accessControlExtensionChanged`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>

Access Control

The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which codifies the
rules used to manage and enforce Access Control for the Node’s endpoints and their associated cluster instances.
Access to this Access Control Cluster itself requires a special Administer privilege level, such that only Nodes
granted such privilege (hereafter termed "Administrators") can manage the Access Control Cluster.

The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be present on
any other Endpoint of any Node.

**`See`**

MatterCoreSpecificationV1_1 § 9.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:394

___

### TlvAccessControlEntryChangedEvent

• `Const` **TlvAccessControlEntryChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the AccessControl accessControlEntryChanged event

**`See`**

MatterCoreSpecificationV1_1 § 9.10.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:219

___

### TlvAccessControlEntryStruct

• `Const` **TlvAccessControlEntryStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 9.10.4.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:79

___

### TlvAccessControlExtensionChangedEvent

• `Const` **TlvAccessControlExtensionChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the AccessControl accessControlExtensionChanged event

**`See`**

MatterCoreSpecificationV1_1 § 9.10.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:358

___

### TlvAccessControlExtensionStruct

• `Const` **TlvAccessControlExtensionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 9.10.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:180

___

### TlvAccessControlTargetStruct

• `Const` **TlvAccessControlTargetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterCoreSpecificationV1_1 § 9.10.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:71
