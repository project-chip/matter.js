// Window-shade bridge on the legacy matter.js 0.9.5 API. Generates the converter test fixture; see ../test/fixtures/README.md.
// Usage: node legacy-shade-bridge.mjs -store <dir> [-port 5540] [-netinterface en0] [-removed] [-move]
//   -removed  leaves out shade 401 so its EndpointStructure entry becomes stale
//   -move     sets positions and light state, which the legacy API persists

import "@project-chip/matter-node.js";
import { StorageBackendDisk, StorageManager } from "@project-chip/matter-node.js/storage";
import { getParameter, getIntParameter, hasParameter } from "@project-chip/matter-node.js/util";
import { CommissioningServer, MatterServer } from "@project-chip/matter.js";
import { VendorId } from "@project-chip/matter.js/datatype";
import {
    BridgedDeviceBasicInformationCluster,
    ClusterServer,
    Identify,
    IdentifyCluster,
    LevelControlCluster,
    OnOffCluster,
    WindowCovering,
    WindowCoveringCluster,
} from "@project-chip/matter.js/cluster";
import { Aggregator, ComposedDevice, Device, DeviceClasses, DeviceTypeDefinition } from "@project-chip/matter.js/device";

const storage = new StorageBackendDisk(getParameter("store") ?? ".legacy-hd");
const storageManager = new StorageManager(storage);
await storageManager.initialize();

const Feature = WindowCovering.Feature;

const SurfaceDtd = DeviceTypeDefinition({
    name: "Surface",
    code: 0x0202,
    deviceClass: DeviceClasses.Simple,
    revision: 5,
    requiredServerClusters: [WindowCoveringCluster.id],
});
const ShadeDtd = DeviceTypeDefinition({
    name: "Shade",
    code: 0x0202,
    deviceClass: DeviceClasses.Composed,
    revision: 5,
    requiredServerClusters: [IdentifyCluster.id, BridgedDeviceBasicInformationCluster.id],
});
const AuraDtd = DeviceTypeDefinition({
    name: "AuraLedDevice",
    code: 0x0101,
    deviceClass: DeviceClasses.Simple,
    revision: 2,
    requiredServerClusters: [OnOffCluster.id, LevelControlCluster.id],
});

const noop = () => {};
const wcHandlers = {
    upOrOpen: noop,
    downOrClose: noop,
    stopMotion: noop,
    goToLiftPercentage: noop,
    goToTiltPercentage: noop,
};

function surface(liftAndTilt) {
    const cluster = liftAndTilt
        ? WindowCoveringCluster.with(Feature.Lift, Feature.Tilt, Feature.PositionAwareLift, Feature.PositionAwareTilt)
        : WindowCoveringCluster.with(Feature.Lift, Feature.PositionAwareLift);
    const server = ClusterServer(
        cluster,
        {
            configStatus: {
                operational: true,
                onlineReserved: false,
                liftMovementReversed: false,
                liftPositionAware: true,
                tiltPositionAware: liftAndTilt,
                liftEncoderControlled: true,
                tiltEncoderControlled: liftAndTilt,
            },
            endProductType: WindowCovering.EndProductType.RollerShade,
            mode: { motorDirectionReversed: false, calibrationMode: false, maintenanceMode: false, ledFeedback: false },
            operationalStatus: { global: 0, lift: 0, tilt: 0 },
            type: liftAndTilt ? WindowCovering.WindowCoveringType.TiltBlindLift : WindowCovering.WindowCoveringType.Rollershade,
            currentPositionLiftPercent100ths: 0,
            targetPositionLiftPercent100ths: 0,
            ...(liftAndTilt ? { currentPositionTiltPercent100ths: 0, targetPositionTiltPercent100ths: 0 } : {}),
        },
        wcHandlers,
    );
    const device = new Device(SurfaceDtd);
    device.addClusterServer(server);
    return { device, server };
}

function aura() {
    const onOff = ClusterServer(
        OnOffCluster.with("LevelControlForLighting"),
        { onOff: false, globalSceneControl: false, onTime: 0, offWaitTime: 0, startUpOnOff: null },
        { on: noop, off: noop, toggle: noop, offWithEffect: noop, onWithRecallGlobalScene: noop, onWithTimedOff: noop },
    );
    const level = ClusterServer(
        LevelControlCluster.with("OnOff", "Lighting"),
        {
            currentLevel: 1,
            onLevel: 100,
            options: { executeIfOff: true, coupleColorTempToLevel: true },
            minLevel: 1,
            maxLevel: 254,
            remainingTime: 0,
            startUpCurrentLevel: null,
        },
        {
            moveToLevel: noop,
            move: noop,
            step: noop,
            stop: noop,
            moveToLevelWithOnOff: noop,
            moveWithOnOff: noop,
            stepWithOnOff: noop,
            stopWithOnOff: noop,
        },
    );
    const device = new Device(AuraDtd);
    device.addClusterServer(onOff);
    device.addClusterServer(level);
    return { device, onOff, level };
}

