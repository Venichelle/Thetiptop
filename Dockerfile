FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN mkdir src
COPY ./API ./src/
COPY . ./src/
RUN ls src
RUN ls src/API
WORKDIR /src

RUN dotnet restore "./API.csproj"
WORKDIR /src/TestThetiptop
RUN ls /src/TestThetiptop
RUN dotnet restore "./TestThetiptop.csproj"
