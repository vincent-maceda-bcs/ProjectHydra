FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY ProjectHydra/ProjectHydra.csproj ProjectHydra/
RUN dotnet restore ProjectHydra/ProjectHydra.csproj
COPY . .
WORKDIR /src/ProjectHydra
RUN dotnet build ProjectHydra.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish ProjectHydra.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ProjectHydra.dll"]
