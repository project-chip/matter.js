[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / FaultInjection

# Namespace: FaultInjection

## Index

### Enumerations

- [FaultType](enumerations/FaultType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [FailAtFaultRequest](interfaces/FailAtFaultRequest.md)
- [FailRandomlyAtFaultRequest](interfaces/FailRandomlyAtFaultRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:75

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.failAtFault

> `readonly` **failAtFault**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### commands.failRandomlyAtFault

> `readonly` **failRandomlyAtFault**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### id

> `readonly` **id**: `4294048774`

##### name

> `readonly` **name**: `"FaultInjection"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:50

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:78

***

### TlvFailAtFaultRequest

> `const` **TlvFailAtFaultRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the FaultInjection failAtFault command

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:22

***

### TlvFailRandomlyAtFaultRequest

> `const` **TlvFailRandomlyAtFaultRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the FaultInjection failRandomlyAtFault command

#### Source

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:37
