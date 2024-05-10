using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ReactAspNetApp.Server.Models;

public partial class ESGDBContext : DbContext
{
    public ESGDBContext()
    {
    }

    public ESGDBContext(DbContextOptions<ESGDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AccessToken> AccessTokens { get; set; }

    public virtual DbSet<AspNetRole> AspNetRoles { get; set; }

    public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; }

    public virtual DbSet<AspNetUser> AspNetUsers { get; set; }

    public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }

    public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }

    public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; }

    public virtual DbSet<BdcArVersion> BdcArVersions { get; set; }

    public virtual DbSet<BdcFacility> BdcFacilities { get; set; }

    public virtual DbSet<BdcGreenhouseGa> BdcGreenhouseGas { get; set; }

    public virtual DbSet<BdcOrgGroupProfile> BdcOrgGroupProfiles { get; set; }

    public virtual DbSet<BdcOrgUnit> BdcOrgUnits { get; set; }

    public virtual DbSet<BdcReportingPeriod> BdcReportingPeriods { get; set; }

    public virtual DbSet<BdcReportingYear> BdcReportingYears { get; set; }

    public virtual DbSet<BdcTransportationDistance> BdcTransportationDistances { get; set; }

    public virtual DbSet<BdcUnit> BdcUnits { get; set; }

    public virtual DbSet<BdcUnitLibrary> BdcUnitLibraries { get; set; }

    public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

    public virtual DbSet<SmChoice> SmChoices { get; set; }

    public virtual DbSet<SmCity> SmCities { get; set; }

    public virtual DbSet<SmCountry> SmCountries { get; set; }

    public virtual DbSet<SmEmissionFactor> SmEmissionFactors { get; set; }

    public virtual DbSet<SmEmissionFactorLibrary> SmEmissionFactorLibraries { get; set; }

    public virtual DbSet<SmFunctionModule> SmFunctionModules { get; set; }

    public virtual DbSet<SmLanguage> SmLanguages { get; set; }

    public virtual DbSet<SmOrgGroup> SmOrgGroups { get; set; }

    public virtual DbSet<SmPermission> SmPermissions { get; set; }

    public virtual DbSet<SmRole> SmRoles { get; set; }

    public virtual DbSet<SmRolePermission> SmRolePermissions { get; set; }

    public virtual DbSet<SmTextContent> SmTextContents { get; set; }

    public virtual DbSet<SmUnitLibrary> SmUnitLibraries { get; set; }

    public virtual DbSet<SmUser> SmUsers { get; set; }

    public virtual DbSet<SmUserRole> SmUserRoles { get; set; }

    public virtual DbSet<Test> Tests { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=tcp:gsp-esg-dbserver.database.windows.net,1433;Database=esgdb;Uid=sysadmin;Pwd=123qwe!@#QWE;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AccessToken>(entity =>
        {
            entity.HasKey(e => e.AccessTokenId).HasName("PK__access_t__66E326F2D40C58AE");

            entity.ToTable("access_token", "auth");

            entity.Property(e => e.AccessTokenId)
                .ValueGeneratedNever()
                .HasColumnName("access_token_id");
            entity.Property(e => e.AccessToken1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("access_token");
            entity.Property(e => e.CreatedOn)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.ExpirationTime)
                .HasColumnType("datetime")
                .HasColumnName("expiration_time");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<AspNetRole>(entity =>
        {
            entity.ToTable("AspNetRoles", "auth");

            entity.Property(e => e.Name).HasMaxLength(256);
            entity.Property(e => e.NormalizedName).HasMaxLength(256);
        });

        modelBuilder.Entity<AspNetRoleClaim>(entity =>
        {
            entity.ToTable("AspNetRoleClaims", "auth");

            entity.Property(e => e.RoleId).HasMaxLength(450);

            entity.HasOne(d => d.Role).WithMany(p => p.AspNetRoleClaims).HasForeignKey(d => d.RoleId);
        });

        modelBuilder.Entity<AspNetUser>(entity =>
        {
            entity.ToTable("AspNetUsers", "auth");

            entity.Property(e => e.Email).HasMaxLength(256);
            entity.Property(e => e.NormalizedEmail).HasMaxLength(256);
            entity.Property(e => e.NormalizedUserName).HasMaxLength(256);
            entity.Property(e => e.UserName).HasMaxLength(256);

            entity.HasMany(d => d.Roles).WithMany(p => p.Users)
                .UsingEntity<Dictionary<string, object>>(
                    "AspNetUserRole",
                    r => r.HasOne<AspNetRole>().WithMany().HasForeignKey("RoleId"),
                    l => l.HasOne<AspNetUser>().WithMany().HasForeignKey("UserId"),
                    j =>
                    {
                        j.HasKey("UserId", "RoleId");
                        j.ToTable("AspNetUserRoles", "auth");
                    });
        });

        modelBuilder.Entity<AspNetUserClaim>(entity =>
        {
            entity.ToTable("AspNetUserClaims", "auth");

            entity.Property(e => e.UserId).HasMaxLength(450);

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserClaims).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AspNetUserLogin>(entity =>
        {
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

            entity.ToTable("AspNetUserLogins", "auth");

            entity.Property(e => e.UserId).HasMaxLength(450);

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserLogins).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AspNetUserToken>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

            entity.ToTable("AspNetUserTokens", "auth");

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserTokens).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<BdcArVersion>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.ArVersionName });

            entity.ToTable("bdc_ar_version");

            entity.HasIndex(e => e.ArVersionId, "UQ__bdc_ar_v__81A02312BCD43A95").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ArVersionName)
                .HasMaxLength(50)
                .HasColumnName("ar_version_name");
            entity.Property(e => e.ArVersionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ar_version_id");
            entity.Property(e => e.ConfiguartionType).HasColumnName("configuartion_type");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.DocRef)
                .HasMaxLength(255)
                .HasColumnName("doc_ref");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OriginCorrelationId)
                .HasMaxLength(50)
                .HasColumnName("origin_correlation_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.Version)
                .HasMaxLength(10)
                .HasColumnName("version");
            entity.Property(e => e.Year)
                .HasMaxLength(4)
                .HasColumnName("year");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcArVersionCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_ar_version_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcArVersionModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_ar_version_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcArVersions)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_ar_version_Tosm_org_group");
        });

        modelBuilder.Entity<BdcFacility>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.OrgUnitId, e.FacilityName }).HasName("PK__tmp_ms_x__8769BBC95DE09275");

            entity.ToTable("bdc_facility");

            entity.HasIndex(e => e.FacilityId, "UQ__tmp_ms_x__B2E8EAAF2F93AF9F").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgUnitId).HasColumnName("org_unit_id");
            entity.Property(e => e.FacilityName)
                .HasMaxLength(50)
                .HasColumnName("facility_name");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.FacilityId)
                .ValueGeneratedOnAdd()
                .HasColumnName("facility_id");
            entity.Property(e => e.FacilityType)
                .HasMaxLength(50)
                .HasColumnName("facility_type");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(10, 8)")
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(11, 8)")
                .HasColumnName("longitude");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .HasColumnName("zip/postal_code");

            entity.HasOne(d => d.City).WithMany(p => p.BdcFacilities)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_city");

            entity.HasOne(d => d.Country).WithMany(p => p.BdcFacilities)
                .HasPrincipalKey(p => p.CountryId)
                .HasForeignKey(d => d.CountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_country");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcFacilityCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcFacilityModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcFacilities)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_org_group");

            entity.HasOne(d => d.OrgUnit).WithMany(p => p.BdcFacilities)
                .HasPrincipalKey(p => p.OrgUnitId)
                .HasForeignKey(d => d.OrgUnitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_facility_Tosm_org_unit");
        });

        modelBuilder.Entity<BdcGreenhouseGa>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.ArVersionId, e.GreenhouseGasName });

            entity.ToTable("bdc_greenhouse_gas");

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ArVersionId).HasColumnName("ar_version_id");
            entity.Property(e => e.GreenhouseGasName)
                .HasMaxLength(50)
                .HasColumnName("greenhouse_gas_name");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CreatedById).HasColumnName("created_by_id");
            entity.Property(e => e.CreatedOn)
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.DocRef)
                .HasMaxLength(255)
                .HasColumnName("doc_ref");
            entity.Property(e => e.GhgCategory)
                .HasMaxLength(50)
                .HasColumnName("ghg_category");
            entity.Property(e => e.GreenhouseGasId).HasColumnName("greenhouse_gas_id");
            entity.Property(e => e.GwpFactor)
                .HasColumnType("decimal(8, 0)")
                .HasColumnName("gwp_factor");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.IsRegrigerantType).HasColumnName("is_regrigerant_type");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.MontrealProtocolStatus)
                .HasMaxLength(10)
                .HasColumnName("montreal_protocol_status");
            entity.Property(e => e.OriginCorrelationId)
                .HasMaxLength(50)
                .HasColumnName("origin_correlation_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.Version)
                .HasMaxLength(10)
                .HasColumnName("version");
            entity.Property(e => e.Year)
                .HasMaxLength(4)
                .HasColumnName("year");

            entity.HasOne(d => d.ArVersion).WithMany(p => p.BdcGreenhouseGas)
                .HasPrincipalKey(p => p.ArVersionId)
                .HasForeignKey(d => d.ArVersionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_greenhouse_gas_bdc_ar_version");

            entity.HasOne(d => d.CreatedBy).WithMany(p => p.BdcGreenhouseGaCreatedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreatedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_greenhouse_gas_sm_user_c");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcGreenhouseGaModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_greenhouse_gas_sm_user_m");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcGreenhouseGas)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_greenhouse_gas_sm_org_group");
        });

        modelBuilder.Entity<BdcOrgGroupProfile>(entity =>
        {
            entity.HasKey(e => e.OrgGroupProfileName).HasName("PK__sm_org_g__61670655656B6DB5");

            entity.ToTable("bdc_org_group_profile");

            entity.HasIndex(e => e.OrgGroupProfileId, "UQ_bdc_org_group_profile_id").IsUnique();

            entity.Property(e => e.OrgGroupProfileName)
                .HasMaxLength(50)
                .HasColumnName("org_group_profile_name");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .HasColumnName("business_registration_no");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(10, 8)")
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(11, 8)")
                .HasColumnName("longitude");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgGroupProfileId)
                .ValueGeneratedOnAdd()
                .HasColumnName("org_group_profile_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(50)
                .HasColumnName("remark");
            entity.Property(e => e.StockIdentificationNo)
                .HasMaxLength(50)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .HasColumnName("zip/postal_code");

            entity.HasOne(d => d.City).WithMany(p => p.BdcOrgGroupProfiles)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_group_profile_Tosm_city");

            entity.HasOne(d => d.Country).WithMany(p => p.BdcOrgGroupProfiles)
                .HasPrincipalKey(p => p.CountryId)
                .HasForeignKey(d => d.CountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_group_profile_Tosm_country");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcOrgGroupProfileCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_group_profile_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcOrgGroupProfileModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_group_profile_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcOrgGroupProfiles)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_group_profile_Tosm_org_group");
        });

        modelBuilder.Entity<BdcOrgUnit>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.OrgUnitName }).HasName("PK__tmp_ms_x__E75EB6CE21DB6133");

            entity.ToTable("bdc_org_unit");

            entity.HasIndex(e => e.OrgUnitId, "UQ_bdc_org_unit_id").IsUnique();

            entity.HasIndex(e => e.OrgUnitId, "UQ_sm_org_unit_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgUnitName)
                .HasMaxLength(50)
                .HasColumnName("org_unit_name");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .HasColumnName("business_registration_no");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(10, 8)")
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(11, 8)")
                .HasColumnName("longitude");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OrgType)
                .HasMaxLength(10)
                .HasColumnName("org_type");
            entity.Property(e => e.OrgUnitId)
                .ValueGeneratedOnAdd()
                .HasColumnName("org_unit_id");
            entity.Property(e => e.ParentOrgUnitId).HasColumnName("parent_org_unit_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.StockIdentificationNo)
                .HasMaxLength(50)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .HasColumnName("zip/postal_code");

            entity.HasOne(d => d.City).WithMany(p => p.BdcOrgUnits)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_unit_Tosm_city");

            entity.HasOne(d => d.Country).WithMany(p => p.BdcOrgUnits)
                .HasPrincipalKey(p => p.CountryId)
                .HasForeignKey(d => d.CountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_unit_Tosm_country");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcOrgUnitCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_unit_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcOrgUnitModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_unit_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcOrgUnits)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_org_unit_Tosm_org_group");

            entity.HasOne(d => d.ParentOrgUnit).WithMany(p => p.InverseParentOrgUnit)
                .HasPrincipalKey(p => p.OrgUnitId)
                .HasForeignKey(d => d.ParentOrgUnitId)
                .HasConstraintName("FK_bdc_org_unit_Tobdc_org_unit");
        });

        modelBuilder.Entity<BdcReportingPeriod>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.ReportingPeriodId, e.ReportingPeriodName }).HasName("PK__tmp_ms_x__F3DB1FC4BFD5F0E9");

            entity.ToTable("bdc_reporting_period");

            entity.HasIndex(e => e.ReportingPeriodId, "UQ__tmp_ms_x__5EEFD4581CC6502B").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ReportingPeriodId)
                .ValueGeneratedOnAdd()
                .HasColumnName("reporting_period_id");
            entity.Property(e => e.ReportingPeriodName)
                .HasMaxLength(50)
                .HasColumnName("reporting_period_name");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.PeriodStatus).HasColumnName("period_status");
            entity.Property(e => e.StartDate).HasColumnName("start_date");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcReportingPeriodCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_period_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcReportingPeriodModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_period_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcReportingPeriods)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_period_Tosm_org_group");
        });

        modelBuilder.Entity<BdcReportingYear>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.ReportingYearName }).HasName("PK__bdc_repo__465BD62610E085FF");

            entity.ToTable("bdc_reporting_year");

            entity.HasIndex(e => e.ReportingYearId, "UQ__bdc_repo__C2002CBFF8B18963").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ReportingYearName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("reporting_year_name");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.ReportingYearId)
                .ValueGeneratedOnAdd()
                .HasColumnName("reporting_year_id");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.BdcReportingYearCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_year_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcReportingYearModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_year_Tosm_user1");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcReportingYears)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_reporting_year_Tosm_org_group");
        });

        modelBuilder.Entity<BdcTransportationDistance>(entity =>
        {
            entity.HasKey(e => new { e.TransportationDistanceName, e.OrgGroupId }).HasName("PK__bdc_tran__22674864F0D1BD81");

            entity.ToTable("bdc_transportation_distance");

            entity.Property(e => e.TransportationDistanceName)
                .HasMaxLength(255)
                .HasColumnName("transportation_distance_name");
            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.CreatedById).HasColumnName("created_by_id");
            entity.Property(e => e.CreatedOn)
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.Distance)
                .HasColumnType("decimal(14, 4)")
                .HasColumnName("distance");
            entity.Property(e => e.DistanceUnitId).HasColumnName("distance_unit_id");
            entity.Property(e => e.EvidenceUrl)
                .HasMaxLength(255)
                .HasColumnName("evidence_url");
            entity.Property(e => e.ImportSequenceNo).HasColumnName("import_sequence_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.ShipFrom)
                .HasMaxLength(255)
                .HasColumnName("ship_from");
            entity.Property(e => e.ShipTo)
                .HasMaxLength(255)
                .HasColumnName("ship_to");
            entity.Property(e => e.TransportModeId).HasColumnName("transport_mode_id");
            entity.Property(e => e.TransportModeRemark)
                .HasMaxLength(255)
                .HasColumnName("transport_mode_remark");
            entity.Property(e => e.TransportationDistanceId).HasColumnName("transportation_distance_id");

            entity.HasOne(d => d.CreatedBy).WithMany(p => p.BdcTransportationDistanceCreatedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreatedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_transportation_distance_created_by");

            entity.HasOne(d => d.DistanceUnit).WithMany(p => p.BdcTransportationDistances)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.DistanceUnitId)
                .HasConstraintName("FK_bdc_transportation_distance_distance_unit_id");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcTransportationDistanceModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_transportation_distance_modified_by");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcTransportationDistances)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_transportation_distance_org_group_id");
        });

        modelBuilder.Entity<BdcUnit>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.UnitName, e.UnitLibraryId });

            entity.ToTable("bdc_unit");

            entity.HasIndex(e => e.UnitId, "IX_bdc_unit").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.UnitName)
                .HasMaxLength(50)
                .HasColumnName("unit_name");
            entity.Property(e => e.UnitLibraryId).HasColumnName("unit_library_id");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.ConversionFactor)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("conversion_factor");
            entity.Property(e => e.CreatedById).HasColumnName("created_by_id");
            entity.Property(e => e.CreatedOn)
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.IsBaseUnit)
                .HasDefaultValue(false)
                .HasColumnName("is_base_unit");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");

            entity.HasOne(d => d.CreatedBy).WithMany(p => p.BdcUnitCreatedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreatedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_unit_sm_user_c");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcUnitModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_unit_sm_user_m");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcUnits)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_unit_sm_org_group");

            entity.HasOne(d => d.UnitLibrary).WithMany(p => p.BdcUnits)
                .HasPrincipalKey(p => p.UnitLibraryId)
                .HasForeignKey(d => d.UnitLibraryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_unit_bdc_unit_library");
        });

        modelBuilder.Entity<BdcUnitLibrary>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.UnitLibraryName });

            entity.ToTable("bdc_unit_library");

            entity.HasIndex(e => e.UnitLibraryId, "IX_bdc_unit_library").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.UnitLibraryName)
                .HasMaxLength(50)
                .HasColumnName("unit_library_name");
            entity.Property(e => e.BaseUnitId).HasColumnName("base_unit_id");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CreatedById).HasColumnName("created_by_id");
            entity.Property(e => e.CreatedOn)
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UnitLibraryId).HasColumnName("unit_library_id");

            entity.HasOne(d => d.BaseUnit).WithMany(p => p.BdcUnitLibraries)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.BaseUnitId)
                .HasConstraintName("FK_bdc_unit_library_bdc_unit");

            entity.HasOne(d => d.CreatedBy).WithMany(p => p.BdcUnitLibraryCreatedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreatedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_created_by_id_sm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.BdcUnitLibraryModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_mod_by_id_sm_user");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.BdcUnitLibraries)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_bdc_unit_library_sm_org_group");
        });

        modelBuilder.Entity<RefreshToken>(entity =>
        {
            entity.HasKey(e => e.RefreshTokenId).HasName("PK__refresh___B0A1F7C731A2F38A");

            entity.ToTable("refresh_token", "auth");

            entity.Property(e => e.RefreshTokenId)
                .ValueGeneratedNever()
                .HasColumnName("refresh_token_id");
            entity.Property(e => e.CreatedOn)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("created_on");
            entity.Property(e => e.ExpirationTime)
                .HasColumnType("datetime")
                .HasColumnName("expiration_time");
            entity.Property(e => e.RefreshToken1)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("refresh_token");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        modelBuilder.Entity<SmChoice>(entity =>
        {
            entity.HasKey(e => new { e.Category, e.CanonicalChoiceId, e.LangKey });

            entity.ToTable("sm_choice");

            entity.HasIndex(e => e.ChoiceId, "UQ__tmp_ms_x__33CAF83BE81BEC94").IsUnique();

            entity.Property(e => e.Category)
                .HasMaxLength(255)
                .HasColumnName("category");
            entity.Property(e => e.CanonicalChoiceId).HasColumnName("canonical_choice_id");
            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.ChoiceId)
                .ValueGeneratedOnAdd()
                .HasColumnName("choice_id");
            entity.Property(e => e.ChoiceValue)
                .HasMaxLength(255)
                .HasColumnName("choice_value");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmChoiceCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_choice_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmChoiceModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_choice_Tosm_user1");
        });

        modelBuilder.Entity<SmCity>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PK__sm_city__031491A846F029DE");

            entity.ToTable("sm_city");

            entity.HasIndex(e => e.CityId, "UQ_sm_city_id").IsUnique();

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmCityCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_city_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmCityModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_city_Tosm_user1");
        });

        modelBuilder.Entity<SmCountry>(entity =>
        {
            entity.HasKey(e => e.CountryCode).HasName("PK__sm_count__3436E9A4E9F5FCC2");

            entity.ToTable("sm_country");

            entity.HasIndex(e => e.CountryId, "UQ_sm_country_id").IsUnique();

            entity.Property(e => e.CountryCode)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("country_code");
            entity.Property(e => e.CountryId)
                .ValueGeneratedOnAdd()
                .HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.ThreeDigitalCode)
                .HasMaxLength(3)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("three_digital_code");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmCountryCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_country_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmCountryModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_country_Tosm_user1");
        });

        modelBuilder.Entity<SmEmissionFactor>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.EmissionFactorLibraryId, e.EmissionFactorName });

            entity.ToTable("sm_emission_factor");

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.EmissionFactorLibraryId).HasColumnName("emission_factor_library_id");
            entity.Property(e => e.EmissionFactorName)
                .HasMaxLength(50)
                .HasColumnName("emission_factor_name");
            entity.Property(e => e.BiogenicCo2Factor)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("biogenic_co2_factor");
            entity.Property(e => e.BiogenicCo2FactorId).HasColumnName("biogenic_co2_factor_id");
            entity.Property(e => e.Ch4)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("ch4");
            entity.Property(e => e.Ch4UnitId).HasColumnName("ch4_unit_id");
            entity.Property(e => e.Co2)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("co2");
            entity.Property(e => e.Co2UnitId).HasColumnName("co2_unit_id");
            entity.Property(e => e.Co2e)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("co2e");
            entity.Property(e => e.Co2eUnitId).HasColumnName("co2e_unit_id");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.Description)
                .HasMaxLength(50)
                .HasColumnName("description");
            entity.Property(e => e.DocRef)
                .HasMaxLength(255)
                .HasColumnName("doc_ref");
            entity.Property(e => e.EmissionFactorCategory)
                .HasMaxLength(50)
                .HasColumnName("emission_factor_category");
            entity.Property(e => e.EmissionFactorId)
                .ValueGeneratedOnAdd()
                .HasColumnName("emission_factor_id");
            entity.Property(e => e.EmissionFactorSource)
                .HasMaxLength(50)
                .HasColumnName("emission_factor_source");
            entity.Property(e => e.EmissionFactorSourceRemark)
                .HasMaxLength(255)
                .HasColumnName("emission_factor_source_remark");
            entity.Property(e => e.GhgsUnitId).HasColumnName("ghgs_unit_id");
            entity.Property(e => e.Hfcs)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("hfcs");
            entity.Property(e => e.HfcsUnitId).HasColumnName("hfcs_unit_id");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.IsBiofuel).HasColumnName("is_biofuel");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.N2o)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("n2o");
            entity.Property(e => e.N2oUnitId).HasColumnName("n2o_unit_id");
            entity.Property(e => e.Nf3)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("nf3");
            entity.Property(e => e.Nf3UnitId).HasColumnName("nf3_unit_id");
            entity.Property(e => e.OriginCorrelationId)
                .HasMaxLength(50)
                .HasColumnName("origin_correlation_id");
            entity.Property(e => e.OtherGhgs)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("other_ghgs");
            entity.Property(e => e.Pcfs)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("pcfs");
            entity.Property(e => e.PcfsUnitId).HasColumnName("pcfs_unit_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.Sf6)
                .HasColumnType("decimal(18, 10)")
                .HasColumnName("sf6");
            entity.Property(e => e.Sf6UnitId).HasColumnName("sf6_unit_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");
            entity.Property(e => e.Version)
                .HasMaxLength(10)
                .HasColumnName("version");
            entity.Property(e => e.Year)
                .HasMaxLength(4)
                .HasColumnName("year");

            entity.HasOne(d => d.BiogenicCo2FactorNavigation).WithMany(p => p.SmEmissionFactorBiogenicCo2FactorNavigations)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.BiogenicCo2FactorId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_biogenic_co2_factor_id");

            entity.HasOne(d => d.Ch4Unit).WithMany(p => p.SmEmissionFactorCh4Units)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.Ch4UnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_ch4_unit_id");

            entity.HasOne(d => d.Co2Unit).WithMany(p => p.SmEmissionFactorCo2Units)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.Co2UnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_co2_unit_id");

            entity.HasOne(d => d.Co2eUnit).WithMany(p => p.SmEmissionFactorCo2eUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.Co2eUnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_co2e_unit_id");

            entity.HasOne(d => d.Country).WithMany(p => p.SmEmissionFactors)
                .HasPrincipalKey(p => p.CountryId)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_sm_country");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmEmissionFactorCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_sm_user1");

            entity.HasOne(d => d.GhgsUnit).WithMany(p => p.SmEmissionFactorGhgsUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.GhgsUnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_ghgs_unit_id");

            entity.HasOne(d => d.HfcsUnit).WithMany(p => p.SmEmissionFactorHfcsUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.HfcsUnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_hfcs_unit_id");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmEmissionFactorModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_sm_user2");

            entity.HasOne(d => d.N2oUnit).WithMany(p => p.SmEmissionFactorN2oUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.N2oUnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_n2o_unit_id");

            entity.HasOne(d => d.Nf3Unit).WithMany(p => p.SmEmissionFactorNf3Units)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.Nf3UnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_nf3_unit_id");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.SmEmissionFactors)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_sm_org_group");

            entity.HasOne(d => d.PcfsUnit).WithMany(p => p.SmEmissionFactorPcfsUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.PcfsUnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_pcfs_unit_id");

            entity.HasOne(d => d.Sf6Unit).WithMany(p => p.SmEmissionFactorSf6Units)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.Sf6UnitId)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_sf6_unit_id");

            entity.HasOne(d => d.Unit).WithMany(p => p.SmEmissionFactorUnits)
                .HasPrincipalKey(p => p.UnitId)
                .HasForeignKey(d => d.UnitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_sm_emission_factor_unit_id");
        });

        modelBuilder.Entity<SmEmissionFactorLibrary>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.EmissionFactorLibraryName }).HasName("pk_sm_emission_factor_library");

            entity.ToTable("sm_emission_factor_library");

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.EmissionFactorLibraryName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("emission_factor_library_name");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.DocRef)
                .HasMaxLength(255)
                .HasColumnName("doc_ref");
            entity.Property(e => e.EmissionFactorLibraryId)
                .ValueGeneratedOnAdd()
                .HasColumnName("emission_factor_library_id");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .HasColumnName("last_name");
            entity.Property(e => e.LibraryType).HasColumnName("library_type");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OriginCorrelationId)
                .HasMaxLength(50)
                .HasColumnName("origin_correlation_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.Version)
                .HasMaxLength(10)
                .HasColumnName("version");
            entity.Property(e => e.Year)
                .HasMaxLength(4)
                .HasColumnName("year");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmEmissionFactorLibraryCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_library_sm_user1");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmEmissionFactorLibraryModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_library_sm_user2");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.SmEmissionFactorLibraries)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_emission_factor_library_sm_org_group");
        });

        modelBuilder.Entity<SmFunctionModule>(entity =>
        {
            entity.HasKey(e => new { e.FunctionName, e.Module }).HasName("PK__tmp_ms_x__32904D670260534F");

            entity.ToTable("sm_function_module");

            entity.HasIndex(e => e.FunctionId, "UQ_sm_function_id").IsUnique();

            entity.Property(e => e.FunctionName)
                .HasMaxLength(50)
                .HasColumnName("function_name");
            entity.Property(e => e.Module)
                .HasMaxLength(10)
                .HasColumnName("module");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.FunctionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("function_id");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
        });

        modelBuilder.Entity<SmLanguage>(entity =>
        {
            entity.HasKey(e => new { e.LangKey, e.LangName }).HasName("PK__tmp_ms_x__2CEE44868CD537B5");

            entity.ToTable("sm_language");

            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.LangName)
                .HasMaxLength(30)
                .HasColumnName("lang_name");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmLanguageCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_language_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmLanguageModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_language_Tosm_user1");
        });

        modelBuilder.Entity<SmOrgGroup>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupName, e.VendorCode }).HasName("PK__sm_org_g__A89262CCE6FC2E32");

            entity.ToTable("sm_org_group");

            entity.HasIndex(e => e.OrgGroupId, "UQ__tmp_ms_x__A4CDA0E845D5AA49").IsUnique();

            entity.Property(e => e.OrgGroupName)
                .HasMaxLength(50)
                .HasColumnName("org_group_name");
            entity.Property(e => e.VendorCode)
                .HasMaxLength(50)
                .HasColumnName("vendor_code");
            entity.Property(e => e.BdcPermission).HasColumnName("bdc_permission");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .HasColumnName("business_registration_no");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CountryId).HasColumnName("country_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.Latitude)
                .HasColumnType("decimal(10, 8)")
                .HasColumnName("latitude");
            entity.Property(e => e.Longitude)
                .HasColumnType("decimal(11, 8)")
                .HasColumnName("longitude");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OghgPermission).HasColumnName("oghg_permission");
            entity.Property(e => e.OrgGroupId)
                .ValueGeneratedOnAdd()
                .HasColumnName("org_group_id");
            entity.Property(e => e.PcfPermission).HasColumnName("pcf_permission");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SpmPermission).HasColumnName("spm_permission");
            entity.Property(e => e.StockIdentificationNo)
                .HasMaxLength(50)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .HasColumnName("zip/postal_code");

            entity.HasOne(d => d.City).WithMany(p => p.SmOrgGroups)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_org_group_Tosm_city");

            entity.HasOne(d => d.Country).WithMany(p => p.SmOrgGroups)
                .HasPrincipalKey(p => p.CountryId)
                .HasForeignKey(d => d.CountryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_org_group_Tosm_country");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmOrgGroupCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_org_group_Tosm_user2");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmOrgGroupModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_org_group_Tosm_user3");
        });

        modelBuilder.Entity<SmPermission>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.PermissionName, e.FunctionId }).HasName("PK__tmp_ms_x__892D2A1E9000A881");

            entity.ToTable("sm_permission");

            entity.HasIndex(e => e.PermissionId, "UQ_sm_permission_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.PermissionName)
                .HasMaxLength(50)
                .HasColumnName("permission_name");
            entity.Property(e => e.FunctionId).HasColumnName("function_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.PermissionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("permission_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmPermissionCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_permission_Tosm_user_Creareid");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmPermissionModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_permission_Tosm_user_Modifyid");
        });

        modelBuilder.Entity<SmRole>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.RoleName }).HasName("PK__tmp_ms_x__B34E85A21EB13ED5");

            entity.ToTable("sm_role");

            entity.HasIndex(e => e.RoleId, "UQ_sm_role_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .HasColumnName("role_name");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.RoleId)
                .ValueGeneratedOnAdd()
                .HasColumnName("role_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");

            entity.HasOne(d => d.CreateBy).WithMany(p => p.SmRoleCreateBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.CreateById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_role_Tosm_user");

            entity.HasOne(d => d.ModifiedBy).WithMany(p => p.SmRoleModifiedBies)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.ModifiedById)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_role_Tosm_user_modifyid");

            entity.HasOne(d => d.OrgGroup).WithMany(p => p.SmRoles)
                .HasPrincipalKey(p => p.OrgGroupId)
                .HasForeignKey(d => d.OrgGroupId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_role_Tosm_org_group");
        });

        modelBuilder.Entity<SmRolePermission>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.RoleName }).HasName("PK__tmp_ms_x__B34E85A25F345E91");

            entity.ToTable("sm_role_permission");

            entity.HasIndex(e => e.RolePermissionId, "UQ_sm_role_permission_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .HasColumnName("role_name");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.Permission)
                .HasMaxLength(255)
                .HasColumnName("permission");
            entity.Property(e => e.RolePermissionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("role_permission_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
        });

        modelBuilder.Entity<SmTextContent>(entity =>
        {
            entity.HasKey(e => new { e.TableName, e.SourceId, e.LangKey }).HasName("PK__tmp_ms_x__2A9754B04387F4F4");

            entity.ToTable("sm_text_content");

            entity.Property(e => e.TableName)
                .HasMaxLength(50)
                .HasColumnName("table_name");
            entity.Property(e => e.SourceId).HasColumnName("source_id");
            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.Content1)
                .HasMaxLength(255)
                .HasColumnName("content1");
            entity.Property(e => e.Content2)
                .HasMaxLength(255)
                .HasColumnName("content2");
            entity.Property(e => e.Content3)
                .HasMaxLength(255)
                .HasColumnName("content3");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
        });

        modelBuilder.Entity<SmUnitLibrary>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sm_unit_library");

            entity.Property(e => e.BaseUnitId).HasColumnName("base_unit_id");
            entity.Property(e => e.ConfigurationType).HasColumnName("configuration_type");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UnitLibraryId)
                .ValueGeneratedOnAdd()
                .HasColumnName("unit_library_id");
            entity.Property(e => e.UnitLibraryName)
                .HasMaxLength(50)
                .HasColumnName("unit_library_name");
        });

        modelBuilder.Entity<SmUser>(entity =>
        {
            entity.HasKey(e => e.Email).HasName("PK__sm_user");

            entity.ToTable("sm_user");

            entity.HasIndex(e => e.Account, "UQ_sm_user_account").IsUnique();

            entity.HasIndex(e => e.UserId, "UQ_sm_user_id").IsUnique();

            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Account)
                .HasMaxLength(255)
                .HasColumnName("account");
            entity.Property(e => e.CompanyNo)
                .HasMaxLength(50)
                .HasColumnName("company_no");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .HasColumnName("department");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .HasColumnName("first_name");
            entity.Property(e => e.FirstNameEn)
                .HasMaxLength(50)
                .HasColumnName("first_name_en");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.IsOrgAdmin).HasColumnName("is_org_admin");
            entity.Property(e => e.IsSuperAdmin).HasColumnName("is_super_admin");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(50)
                .HasColumnName("job_title");
            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .HasColumnName("last_name");
            entity.Property(e => e.LastNameEn)
                .HasMaxLength(50)
                .HasColumnName("last_name_en");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .HasColumnName("phone");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .HasColumnName("remark");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.TimeZone)
                .HasMaxLength(10)
                .HasColumnName("time_zone");
            entity.Property(e => e.UserId)
                .ValueGeneratedOnAdd()
                .HasColumnName("user_id");
        });

        modelBuilder.Entity<SmUserRole>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.UserId, e.RoleId }).HasName("PK__sm_user___82204AFC24FA7054");

            entity.ToTable("sm_user_role");

            entity.HasIndex(e => e.UserRoleId, "UQ_sm_user_role").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus).HasColumnName("system_status");
            entity.Property(e => e.UserRoleId)
                .ValueGeneratedOnAdd()
                .HasColumnName("user_role_id");
        });

        modelBuilder.Entity<Test>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("test");

            entity.Property(e => e.EmpDesc)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("emp_desc");
            entity.Property(e => e.EmpId)
                .ValueGeneratedOnAdd()
                .HasColumnName("emp_id");
            entity.Property(e => e.EmpName)
                .HasMaxLength(10)
                .HasColumnName("emp_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
