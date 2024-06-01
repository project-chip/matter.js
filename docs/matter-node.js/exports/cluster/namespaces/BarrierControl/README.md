[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / BarrierControl

# Namespace: BarrierControl

## Index

### Interfaces

- [BarrierControlGoToPercentRequest](interfaces/BarrierControlGoToPercentRequest.md)
- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:54

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.barrierCapabilities

> `readonly` **barrierCapabilities**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCloseEvents

> `readonly` **barrierCloseEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierClosePeriod

> `readonly` **barrierClosePeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCommandCloseEvents

> `readonly` **barrierCommandCloseEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierCommandOpenEvents

> `readonly` **barrierCommandOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierMovingState

> `readonly` **barrierMovingState**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierOpenEvents

> `readonly` **barrierOpenEvents**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierOpenPeriod

> `readonly` **barrierOpenPeriod**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierPosition

> `readonly` **barrierPosition**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.barrierSafetyStatus

> `readonly` **barrierSafetyStatus**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.barrierControlGoToPercent

> `readonly` **barrierControlGoToPercent**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### commands.barrierControlStop

> `readonly` **barrierControlStop**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

##### id

> `readonly` **id**: `259`

##### name

> `readonly` **name**: `"BarrierControl"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:26

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:57

***

### TlvBarrierControlGoToPercentRequest

> `const` **TlvBarrierControlGoToPercentRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the BarrierControl barrierControlGoToPercent command

#### Source

packages/matter.js/dist/esm/cluster/definitions/BarrierControlCluster.d.ts:15
