[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / AnnouncementReason

# Enumeration: AnnouncementReason

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).AnnouncementReason

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.4.1

## Table of contents

### Enumeration Members

- [SimpleAnnouncement](cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md#simpleannouncement)
- [UpdateAvailable](cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md#updateavailable)
- [UrgentUpdateAvailable](cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md#urgentupdateavailable)

## Enumeration Members

### SimpleAnnouncement

• **SimpleAnnouncement** = ``0``

An OTA Provider is announcing its presence.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:100](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L100)

___

### UpdateAvailable

• **UpdateAvailable** = ``1``

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:106](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L106)

___

### UrgentUpdateAvailable

• **UrgentUpdateAvailable** = ``2``

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available, which contains an update that needs to be applied urgently.

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L112)
