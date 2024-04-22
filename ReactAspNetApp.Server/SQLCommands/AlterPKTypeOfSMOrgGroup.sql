ALTER TABLE sm_org_group DROP CONSTRAINT PK__sm_org_g__A89262CCE6FC2E32;
Go

ALTER TABLE sm_org_group ALTER COLUMN org_group_name NVARCHAR(50) NOT NULL;
Go

ALTER TABLE sm_org_group ADD CONSTRAINT PK__sm_org_g__A89262CCE6FC2E32 PRIMARY KEY ([org_group_name] ASC, [vendor_code] ASC)
Go