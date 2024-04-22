# Changing the directory to the Server folder at first. Run this code by clicking F5 in Visual Studio Code
$ModelsFolder = "Models";
$ControllersFolder = "Controllers";
$ControllersNamespace = "ReactAspNetApp.Server.Controllers";

# find all model names ending with Dto
$models = Get-ChildItem -Path $ModelsFolder -Filter *.cs;
# if out of controllers folder, create it
if (-not (Test-Path $ControllersFolder)) {
    New-Item -ItemType Directory -Path $ControllersFolder;
}
# call the controller generator for each model
foreach ($model in $models) {
    $modelName = $model.Name.Replace(".cs", "");
    $controllerName = $modelName + "Controller";
    # $controllerPath = $ControllersFolder + "\" + $controllerName + ".cs";
    dotnet-aspnet-codegenerator.exe controller -name $controllerName -m $modelName -dc ESGDBContext -api -outDir $ControllersFolder -namespace $ControllersNamespace -f --useDefaultLayout --referenceScriptLibraries;
}