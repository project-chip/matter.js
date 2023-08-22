[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / Parameter

# Enumeration: Parameter

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).Parameter

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.7.5.4

## Table of contents

### Enumeration Members

- [Actor](exports_cluster.ContentLauncher.Parameter.md#actor)
- [Channel](exports_cluster.ContentLauncher.Parameter.md#channel)
- [Character](exports_cluster.ContentLauncher.Parameter.md#character)
- [Director](exports_cluster.ContentLauncher.Parameter.md#director)
- [Event](exports_cluster.ContentLauncher.Parameter.md#event)
- [Franchise](exports_cluster.ContentLauncher.Parameter.md#franchise)
- [Genre](exports_cluster.ContentLauncher.Parameter.md#genre)
- [League](exports_cluster.ContentLauncher.Parameter.md#league)
- [Popularity](exports_cluster.ContentLauncher.Parameter.md#popularity)
- [Provider](exports_cluster.ContentLauncher.Parameter.md#provider)
- [Sport](exports_cluster.ContentLauncher.Parameter.md#sport)
- [SportsTeam](exports_cluster.ContentLauncher.Parameter.md#sportsteam)
- [Type](exports_cluster.ContentLauncher.Parameter.md#type)
- [Video](exports_cluster.ContentLauncher.Parameter.md#video)

## Enumeration Members

### Actor

• **Actor** = ``0``

Actor represents an actor credited in video media content; for example, “Gaby sHoffman”

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:746

___

### Channel

• **Channel** = ``1``

Channel represents the identifying data for a television channel; for example, "PBS"

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:750

___

### Character

• **Character** = ``2``

A character represented in video media content; for example, “Snow White”

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:754

___

### Director

• **Director** = ``3``

A director of the video media content; for example, “Spike Lee”

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:758

___

### Event

• **Event** = ``4``

An event is a reference to a type of event; examples would include sports, music, or other types of events.
For example, searching for "Football games" would search for a 'game' event entity and a 'football' sport
entity.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:764

___

### Franchise

• **Franchise** = ``5``

A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For
example, take the fictional franchise "Intergalactic Wars" which represents a collection of movie trilogies,
as well as animated and live action TV shows. This entity type was introduced to account for requests by
customers such as "Find Intergalactic Wars movies", which would search for all 'Intergalactic Wars' programs
of the MOVIE MediaType, rather than attempting to match to a single title.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:772

___

### Genre

• **Genre** = ``6``

Genre represents the genre of video media content such as action, drama or comedy.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:776

___

### League

• **League** = ``7``

League represents the categorical information for a sporting league; for example, "NCAA"

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:780

___

### Popularity

• **Popularity** = ``8``

Popularity indicates whether the user asks for popular content.

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:784

___

### Provider

• **Provider** = ``9``

The provider (MSP) the user wants this media to be played on; for example, "Netflix".

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:788

___

### Sport

• **Sport** = ``10``

Sport represents the categorical information of a sport; for example, football

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:792

___

### SportsTeam

• **SportsTeam** = ``11``

SportsTeam represents the categorical information of a professional sports team; for example, "University of
Washington Huskies"

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:797

___

### Type

• **Type** = ``12``

The type of content requested. Supported types are "Movie", "MovieSeries", "TVSeries", "TVSeason",
"TVEpisode", "SportsEvent", and "Video"

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:802

___

### Video

• **Video** = ``13``

Video represents the identifying data for a specific piece of video content; for example, "Manchester by the
Sea".

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/ContentLauncherCluster.d.ts:807
