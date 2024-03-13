# How to use Thread based devices with matter.js Controller/Shell

Beside Wi-Fi and Ethernet the Thread protocol ids the third main communication protocol for Matter devices.

Thread is a low-power, wireless mesh networking protocol that enables secure, scalable, and reliable communication among IoT devices. It is designed to support a wide variety of IoT devices in the home, including appliances, access points, sensors, and other devices. Thread is a mesh network, meaning that all Thread devices can communicate with each other, and that the network can be extended by simply adding more Thread devices. 

In order to bring Thread devices into an operational IP based network a Thread Border Router (TBR) is required. The TBR is the device that bridges the Thread network to the IP network. The TBR is responsible for routing Thread packets to the IP network and vice versa. The TBR is also responsible for providing the Thread network with access to the internet.

TBRs are available as standalone devices or as part of a larger device, such as a smart home hub or a Wi-Fi router. Please refer to the hub informations in the [README](README.md) to check if your hub is supporting Thread. The thread networks from Apple or google for instance are known to work very stable. Alternatively you can use a Raspberry Pi or a VM with a Thread USB stick/module as a [OpenThread Border Router](https://openthread.io) router (see below).

Ideally you should have all your devices in the same Thread network. This is not a must, but it is the most optimal way because in case of groups or the use of bindings (direct device connections) the devices can communicate directly to each other over thread and no data needs to be converted to IP stack.

## How to gather Thread credentials needed for device commissioning?
Depending on the hub you have you have, and until new (upcoming) Thread credential sharing options have hit the market, you basically have two options to connect the device with the thread network.

The way that always works is to use the hub to commission the device. The hub will then provide the device with the necessary credentials to join the Thread network. The device will then be able to communicate with the hub and the hub will be able to communicate with the device. The hub will also be able to communicate with the device using the IP network.
This means you pair the device with e.g. Apple, Google or Amazon first - which brings the device into the operational IP network - and then you pair matter.js as a secondary controller to the device. You could then delete the first controller from the device and the device should stay in the Thread network.

Alternatively you can use a "trick" with a matter.js test device to gather the thread credentials.

### Using Apple/Google hub
You require a Raspberry Pi where you installed the matter-node.js-examples package and BLE is available (Other machines are also possible, but here BLE might get tricky). Then you use the DeviceFull example with these parameters:

```
node node_modules/@project-chip/matter-node.js-examples/dist/esm/examples/DeviceNodeFull.js --storage-path=.thread --ble-enable --ble-thread-fake --passcode=20202021 --discriminator=1234
```
(In case of issues with BLE or such and you need to redo the pairing just slightly change passcode or discriminator parameter.)

With this command the matter.js example starts up a simple "on off" device which is reachable via BLE for commissioning. Now use your mobile device with Apple/Google Home app to add a new device. The app will then ask you to scan the QR code from the matter.js example. The app will then commission the device and you can see the thread credentials in the console of the matter.js example. Search the log for "---> addOrUpdateThreadNetwork called on NetworkCommissioning cluster: ..." to get the operational credentials (hex string). Now you can remove the device again from the Apple/Google home because we have what we need.

Additional to the operational credentials we need the thread network name. You can get this by using `avahi-browse _meshcop._udp -r` (or `dns-sd -B _meshcop._udp local` and from results `dns-sd -L "Apple BorderRouter #xxxx" _meshcop._udp local`, there it is the "nn=" name) on the CLI of your device to scan in the network for thread border routers.

### Using Amazon hub
With amazon the process ist comparable to the one above, but we need to provide more details because Amazon is not just adding the Thread network to the device, but beforehand requests the device to scan for available thread networks and expects to find "his network" in the returned list.
So for Amazon you need to have an own OTBR setup with a proper USB strick in order to scan the thread network for other networks to gain important parameters.
On the OTBR host use `sudo ot-ctl discover` to scan for thread networks and select the one where the name starts with "AMZN". With this you get the "PAN", the "Extended PAN", the "Ch(annel)" band also the "MAC Address". 

Using these data as additional parameters your start command for the device looks like

```
node node_modules/@project-chip/matter-node.js-examples/dist/esm/examples/DeviceNodeFull.js --storage-path=.thread --ble-enable --ble-thread-fake --passcode=20202438 --discriminator=1248 --ble-thread-panid=XXXX --ble-thread-extendedpanid=XXXXXXXXX --ble-thread-networkname=AMZN-Thread-XXXX --ble-thread-channel=XX --ble-thread-address=XXXXXXXXXXX
```

When Amazon now sends the scan command the device returns this  network as found one and also amazon will be able to add the device to the network and provide you with the operational credentials in the log at line "---> addOrUpdateThreadNetwork called on NetworkCommissioning cluster: ..." as hex-string.

### With an Own OTBR
When you hve setup your own OTBR (see sections below) you defined the network name yourself and can get the operational credential using `sudo ot-ctl dataset active -x` on the OTBR host.

### Configure matter.js Shell with the details

After you gained the thread credentials you configure them into the matter.js Shell app by using `config thread-credentials set NetworkName OperationalCredentialsString` in the app. Then any thread device that is commissioned with the matter.js shell using BLE will be added to this thread network. 

## How to setup an own OTBR
In fact this is a two part topic ... YOu need a proper USB stick with an OTBR firmware on it and secondly a host to install the OTBR software on where the USB stick os connected to.

### OTBR USB Stick
I personally used an [nRF52840 USB Key with TinyUF2 Bootloader - Bluetooth Low Energy - MDBT50Q-RX](https://www.adafruit.com/product/5199) because especially the flashing part was easy.

You need to build the firmware using https://developer.nordicsemi.com/nRF_Connect_SDK/doc/1.9.99-dev1/matter/openthread_rcp_nrf_dongle.html and flash it to the stick. Then flash the firmware to the USB stick (for the above USB strick it is just to copy the file to the USB stick after plugging it with pressed Reset button).

### Install OTBR on a host
You can use a Raspberry Pi or a VM or theoretically also DOcker to install the OTBR software on. Just follow https://openthread.io/guides/border-router/build#install-otbr

Then you [Form a Thread Network](https://openthread.io/guides/border-router/web-gui#form_a_thread_network).