// Child order: primary, then secondary, then aura.
const shades = [
    { id: 119, bleName: "DUE:7E2E", name: "Duette Living", secondary: true, aura: false, liftAndTilt: false },
    { id: 274, bleName: "AUR:2810", name: "Aura Bedroom", secondary: true, aura: true, liftAndTilt: false },
    { id: 209, bleName: "PIR:4E4D", name: "Pirouette Kitchen", secondary: false, aura: false, liftAndTilt: true },
    { id: 350, bleName: "ROL:41EF", name: "Roller Office", secondary: false, aura: true, liftAndTilt: false },
    { id: 401, bleName: "DUE:AB29", name: "Duette Removed", secondary: true, aura: false, liftAndTilt: false },
    { id: 162, bleName: "DUE:1460", name: "Duette Untouched", secondary: true, aura: false, liftAndTilt: false },
];

const aggregator = new Aggregator();
const servers = new Map();
for (const shade of shades) {
    if (shade.id === 401 && hasParameter("removed")) continue;
    const composed = new ComposedDevice(ShadeDtd);
    composed.addClusterServer(
        ClusterServer(
            BridgedDeviceBasicInformationCluster,
            {
                reachable: true,
                serialNumber: shade.bleName,
                vendorName: "Shade vendor",
                productName: "Shade",
                uniqueId: `${shade.bleName}:${shade.id}`,
                softwareVersionString: "1.0.0",
                manufacturingDate: "20220101",
                nodeLabel: shade.name,
            },
            {},
            { reachableChanged: true },
        ),
    );
    composed.addClusterServer(
        ClusterServer(IdentifyCluster, { identifyTime: 0, identifyType: Identify.IdentifyType.None }, { identify: noop }),
    );
    const primary = surface(shade.liftAndTilt);
    composed.addDevice(primary.device);
    const entry = { primary };
    if (shade.secondary) {
        entry.secondary = surface(false);
        composed.addDevice(entry.secondary.device);
    }
    if (shade.aura) {
        entry.aura = aura();
        composed.addDevice(entry.aura.device);
    }
    servers.set(shade.id, entry);
    aggregator.addBridgedDevice(composed);
}

const commissioningServer = new CommissioningServer({
    port: getIntParameter("port") ?? 5540,
    deviceName: "HD Fixture Bridge",
    deviceType: 0x000e,
    passcode: 20202021,
    discriminator: 3001,
    basicInformation: {
        vendorName: "matter.js fixture",
        vendorId: VendorId(0xfff1),
        nodeLabel: "HD Fixture Bridge",
        productName: "HD Fixture Bridge",
        productLabel: "HD Fixture Bridge",
        productId: 0x8000,
        serialNumber: "fixture0123456789",
    },
});
commissioningServer.addDevice(aggregator);

const matterServer = new MatterServer(storageManager, { mdnsInterface: getParameter("netinterface") });
await matterServer.addCommissioningServer(commissioningServer);
await matterServer.start();

if (!commissioningServer.isCommissioned()) {
    const { manualPairingCode } = commissioningServer.getPairingCode();
    console.log(`Manual pairing code: ${manualPairingCode}`);
} else {
    console.log("Device is already commissioned.");
    if (hasParameter("move")) {
        // setLocal() is how a bridge reports device changes; the legacy API persists the new values.
        // Shade 162 is left untouched so its secondary surface keeps no stored cluster data.
        servers.get(119).primary.server.attributes.currentPositionLiftPercent100ths.setLocal(2500);
        servers.get(119).secondary.server.attributes.currentPositionLiftPercent100ths.setLocal(7500);
        servers.get(274).primary.server.attributes.currentPositionLiftPercent100ths.setLocal(1000);
        servers.get(274).secondary.server.attributes.currentPositionLiftPercent100ths.setLocal(9000);
        servers.get(274).aura.onOff.attributes.onOff.setLocal(true);
        servers.get(274).aura.level.attributes.currentLevel.setLocal(200);
        servers.get(209).primary.server.attributes.currentPositionLiftPercent100ths.setLocal(5000);
        servers.get(209).primary.server.attributes.currentPositionTiltPercent100ths.setLocal(3000);
        servers.get(350).aura.onOff.attributes.onOff.setLocal(true);
        servers.get(350).aura.level.attributes.currentLevel.setLocal(77);
        console.log("Positions and light state set.");
    }
}

process.on("SIGINT", async () => {
    await matterServer.close();
    await storage.close();
    process.exit(0);
});
