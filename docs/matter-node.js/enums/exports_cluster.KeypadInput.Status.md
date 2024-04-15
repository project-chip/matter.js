[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [KeypadInput](../modules/exports_cluster.KeypadInput.md) / Status

# Enumeration: Status

[exports/cluster](../modules/exports_cluster.md).[KeypadInput](../modules/exports_cluster.KeypadInput.md).Status

**`See`**

MatterSpecification.v11.Cluster § 6.8.4.1

## Table of contents

### Enumeration Members

- [InvalidKeyInCurrentState](exports_cluster.KeypadInput.Status.md#invalidkeyincurrentstate)
- [Success](exports_cluster.KeypadInput.Status.md#success)
- [UnsupportedKey](exports_cluster.KeypadInput.Status.md#unsupportedkey)

## Enumeration Members

### InvalidKeyInCurrentState

• **InvalidKeyInCurrentState** = ``2``

Command failed: Requested key code is invalid in the context of the responder’s current state.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:136

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:128

___

### UnsupportedKey

• **UnsupportedKey** = ``1``

Command failed: Key code is not supported.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:132
