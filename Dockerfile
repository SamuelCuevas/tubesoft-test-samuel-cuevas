# Sample Dockerfile

# Indicates that the windowsservercore image will be used as the base image.
FROM samuelcuevas/tubesoft-test-samuel-cuevas

# Metadata indicating an image maintainer.
LABEL maintainer="samuel.cuevas.dev@gmail.com"

# Uses dism.exe to install the IIS role.
RUN dism.exe /online /enable-feature /all /featurename:iis-webserver /NoRestart

# Creates an HTML file and adds content to this file.
RUN echo "Hello World - Dockerfile" > samuelcuevas-tubesoft-test-samuel-cuevas

# Sets a command or process that will run each time a container is run from the new image.
CMD [ "cmd" ]