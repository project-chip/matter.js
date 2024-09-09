FROM ubuntu:22.04

SHELL ["/bin/bash", "-c"]

RUN apt-get -qq update
RUN apt-get -qq -y install git gcc g++ pkg-config libssl-dev libdbus-1-dev libglib2.0-dev libavahi-client-dev ninja-build \
    python3-venv python3-dev python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev

RUN git clone --depth=1 https://github.com/project-chip/connectedhomeip.git
WORKDIR /connectedhomeip
RUN ./scripts/checkout_submodules.py --shallow --platform linux

RUN source scripts/activate.sh
RUN source scripts/activate.sh && gn gen out/host && ninja -C out/host

RUN apt-get -qq -y install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN source ~/.nvm/nvm.sh && nvm install 20

RUN apt-get -qq -y install iproute2

WORKDIR /
ADD run-tests.sh .
RUN chmod a+x run-tests.sh

ENTRYPOINT /run-tests.sh
