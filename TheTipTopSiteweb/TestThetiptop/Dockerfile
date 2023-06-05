FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /app
COPY *.sln .
COPY ./API.csproj ./
COPY ./TestThetiptop.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet build
FROM build AS testrunner
WORKDIR /app/test/Example.Service.UnitTest
CMD ["dotnet", "test", "--logger:trx"]
FROM build AS test
WORKDIR /app/test/Example.Service.UnitTest
RUN dotnet test --logger:trx