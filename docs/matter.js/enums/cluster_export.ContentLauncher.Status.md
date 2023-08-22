[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ContentLauncher](../modules/cluster_export.ContentLauncher.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[ContentLauncher](../modules/cluster_export.ContentLauncher.md).Status

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.7.5.1

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

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:236](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L236)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:226](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L226)

___

### UrlNotAvailable

• **UrlNotAvailable** = ``1``

Requested URL could not be reached by device.

#### Defined in

[packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts:231](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ContentLauncherCluster.ts#L231)
