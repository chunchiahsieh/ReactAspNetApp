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

    public virtual DbSet<BdcArVersion> BdcArVersions { get; set; }

    public virtual DbSet<BdcFacility> BdcFacilities { get; set; }

    public virtual DbSet<BdcOrgGroupProfile> BdcOrgGroupProfiles { get; set; }

    public virtual DbSet<BdcOrgUnit> BdcOrgUnits { get; set; }

    public virtual DbSet<BdcReportingPeriod> BdcReportingPeriods { get; set; }

    public virtual DbSet<BdcReportingYear> BdcReportingYears { get; set; }

    public virtual DbSet<RefreshToken> RefreshTokens { get; set; }

    public virtual DbSet<SmChoice> SmChoices { get; set; }

    public virtual DbSet<SmCity> SmCities { get; set; }

    public virtual DbSet<SmCountry> SmCountries { get; set; }

    public virtual DbSet<SmLanguage> SmLanguages { get; set; }

    public virtual DbSet<SmOrgGroup> SmOrgGroups { get; set; }

    public virtual DbSet<SmRolePermission> SmRolePermissions { get; set; }

    public virtual DbSet<SmTextContent> SmTextContents { get; set; }

    public virtual DbSet<SmUser> SmUsers { get; set; }

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

        modelBuilder.Entity<BdcArVersion>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.ArVersionName }).HasName("PK__bdc_ar_v__3C684C5687F9ECE2");

            entity.ToTable("bdc_ar_version");

            entity.HasIndex(e => e.ArVersionId, "UQ__bdc_ar_v__81A023124C0FC121").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ArVersionName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ar_version_name");
            entity.Property(e => e.ArVersionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("ar_version_id");
            entity.Property(e => e.ConfiguartionType)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("configuartion_type");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.DocRef)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("doc_ref");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.OriginCorrelationId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("origin_correlation_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("remark");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.Version)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("version");
            entity.Property(e => e.Year)
                .HasMaxLength(4)
                .IsUnicode(false)
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
            entity.HasKey(e => new { e.OrgGroupId, e.OrgUnitId, e.FacilityName }).HasName("PK__bdc_faci__8769BBC9C93A9185");

            entity.ToTable("bdc_facility");

            entity.HasIndex(e => e.FacilityId, "UQ__bdc_faci__B2E8EAAF11A5ACF6").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgUnitId).HasColumnName("org_unit_id");
            entity.Property(e => e.FacilityName)
                .HasMaxLength(50)
                .IsUnicode(false)
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
                .IsUnicode(false)
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
                .IsUnicode(false)
                .HasColumnName("remark");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .IsUnicode(false)
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

        modelBuilder.Entity<BdcOrgGroupProfile>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.OrgGroupProfileName }).HasName("PK__sm_org_g__61670655656B6DB5");

            entity.ToTable("bdc_org_group_profile");

            entity.HasIndex(e => e.OrgGroupProfileId, "UQ_bdc_org_group_profile_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgGroupProfileName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("org_group_profile_name");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .IsUnicode(false)
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
            entity.Property(e => e.OrgGroupProfileId)
                .ValueGeneratedOnAdd()
                .HasColumnName("org_group_profile_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("remark");
            entity.Property(e => e.StockIdentificationNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .IsUnicode(false)
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
            entity.HasKey(e => new { e.OrgGroupId, e.OrgUnitName }).HasName("PK__sm_org_u__E75EB6CE329B3382");

            entity.ToTable("bdc_org_unit");

            entity.HasIndex(e => e.OrgUnitId, "UQ_bdc_org_unit_id").IsUnique();

            entity.HasIndex(e => e.OrgUnitId, "UQ_sm_org_unit_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.OrgUnitName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("org_unit_name");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .IsUnicode(false)
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
                .IsUnicode(false)
                .HasColumnName("org_type");
            entity.Property(e => e.OrgUnitId)
                .ValueGeneratedOnAdd()
                .HasColumnName("org_unit_id");
            entity.Property(e => e.ParentOrgUnitId).HasColumnName("parent_org_unit_id");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("remark");
            entity.Property(e => e.StockIdentificationNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .IsUnicode(false)
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
            entity.HasKey(e => new { e.OrgGroupId, e.ReportingPeriodId, e.ReportingPeriodName }).HasName("PK__bdc_repo__F3DB1FC46F3065A9");

            entity.ToTable("bdc_reporting_period");

            entity.HasIndex(e => e.ReportingPeriodId, "UQ__bdc_repo__5EEFD458B752AEDC").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.ReportingPeriodId)
                .ValueGeneratedOnAdd()
                .HasColumnName("reporting_period_id");
            entity.Property(e => e.ReportingPeriodName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("reporting_period_name");
            entity.Property(e => e.ConfigurationType)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("configuration_type");
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
            entity.Property(e => e.PeriodStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("period_status");
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
            entity.HasKey(e => new { e.ChoiceValue, e.Category, e.LangKey }).HasName("PK__sm_choic__E2B791E7FDC6C9BD");

            entity.ToTable("sm_choice");

            entity.HasIndex(e => e.ChoiceId, "UQ__sm_choic__33CAF83BFEECAC12").IsUnique();

            entity.Property(e => e.ChoiceValue)
                .HasMaxLength(255)
                .HasColumnName("choice_value");
            entity.Property(e => e.Category)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("category");
            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.ChoiceId)
                .ValueGeneratedOnAdd()
                .HasColumnName("choice_id");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");

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
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");

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

        modelBuilder.Entity<SmLanguage>(entity =>
        {
            entity.HasKey(e => new { e.LangKey, e.LangName }).HasName("PK__sm_langu__2CEE448647D984E3");

            entity.ToTable("sm_language");

            entity.Property(e => e.LangKey)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("lang_key");
            entity.Property(e => e.LangName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("lang_name");
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

            entity.HasIndex(e => e.OrgGroupId, "UQ__sm_org_g__A4CDA0E858D69EDF").IsUnique();

            entity.Property(e => e.OrgGroupName)
                .HasMaxLength(50)
                .HasColumnName("org_group_name");
            entity.Property(e => e.VendorCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("vendor_code");
            entity.Property(e => e.BdcPermission).HasColumnName("bdc_permission");
            entity.Property(e => e.BusinessRegistrationNo)
                .HasMaxLength(50)
                .IsUnicode(false)
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
                .IsUnicode(false)
                .HasColumnName("stock_identification_no");
            entity.Property(e => e.Street)
                .HasMaxLength(255)
                .HasColumnName("street");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Website)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("website");
            entity.Property(e => e.ZipPostalCode)
                .HasMaxLength(50)
                .IsUnicode(false)
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

            entity.HasOne(d => d.User).WithMany(p => p.SmOrgGroupUsers)
                .HasPrincipalKey(p => p.UserId)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_sm_org_group_Tosm_user");
        });

        modelBuilder.Entity<SmRolePermission>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.RoleName }).HasName("PK__sm_role___B34E85A2E3EA57D3");

            entity.ToTable("sm_role_permission");

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .IsUnicode(false)
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
                .IsUnicode(false)
                .HasColumnName("permission");
            entity.Property(e => e.RolePermissionId)
                .ValueGeneratedOnAdd()
                .HasColumnName("role_permission_id");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
        });

        modelBuilder.Entity<SmTextContent>(entity =>
        {
            entity.HasKey(e => new { e.TableName, e.SourceId, e.LangKey }).HasName("PK__sm_text___2A9754B0B0345854");

            entity.ToTable("sm_text_content");

            entity.Property(e => e.TableName)
                .HasMaxLength(50)
                .IsUnicode(false)
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
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
        });

        modelBuilder.Entity<SmUser>(entity =>
        {
            entity.HasKey(e => new { e.OrgGroupId, e.Account, e.Email }).HasName("PK__sm_user__DEC7AC69932D5F7B");

            entity.ToTable("sm_user");

            entity.HasIndex(e => e.UserId, "UQ_sm_user_id").IsUnique();

            entity.Property(e => e.OrgGroupId).HasColumnName("org_group_id");
            entity.Property(e => e.Account)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("account");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.CompanyNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("company_no");
            entity.Property(e => e.CreateById).HasColumnName("create_by_id");
            entity.Property(e => e.CreateOn)
                .HasColumnType("datetime")
                .HasColumnName("create_on");
            entity.Property(e => e.Department)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("department");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .HasColumnName("first_name");
            entity.Property(e => e.FirstNameEn)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("first_name_en");
            entity.Property(e => e.ImportSeqnNo).HasColumnName("import_seqn_no");
            entity.Property(e => e.IsOrgAdmin).HasColumnName("is_org_admin");
            entity.Property(e => e.IsSuperAdmin).HasColumnName("is_super_admin");
            entity.Property(e => e.JobTitle)
                .HasMaxLength(50)
                .IsUnicode(false)
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
                .IsUnicode(false)
                .HasColumnName("last_name_en");
            entity.Property(e => e.ModifiedById).HasColumnName("modified_by_id");
            entity.Property(e => e.ModifiedOn)
                .HasColumnType("datetime")
                .HasColumnName("modified_on");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Remark)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("remark");
            entity.Property(e => e.RolePermission)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("role_permission");
            entity.Property(e => e.SystemStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("system_status");
            entity.Property(e => e.TimeZone)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("time_zone");
            entity.Property(e => e.UserId)
                .ValueGeneratedOnAdd()
                .HasColumnName("user_id");
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
