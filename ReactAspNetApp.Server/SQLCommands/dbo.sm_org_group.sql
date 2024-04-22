ALTER TABLE [dbo].[sm_country] 
ADD CONSTRAINT [UQ_sm_country_id] UNIQUE ([country_id])
GO
-- ALTER TABLE [dbo].[sm_city]
-- ADD CONSTRAINT [UQ_sm_city_id] UNIQUE ([city_id])
-- GO
ALTER TABLE [dbo].[sm_user] 
ADD CONSTRAINT [UQ_sm_user_id] UNIQUE ([user_id])
GO

ALTER TABLE [dbo].[sm_org_group] 
ADD CONSTRAINT [FK_sm_org_group_Tosm_country] FOREIGN KEY ([country_id]) REFERENCES [sm_country]([country_id]);
GO
ALTER TABLE [dbo].[sm_org_group] 
ADD CONSTRAINT [FK_sm_org_group_Tosm_city] FOREIGN KEY ([city_id]) REFERENCES [sm_city]([city_id]);
GO
ALTER TABLE [dbo].[sm_org_group] 
ADD CONSTRAINT [FK_sm_org_group_Tosm_user] FOREIGN KEY ([user_id]) REFERENCES [sm_user]([user_id]);
GO
ALTER TABLE [dbo].[sm_org_group] 
ADD CONSTRAINT [FK_sm_org_group_Tosm_user2] FOREIGN KEY ([create_by_id]) REFERENCES [sm_user]([user_id]);
GO
ALTER TABLE [dbo].[sm_org_group] 
ADD CONSTRAINT [FK_sm_org_group_Tosm_user3] FOREIGN KEY ([modified_by_id]) REFERENCES [sm_user]([user_id]);
GO

ALTER TABLE [dbo].[sm_city] 
ADD CONSTRAINT [FK_sm_city_Tosm_country] FOREIGN KEY ([country_id]) REFERENCES [sm_country]([country_code]);
GO