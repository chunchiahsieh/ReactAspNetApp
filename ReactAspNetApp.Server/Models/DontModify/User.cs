#pragma warning disable CS8618
namespace ReactAspNetApp.Server.Models
{
    using System;
    using System.Collections.Generic;

    using System.Text.Json;
    using System.Text.Json.Serialization;
    using System.Globalization;

    public partial class User
    {
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonPropertyName("Avatar")]
        public string Avatar { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonPropertyName("Email")]
        public string Email { get; set; }

        [JsonPropertyName("Name")]
        public string Name { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonPropertyName("Password")]
        [JsonConverter(typeof(MinMaxLengthCheckConverter))]
        public string Password { get; set; }
    }
}
#pragma warning restore CS8618