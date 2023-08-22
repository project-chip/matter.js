[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / AnnouncementReason

# Enumeration: AnnouncementReason

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).AnnouncementReason

**`See`**

MatterCoreSpecificationV1_1 § 11.19.7.4.1

## Table of contents

### Enumeration Members

- [SimpleAnnouncement](exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md#simpleannouncement)
- [UpdateAvailable](exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md#updateavailable)
- [UrgentUpdateAvailable](exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md#urgentupdateavailable)

## Enumeration Members

### SimpleAnnouncement

• **SimpleAnnouncement** = ``0``

An OTA Provider is announcing its presence.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:67

___

### UpdateAvailable

• **UpdateAvailable** = ``1``

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:72

___

### UrgentUpdateAvailable

• **UrgentUpdateAvailable** = ``2``

An OTA Provider is announcing, either to a single Node or to a group of Nodes, that a new Software Image MAY
be available, which contains an update that needs to be applied urgently.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:77
