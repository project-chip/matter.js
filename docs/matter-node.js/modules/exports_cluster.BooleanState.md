[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BooleanState

# Namespace: BooleanState

[exports/cluster](exports_cluster.md).BooleanState

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.BooleanState.Cluster.md)
- [StateChangeEvent](../interfaces/exports_cluster.BooleanState.StateChangeEvent.md)

### Variables

- [Cluster](exports_cluster.BooleanState.md#cluster)
- [ClusterInstance](exports_cluster.BooleanState.md#clusterinstance)
- [Complete](exports_cluster.BooleanState.md#complete)
- [TlvStateChangeEvent](exports_cluster.BooleanState.md#tlvstatechangeevent)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.BooleanState.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:62

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:64

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``69`` ; `name`: ``"BooleanState"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.BooleanState.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:30

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.BooleanState.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:65

___

### TlvStateChangeEvent

• `Const` **TlvStateChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BooleanState stateChange event

**`See`**

MatterSpecification.v11.Cluster § 1.7.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:17
