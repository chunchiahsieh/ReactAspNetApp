using ReactAspNetApp.Server.Models;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.SwaggerUI;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// For SQL Server
builder.Services.AddDbContext<ESGDBContext>(options =>
   options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// For AutoMapper
builder.Services.AddAutoMapper(
    typeof(CreateDTO2SmCountryProfile),
    typeof(CreateDTO2SmOrgGroupProfile),
    typeof(CreateDTOSmCityProfile),
    typeof(CreateDTO2SmUserProfile), 
    typeof(UpdateDTOSmCountryProfile),
    typeof(UpdateDTO2SmOrgGroupProfile),
    typeof(UpdateDTOSmCityProfile),
    typeof(SmUser2RawDTOProfile),
    typeof(SmUserRawDTO2SmUserProfile),
    typeof(SmOrgGroup2ReadDTOProfile),
    typeof(UpdateDTO2SmUserProfile),
    typeof(SmTextContent2UseProfile)

    //typeof(CreateDTO2SmEmissionFactorLibraryProfile),
    //typeof(SmEmissionFactorLibrary2ReadDTOProfile),
    //typeof(UpdateDTO2SmEmissionFactorLibraryProfile)
);


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c=> {
        c.DocumentTitle = "Swagger UI - ESG API";
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.DefaultModelExpandDepth(2);
        c.DocExpansion(DocExpansion.None);
        c.DefaultModelRendering(ModelRendering.Example);
        c.EnableTryItOutByDefault();
        c.ConfigObject.AdditionalItems.Add("syntaxHighlight", false);
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
