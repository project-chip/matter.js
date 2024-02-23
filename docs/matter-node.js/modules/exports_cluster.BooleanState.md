[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / BooleanState

# Namespace: BooleanState

[exports/cluster](exports_cluster.md).BooleanState

## Table of contents

### Variables

- [Cluster](exports_cluster.BooleanState.md#cluster)
- [TlvStateChangeEvent](exports_cluster.BooleanState.md#tlvstatechangeevent)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `stateValue`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  } ; `events`: \{ `stateChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``69`` ; `name`: ``"BooleanState"`` ; `revision`: ``1``  }\>

Boolean State

This cluster provides an interface to a boolean state called StateValue.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:25

___

### TlvStateChangeEvent

• `Const` **TlvStateChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the BooleanState stateChange event

**`See`**

MatterApplicationClusterSpecificationV1_1 § 1.7.5.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/BooleanStateCluster.d.ts:15
