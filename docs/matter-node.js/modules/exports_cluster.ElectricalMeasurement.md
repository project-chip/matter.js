[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ElectricalMeasurement

# Namespace: ElectricalMeasurement

[exports/cluster](exports_cluster.md).ElectricalMeasurement

## Table of contents

### Variables

- [Cluster](exports_cluster.ElectricalMeasurement.md#cluster)
- [TlvGetMeasurementProfileCommandRequest](exports_cluster.ElectricalMeasurement.md#tlvgetmeasurementprofilecommandrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `getMeasurementProfileCommand`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `getProfileInfoCommand`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\>  }, {}\>

Electrical Measurement

Attributes related to the electrical properties of a device. This cluster is used by power outlets and other
devices that need to provide instantaneous data as opposed to metrology data which should be retrieved from the
metering cluster..

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ElectricalMeasurementCluster.d.ts:24

___

### TlvGetMeasurementProfileCommandRequest

• `Const` **TlvGetMeasurementProfileCommandRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the ElectricalMeasurement getMeasurementProfileCommand command

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ElectricalMeasurementCluster.d.ts:12
