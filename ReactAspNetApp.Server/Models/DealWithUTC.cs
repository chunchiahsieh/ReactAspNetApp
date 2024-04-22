using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ReactAspNetApp.Server.Models;

public partial class ESGDBContext : DbContext
{
    protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
    {
        configurationBuilder
        .Properties<DateTime>()
        .HaveConversion(typeof(UtcValueConverter));

        base.ConfigureConventions(configurationBuilder);
    }

    public static void AdjustDateTimeToUTC<T>(IEnumerable<T> entities, int? hourOffset) where T : class
    {
        if (entities == null || !entities.Any() || !hourOffset.HasValue)
        {
            return;
        }
        foreach (var entity in entities)
        {
            AdjustDateTimeToUTC(entity, hourOffset);
        }
    }

    private static void AdjustDateTimeToUTC<T>(T entity, int? hourOffset) where T : class
    {
        if (hourOffset.HasValue)
        {
            var properties = entity.GetType().GetProperties().Where(p => p.PropertyType == typeof(DateTime) || p.PropertyType == typeof(DateTime?));
            foreach (var property in properties)
            {
                var currentValue = property.GetValue(entity) as DateTime?;
                if (currentValue.HasValue)
                {
                    var adjustDateTime = currentValue.Value.AddHours(-hourOffset.Value);
                    adjustDateTime = DateTime.SpecifyKind(adjustDateTime, DateTimeKind.Utc);
                    property.SetValue(entity, adjustDateTime);
                }
            }
        }
    }
}

internal class UtcValueConverter() :
    ValueConverter<DateTime, DateTime>(v => DateTime.SpecifyKind(v, DateTimeKind.Utc), v => v)
{
}

