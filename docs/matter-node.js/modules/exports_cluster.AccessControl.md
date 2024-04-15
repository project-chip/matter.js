[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AccessControl

# Namespace: AccessControl

[exports/cluster](exports_cluster.md).AccessControl

## Table of contents

### Enumerations

- [AccessControlEntryAuthMode](../enums/exports_cluster.AccessControl.AccessControlEntryAuthMode.md)
- [AccessControlEntryPrivilege](../enums/exports_cluster.AccessControl.AccessControlEntryPrivilege.md)
- [ChangeType](../enums/exports_cluster.AccessControl.ChangeType.md)

### Interfaces

- [AccessControlEntryChangedEvent](../interfaces/exports_cluster.AccessControl.AccessControlEntryChangedEvent.md)
- [AccessControlEntryStruct](../interfaces/exports_cluster.AccessControl.AccessControlEntryStruct.md)
- [AccessControlExtensionChangedEvent](../interfaces/exports_cluster.AccessControl.AccessControlExtensionChangedEvent.md)
- [AccessControlExtensionStruct](../interfaces/exports_cluster.AccessControl.AccessControlExtensionStruct.md)
- [AccessControlTargetStruct](../interfaces/exports_cluster.AccessControl.AccessControlTargetStruct.md)
- [Cluster](../interfaces/exports_cluster.AccessControl.Cluster.md)

### Variables

- [Cluster](exports_cluster.AccessControl.md#cluster)
- [ClusterInstance](exports_cluster.AccessControl.md#clusterinstance)
- [Complete](exports_cluster.AccessControl.md#complete)
- [TlvAccessControlEntryChangedEvent](exports_cluster.AccessControl.md#tlvaccesscontrolentrychangedevent)
- [TlvAccessControlEntryStruct](exports_cluster.AccessControl.md#tlvaccesscontrolentrystruct)
- [TlvAccessControlExtensionChangedEvent](exports_cluster.AccessControl.md#tlvaccesscontrolextensionchangedevent)
- [TlvAccessControlExtensionStruct](exports_cluster.AccessControl.md#tlvaccesscontrolextensionstruct)
- [TlvAccessControlTargetStruct](exports_cluster.AccessControl.md#tlvaccesscontroltargetstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.AccessControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:808

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:810

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `accessControlEntriesPerFabric`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `acl`: [`WritableFabricScopedAttribute`](../interfaces/exports_cluster.WritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `extension`: [`OptionalWritableFabricScopedAttribute`](../interfaces/exports_cluster.OptionalWritableFabricScopedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `subjectsPerAccessControlEntry`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `targetsPerAccessControlEntry`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number`, `any`\>  } ; `events`: \{ `accessControlEntryChanged`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `accessControlExtensionChanged`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``31`` ; `name`: ``"AccessControl"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.AccessControl.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:415

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.AccessControl.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:811

___

### TlvAccessControlEntryChangedEvent

• `Const` **TlvAccessControlEntryChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the AccessControl accessControlEntryChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:236

___

### TlvAccessControlEntryStruct

• `Const` **TlvAccessControlEntryStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 9.10.4.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:86

___

### TlvAccessControlExtensionChangedEvent

• `Const` **TlvAccessControlExtensionChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the AccessControl accessControlExtensionChanged event

**`See`**

MatterSpecification.v11.Core § 9.10.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:382

___

### TlvAccessControlExtensionStruct

• `Const` **TlvAccessControlExtensionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 9.10.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:192

___

### TlvAccessControlTargetStruct

• `Const` **TlvAccessControlTargetStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

**`See`**

MatterSpecification.v11.Core § 9.10.4.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccessControlCluster.d.ts:73
