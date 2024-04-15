[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).Status

**`See`**

MatterSpecification.v11.Cluster § 6.7.5.1

## Table of contents

### Enumeration Members

- [AuthFailed](cluster_export.ContentLauncher.Status.md#authfailed)
- [Success](cluster_export.ContentLauncher.Status.md#success)
- [UrlNotAvailable](cluster_export.ContentLauncher.Status.md#urlnotavailable)

## Enumeration Members

### AuthFailed

• **AuthFailed** = ``2``

Requested URL returned 401 error code.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L263)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:253](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L253)

___

### UrlNotAvailable

• **UrlNotAvailable** = ``1``

Requested URL could not be reached by device.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:258](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L258)
