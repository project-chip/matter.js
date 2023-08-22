[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / KeypadInput

# Namespace: KeypadInput

[exports/cluster](exports_cluster.md).KeypadInput

## Table of contents

### Enumerations

- [CecKeyCode](../enums/exports_cluster.KeypadInput.CecKeyCode.md)
- [Feature](../enums/exports_cluster.KeypadInput.Feature.md)
- [Status](../enums/exports_cluster.KeypadInput.Status.md)

### Type Aliases

- [Extension](exports_cluster.KeypadInput.md#extension)

### Variables

- [Base](exports_cluster.KeypadInput.md#base)
- [Cluster](exports_cluster.KeypadInput.md#cluster)
- [TlvSendKeyRequest](exports_cluster.KeypadInput.md#tlvsendkeyrequest)
- [TlvSendKeyResponse](exports_cluster.KeypadInput.md#tlvsendkeyresponse)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](exports_cluster.md#clusterforbasecluster)<typeof [`Base`](exports_cluster.KeypadInput.md#base), `SF`\> & { `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/KeypadInputCluster.d.ts:327

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](exports_cluster.md#baseclustercomponent)<{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag-1) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), { `sendKey`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md)\>

These elements and properties are present in all KeypadInput clusters.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/KeypadInputCluster.d.ts:169

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](exports_cluster.md#extensiblecluster)<{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag-1) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag-1) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag-1)  }\>, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `sendKey`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }, [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/cluster/Cluster"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_cluster_Cluster_.md), <T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.KeypadInput.md#extension)<[`BitFlags`](exports_schema.md#bitflags)<{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag-1) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag-1) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag-1)  }, `T`\>\>\>

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/KeypadInputCluster.d.ts:225

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the KeypadInput sendKey command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8.3.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/KeypadInputCluster.d.ts:103

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This command shall be generated in response to a SendKey command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8.3.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/KeypadInputCluster.d.ts:133
