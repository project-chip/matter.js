[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FaultInjection

# Namespace: FaultInjection

[exports/cluster](exports_cluster.md).FaultInjection

## Table of contents

### Enumerations

- [FaultType](../enums/exports_cluster.FaultInjection.FaultType.md)

### Variables

- [Cluster](exports_cluster.FaultInjection.md#cluster)
- [TlvFailAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailatfaultrequest)
- [TlvFailRandomlyAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailrandomlyatfaultrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `failAtFault`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, {}\>

Fault Injection

The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
fault in the system).

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FaultInjectionCluster.d.ts:40

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the FaultInjection failAtFault command

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FaultInjectionCluster.d.ts:19

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/FaultInjectionCluster.d.ts:29
